"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Wind, RefreshCw, Gem, Sprout } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.68, delay, ease: [0.22, 0.68, 0, 1] },
});

// Icon component with consistent sizing and color
function ServiceIcon({
  Icon,
  light,
}: {
  Icon: React.ElementType;
  light: boolean;
}) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{
        background: light ? "rgba(245,241,232,0.1)" : "rgba(31,58,44,0.07)",
        border: `1.5px solid ${light ? "rgba(245,241,232,0.18)" : "rgba(31,58,44,0.12)"}`,
      }}
    >
      <Icon
        size={20}
        strokeWidth={1.6}
        style={{ color: light ? "var(--sage)" : "var(--deep-green)" }}
      />
    </div>
  );
}

const services = [
  {
    id: "panchabhoutik",
    Icon: Layers,
    title: "Panchabhoutik Chikitsa",
    description:
      "Advanced herbal pharmacology based on the five primordial elements to restore internal equilibrium at a cellular level.",
    cta: "Learn More",
    // Row 1: spans 2 of 3 columns
    colClass: "lg:col-span-2",
    bg: "linear-gradient(140deg, #1F3A2C 0%, #2D5040 100%)",
    light: true,
    accent: "rgba(163,177,138,0.45)",
  },
  {
    id: "yoga",
    Icon: Wind,
    title: "Yoga Therapy",
    description:
      "Tailored asanas and pranayama designed to support physiological recovery and mental clarity.",
    cta: "View Programs",
    // Row 1: spans 1 column
    colClass: "lg:col-span-1",
    bg: "linear-gradient(140deg, #F5F1E8 0%, #EAE0CC 100%)",
    light: false,
    accent: "rgba(194,168,120,0.35)",
  },
  {
    id: "panchakarma",
    Icon: RefreshCw,
    title: "Panchakarma",
    description:
      "The traditional five-fold detoxification process designed to purge deep-seated toxins from the body.",
    cta: "Book Detox",
    // Row 2: spans 1 column
    colClass: "lg:col-span-1",
    bg: "linear-gradient(140deg, #F5F1E8 0%, #DAE8D4 100%)",
    light: false,
    accent: "rgba(163,177,138,0.35)",
  },
  {
    id: "skinergy",
    Icon: Gem,
    title: "Skinergy",
    description:
      "Dermatological care using botanical infusions to reveal radiant skin and support long-term skin wellness.",
    cta: "Treatments",
    // Row 2: spans 1 column
    colClass: "lg:col-span-1",
    bg: "linear-gradient(140deg, #2B4A38 0%, #1F3A2C 100%)",
    light: true,
    accent: "rgba(194,168,120,0.35)",
  },
  {
    id: "hair-regain",
    Icon: Sprout,
    title: "Hair Regain Clinic",
    description:
      "Targeted scalp therapies and non-invasive hair restoration solutions designed to rebuild confidence naturally.",
    cta: "Book Session",
    // Row 2: spans 1 column — fixed from span-2 which was causing overflow
    colClass: "lg:col-span-1",
    bg: "linear-gradient(140deg, #3D6652 0%, #234733 100%)",
    light: true,
    accent: "rgba(245,241,232,0.25)",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #EDE8DE 0%, #F5F1E8 100%)" }}
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Divisions
            </span>
            <span className="divider-gold" />
          </motion.div>
          <motion.h2
            id="services-heading"
            {...fadeUp(0.08)}
            className="display-md"
            style={{ color: "var(--deep-green)" }}
          >
            Our Specialized Divisions
          </motion.h2>
          <motion.p
            {...fadeUp(0.16)}
            className="text-sm mt-4 leading-relaxed"
            style={{ color: "#6A6A5A" }}
          >
            Comprehensive clinical care tailored to your unique biological
            constitution.
          </motion.p>
        </div>

        {/*
          Grid fix:
            Row 1 → Panchabhoutik(span-2) + Yoga(span-1)       = 3 ✓
            Row 2 → Panchakarma(1) + Skinergy(1) + Hair(1)     = 3 ✓
          Previously Hair Regain was span-2 → 1+1+2 = 4, causing the broken layout.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              {...fadeUp(i * 0.08)}
              className={`${svc.colClass} group relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between card-lift cursor-default`}
              style={{ background: svc.bg, minHeight: "220px" }}
            >
              {/* Decorative radial blob */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${svc.accent} 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="flex flex-col gap-4 relative z-10">
                <ServiceIcon Icon={svc.Icon} light={svc.light} />
                <div>
                  <h3
                    className="font-serif text-lg font-medium mb-2"
                    style={{
                      color: svc.light ? "var(--cream)" : "var(--charcoal)",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: svc.light
                        ? "rgba(245,241,232,0.65)"
                        : "#6A6A5A",
                    }}
                  >
                    {svc.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium relative z-10"
                style={{
                  color: svc.light ? "var(--gold)" : "var(--deep-green)",
                  transition: "gap 0.25s ease",
                }}
              >
                {svc.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
