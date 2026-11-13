"use client";
import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subscribe to media query safely across SSR & React 19 concurrent renders
  const canHover = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia("(hover: hover)");
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => (typeof window !== "undefined" ? window.matchMedia("(hover: hover)").matches : true),
    () => true
  );

  // Mouse coordinate motion values (-0.5 to 0.5 relative to center)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for natural, buttery smooth 3D tilt
  const springConfig = { stiffness: 320, damping: 22 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [20, -20]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
    springConfig
  );
  const scale = useSpring(isHovered ? 1.12 : 1, springConfig);

  // Dynamic shadow displacement based on tilt
  const shadowX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [12, -12]),
    springConfig
  );
  const shadowY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [12, -12]),
    springConfig
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!canHover) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseEnter() {
    if (!canHover) return;
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <Link
      href="/"
      className="flex items-center gap-3.5 group select-none py-1"
      aria-label="Rayah Maritime Survey Services — home"
    >
      {/* 3D Perspective Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer"
        style={{
          perspective: 1000,
        }}
      >
        {/* Ambient Subtle Idle Motion Wrapper */}
        <motion.div
          animate={
            isHovered
              ? { y: 0, rotate: 0 }
              : {
                  y: [0, -3.5, 0],
                  rotate: [0, 2.5, -2.5, 0],
                }
          }
          transition={
            isHovered
              ? { duration: 0.2 }
              : {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="w-full h-full relative flex items-center justify-center"
        >
          {/* Main 3D Card Layer (Receives Spring-based 3D Tilt) */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              scale,
              transformStyle: "preserve-3d",
            }}
            whileTap={{ scale: 0.94, rotateZ: -6 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Dynamic 3D Depth Glow / Shadow behind the emblem */}
            <motion.div
              style={{
                x: shadowX,
                y: shadowY,
                transform: "translateZ(-20px)",
              }}
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(94,182,219,0.55)_0%,rgba(183,227,235,0.15)_50%,transparent_75%)] blur-md pointer-events-none transition-opacity duration-300"
              animate={{
                opacity: isHovered ? 0.95 : 0.45,
                scale: isHovered ? 1.25 : 1,
              }}
            />

            {/* Elevated 3D Logo Emblem */}
            <div
              style={{
                transform: "translateZ(30px)",
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/logo.png"
                alt="Rayah Maritime Services Group logo"
                fill
                sizes="(max-width: 768px) 56px, 64px"
                className="object-contain filter drop-shadow-[0_0_10px_rgba(94,182,219,0.5)]"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-extrabold text-sm sm:text-base tracking-[0.14em] uppercase transition-colors duration-200 group-hover:text-white">
          Rayah Maritime
        </span>
        <span className="text-[#5EB6DB] font-semibold text-[10px] sm:text-[11px] tracking-[0.22em] uppercase transition-colors duration-200 group-hover:text-[#B7E3EB]">
          Services Group
        </span>
      </div>
    </Link>
  );
}
