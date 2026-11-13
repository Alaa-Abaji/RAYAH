"use client";
import Link from "next/link";
import AnimatedSection from "./ui/AnimatedSection";

const serviceCards = [
  {
    href: "/ship-registration",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: "Ship Registration",
    description:
      "Full provisional & permanent registration under leading flag administrations with strategic advisory.",
    badge: "Flags",
  },
  {
    href: "/technical-services",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Technical Services & Surveys",
    description:
      "Annual safety inspections, condition surveys, pre-purchase surveys, and statutory audits.",
    badge: "Technical",
  },
  {
    href: "/seafarers-endorsements",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Seafarers Endorsements",
    description:
      "Fast-track CRA processing, flag state certificates of endorsement (COE), and seaman discharge books.",
    badge: "Crew",
  },
  {
    href: "/ship-registration",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Offshore Companies",
    description:
      "Corporate incorporation services under Panama, Marshall Islands, Liberia, Belize, and global jurisdictions.",
    badge: "Corporate",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d2f4a 0%, #0a2540 100%)" }}
      aria-labelledby="services-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(94,182,219,1) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-[#5EB6DB]" aria-hidden="true" />
            What We Do
            <span className="w-8 h-px bg-[#5EB6DB]" aria-hidden="true" />
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Comprehensive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Maritime Services
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={0.1 * i}>
              <Link
                href={card.href}
                className="group block h-full p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(16,56,90,0.45)",
                  border: "1px solid rgba(94,182,219,0.12)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-[#5EB6DB] mb-5 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(94,182,219,0.3)]"
                  style={{ background: "rgba(94,182,219,0.1)", border: "1px solid rgba(94,182,219,0.2)" }}
                >
                  {card.icon}
                </div>

                {/* Badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase text-[#5EB6DB] bg-[rgba(94,182,219,0.1)] border border-[rgba(94,182,219,0.2)] mb-3">
                  {card.badge}
                </span>

                <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#B7E3EB] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>

                {/* Arrow */}
                <div className="flex items-center gap-1 mt-5 text-[#5EB6DB] text-xs font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
