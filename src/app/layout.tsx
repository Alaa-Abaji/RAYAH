import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rayah Maritime Services Group",
    default: "Rayah Maritime Services Group — Ship Survey & Registration",
  },
  description:
    "Rayah Maritime Services Group delivers comprehensive ship registration, inspection, auditing, certification, and classification services worldwide. Headquartered in Istanbul with offices in Dubai and Tartous.",
  keywords: [
    "ship survey",
    "ship registration",
    "maritime services",
    "flag registry",
    "Belize registry",
    "Saint Kitts Nevis registry",
    "Barbados maritime",
    "Istanbul maritime",
    "Turkey ship survey",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rayah Maritime Survey Services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#10385A] text-white antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
