import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Contact our Istanbul and Dubai offices.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4"
      style={{ background: "linear-gradient(180deg, #0a2540 0%, #10385A 100%)" }}>
      <div
        className="max-w-lg w-full text-center p-10 rounded-3xl"
        style={{
          background: "rgba(16,56,90,0.5)",
          border: "1px solid rgba(94,182,219,0.15)",
          boxShadow: "0 0 60px rgba(94,182,219,0.06)",
        }}
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ background: "rgba(94,182,219,0.1)", border: "1px solid rgba(94,182,219,0.2)" }}
        >
          <svg className="w-8 h-8 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-white mb-3">Get in Touch</h1>
        <p className="text-white/50 text-sm leading-relaxed mb-6">Contact our Istanbul and Dubai offices.</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(94,182,219,0.3)] text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse inline-block" />
          Coming Soon
        </div>
      </div>
    </div>
  );
}
