"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Layers, RefreshCw, Wind, Gem, Sprout,
  Target, ClipboardList, Leaf, Shield, TrendingUp, Brain,
  ArrowRight, Award, GraduationCap, MapPin,
} from "lucide-react";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, delay, ease: [0.22, 0.68, 0, 1] as const },
});

const expertise = [
  { Icon: Layers,    label: "Panchabhoutik Chikitsa" },
  { Icon: RefreshCw, label: "Panchakarma Therapies" },
  { Icon: Wind,      label: "Yoga Therapy" },
  { Icon: Gem,       label: "Skin Wellness" },
  { Icon: Sprout,    label: "Hair Wellness & Restoration" },
];

const philosophy = [
  { Icon: Target,        title: "Root-Cause Healing",         desc: "We look beyond symptoms to identify and address the fundamental source of imbalance." },
  { Icon: ClipboardList, title: "Personalised Plans",         desc: "Every treatment protocol is uniquely crafted for your Prakriti and current state of health." },
  { Icon: Leaf,          title: "Natural Restoration",        desc: "Harnessing the power of botanicals and time-tested Ayurvedic formulations." },
  { Icon: Shield,        title: "Preventive Healthcare",      desc: "Building resilience before illness manifests, not just treating it after." },
  { Icon: Brain,         title: "Mind-Body Balance",          desc: "Emotional wellbeing and mental clarity are integral to every treatment plan." },
  { Icon: TrendingUp,    title: "Long-Term Wellbeing",        desc: "Our goal is sustained health, not temporary relief — wellness that compounds over time." },
];

