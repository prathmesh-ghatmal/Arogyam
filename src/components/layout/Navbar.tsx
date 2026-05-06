"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Shop",     href: "/shop" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkHero = pathname === "/about" || pathname === "/services";
  const isLight = isDarkHero && !scrolled;
  const textColor = isLight ? "var(--cream)" : "var(--charcoal)";
  const brandColor = isLight ? "var(--cream)" : "var(--deep-green)";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "nav-glass shadow-sm" : "bg-transparent"
        }`}
        style={{ transition: "background 0.35s ease, box-shadow 0.35s ease" }}
      >
        <div className="container-xl flex items-center justify-between" style={{ height: "72px" }}>
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Arogya Mantra Home">
            <span
              className="font-serif text-xl font-semibold tracking-tight transition-colors duration-300"
              style={{ color: brandColor, fontFamily: "var(--font-serif)" }}
            >
              Arogya Mantra
            </span>
            <span
              className="eyebrow mt-0.5"
              style={{ color: "var(--gold)", fontSize: "0.6rem" }}
            >
              Multispeciality Clinic
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium group transition-colors duration-300"
                style={{ color: textColor }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--gold)" }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="btn btn-primary text-sm"
              style={{ paddingLeft: "1.4rem", paddingRight: "1.4rem", paddingTop: "0.6rem", paddingBottom: "0.6rem" }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: brandColor }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 nav-glass shadow-xl"
            style={{ borderTop: "1px solid rgba(194,168,120,0.2)" }}
          >
            <div className="container-xl py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.22 }}
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium py-2 block"
                    style={{ color: "var(--charcoal)" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                className="btn btn-primary self-start mt-2"
                onClick={() => setOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
