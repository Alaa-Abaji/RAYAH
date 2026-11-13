import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Technical Services & Marine Surveys | Rayah Maritime",
  description:
    "Classification & statutory surveys, flag safety inspections, marine accident investigations, pre-purchase condition surveys, technical drydock supervision, and preparation of statutory plans & manuals.",
};

const surveyTypes = [
  {
    title: "Classification & Statutory Surveys",
    desc: "Class surveys and mandatory statutory verification under the authority of various international flag administrations and RO mandates.",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Flag Safety Inspections",
    desc: "Authorized annual flag safety audits, pre-flagging verifications, and compliance inspections adhering to strict flag state standards.",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    title: "Marine Accident Investigations",
    desc: "Independent, forensic investigative reporting for incidents, collisions, groundings, and machinery failures for owners and insurers.",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Pre-Purchase Inspections & Valuation",
    desc: "Comprehensive physical condition assessments, structural evaluations, and asset valuation reports prior to vessel acquisition.",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Condition Surveys for Insurers",
    desc: "Independent condition surveys and risk assessments conducted on behalf of globally top-level marine insurance underwriters and P&I clubs.",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const surveyorPorts = [
  { country: "Turkey", flag: "🇹🇷" },
  { country: "UAE", flag: "🇦🇪" },
  { country: "Qatar", flag: "🇶🇦" },
  { country: "Lebanon", flag: "🇱🇧" },
  { country: "Egypt", flag: "🇪🇬" },
  { country: "Morocco", flag: "🇲🇦" },
  { country: "Tunisia", flag: "🇹🇳" },
  { country: "Spain", flag: "🇪🇸" },
  { country: "South Korea", flag: "🇰🇷" },
  { country: "Panama", flag: "🇵🇦" },
];

const statutoryPlans = [
  {
    title: "Safety Management System (SMS)",
    subtitle: "Complete operational manual and statutory forms compliant with ISM Code.",
  },
  {
    title: "Shipboard Contingency Plan",
    subtitle: "Emergency preparedness protocols and crisis action response checklists.",
  },
  {
    title: "International Ship Security Plan (ISPS)",
    subtitle: "Tailored security plan including comprehensive ship security assessment.",
  },
  {
    title: "SOPEP & SMPEP",
    subtitle: "Shipboard Oil & Marine Pollution Emergency Plans under MARPOL Annex I/II.",
  },
  {
    title: "Garbage Management Plan (GMP)",
    subtitle: "Waste reduction, processing protocols, and MARPOL Annex V compliance.",
  },
  {
    title: "Shipboard Risk Assessment",
    subtitle: "Systematic hazard identification, risk mitigation, and operational safety matrices.",
  },
  {
    title: "SEEMP (Part I & Part II)",
    subtitle: "Ship Energy Efficiency Management Plan including CII compliance methodology.",
  },
  {
    title: "Maritime Labor Convention (MLC)",
    subtitle: "Seafarer employment terms, working condition manuals, and statutory declaration forms.",
  },
  {
    title: "Recovery of Persons from Water",
    subtitle: "Dedicated plans and operational procedures for crew and casualty recovery.",
  },
  {
    title: "Emergency Towing Booklet (ETB)",
    subtitle: "Vessel-specific towing procedures and equipment layouts under SOLAS regulations.",
  },
  {
    title: "Ballast Water Management Plan (BWMP)",
    subtitle: "Operational guidelines adhering to the BWM Convention and D-2 standard.",
  },
  {
    title: "EU MRV Plan & Verification",
    subtitle: "Monitoring, Reporting, and Verification plan preparation and emissions data verification.",
  },
];

export default function TechnicalServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#10385A] text-white">
      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 border-b border-[rgba(94,182,219,0.12)] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,182,219,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,182,219,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(94,182,219,0.3)] bg-[rgba(94,182,219,0.06)] text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse" />
              Marine Surveys &amp; Technical Supervision
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Technical{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-2">
              Rayah employs expert surveyors and collaborates with professional top-level
              organizations worldwide, delivering high-quality survey, auditing, and consultancy
              services for shipowners, insurers, and flag states.
            </p>

            {/* Hero CTAs temporarily removed
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Inquire With Technical Team
              </Button>
              <Button href="#consultancy" variant="outline">
                Plans &amp; Manuals
              </Button>
            </div>
            */}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Surveys Section ───────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Independent &amp; Class Surveys
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Comprehensive Marine Surveys
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            We deliver high-quality survey services either as independent surveyors with globally
            top-level marine insurance companies or as Class / Recognized Organization (RO) under the
            authority of various flag states.
          </p>
        </AnimatedSection>

        {/* Survey Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {surveyTypes.map((type, idx) => (
            <AnimatedSection key={type.title} delay={idx * 0.1}>
              <div className="p-7 rounded-3xl bg-[rgba(10,37,64,0.65)] border border-[rgba(94,182,219,0.18)] backdrop-blur-xl h-full flex flex-col justify-between hover:border-[rgba(94,182,219,0.35)] transition-all duration-300">
                <div>
                  <div className="p-3 rounded-2xl bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)] w-fit mb-5">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{type.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{type.desc}</p>
                </div>
                <div className="text-xs font-semibold text-[#5EB6DB] flex items-center gap-1">
                  <span>Available on short notice</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Surveyor Global Port Coverage */}
        <AnimatedSection delay={0.2}>
          <div className="p-8 sm:p-10 rounded-3xl bg-[rgba(16,56,90,0.45)] border border-[rgba(94,182,219,0.2)] relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-2 block">
                Global Network
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Surveyor Coverage Across Major Ports
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Our specialized team of qualified marine surveyors is strategically stationed across
                the key maritime hubs and major ports of the following countries:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {surveyorPorts.map((port) => (
                <div
                  key={port.country}
                  className="p-3.5 rounded-2xl bg-[rgba(10,37,64,0.8)] border border-[rgba(94,182,219,0.2)] flex items-center gap-3 text-sm font-semibold text-white shadow-sm hover:border-[#5EB6DB] transition-colors"
                >
                  <span className="text-xl" aria-hidden="true">{port.flag}</span>
                  <span>{port.country}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(94,182,219,0.15)]">
              <p className="text-xs text-white/50 text-center">
                Our team provides 24/7 technical coordination and surveyor attendance across all major international ports.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Consultancy & Technical Supervision ───────────────────────────────── */}
      <section id="consultancy" className="py-20 bg-[rgba(10,37,64,0.6)] border-y border-[rgba(94,182,219,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Technical Advisory &amp; Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Consultancy &amp; Technical Supervision
            </h2>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed">
              We provide a comprehensive range of consultancy services to our clients&apos; vessels,
              including technical supervision for ship maintenance, drydocking, and class surveys on
              behalf of shipowners.
            </p>
          </AnimatedSection>

          {/* Technical Supervision Highlight */}
          <AnimatedSection delay={0.1} className="mb-14">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[rgba(16,56,90,0.8)] to-[rgba(10,37,64,0.9)] border border-[rgba(94,182,219,0.25)] shadow-xl">
              <div>
                <span className="px-3 py-1 rounded-full bg-[rgba(94,182,219,0.15)] text-[#5EB6DB] text-xs font-semibold uppercase tracking-wide inline-block mb-3">
                  Owner Representation
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Technical Drydock Supervision</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
                  Our superintendents frequently conduct on-site technical supervision for ship&apos;s
                  maintenance, routine drydocking, major repairs, and class renewal surveys representing
                  the owner&apos;s best technical and commercial interests.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 12 Plans & Manuals Grid */}
          <AnimatedSection delay={0.2} className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Preparation of Plans and Manuals</h3>
            <p className="text-white/60 text-sm mb-8">
              Statutory documentation, manuals, and emergency preparedness booklets authored to full
              IMO, Flag State, and Classification Society standards:
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {statutoryPlans.map((plan, idx) => (
              <AnimatedSection key={plan.title} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-[rgba(16,56,90,0.4)] border border-[rgba(94,182,219,0.15)] hover:border-[rgba(94,182,219,0.35)] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 mb-2.5">
                      <svg className="w-5 h-5 text-[#5EB6DB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-base font-bold text-white leading-snug">{plan.title}</h4>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed pl-8">{plan.subtitle}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
