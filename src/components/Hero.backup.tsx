"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% -10%, rgba(94,182,219,0.15) 0%, transparent 60%), linear-gradient(180deg, #0a2540 0%, #10385A 40%, #0a2540 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Cinematic Maritime Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/maritime-poster.jpg"
          className="w-full h-full object-cover opacity-30 filter brightness-95 contrast-115 scale-105"
        >
          <source src="/maritime-atlantic.mp4" type="video/mp4" />
        </video>
        {/* Layered Gradient overlays for seamless blend into navy theme */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/80 via-[rgba(10,37,64,0.65)] to-[#10385A]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,37,64,0.85)_95%)]"
          aria-hidden="true"
        />
      </div>

      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,182,219,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,182,219,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(94,182,219,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(183,227,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(94,182,219,0.3)] bg-[rgba(94,182,219,0.05)] text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse inline-block" />
          Istanbul · Dubai · Worldwide
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-5"
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
          <span className="text-white">SURVEY SERVICES</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#5EB6DB] text-lg sm:text-xl font-medium tracking-wide mb-4"
        >
          Ship Survey &amp; Registration Services
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6"
        >
          Delivering comprehensive ship registration, inspection, auditing, certification,
          and classification services across the globe.
        </motion.p>

        {/* CTAs temporarily removed
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/services" variant="primary">
            Explore Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </motion.div>
        */}

      </div>
    </section>
  );
}
