"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer maritime halo
  const springConfig = { damping: 26, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover (desktop/laptop with mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .cursor-pointer'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Maritime Sonar Halo */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none flex items-center justify-center"
      >
        {/* Luminous Reticle Ring */}
        <div
          className={`w-full h-full rounded-full transition-all duration-300 ${
            isHovered
              ? "border border-[#5EB6DB] bg-[rgba(94,182,219,0.12)] shadow-[0_0_20px_rgba(94,182,219,0.5)]"
              : "border border-[rgba(94,182,219,0.45)] bg-[rgba(10,37,64,0.08)] shadow-[0_0_10px_rgba(94,182,219,0.25)]"
          }`}
        />

        {/* Delicate Maritime Cardinal Notches (Top, Bottom, Left, Right) */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-90" : "opacity-35"
          }`}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#5EB6DB]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#5EB6DB]" />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#5EB6DB]" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#5EB6DB]" />
        </div>
      </motion.div>

      {/* Inner Pinpoint Core - Instant Response */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 1.3 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#B7E3EB] shadow-[0_0_8px_#5EB6DB] pointer-events-none"
      />

      {/* Subtle Water Ripple Ping on Click */}
      {isClicked && (
        <motion.div
          key={Date.now()}
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#5EB6DB] pointer-events-none"
        />
      )}
    </div>
  );
}