const modernPillars = [
  "Ancient Ayurvedic wisdom",
  "Therapeutic wellness practices",
  "Modern healing techniques",
  "Skin & hair wellness solutions",
  "Personalised lifestyle guidance",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "100dvh", paddingTop: "72px" }}
        aria-labelledby="about-hero-h1"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop"
            alt="Lush forest path representing Ayurvedic healing"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(31,58,44,0.92) 0%, rgba(31,58,44,0.55) 50%, rgba(31,58,44,0.25) 100%)" }}
          />
        </div>

        <div className="container-xl relative z-10 pb-20 lg:pb-28">
          <motion.div {...up(0)} className="flex items-center gap-3 mb-6">
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>About Us</span>
          </motion.div>

          <motion.h1
            id="about-hero-h1"
            {...up(0.1)}
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", fontWeight: 500, color: "var(--cream)", maxWidth: "800px" }}
          >
            Rooted in Ayurveda.<br />
            <span className="italic" style={{ color: "var(--sage)" }}>Guided by Holistic Healing.</span>
          </motion.h1>

          <motion.p {...up(0.2)} className="mt-6 text-base leading-relaxed max-w-xl" style={{ color: "rgba(245,241,232,0.75)" }}>
            Built on the timeless wisdom of Ayurveda and supported by modern wellness practices, we are dedicated to helping individuals achieve healthier, happier, and more complete lives through personalised care.
          </motion.p>

          {/* Location chip */}
          <motion.div {...up(0.3)} className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(245,241,232,0.12)", border: "1px solid rgba(245,241,232,0.2)", color: "rgba(245,241,232,0.7)" }}>
            <MapPin size={14} />
            <span className="text-sm">Hadapsar, Pune, Maharashtra</span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CLINIC STORY ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div {...up(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Story</span>
            </motion.div>
            <motion.h2 {...up(0.08)} className="display-md mb-6" style={{ color: "var(--deep-green)" }}>
              A Trusted Destination for Authentic Wellness
            </motion.h2>
            <motion.p {...up(0.12)} className="text-sm leading-relaxed mb-4" style={{ color: "#5A5A4A" }}>
              Located in Hadapsar, Arogya Mantra has become a trusted destination for Ayurvedic wellness, Panchakarma therapies, skin and hair wellness, Yoga Therapy, and holistic healing solutions. Every treatment is thoughtfully designed around the individual, focusing not only on symptoms but on understanding and addressing the root cause of imbalance.
            </motion.p>
            <motion.p {...up(0.16)} className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }}>
              The clinic&apos;s calm environment, thoughtful care, and patient-focused approach make it a trusted wellness destination for individuals seeking authentic Ayurvedic solutions.
            </motion.p>

            {/* Philosophy quote */}
            <motion.blockquote
              {...up(0.2)}
              className="relative p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
            >
              <div className="divider-gold mb-4" />
              <p className="font-serif text-lg leading-relaxed italic" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>
                &ldquo;True wellness begins when the body, mind, and soul are treated together.&rdquo;
              </p>
              <p className="text-xs mt-3" style={{ color: "var(--gold)" }}>— The Arogya Mantra Philosophy</p>
            </motion.blockquote>
          </div>

          {/* Image grid */}
          <motion.div {...up(0.15)} className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-[240px]">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop" alt="Ayurvedic therapy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop" alt="Herbal medicine preparation" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-12">
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop" alt="Botanical herbs" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="rounded-2xl overflow-hidden h-[240px]">
                <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=600&auto=format&fit=crop" alt="Yoga therapy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. MEET THE DOCTOR ───────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(180deg, #EDE8DE 0%, #F5F1E8 100%)" }}
        aria-labelledby="doctor-heading"
      >
        <div className="container-xl">
          <div className="text-center mb-14">
            <motion.div {...up(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Founder</span>
              <span className="divider-gold" />
            </motion.div>
            <motion.h2 id="doctor-heading" {...up(0.08)} className="display-md" style={{ color: "var(--deep-green)" }}>
              Meet Dr. Vrushali Maisekar
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Doctor card */}
            <motion.div {...up(0.1)} className="lg:col-span-2">
              {/* Photo panel */}
              <div className="rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
                <img
                  src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Vrushali Maisekar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(31,58,44,0.85) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-xl font-medium" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>
                    Dr. Vrushali Maisekar
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>BAMS, MD (Ayurveda)</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { Icon: GraduationCap, label: "BAMS + MD Ayurveda" },
                  { Icon: Award,         label: "Award-winning Presenter" },
                  { Icon: MapPin,        label: "KEM Hospital, Pune" },
                  { Icon: TrendingUp,    label: "15+ Years Practice" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 p-3 rounded-xl text-xs"
                    style={{ background: "rgba(31,58,44,0.06)", border: "1px solid rgba(194,168,120,0.2)" }}
                  >
                    <Icon size={14} strokeWidth={1.6} style={{ color: "var(--deep-green)", flexShrink: 0 }} />
                    <span style={{ color: "#5A5A4A" }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bio + Expertise */}
            <motion.div {...up(0.15)} className="lg:col-span-3 flex flex-col gap-6">
              <p className="text-sm leading-relaxed" style={{ color: "#5A5A4A" }}>
                Dr. Vrushali Kailash Maisekar is an experienced Ayurvedic practitioner known for her dedication to holistic wellness and patient-centered healing. With a Bachelor&apos;s degree in Ayurvedic Medicine and years of clinical expertise, she has trained under renowned Ayurvedic experts <strong style={{ color: "var(--deep-green)" }}>Late A. V. Datar Shastri</strong> and <strong style={{ color: "var(--deep-green)" }}>Dr. Vivek Haldavnekar</strong>.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#5A5A4A" }}>
                She has worked at the prestigious KEM Hospital Pune in the skin department and has actively contributed to Ayurveda through national and international lectures, wellness education, and award-winning presentations. Her approach combines traditional Ayurvedic knowledge with modern therapeutic understanding to create personalised healing experiences for every patient.
              </p>

              {/* Expertise */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
              >
                <p className="eyebrow text-xs mb-5" style={{ color: "var(--gold)" }}>Areas of Expertise</p>
                <div className="flex flex-col gap-3">
                  {expertise.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(163,177,138,0.15)", border: "1px solid rgba(163,177,138,0.25)" }}
                      >
                        <Icon size={15} strokeWidth={1.6} style={{ color: "var(--sage)" }} />
                      </div>
                      <span className="text-sm" style={{ color: "rgba(245,241,232,0.8)" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. HEALING PHILOSOPHY ────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
        aria-labelledby="philosophy-heading"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)" }} />

        <div className="container-xl relative z-10">
          <div className="text-center mb-14">
            <motion.div {...up(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Philosophy</span>
              <span className="divider-gold" />
            </motion.div>
            <motion.h2 id="philosophy-heading" {...up(0.08)} className="display-md italic" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>
              Our Healing Philosophy
            </motion.h2>
            <motion.p {...up(0.14)} className="text-sm mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(245,241,232,0.6)" }}>
              Wellness viewed as a balance between the physical body, emotional health, lifestyle, and natural healing processes.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {philosophy.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...up(i * 0.07)}
                className="group rounded-2xl p-6 flex flex-col gap-4 card-lift"
                style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.09)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(245,241,232,0.09)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(194,168,120,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(245,241,232,0.05)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,241,232,0.09)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(194,168,120,0.13)", border: "1.5px solid rgba(194,168,120,0.22)" }}>
                  <Icon size={18} strokeWidth={1.6} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,241,232,0.55)" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PERSONALISED CARE ─────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div {...up(0.05)} className="relative rounded-2xl overflow-hidden" style={{ height: "480px" }}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
              alt="Personalised Ayurvedic consultation"
              className="w-full h-full object-cover"
            />
            {/* Floating stat */}
            <div className="float-badge absolute bottom-6 left-6 p-4">
              <p className="eyebrow" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>Patient Satisfaction</p>
              <p className="font-serif text-2xl font-semibold mt-0.5" style={{ color: "var(--deep-green)", fontFamily: "var(--font-serif)" }}>98%</p>
              <p className="text-xs" style={{ color: "#7A7A6A" }}>Recommend us to family</p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div {...up(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Personalised Care</span>
            </motion.div>
            <motion.h2 {...up(0.08)} className="display-md mb-6" style={{ color: "var(--deep-green)" }}>
              Attention to Detail in Every Step
            </motion.h2>
            <motion.p {...up(0.12)} className="text-sm leading-relaxed mb-4" style={{ color: "#5A5A4A" }}>
              Every individual is unique, and so is their healing journey. At Arogya Mantra, each patient receives dedicated attention, detailed consultation, and customised therapies tailored to their specific needs.
            </motion.p>
            <motion.p {...up(0.16)} className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }}>
              From wellness assessments and Ayurvedic diagnosis to advanced therapeutic care, every step is designed to create a supportive and comfortable healing experience.
            </motion.p>

            {/* Steps */}
            {["Detailed Wellness Assessment", "Ayurvedic Constitution Analysis", "Customised Treatment Protocol", "Ongoing Progress Monitoring"].map((step, i) => (
              <motion.div
                key={step}
                {...up(0.2 + i * 0.06)}
                className="flex items-center gap-4 py-3"
                style={{ borderBottom: i < 3 ? "1px solid rgba(194,168,120,0.18)" : "none" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: "var(--deep-green)", color: "var(--cream)" }}
                >
                  {i + 1}
                </div>
                <span className="text-sm" style={{ color: "#5A5A4A" }}>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MODERN WELLNESS ───────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #EDE8DE 0%, #F5F1E8 100%)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div {...up(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Approach</span>
            </motion.div>
            <motion.h2 {...up(0.08)} className="display-md mb-6" style={{ color: "var(--deep-green)" }}>
              A Modern Wellness Experience Inspired by Ayurveda
            </motion.h2>
            <motion.p {...up(0.12)} className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }}>
              The goal is not just temporary relief, but meaningful long-term wellness that supports healthier living naturally. By combining ancient Ayurvedic principles with modern wellness understanding, we create treatment experiences that are both authentic and practical for today&apos;s lifestyle.
            </motion.p>

            {/* Pillars */}
            <div className="flex flex-col gap-3">
              {modernPillars.map((pillar, i) => (
                <motion.div
                  key={pillar}
                  {...up(0.16 + i * 0.06)}
                  className="flex items-center gap-3 p-4 rounded-xl card-lift"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(194,168,120,0.15)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "#5A5A4A" }}>{pillar}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div {...up(0.1)} className="relative rounded-2xl overflow-hidden" style={{ height: "480px" }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop"
              alt="Ayurvedic wellness and nature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(31,58,44,0.4) 0%, transparent 60%)" }} />
          </motion.div>
        </div>
      </section>

      {/* ── 7. VISION ────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, var(--sage) 0%, transparent 50%), radial-gradient(circle at 70% 50%, var(--gold) 0%, transparent 50%)" }} />
        <div className="container-xl max-w-3xl text-center relative z-10">
          <motion.div {...up(0)} className="flex items-center justify-center gap-3 mb-6">
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Vision</span>
            <span className="divider-gold" />
          </motion.div>
          <motion.p
            {...up(0.1)}
            className="font-serif italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--cream)", lineHeight: 1.45 }}
          >
            &ldquo;To create a wellness ecosystem where authentic Ayurveda, holistic healing, and compassionate care come together to improve lives naturally.&rdquo;
          </motion.p>
          <motion.div {...up(0.2)} className="mt-6 divider-gold mx-auto" />
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container-xl max-w-4xl text-center">
          <motion.div {...up(0)} className="flex items-center justify-center gap-3 mb-4">
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Begin Your Journey</span>
            <span className="divider-gold" />
          </motion.div>
          <motion.h2 {...up(0.08)} className="display-md mb-6" style={{ color: "var(--deep-green)" }}>
            Start Your Wellness Journey Today
          </motion.h2>
          <motion.p {...up(0.14)} className="text-sm leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "#5A5A4A" }}>
            Whether you are seeking holistic healing, stress relief, skin wellness, hair care solutions, Panchakarma therapies, or personalised Ayurvedic guidance — Arogya Mantra is committed to supporting your wellness journey with care, expertise, and authenticity.
          </motion.p>
          <motion.div {...up(0.2)} className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn btn-primary">
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link href="/#services" className="btn btn-outline">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
