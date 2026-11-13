import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us | Rayah Maritime Survey Services",
  description:
    "Learn about Rayah Maritime Survey Services — international ship registration, marine surveying, technical classification, and seafarer documentation.",
};

const companyValues = [
  {
    title: "Global Reliability & 24/7 Response",
    desc: "Direct emergency assistance and agile registrar coordination across all worldwide time zones without courier delays.",
  },
  {
    title: "Compliance & Technical Rigor",
    desc: "Strict adherence to IMO, STCW, SOLAS, MARPOL, MLC standards, and major flag state statutory requirements.",
  },
  {
    title: "Transparent & Cost-Effective Advisory",
    desc: "Tailored flag proposals, fee optimization, and multi-vessel registration incentive programs for shipowners.",
  },
  {
    title: "Certified Survey Network",
    desc: "A strategically stationed network of certified marine surveyors operating in main ports across 10+ countries.",
  },
];

const officeLocations = [
  {
    city: "Istanbul, Turkey",
    role: "Headquarters & Regional Deputy Registrar",
    address: "Soganlık Yeni Mah. Baltaci Mehmetpaşa Sk. AC Yapi Moment İstanbul B-Blok 4 B 10, Kartal, Istanbul, Turkey",
    email: "istanbul@rayahgroup.com",
    badge: "Headquarter",
  },
  {
    city: "Dubai, UAE",
    role: "Regional Operations & Technical Office",
    address: "Office 331, 3rd Floor, Al Nokhitha Building, Al Khaleej Road, Near Al Hamriya Port, Deira, Dubai, UAE",
    email: "dubai@rayahgroup.com",
    badge: "Regional",
  },
  {
    city: "Tartous, Syria",
    role: "Regional Office",
    address: "Almina street, West of Almansour, mosque nouman bldg, 1st floor, Tartous, Syria",
    email: "info@rayahgroup.com",
    badge: "Regional",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#10385A] text-white">
      {/* ── Hero Section with Video Background ─────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 border-b border-[rgba(94,182,219,0.12)] overflow-hidden">
        {/* Cinematic Maritime Video Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/maritime-poster.jpg"
            className="w-full h-full object-cover opacity-25 filter brightness-95 contrast-115 scale-105"
          >
            <source src="/maritime-atlantic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/80 via-[rgba(10,37,64,0.7)] to-[#10385A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,37,64,0.85)_95%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(94,182,219,0.3)] bg-[rgba(94,182,219,0.06)] text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] animate-pulse" />
              Maritime Heritage &amp; Vision
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5EB6DB 0%, #B7E3EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rayah Maritime
              </span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-2">
              Rayah Maritime Survey Services is an international maritime consultancy, authorized
              deputy registrar, and technical surveying organization headquartered in Istanbul, with
              regional operations extending across major global maritime corridors.
            </p>

            {/* Hero CTAs temporarily removed
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Our Leadership
              </Button>
              <Button href="/ship-registration" variant="outline">
                Explore Registries
              </Button>
            </div>
            */}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-snug">
              Empowering Shipowners with Decisive Technical &amp; Flag Solutions
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Since our establishment, Rayah Maritime has bridged the gap between shipowners, flag
              state administrations, and classification societies. We provide rapid, legally robust
              registration procedures, independent surveys for top insurance clubs, and complete
              STCW certification for seafaring personnel worldwide.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Whether conducting pre-purchase condition valuations, managing emergency drydocks, or
              structuring international offshore ownerships, our experienced master mariners and naval
              architects deliver dependable excellence.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-extrabold text-[#5EB6DB]">100%</div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Quality Driven
                </div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <div className="text-3xl font-extrabold text-[#5EB6DB]">24/7</div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Emergency Support
                </div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <div className="text-3xl font-extrabold text-[#5EB6DB]">10+</div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Global Port Hubs
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Values Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {companyValues.map((val, idx) => (
              <AnimatedSection key={val.title} delay={idx * 0.1}>
                <div className="p-6 rounded-3xl bg-[rgba(10,37,64,0.65)] border border-[rgba(94,182,219,0.18)] backdrop-blur-xl h-full flex flex-col justify-between hover:border-[rgba(94,182,219,0.35)] transition-all duration-300 shadow-lg">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2.5">{val.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence & Offices ────────────────────────────────────────── */}
      <section className="py-20 bg-[rgba(10,37,64,0.6)] border-y border-[rgba(94,182,219,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5EB6DB] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Strategic Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Office Locations
            </h2>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed">
              Serving our global maritime clientele from strategic maritime offices in
              Istanbul, Dubai, and Tartous.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officeLocations.map((office, idx) => (
              <AnimatedSection key={office.city} delay={idx * 0.15}>
                <div className="p-8 rounded-3xl bg-[rgba(16,56,90,0.5)] border border-[rgba(94,182,219,0.2)] shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#5EB6DB] bg-[rgba(94,182,219,0.15)] px-3 py-1 rounded-full uppercase tracking-wider">
                        {office.badge}
                      </span>
                      <span className="text-xs text-white/50">{office.email}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{office.city}</h3>
                    <p className="text-[#B7E3EB] text-sm font-semibold mb-3">{office.role}</p>
                    <p className="text-white/65 text-sm leading-relaxed">{office.address}</p>
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
