"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { MutableRefObject } from "react";
import { flagCountries, FlagCountry } from "@/data/flags";
import FlagPanel from "./FlagPanel";

// Dynamically import Globe – must be client-only (three.js has no SSR support)
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex items-center justify-center" style={{ height: 600 }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#5EB6DB] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#5EB6DB] text-sm tracking-widest uppercase">Loading Globe</p>
      </div>
    </div>
  ),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GlobeRef = MutableRefObject<any>;

// GeoJSON types (minimal)
interface GeoFeature {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  geometry: any;
}

export default function GlobeInner() {
  const globeRef: GlobeRef = useRef(undefined);
  const [selectedCountry, setSelectedCountry] = useState<FlagCountry | null>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 600 });
  // World countries GeoJSON — loaded async so globe renders immediately with ocean,
  // then the hex landmasses paint in once data arrives
  const [countries, setCountries] = useState<GeoFeature[]>([]);

  // Fetch world GeoJSON (ne_110m — lightweight, ~200 KB)
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then((data) => setCountries(data.features))
      .catch((e) => console.warn("Globe: failed to load world GeoJSON", e));
  }, []);

  // Responsive sizing — observer on the outer div
  useEffect(() => {
    function updateSize() {
      const el = document.getElementById("globe-wrapper");
      if (!el) return;
      const w = el.clientWidth;
      const h = Math.min(Math.max(w * 0.72, 380), 650);
      setDimensions({ width: w, height: h });
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ── Globe event handlers ───────────────────────────────────────────────────

  const handleGlobeReady = useCallback(() => {
    const g = globeRef.current;
    if (!g) return;
    const ctrl = g.controls();
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 0.4;
    ctrl.enableZoom = false; // disable scroll-zoom so page scrolling works normally
    // Center on the Atlantic so all 6 markers are visible (Caribbean, Panama, San Marino, Sierra Leone)
    g.pointOfView({ lat: 22, lng: -38, altitude: 2.5 }, 0);
  }, []);

  const handleCountrySelect = useCallback((country: FlagCountry) => {
    setSelectedCountry(country);
    const g = globeRef.current;
    if (!g) return;
    g.controls().autoRotate = false;
    g.pointOfView({ lat: country.lat, lng: country.lng, altitude: 1.25 }, 1200);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedCountry(null);
    const g = globeRef.current;
    if (!g) return;
    g.controls().autoRotate = true;
    g.pointOfView({ lat: 22, lng: -38, altitude: 2.5 }, 900);
  }, []);

  // ── Globe material (ocean surface) ─────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const THREE = require("three");
  const oceanMaterial = new THREE.MeshPhongMaterial({
    color: new THREE.Color("#0a1e30"),
    emissive: new THREE.Color("#071525"),
    shininess: 30,
    specular: new THREE.Color("#1a4a72"),
  });

  return (
    <div id="globe-wrapper" className="relative w-full" style={{ height: dimensions.height }}>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        // ── Appearance ──────────────────────────────────────────────────────
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl=""
        globeMaterial={oceanMaterial}
        atmosphereColor="#5EB6DB"
        atmosphereAltitude={0.16}
        // ── Hex polygon continents (brand dotted-world effect) ───────────────
        hexPolygonsData={countries}
        hexPolygonResolution={3}
        hexPolygonMargin={0.4}
        hexPolygonUseDots={true}
        hexPolygonColor={() => "rgba(94, 182, 219, 0.72)"}
        hexPolygonAltitude={0.001}
        // ── Rich HTML Markers (Generous 64px Hit Target) ─────────────────────
        htmlElementsData={flagCountries}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.018}
        htmlElement={(d) => {
          const c = d as FlagCountry;
          const el = document.createElement("div");
          el.className = "group relative flex items-center justify-center select-none cursor-pointer";
          el.style.width = "64px";
          el.style.height = "64px";
          el.style.marginTop = "-32px";
          el.style.marginLeft = "-32px";
          el.style.pointerEvents = "auto";
          el.setAttribute("role", "button");
          el.setAttribute("aria-label", `Select ${c.name} registry`);

          el.innerHTML = `
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <!-- Outer Expanding Pulse Ring -->
              <span class="absolute w-14 h-14 rounded-full border border-[rgba(94,182,219,0.75)] animate-ping opacity-60"></span>
              <!-- Glowing Radial Aura -->
              <span class="absolute w-11 h-11 rounded-full bg-[rgba(94,182,219,0.25)] border border-[rgba(183,227,235,0.7)] shadow-[0_0_16px_rgba(94,182,219,0.85)] group-hover:scale-125 transition-transform duration-300"></span>
              <!-- Circular National Flag Badge in Center -->
              <div class="relative w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-[#0a2540] border-2 border-white/95 shadow-[0_0_12px_rgba(0,0,0,0.7)] group-hover:scale-130 group-hover:border-[#5EB6DB] group-hover:shadow-[0_0_18px_#5EB6DB] transition-all duration-300">
                <img
                  src="https://flagcdn.com/w80/${c.code}.png"
                  alt="${c.name} flag"
                  class="w-full h-full object-cover"
                  loading="eager"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <span class="hidden w-full h-full items-center justify-center text-sm select-none">${c.flag}</span>
              </div>
            </div>
            <!-- Country Badge Label -->
            <div class="absolute -top-7 px-2.5 py-0.5 rounded-full bg-[rgba(10,37,64,0.94)] border border-[rgba(94,182,219,0.45)] text-[11px] font-bold text-white tracking-wide shadow-[0_4px_12px_rgba(0,0,0,0.6)] whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none flex items-center gap-1.5 backdrop-blur-md">
              <span aria-hidden="true">${c.flag}</span>
              <span>${c.name}</span>
            </div>
          `;

          const triggerSelect = (e: Event) => {
            e.stopPropagation();
            e.preventDefault();
            handleCountrySelect(c);
          };

          el.addEventListener("click", triggerSelect);
          el.addEventListener("pointerdown", (e) => e.stopPropagation());
          el.addEventListener("touchend", triggerSelect);

          return el;
        }}
        // ── Events ───────────────────────────────────────────────────────────
        onGlobeReady={handleGlobeReady}
      />

      {/* Flag info side panel */}
      <FlagPanel country={selectedCountry} onClose={handleClose} />

      {/* Reset view button — appears when zoomed into a country */}
      {selectedCountry && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          onClick={handleClose}
          className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-[#5EB6DB] border border-[rgba(94,182,219,0.3)] bg-[rgba(10,37,64,0.88)] backdrop-blur-sm px-4 py-2 rounded-full hover:bg-[rgba(94,182,219,0.1)] transition-all z-30"
          aria-label="Reset globe view"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset View
        </motion.button>
      )}

      {/* Country legend — desktop only */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:flex flex-col items-end gap-2.5">
        <p className="text-white/25 text-[10px] tracking-widest uppercase mb-0.5">Click a marker</p>
        {flagCountries.map((c) => (
          <button
            key={c.name}
            onClick={() => handleCountrySelect(c)}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label={`Show ${c.name} flag registry`}
          >
            <span className="text-white/45 text-xs group-hover:text-[#5EB6DB] transition-colors duration-200">
              {c.name}
            </span>
            <span
              className="w-2 h-2 rounded-full bg-[#5EB6DB] flex-shrink-0"
              style={{ boxShadow: "0 0 8px #5EB6DB" }}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
