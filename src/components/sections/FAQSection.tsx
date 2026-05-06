"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    q: "What can I expect from the first consultation?",
    a: "Our consultations include a detailed wellness assessment, Prakriti (constitution) analysis, and personalized treatment planning. The session typically lasts 45–60 minutes with our Ayurvedic physician.",
  },
  {
    id: "faq-2",
    q: "Are Ayurvedic treatments safe alongside modern medicine?",
    a: "Yes. Treatments are personalized carefully and guided by experienced Ayurvedic practitioners. We always review your existing medications and conditions to ensure safe, integrative care.",
  },
  {
    id: "faq-3",
    q: "How soon will I see results?",
    a: "Results vary depending on the condition, lifestyle, and consistency of treatment. Many patients report positive changes within 2–4 weeks, while deeper chronic conditions may require 3–6 months of dedicated care.",
  },
  {
    id: "faq-4",
    q: "Is it safe to use Ayurvedic products with sensitive skin?",
    a: "Yes, our botanical formulations are cold-processed and gentle. We conduct a thorough skin constitution assessment before recommending skincare products to ensure compatibility.",
  },
  {
    id: "faq-5",
    q: "How long do Hair Regain treatments last?",
    a: "Hair regain results depend on the underlying cause, lifestyle factors, and consistent treatment adherence. Most clients see visible results in 8–12 weeks with our targeted protocol.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      className="section-pad"
      style={{ background: "var(--cream)" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-xl max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>FAQs</span>
            <span className="divider-gold" />
          </motion.div>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="display-md"
            style={{ color: "var(--deep-green)" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm mt-4"
            style={{ color: "#6A6A5A" }}
          >
            Understanding your path to wellness.
          </motion.p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="accordion-item"
              >
                <button
                  id={`${faq.id}-btn`}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 group"
                >
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: isOpen ? "var(--deep-green)" : "var(--charcoal)" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-250"
                    style={{
                      background: isOpen ? "var(--deep-green)" : "rgba(31,58,44,0.07)",
                      color: isOpen ? "var(--cream)" : "var(--deep-green)",
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`${faq.id}-panel`}
                      role="region"
                      aria-labelledby={`${faq.id}-btn`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-sm leading-relaxed pb-5"
                        style={{ color: "#6A6A5A" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
        >
          <p className="font-serif text-xl font-medium mb-2" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>
            Still have questions?
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(245,241,232,0.65)" }}>
            Our team is here to guide you on your wellness journey.
          </p>
          <a href="#contact" className="btn btn-ghost">
            Book a Free Consultation Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
