import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arogya Mantra Multispeciality Clinic | Ancient Wisdom · Modern Healing",
  description:
    "Experience personalised Ayurvedic care at Arogya Mantra Multispeciality Clinic, Hadapsar, Pune. Panchakarma, Yoga Therapy, Skinergy, Hair Regain & premium Ayurvedic products.",
  keywords: [
    "Ayurveda Pune",
    "Panchakarma",
    "Ayurvedic clinic Hadapsar",
    "holistic wellness",
    "yoga therapy",
  ],
  openGraph: {
    title: "Arogya Mantra Multispeciality Clinic",
    description: "Ancient Wisdom · Modern Healing",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-sans)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
