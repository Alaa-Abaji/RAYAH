import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Seafarers Endorsements & STCW Certification | Rayah Maritime",
  description:
    "Official flag state seafarer endorsements, Certificates of Competency (COC), Certificates of Proficiency (COP), and fast-track CRA processing across international flag administrations.",
};

const flagList = [
  { name: "Belize", flag: "🇧🇿", note: "Deputy Registrar & Endorsements" },
  { name: "St. Kitts & Nevis", flag: "🇰🇳", note: "Official Registrar" },
  { name: "Panama", flag: "🇵🇦", note: "Assessment & Endorsement" },
  { name: "Barbados", flag: "🇧🇧", note: "Recognized Flag" },
  { name: "Dominica", flag: "🇩🇲", note: "Flag Administration" },
  { name: "Malta", flag: "🇲🇹", note: "European Standard" },
  { name: "Other Flags", flag: "🌐", note: "Global Coordination" },
];

const definitions = [
  {
    title: "Seafarer's Endorsement",
    tag: "Flag Recognition",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: "A document issued by an administration (X) as an official legal recognition of the validity of a certificate issued by another administration (Y) under STCW regulations.",
  },
  {
    title: "Certificate of Proficiency (COP)",
    tag: "Competency / Ratings",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    text: "A certificate, other than a Certificate of Competency, stating that the relevant requirements of training, operational competencies, or seagoing service in the convention have been fulfilled.",
  },
  {
    title: "Certificate of Competency (COC)",
    tag: "Officers & Masters",
    icon: (
      <svg className="w-6 h-6 text-[#5EB6DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    text: "A certificate issued and endorsed by the administration for masters, officers, and GMDSS radio operators in accordance with chapters II, III, IV, or VII, entitling lawful service in specified capacities.",
  },
];

const officerDocs = [
  "Seafarer's Endorsement Form – flag form (copy)",
  "Seafarer's Certificate of Competency (COC) (copy)",
  "Seafarer's Basic STCW Courses (copy)",
  "Seafarer's Passport copy (valid)",
  "Seafarer's Seaman Book / Discharge Book (copy)",
  "Seafarer's Personal passport-size photo (digital copy)",
  "Seafarer's Medical Examination Form – when required (copy)",
  "Seafarer's Ship Security Officer (SSO) Certificate – when required (copy)",
  "Seafarer's GMDSS GOC Certificate – when required (copy)",
  "Online Verification from the flag authority which issued the COC",
];

const ratingDocs = [
  "Seafarer's Endorsement Form – flag form (copy)",
  "Seafarer's Watch-keeping Certificate issued by Government section – if required (copy)",
  "Seafarer's Certificate of Proficiency (COP) (copy)",
  "Seafarer's Basic STCW Courses (copy)",
  "Seafarer's Passport copy (valid)",
  "Seafarer's Seaman Book (copy)",
  "Seafarer's Personal photo (digital copy)",
  "Seafarer's International Medical Certificate (copy)",
  "Online Verification from the flag authority which issued the Watch-keeping Certificate",
];

const fullTermDocs = [
  "Online Verification from the flag authority which issued the COC for the seafarer",
  "Seafarer's Medical Examination Form – when required (copy)",
  "Full compliance with the administration deficiencies – if any are raised during review",
];

export default function SeafarersEndorsementsPage() {
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
              STCW 78/95/2010 Certification &amp; CRA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Seafarers{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Endorsements
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-2">
              Rayah Maritime processes official Certificates of Endorsement (COE), CRA fast-track
              authorizations, and seafarers&apos; documentation under leading international flag
              administrations with direct electronic verification.
            </p>

            {/* Hero CTAs temporarily removed
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Apply for Endorsement
              </Button>
              <Button href="#procedures" variant="outline">
                View Requirements Checklist
              </Button>
            </div>
            */}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Flag Administrations Covered ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Accredited Flag Administrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Flags Supported for Seafarer Endorsements
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            Rayah Maritime processes seafarers&apos; certificates of endorsements and CRA issuance
            under various major maritime flag states:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
          {flagList.map((f, idx) => (
            <AnimatedSection key={f.name} delay={idx * 0.05}>
              <div className="p-5 rounded-2xl bg-[rgba(10,37,64,0.7)] border border-[rgba(94,182,219,0.2)] hover:border-[#5EB6DB] transition-all duration-300 flex flex-col items-center text-center shadow-lg">
                <span className="text-3xl mb-2.5" aria-hidden="true">{f.flag}</span>
                <h3 className="text-base font-bold text-white mb-1">{f.name}</h3>
                <p className="text-white/50 text-[11px] font-medium">{f.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── STCW Definitions Section ─────────────────────────────────────────── */}
      <section className="py-20 bg-[rgba(10,37,64,0.6)] border-y border-[rgba(94,182,219,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              International Maritime Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Core Certification Types
            </h2>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed">
              Clear definitions of statutory certificates governed by the International Convention on
              Standards of Training, Certification and Watchkeeping for Seafarers (STCW):
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {definitions.map((def, idx) => (
              <AnimatedSection key={def.title} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-[rgba(16,56,90,0.45)] border border-[rgba(94,182,219,0.18)] backdrop-blur-xl h-full flex flex-col justify-between hover:border-[rgba(94,182,219,0.35)] transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)]">
                        {def.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[rgba(94,182,219,0.1)] text-[#5EB6DB] text-[11px] font-semibold">
                        {def.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{def.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{def.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-Step Procedures & Document Checklists ────────────────────────── */}
      <section id="procedures" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Endorsement Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Procedures for Obtaining Endorsements
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            The seafarers&apos; endorsement process consists of two mandatory sequential steps:
            <strong className="text-white"> Provisional Endorsement (CRA)</strong>, followed by the
            <strong className="text-white"> Full Term Endorsement</strong> issued by the flag administration.
          </p>
        </AnimatedSection>

        {/* Phase 1: Provisional Endorsement (Officers vs Ratings) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#5EB6DB] text-[#10385A] text-xs font-extrabold uppercase">
              Step 01
            </span>
            <h3 className="text-2xl font-bold text-white">Provisional Seafarers&apos; Endorsement</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Officers Requirements */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-3xl bg-[rgba(10,37,64,0.7)] border border-[rgba(94,182,219,0.2)] h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(94,182,219,0.15)]">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Officers &amp; Masters Requirements</span>
                    </h4>
                    <span className="text-xs text-[#5EB6DB] font-semibold bg-[rgba(94,182,219,0.1)] px-3 py-0.5 rounded-full">
                      Copies
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {officerDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-white/75">
                        <svg className="w-4 h-4 text-[#5EB6DB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Ratings Requirements */}
            <AnimatedSection delay={0.15}>
              <div className="p-8 rounded-3xl bg-[rgba(10,37,64,0.7)] border border-[rgba(94,182,219,0.2)] h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(94,182,219,0.15)]">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Ratings Requirements</span>
                    </h4>
                    <span className="text-xs text-[#5EB6DB] font-semibold bg-[rgba(94,182,219,0.1)] px-3 py-0.5 rounded-full">
                      Copies
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {ratingDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-white/75">
                        <svg className="w-4 h-4 text-[#5EB6DB] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Phase 2: Full Term Endorsement */}
        <AnimatedSection delay={0.2}>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[rgba(16,56,90,0.75)] to-[rgba(10,37,64,0.9)] border border-[rgba(94,182,219,0.25)] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full bg-[#B7E3EB] text-[#10385A] text-xs font-extrabold uppercase">
                Step 02
              </span>
              <h3 className="text-2xl font-bold text-white">Full Term Seafarers&apos; Endorsement</h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-3xl">
              In order for the client to obtain a full-term seafarer&apos;s endorsement, the following
              requirements must be complied with first and dispatched to the flag administration head
              office:
            </p>

            <ul className="space-y-3.5 mb-8 max-w-3xl">
              {fullTermDocs.map((fDoc) => (
                <li key={fDoc} className="flex items-start gap-3 text-sm text-white/80">
                  <svg className="w-5 h-5 text-[#B7E3EB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{fDoc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[rgba(94,182,219,0.15)]">
              <div className="text-xs text-white/60">
                Direct inquiry with the Seafarers Department:{" "}
                <a href="mailto:seafarers@rayahgroup.com" className="text-[#5EB6DB] hover:underline font-semibold">
                  seafarers@rayahgroup.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
