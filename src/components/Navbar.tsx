"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo3D from "./Logo3D";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ship-registration", label: "Ship Registration" },
  { href: "/technical-services", label: "Technical Services" },
  { href: "/seafarers-endorsements", label: "Seafarers Endorsements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  // Close mobile drawer on navigation during render
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,37,64,0.95)] backdrop-blur-xl border-b border-[rgba(94,182,219,0.15)] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo3D />

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-[#5EB6DB]"
                        : "text-white/80 hover:text-[#5EB6DB]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-[#5EB6DB] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA temporarily removed
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#5EB6DB] text-[#10385A] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#B7E3EB] transition-all duration-200 hover:shadow-[0_0_20px_rgba(94,182,219,0.4)] active:scale-95"
          >
            Get in Touch
          </Link>
          */}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-[rgba(10,37,64,0.97)] backdrop-blur-xl border-b border-[rgba(94,182,219,0.15)] shadow-2xl md:hidden"
          >
            <nav className="px-6 py-6 space-y-1">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={href}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition-all ${
                      pathname === href
                        ? "text-[#5EB6DB] bg-[rgba(94,182,219,0.1)]"
                        : "text-white/80 hover:text-[#5EB6DB] hover:bg-[rgba(94,182,219,0.05)]"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile CTA temporarily removed */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
