"use client";


import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Globe, Share2, Play } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "About Us",         href: "/about" },
  { label: "Services",         href: "/services" },
  { label: "Shop",             href: "/shop" },
  { label: "Book Consultation", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Service",  href: "#" },
  { label: "Shipping & Returns", href: "#" },
];

const socials = [
  { icon: Globe,  href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Play,   href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      style={{ background: "var(--deep-green)", color: "rgba(245,241,232,0.75)" }}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top stripe */}
      <div style={{ borderBottom: "1px solid rgba(194,168,120,0.18)" }}>
        <div className="container-xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="/arogyam.png" 
                  alt="Arogya Mantra Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <p
                  className="font-serif text-2xl font-semibold"
                  style={{ color: "var(--cream)", fontFamily: "var(--font-serif)", lineHeight: 1.2 }}
                >
                  Arogya Mantra
                </p>
                <p className="eyebrow mt-1" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>
                  Multispeciality Clinic
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(245,241,232,0.65)" }}>
              Healing through Ayurveda. A modern clinical approach to ancient medicinal wisdom for lasting wellness — nurturing the body, mind, and soul in harmony.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-25 hover:scale-110"
                  style={{ border: "1px solid rgba(194,168,120,0.3)", color: "var(--gold)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(194,168,120,0.15)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8 lg:gap-4">
            {/* Quick Links */}
            <ul className="flex flex-col gap-3">
              <li>
                <p className="eyebrow text-xs mb-3" style={{ color: "var(--gold)" }}>Explore</p>
              </li>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(245,241,232,0.5)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,232,0.5)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal */}
            <ul className="flex flex-col gap-3">
              <li>
                <p className="eyebrow text-xs mb-3" style={{ color: "var(--gold)" }}>Legal</p>
              </li>
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(245,241,232,0.5)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,232,0.5)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-xs mb-5" style={{ color: "var(--gold)" }}>Get in Touch</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span className="text-sm leading-snug" style={{ color: "rgba(245,241,232,0.65)" }}>
                  Sector 14, Hadapsar,<br />Pune, Maharashtra
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a
                  href="tel:+919876543210"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(245,241,232,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,232,0.65)")}
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a
                  href="mailto:contact@arogyamantra.com"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(245,241,232,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,241,232,0.65)")}
                >
                  contact@arogyamantra.com
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div
              className="mt-6 p-4 rounded-xl text-sm"
              style={{ background: "rgba(245,241,232,0.06)", border: "1px solid rgba(194,168,120,0.15)" }}
            >
              <p className="eyebrow text-xs mb-2" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>
                Clinic Hours
              </p>
              <p style={{ color: "rgba(245,241,232,0.6)" }}>Mon – Sat: 10 AM – 7 PM</p>
              <p style={{ color: "rgba(245,241,232,0.4)" }}>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "rgba(245,241,232,0.35)" }}>
          © {new Date().getFullYear()} Arogya Mantra Multispeciality Clinic. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "rgba(245,241,232,0.25)" }}>
          Crafted with care · Hadapsar, Pune
        </p>
      </div>
    </footer>
  );
}
