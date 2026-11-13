import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Ship Registration Services | Rayah Maritime",
  description:
    "Comprehensive ship registration, special ship registration, provisional & permanent flag documentation, and offshore company incorporation services.",
};

const selectionFactors = [
  {
    title: "Ship's Age",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Assessing age limits and vintage requirements across multiple international flag administrations.",
  },
  {
    title: "Technical Condition",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Evaluating structural and statutory readiness in compliance with Recognized Organizations (RO).",
  },
  {
    title: "Trading Area",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Ensuring unrestricted navigation and seamless port entry across your intended commercial routes.",
  },
  {
    title: "Taxes and Fees",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Optimizing initial registration charges, annual tonnage taxes, and multi-vessel fleet incentives.",
  },
  {
    title: "Flag Requirements",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Navigating statutory declarations, safety manning, survey schedules, and administration standards.",
  },
  {
    title: "Crew & Managers Nationality",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Streamlining seafarer endorsements, STCW certifications, and foreign ownership flexibility.",
  },
];

const procedures = [
  {
    step: "01",
    title: "Submit Vessel Parameters",
    description:
      "The owner, manager, or responsible party submits vessel parameters by completing the Ship Registration Request form.",
    actionText: "Request Form",
    href: "/contact",
  },
  {
    step: "02",
    title: "Tailored Flag Proposal",
    description:
      "Our specialized team analyzes your vessel data and proposes the optimal flag considering cost effectiveness, unrestricted trading areas, and Recognized Organizations (RO).",
  },
  {
    step: "03",
    title: "Application & Documentation",
    description:
      "Upon offer approval, the official registration application is submitted alongside all required provisional and subsequent permanent statutory documents.",
    actionText: "Application Form",
    href: "/contact",
  },
];

const provisionalDocs = [
  "Ship Registration Application Form (copy)",
  "Radio Station License Application Form (copy)",
  "Minimum Safe Manning Application Form (copy)",
  "Power of Attorney (POA) legalized duly (copy)",
  "Owner’s documents & passport copy of Person in Charge (copy)",
  "Bill of Sale (BOS) legalized duly (copy)",
  "Ship’s Statutory certificates under previous registration (copy)",
  "Additional miscellaneous declarations from flag administrations or agents (copy)",
];

const specialRegistrationDocs = [
  "Application for Special Registration (flag form dully filled)",
  "Company current Document of Compliance (DOC) and Safety Management Certificate (SMC)",
];

const permanentDocs = [
  "Flag Administration original application forms",
  "Original Bill of Sale (BOS) & Acceptance of Sale (AOS) legalized duly",
  "Original Power of Attorney (POA) legalized duly",
  "Original Deletion Certificate & Ceased CSR issued from previous flag (legalized duly)",
  "New Statutory Certificates from Recognized Organization (RO) approved by the flag",
];

