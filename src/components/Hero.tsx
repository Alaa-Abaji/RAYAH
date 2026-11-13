"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Automatically settle into background after ship intro passes (2.8 seconds)
    const timer = setTimeout(() => {
      setSkipped(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      onClick={() => setSkipped(true)}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-default select-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% -10%, rgba(94,182,219,0.15) 0%, transparent 60%), linear-gradient(180deg, #0a2540 0%, #10385A 40%, #0a2540 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Cinematic Maritime Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.12, opacity: 0.95, filter: "brightness(105%) contrast(110%)" }}
          animate={{
            scale: skipped ? 1.02 : 1.08,
            opacity: skipped ? 0.32 : 0.95,
            filter: skipped ? "brightness(90%) contrast(115%)" : "brightness(105%) contrast(110%)",
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/maritime-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/maritime-atlantic.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Ambient Dark Navy Gradient Overlays - Fade in as ship passes */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/85 via-[rgba(10,37,64,0.7)] to-[#10385A]"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: skipped ? 1 : 0.15 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,37,64,0.85)_95%)]"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: skipped ? 1 : 0.1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* Cinematic light sweep effect as ship passes by */}
        <AnimatePresence>
          {!skipped && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 0.45, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, delay: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(94,182,219,0.3) 50%, rgba(183,227,235,0.4) 65%, transparent 100%)",
                transform: "skewX(-20deg)",
              }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Grid background pattern - Fades in once ship turns into background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: skipped ? 0.03 : 0 }}
        transition={{ duration: 1.4 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,182,219,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,182,219,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: skipped ? 1 : 0 }}
        transition={{ duration: 1.6 }}
        style={{
          background: "radial-gradient(circle, rgba(94,182,219,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: skipped ? 1 : 0 }}
        transition={{ duration: 1.6 }}
        style={{
          background: "radial-gradient(circle, rgba(183,227,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container - Revealed smoothly after ship passes */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto pt-24 pointer-events-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: skipped ? 1 : 0, y: skipped ? 0 : 20 }}
          transition={{ duration: 0.8, delay: skipped ? 0.1 : 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(94,182,219,0.3)] bg-[rgba(94,182,219,0.08)] backdrop-blur-sm text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg shadow-black/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse inline-block shadow-[0_0_6px_#5EB6DB]" />
          Istanbul · Dubai · Tartous · Worldwide
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          animate={{
            opacity: skipped ? 1 : 0,
            y: skipped ? 0 : 35,
            filter: skipped ? "blur(0px)" : "blur(8px)",
          }}
          transition={{ duration: 0.9, delay: skipped ? 0.25 : 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          <span className="text-white">RAYAH </span>
          <span
            style={{
              background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MARITIME
          </span>
          <br />
          <span className="text-white">SERVICES GROUP</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: skipped ? 1 : 0, y: skipped ? 0 : 25 }}
          transition={{ duration: 0.8, delay: skipped ? 0.45 : 0 }}
          className="text-[#5EB6DB] text-lg sm:text-xl font-medium tracking-wide mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Ship Survey &amp; Registration Services
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: skipped ? 1 : 0, y: skipped ? 0 : 20 }}
          transition={{ duration: 0.8, delay: skipped ? 0.6 : 0 }}
          className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Delivering comprehensive ship registration, inspection, auditing, certification,
          and classification services across the globe.
        </motion.p>
      </div>
    </section>
  );
}
