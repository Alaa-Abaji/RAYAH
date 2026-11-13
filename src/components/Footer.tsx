import Link from "next/link";
import Logo3D from "./Logo3D";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/ship-registration", label: "Ship Registration" },
  { href: "/technical-services", label: "Technical Services" },
  { href: "/seafarers-endorsements", label: "Seafarers Endorsements" },
];

const departments = [
  { email: "info@rayahgroup.com", label: "General" },
  { email: "tech@rayahgroup.com", label: "Technical" },
  { email: "reg@rayahgroup.com", label: "Registration" },
  { email: "seafarers@rayahgroup.com", label: "Seafarers" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-[rgba(94,182,219,0.18)] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a2540 0%, #10385A 50%, #0a2540 100%)",
      }}
      role="contentinfo"
    >
      {/* Background Waves Video - Full video visible, natural wave size without zooming */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill opacity-95 filter contrast-125 saturate-140 brightness-95"
        >
          <source src="/Rayah_waves.mp4" type="video/mp4" />
        </video>

        {/* Color wash to infuse brand navy & electric ocean blue, eliminating all gray */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color"
          style={{
            background: "linear-gradient(180deg, #0a2540 0%, #10385A 50%, #0a2540 100%)",
            opacity: 0.75,
          }}
          aria-hidden="true"
        />

        {/* Soft edge fade for top border and footer text clarity without hiding the waves */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,37,64,0.6) 0%, rgba(10,37,64,0.15) 40%, rgba(10,37,64,0.15) 70%, rgba(10,37,64,0.65) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Standard Full-Width Content Layer - NO BLUR */}
      <div className="relative z-10 w-full bg-[rgba(10,37,64,0.28)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-7">
          {/* Main Footer Grid - Balanced, Wide & Sleek */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-5">

            {/* Brand Column (3 cols) */}
            <div className="lg:col-span-3">
              <div className="mb-2.5 inline-block drop-shadow-lg">
                <Logo3D />
              </div>
              <p className="text-white/85 text-xs leading-relaxed max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] font-medium">
                Ship Survey &amp; Registration Services — comprehensive maritime solutions worldwide from Istanbul, Dubai, and Tartous.
              </p>
            </div>

            {/* Quick Links Column (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-[#5EB6DB] font-semibold text-xs tracking-widest uppercase mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                Quick Links
              </h3>
              <ul className="space-y-1.5">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/80 text-xs hover:text-[#5EB6DB] transition-colors duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] font-medium"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments Column (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-[#5EB6DB] font-semibold text-xs tracking-widest uppercase mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                Departments
              </h3>
              <ul className="space-y-1.5">
                {departments.map(({ email, label }) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs text-white/80 hover:text-[#5EB6DB] transition-colors duration-200 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                    >
                      <span className="text-white/50 text-[10px] block font-semibold leading-tight">{label}</span>
                      <span className="font-medium text-xs break-all">{email}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices (5 cols - Wide horizontal 3-column layout) */}
            <div className="lg:col-span-5">
              <h3 className="text-[#5EB6DB] font-semibold text-xs tracking-widest uppercase mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                Offices
              </h3>
              <address className="not-italic grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {/* Istanbul */}
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide mb-0.5 flex items-center gap-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] inline-block shadow-[0_0_6px_#5EB6DB]" />
                    Istanbul
                  </p>
                  <p className="text-white/80 text-[11px] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Moment İstanbul B-Blok 4 B 10, Kartal, Istanbul, Turkey
                  </p>
                  <div className="mt-1 text-[11px] space-y-0.5">
                    <a href="tel:+908502200688" className="text-[#5EB6DB] font-medium hover:text-[#B7E3EB] transition-colors block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      +90 850 220 06 88
                    </a>
                    <a href="mailto:istanbul@rayahgroup.com" className="text-[#5EB6DB] font-medium hover:text-[#B7E3EB] transition-colors block truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      istanbul@rayahgroup.com
                    </a>
                  </div>
                </div>

                {/* Dubai */}
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide mb-0.5 flex items-center gap-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] inline-block shadow-[0_0_6px_#5EB6DB]" />
                    Dubai
                  </p>
                  <p className="text-white/80 text-[11px] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Al Nokhitha Bldg, Al Khaleej Rd, Deira, Dubai, UAE
                  </p>
                  <div className="mt-1 text-[11px] space-y-0.5">
                    <a href="tel:+971439400480" className="text-[#5EB6DB] font-medium hover:text-[#B7E3EB] transition-colors block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      +971 439 400 48
                    </a>
                    <a href="mailto:dubai@rayahgroup.com" className="text-[#5EB6DB] font-medium hover:text-[#B7E3EB] transition-colors block truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      dubai@rayahgroup.com
                    </a>
                  </div>
                </div>

                {/* Tartous, Syria */}
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide mb-0.5 flex items-center gap-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EB6DB] inline-block shadow-[0_0_6px_#5EB6DB]" />
                    Tartous
                  </p>
                  <p className="text-white/80 text-[11px] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Almina St, mosque nouman bldg, 1st fl, Tartous, Syria
                  </p>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgba(94,182,219,0.15)] pt-3 flex flex-col sm:flex-row items-center justify-between gap-1.5">
            <p className="text-white/60 text-[11px] font-medium drop-shadow-sm">
              © {new Date().getFullYear()} Rayah Maritime Services Group. All rights reserved.
            </p>
            <p className="text-white/50 text-[11px] drop-shadow-sm">
              Headquartered in Istanbul, Turkey — Serving worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
