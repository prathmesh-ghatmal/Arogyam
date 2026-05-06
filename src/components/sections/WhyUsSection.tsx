"use client";

import { motion } from "framer-motion";
import { FlaskConical, UserCheck, Leaf, Stethoscope } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: [0.22, 0.68, 0, 1] },
});

const features = [
  {
    Icon: FlaskConical,
    title: "Scientific Ayurveda",
    description:
      "We bridge the gap between ancient texts and modern diagnostic methods for validated, measurable results.",
  },
  {
    Icon: UserCheck,
    title: "Personalized Care",
    description:
      "Your treatment is unique to your Prakriti (constitution). No one-size-fits-all solutions — ever.",
  },
  {
    Icon: Leaf,
    title: "Ethical Sourcing",
    description:
      "All medicines are prepared in-house from sustainably sourced organic botanicals with full traceability.",
  },
  {
    Icon: Stethoscope,
    title: "Doctor Founded Clinic",
    description:
      "Led by experienced Ayurvedic practitioner Dr. Vrushali Maisekar with 15+ years of clinical expertise.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
      aria-labelledby="whyus-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)",
          transform: "translate(40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Why Arogya Mantra
            </span>
            <span className="divider-gold" />
          </motion.div>
          <motion.h2
            id="whyus-heading"
            {...fadeUp(0.08)}
            className="display-md italic"
            style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}
          >
            Root-Cause Healing, Redefined.
          </motion.h2>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.1)}
              className="group relative rounded-2xl p-7 flex flex-col gap-5 card-lift"
              style={{
                background: "rgba(245,241,232,0.06)",
                border: "1px solid rgba(245,241,232,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(245,241,232,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(194,168,120,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(245,241,232,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(245,241,232,0.1)";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(194,168,120,0.15)",
                  border: "1.5px solid rgba(194,168,120,0.25)",
                }}
              >
                <Icon
                  size={19}
                  strokeWidth={1.6}
                  style={{ color: "var(--gold)" }}
                />
              </div>

              <div>
                <h3
                  className="font-serif text-base font-medium mb-2"
                  style={{
                    color: "var(--cream)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,241,232,0.6)" }}
                >
                  {description}
                </p>
              </div>

              {/* Gold accent bottom line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--gold), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Founder callout */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{
            background: "rgba(245,241,232,0.06)",
            border: "1px solid rgba(194,168,120,0.2)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(163,177,138,0.18)",
              border: "2px solid rgba(163,177,138,0.3)",
            }}
          >
            <Stethoscope
              size={24}
              strokeWidth={1.5}
              style={{ color: "var(--sage)" }}
            />
          </div>
          <div>
            <p
              className="eyebrow mb-1"
              style={{ color: "var(--gold)", fontSize: "0.6rem" }}
            >
              Founder &amp; Chief Physician
            </p>
            <p
              className="font-serif text-xl font-medium"
              style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}
            >
              Dr. Vrushali Maisekar
            </p>
            <p
              className="text-sm mt-1 leading-relaxed"
              style={{ color: "rgba(245,241,232,0.6)" }}
            >
              BAMS, MD (Ayurveda) · 15+ Years of Clinical Excellence ·
              Specialised in Panchakarma &amp; Integrative Wellness
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
