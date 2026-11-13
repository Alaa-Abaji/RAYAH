"use client";
import AnimatedSection from "./ui/AnimatedSection";

const stats = [
  { value: "2", label: "Global Offices", suffix: "" },
  { value: "3+", label: "Flag Registries", suffix: "" },
  { value: "24/7", label: "Emergency Service", suffix: "" },
  { value: "100%", label: "Quality Driven", suffix: "" },
];

export default function AboutSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a2540 0%, #0d2f4a 100%)",
      }}
      aria-labelledby="about-heading"
    >
      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(94,182,219,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-[#5EB6DB]" aria-hidden="true" />
                Who We Are
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6"
              >
                Maritime Expertise,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Global Reach
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/65 text-base leading-relaxed mb-4">
                Rayah Maritime Services Group is a maritime survey and ship registration company
                headquartered in Istanbul, with an extensive and growing team across major ports
                in the Middle East.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                We deliver a comprehensive range of services including ships&apos; registration,
                inspection, auditing, certification, and classification — always upholding the
                highest standards of quality, safety, and environmental responsibility.
              </p>
            </AnimatedSection>

            {/* Learn More button temporarily removed
            <AnimatedSection delay={0.3}>
              <Button href="/about" variant="outline">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </AnimatedSection>
            */}
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.15 * i} direction="left">
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(16,56,90,0.5)",
                    border: "1px solid rgba(94,182,219,0.15)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="text-4xl font-extrabold text-[#5EB6DB] mb-1">
                    {stat.value}
                    <span className="text-2xl text-[#B7E3EB]">{stat.suffix}</span>
                  </div>
                  <div className="text-white/50 text-xs font-medium tracking-wide">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
