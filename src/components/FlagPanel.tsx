"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FlagCountry } from "@/data/flags";

interface FlagPanelProps {
  country: FlagCountry | null;
  onClose: () => void;
}

export default function FlagPanel({ country, onClose }: FlagPanelProps) {
  return (
    <AnimatePresence>
      {country && (
        <motion.aside
          key={country.name}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute top-4 right-4 bottom-4 w-[min(360px,calc(100%-2rem))] rounded-2xl overflow-hidden flex flex-col z-30"
          style={{
            background: "rgba(10,37,64,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(94,182,219,0.2)",
            boxShadow: "0 0 40px rgba(94,182,219,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
          role="complementary"
          aria-label={`Information about ${country.name}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 border-b border-[rgba(94,182,219,0.1)]">
            <div>
              <div className="text-3xl mb-2" aria-hidden="true">{country.flag}</div>
              <h2 className="text-white font-bold text-xl leading-tight">{country.name}</h2>
              <p className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mt-1">
                Flag Registry
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 mt-1"
              aria-label="Close flag panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
            <p className="text-white/75 text-sm leading-relaxed">{country.description}</p>
          </div>

          {/* Footer CTA temporarily removed
          <div className="p-6 pt-4 border-t border-[rgba(94,182,219,0.1)]">
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#5EB6DB] text-[#10385A] font-semibold text-sm py-3 rounded-full hover:bg-[#B7E3EB] transition-all duration-200 hover:shadow-[0_0_20px_rgba(94,182,219,0.4)]"
            >
              Register Under {country.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          */}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
