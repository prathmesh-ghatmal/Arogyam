"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Users, Leaf, Activity, Droplets, Layers, Gem } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.22, 0.68, 0, 1] as const },
});

const trustStats = [
  { icon: Clock,       value: "15+",   label: "Years Experience" },
  { icon: ShieldCheck, value: "100%",  label: "Ayurvedic Expertise" },
  { icon: Users,       value: "1000+", label: "Happy Patients" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #F5F1E8 0%, #EAE4D6 55%, #DDD6C4 100%)",
        paddingTop: "72px",
        minHeight: "100dvh",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="container-xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>

        {/* ── Left content ─────────────────────────────── */}
        <div className="flex flex-col gap-7 relative z-10">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3">
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Ancient Wisdom · Modern Healing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            {...fadeUp(0.1)}
            style={{ color: "var(--deep-green)", fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em", fontWeight: 500 }}
          >
            Experience the Science of{" "}
            <span className="italic" style={{ color: "var(--forest-green)" }}>
              Traditional
            </span>{" "}
            Healing
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-[480px]"
            style={{ color: "#5A5A4A" }}
          >
            Discover a personalised path to wellness through authentic Ayurvedic approaches.
            We focus on identifying root causes to restore your body&apos;s natural harmony.
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mt-1">
            <Link href="#contact" className="btn btn-primary">
              Book Consultation
              <ArrowRight size={16} />
            </Link>
            <Link href="#products" className="btn btn-outline">
              Shop Products
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-6 mt-4 pt-6"
            style={{ borderTop: "1px solid rgba(194,168,120,0.3)" }}
          >
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(31,58,44,0.07)" }}
                >
                  <Icon size={18} style={{ color: "var(--deep-green)" }} />
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold leading-none" style={{ color: "var(--deep-green)", fontFamily: "var(--font-serif)" }}>
                    {value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#7A7A6A" }}>{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right visual ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 0.68, 0, 1] }}
          className="relative z-10 lg:h-[580px] flex items-center justify-center"
        >
          {/* Main card */}
          <div
            className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(135deg, #234733 0%, #1F3A2C 100%)", aspectRatio: "3/4", maxHeight: "520px" }}
          >
            {/* Decorative herb pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(163,177,138,0.6) 0%, transparent 50%), 
                                   radial-gradient(circle at 80% 20%, rgba(194,168,120,0.5) 0%, transparent 40%)`,
              }}
            />

            {/* Central visual */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                style={{ background: "rgba(245,241,232,0.08)", border: "1.5px solid rgba(245,241,232,0.15)" }}
              >
                <Leaf size={36} strokeWidth={1.3} style={{ color: "var(--sage)" }} />
              </div>
              <p className="font-serif text-3xl font-medium text-white leading-tight mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                Heal from Within
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                Traditional Ayurvedic wisdom combined with modern therapeutic approaches for holistic wellbeing.
              </p>
              {/* Service chips */}
              <div className="flex flex-wrap gap-2 justify-center mt-5">
                {([
                  { Icon: Activity,  label: "Panchakarma" },
                  { Icon: Droplets,  label: "Yoga Therapy" },
                  { Icon: Layers,    label: "Herbology" },
                  { Icon: Gem,       label: "Skinergy" },
                ] as { Icon: React.ElementType; label: string }[]).map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                    style={{ background: "rgba(245,241,232,0.08)", color: "rgba(245,241,232,0.65)", border: "1px solid rgba(245,241,232,0.12)", letterSpacing: "0.05em" }}
                  >
                    <Icon size={11} strokeWidth={1.8} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{ background: "linear-gradient(90deg, var(--sage), var(--gold), var(--sage))" }}
            />
          </div>

          {/* Floating badge 1 */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="float-badge absolute -left-8 top-[15%] p-4 hidden lg:flex items-center gap-3"
            style={{ minWidth: "190px" }}
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--deep-green)" }}>
              <ShieldCheck size={18} style={{ color: "var(--cream)" }} />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>Certified Ayurveda</p>
              <p className="text-xs" style={{ color: "#7A7A6A" }}>Govt. Reg. Practitioners</p>
            </div>
          </motion.div>

          {/* Floating badge 2 */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="float-badge absolute -right-6 bottom-[10%] p-4 hidden lg:block"
            style={{ minWidth: "180px" }}
          >
            <p className="eyebrow mb-1.5" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>This Month&apos;s Special</p>
            <p className="text-sm font-medium" style={{ color: "var(--charcoal)", fontFamily: "var(--font-serif)" }}>
              Panchakarma Detox
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#7A7A6A" }}>₹2,999 · Limited Slots</p>
          </motion.div>

          {/* Floating badge 3 — top right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.55 }}
            className="float-badge absolute -right-4 top-[8%] p-3 hidden lg:flex items-center gap-2"
          >
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>4.9 / 5 Rating</p>
              <p className="text-xs" style={{ color: "#7A7A6A" }}>380+ Reviews</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  );
}