const offshoreJurisdictions = [
  { name: "Panama", code: "PA" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Liberia", code: "LR" },
  { name: "Belize", code: "BZ" },
  { name: "Others", code: "INTL" },
];

export default function ShipRegistrationPage() {
  return (
    <div className="pt-24 pb-20 bg-[#10385A] text-white">
      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[rgba(94,182,219,0.12)]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,182,219,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,182,219,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(94,182,219,0.3)] bg-[rgba(94,182,219,0.06)] text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse" />
              Flag State Advisory &amp; Documentation
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Ship Registration &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Flag Advisory
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-2">
              Our company has a reputed and well-known name in the ship registration market. Our
              specialized team assists owners globally in identifying and securing the most
              advantageous flag state tailored to their vessel parameters.
            </p>

            {/* Hero CTAs temporarily removed
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Request Registration Offer
              </Button>
              <Button href="#procedures" variant="outline">
                View Procedures
              </Button>
            </div>
            */}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Definitions & Industry Shift ──────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ship Registration Card */}
          <AnimatedSection delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-[rgba(10,37,64,0.65)] border border-[rgba(94,182,219,0.18)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
              <div className="inline-flex p-3 rounded-2xl bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)] text-[#5EB6DB] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Ship Registration</h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-6">
                The official process by which a vessel is documented and granted the nationality of
                the designated flag state. The flag permits international navigation and serves as
                definitive legal proof of ownership worldwide.
              </p>
              <div className="p-4 rounded-xl bg-[rgba(16,56,90,0.5)] border border-[rgba(94,182,219,0.1)] text-xs text-white/60">
                Raising a flag for your vessel has always been the primary strategic decision for
                shipowners since international maritime law permitted nationality distinct from
                ownership.
              </div>
            </div>
          </AnimatedSection>

          {/* Special Registration & Global Stats */}
          <AnimatedSection delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-[rgba(10,37,64,0.65)] border border-[rgba(94,182,219,0.18)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)] text-[#5EB6DB] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Special Ship Registration</h2>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-6">
                  A specialized single-voyage registration mechanism whereby a vessel is documented
                  for a dedicated single passage from Port (A) to Port (B) (e.g., delivery, dry dock,
                  or recycling voyages).
                </p>
              </div>

              {/* UNCTAD Statistic Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[rgba(94,182,219,0.15)] to-[rgba(16,56,90,0.4)] border border-[rgba(94,182,219,0.25)] flex items-center gap-5">
                <div className="text-4xl font-extrabold text-[#5EB6DB]">67%</div>
                <div className="text-xs text-white/75 leading-snug">
                  Proportion of the global merchant fleet flying foreign flags (growing from 21.6% in
                  the 1970s to over 67% today, UNCTAD).
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Key Selection Factors ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[rgba(10,37,64,0.5)] border-y border-[rgba(94,182,219,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Strategic Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Key Flag Selection Factors
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Selecting the appropriate flag state requires balancing operational, technical, and
              commercial parameters:
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionFactors.map((factor, idx) => (
              <AnimatedSection key={factor.title} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-[rgba(16,56,90,0.45)] border border-[rgba(94,182,219,0.15)] hover:border-[rgba(94,182,219,0.35)] transition-all duration-300 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)] w-fit mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{factor.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Procedure ────────────────────────────────────────────── */}
      <section id="procedures" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Step-by-Step Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Registration Procedure
          </h2>
          <p className="text-white/60 text-sm sm:text-base">
            From initial parameters to final permanent certification, our streamlined process ensures
            swift turnaround without courier or time-zone delays.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((proc, idx) => (
            <AnimatedSection key={proc.step} delay={idx * 0.15}>
              <div className="relative p-8 rounded-3xl bg-[rgba(10,37,64,0.7)] border border-[rgba(94,182,219,0.2)] h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-black text-[#5EB6DB]/40 mb-4">{proc.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{proc.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{proc.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Document Requirements ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[rgba(10,37,64,0.6)] border-y border-[rgba(94,182,219,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Compliance Checklist
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Required Documentation
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              The required documents generally follow an initial provisional registration phase,
              followed by permanent documentation issuance.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Provisional Requirements */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-3xl bg-[rgba(16,56,90,0.5)] border border-[rgba(94,182,219,0.2)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(94,182,219,0.15)]">
                    <h3 className="text-xl font-bold text-white">Provisional Registration</h3>
                    <span className="px-3 py-1 rounded-full bg-[rgba(94,182,219,0.15)] text-[#5EB6DB] text-xs font-semibold">
                      Phase 1 (Copies)
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {provisionalDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-white/75">
                        <svg className="w-5 h-5 text-[#5EB6DB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Special Registration Sub-requirements */}
                  <div className="p-5 rounded-2xl bg-[rgba(10,37,64,0.6)] border border-[rgba(94,182,219,0.15)]">
                    <p className="text-xs font-bold text-[#5EB6DB] uppercase tracking-wide mb-2">
                      In Special Ship Registration Cases (Additional):
                    </p>
                    <ul className="space-y-2">
                      {specialRegistrationDocs.map((sDoc) => (
                        <li key={sDoc} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="text-[#5EB6DB] font-bold">•</span>
                          <span>{sDoc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Permanent Requirements */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-3xl bg-[rgba(16,56,90,0.5)] border border-[rgba(94,182,219,0.2)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(94,182,219,0.15)]">
                    <h3 className="text-xl font-bold text-white">Permanent Registration</h3>
                    <span className="px-3 py-1 rounded-full bg-[rgba(183,227,235,0.15)] text-[#B7E3EB] text-xs font-semibold">
                      Phase 2 (Originals)
                    </span>
                  </div>

                  <p className="text-xs text-white/60 mb-6 leading-relaxed">
                    To obtain permanent registry certificates from the flag administration, the
                    following original legalized documentation must be complied with and dispatched
                    to the administration head office:
                  </p>

                  <ul className="space-y-4">
                    {permanentDocs.map((pDoc) => (
                      <li key={pDoc} className="flex items-start gap-3 text-sm text-white/75">
                        <svg className="w-5 h-5 text-[#B7E3EB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{pDoc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Offshore Companies Section ────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[rgba(10,37,64,0.8)] border border-[rgba(94,182,219,0.25)] relative overflow-hidden shadow-2xl">
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(94,182,219,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <AnimatedSection>
              <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
                Corporate Structuring
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Offshore Companies Incorporation
              </h2>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                Rayah Maritime provides comprehensive corporate services related to the incorporation
                and ongoing management of offshore shipping companies across leading maritime
                jurisdictions.
              </p>
            </AnimatedSection>

            {/* Jurisdiction Badges */}
            <AnimatedSection delay={0.15} className="mb-10">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Key Jurisdictions Supported:
              </p>
              <div className="flex flex-wrap gap-3">
                {offshoreJurisdictions.map((j) => (
                  <div
                    key={j.name}
                    className="px-4 py-2 rounded-xl bg-[rgba(16,56,90,0.6)] border border-[rgba(94,182,219,0.25)] text-sm font-semibold text-white flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5EB6DB]" />
                    <span>{j.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Incorporation Definition & Steps */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[rgba(94,182,219,0.15)]">
              <AnimatedSection delay={0.2}>
                <h3 className="text-lg font-bold text-white mb-2">What is an Offshore Company?</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  An offshore company is legally incorporated outside of the country where its
                  principals (directors, shareholders, and partners) reside, established to operate
                  flexibly and efficiently outside the jurisdiction of its origin.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-lg font-bold text-white mb-2">Incorporation Procedures</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  Upon receiving your incorporation request, our registration department provides a
                  tailored quotation, jurisdiction-specific application forms, and passport
                  photocopy verification guidelines.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
