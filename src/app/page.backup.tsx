import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GlobeSection from "@/components/GlobeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Rayah Maritime Survey Services — Ship Survey & Registration",
  description:
    "Delivering comprehensive ship registration, inspection, auditing, certification, and classification services across the globe. Istanbul & Dubai.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <GlobeSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
