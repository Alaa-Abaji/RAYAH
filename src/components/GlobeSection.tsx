"use client";
import dynamic from "next/dynamic";
import AnimatedSection from "./ui/AnimatedSection";

const GlobeInner = dynamic(() => import("./GlobeInner"), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center"
      style={{ height: "600px" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-2 border-[#5EB6DB] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#5EB6DB] text-sm tracking-widest uppercase">Loading Globe</p>
      </div>
    </div>
  ),
});

export default function GlobeSection() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a2540 0%, #10385A 50%, #0a2540 100%)",
      }}
      aria-labelledby="globe-section-heading"
    >
      {/* Radial glow under globe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(94,182,219,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-6" delay={0}>
          <span className="inline-flex items-center gap-2 text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-[#5EB6DB]" aria-hidden="true" />
            Flag Registries
            <span className="w-8 h-px bg-[#5EB6DB]" aria-hidden="true" />
          </span>
          <h2
            id="globe-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
          >
            Global Flag{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Representation
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Rayah acts as deputy registrar for these international flag registries.
            Click a glowing marker to explore each registry.
          </p>
        </AnimatedSection>

        {/* Globe container */}
        <AnimatedSection delay={0.2}>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(10,37,64,0.5)",
              border: "1px solid rgba(94,182,219,0.12)",
              boxShadow: "0 0 80px rgba(94,182,219,0.06), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
            id="globe-container"
          >
            <GlobeInner />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
