"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Layers, Wind, RefreshCw, Gem, Sprout, 
  CheckCircle2, Droplets, Heart, Sparkles, 
  ArrowRight, Activity, Thermometer, Brain, 
  Stethoscope, ShieldCheck, Microscope
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, delay, ease: [0.22, 0.68, 0, 1] },
});

const panchakarmaItems = [
  { 
    title: "Snehan", 
    desc: "Preparatory therapy using medicated oils/ghee to nourish the body.",
    benefits: ["Nourishes deep tissues", "Prepares for detox"]
  },
  { 
    title: "Abhyanga", 
    desc: "Therapeutic full-body massage using medicated Ayurvedic oils.",
    benefits: ["Improves circulation", "Relaxation", "Toxin elimination"]
  },
  { 
    title: "Swedan", 
    desc: "Therapeutic steaming and fomentation techniques for detoxification.",
    benefits: ["Muscle relief", "Pore cleansing", "Detoxification"]
  },
  { 
    title: "Shirodhara", 
    desc: "Medicated liquids poured gently over the forehead for deep mental calm.",
    benefits: ["Stress relief", "Better sleep", "Mental relaxation"]
  },
  { 
    title: "Sarvanga Dhara", 
    desc: "Lukewarm medicated oils poured gently over the whole body.",
    benefits: ["Pain management", "Skin wellness support"]
  },
  { 
    title: "Vaman", 
    desc: "Specialised therapeutic cleansing for upper body respiratory health.",
    benefits: ["Asthma support", "Skin purification"]
  },
  { 
    title: "Virechan", 
    desc: "Cleansing therapy through controlled purgation to eliminate pitta toxins.",
    benefits: ["Digestive health", "Skin conditions"]
  },
  { 
    title: "Basti", 
    desc: "Medicated oil/decoction administration for vata-related concerns.",
    benefits: ["Pain relief", "Constipation support"]
  },
  { 
    title: "Rakta Mokshan", 
    desc: "Traditional blood purification therapy for skin and pain relief.",
    benefits: ["Pimples & Skin", "Pain relief"]
  },
  { 
    title: "Nasya", 
    desc: "Nasal administration of medicines for upper body and mental clarity.",
    benefits: ["Headache relief", "Hair fall support"]
  },
];

const hairSolutions = [
  "Hair Patches for Men", "Hair Patches for Women", "Premium Hair Wigs", 
  "Chemotherapy Wigs", "Hair Bonding", "Hair Extensions", 
  "Hair Clipping", "Toppers for Women"
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section 
        className="relative flex items-center overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)",
          minHeight: "100dvh",
          paddingTop: "72px"
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image 
             src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop"
             alt="Ayurvedic Treatment Background"
             fill
             className="object-cover"
           />
        </div>
        <div className="container-xl relative z-10 text-center">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-6">
            <span className="divider-gold" />
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Our Expertise</span>
            <span className="divider-gold" />
          </motion.div>
          <motion.h1 
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 6vw, 4.8rem)", color: "var(--cream)", lineHeight: 1.1, fontWeight: 500 }}
            {...fadeUp(0.1)}
          >
            Specialized <span className="italic" style={{ color: "var(--sage)" }}>Wellness</span> Services
          </motion.h1>
          <motion.p 
            className="mt-8 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(245,241,232,0.7)" }}
            {...fadeUp(0.2)}
          >
            A balance of authentic Ayurvedic wisdom, personalized healing, and modern therapeutic understanding designed to treat the root cause of imbalance.
          </motion.p>

          {/* Floating Stats / Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
             {[
               { icon: Stethoscope, value: "15+", label: "Years Experience" },
               { icon: ShieldCheck, value: "100%", label: "Authentic Care" },
               { icon: Activity, value: "50+", label: "Specialized Therapies" },
               { icon: Heart, value: "10k+", label: "Happy Patients" },
             ].map((stat, i) => (
               <motion.div 
                 key={stat.label}
                 {...fadeUp(0.3 + i * 0.1)}
                 className="p-5 rounded-2xl flex flex-col items-center gap-2"
                 style={{ background: "rgba(245,241,232,0.05)", border: "1px solid rgba(245,241,232,0.12)", backdropFilter: "blur(8px)" }}
               >
                 <stat.icon size={20} style={{ color: "var(--gold)" }} strokeWidth={1.5} />
                 <div>
                   <p className="text-xl font-serif font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>{stat.value}</p>
                   <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(245,241,232,0.5)" }}>{stat.label}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>


      </section>

      {/* ── 2. PANCHABHOUTIK CHIKITSA ───────────────────────── */}
      <section className="section-pad" style={{ background: "var(--cream)" }} id="panchabhoutik">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Panchabhoutik Chikitsa</span>
            </motion.div>
            <motion.h2 className="display-md mb-6" style={{ color: "var(--deep-green)" }} {...fadeUp(0.1)}>
              Root-Cause Ayurvedic Healing
            </motion.h2>
            <motion.p className="text-sm leading-relaxed mb-6" style={{ color: "#5A5A4A" }} {...fadeUp(0.15)}>
              Panchabhoutik Chikitsa focuses on balancing the five natural elements: Prithvi, Jal, Agni, Vayu, and Akaash. This method, pioneered by Late Vaidya A. V. Datar Shastri, restores digestive harmony (Agni) as the foundation of wellness.
            </motion.p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {["Prithvi", "Jal", "Agni", "Vayu", "Akaash"].map((el, i) => (
                <motion.div 
                  key={el}
                  {...fadeUp(0.2 + i * 0.05)}
                  className="p-4 rounded-xl text-center flex flex-col items-center gap-2"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(194,168,120,0.2)" }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--sage-light)", color: "var(--deep-green)" }}>
                    <Layers size={14} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--deep-green)" }}>{el}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.35)} className="p-6 rounded-2xl" style={{ background: "rgba(31,58,44,0.05)", border: "1px solid rgba(31,58,44,0.1)" }}>
              <h4 className="font-serif text-lg mb-4" style={{ color: "var(--deep-green)" }}>Commonly Treated Conditions</h4>
              <div className="grid grid-cols-2 gap-y-2">
                {["Digestive Issues", "Liver Disorders", "PCOD / Infertility", "Skin Allergies", "Eczema / Psoriasis", "Premature Greying"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "#5A5A4A" }}>
                    <CheckCircle2 size={12} className="text-green-700" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div {...fadeUp(0.2)} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
              alt="Ayurvedic Herbs and Preparation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 3. YOGA THERAPY ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #F5F1E8 0%, #EDE8DE 100%)" }} id="yoga">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)} className="order-2 lg:order-1 relative aspect-[4/4] rounded-3xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop"
              alt="Yoga Therapy Session"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl nav-glass border border-white/20">
               <p className="font-serif italic text-lg leading-relaxed" style={{ color: "var(--deep-green)" }}>
                 &ldquo;Yoga Samatvam Uchyate &mdash; Yoga is the state of balance.&rdquo;
               </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Yoga Therapy</span>
            </motion.div>
            <motion.h2 className="display-md mb-6" style={{ color: "var(--deep-green)" }} {...fadeUp(0.1)}>
              Holistic Wellness Through Balance
            </motion.h2>
            <motion.p className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }} {...fadeUp(0.15)}>
              Led by Dr. Vrushali Maisekar (YCB Level 6 Certified), our programs are carefully structured to support physical recovery, hormonal balance, and emotional wellbeing.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Specialized Yoga", items: ["Yoga for PCOD", "Yoga for Menopause", "Face Yoga"] },
                { title: "Key Benefits", items: ["Hormonal Balance", "Flexibility", "Stress Reduction"] }
              ].map((box, i) => (
                <motion.div 
                  key={box.title}
                  {...fadeUp(0.2 + i * 0.1)}
                  className="p-6 rounded-2xl"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(194,168,120,0.15)" }}
                >
                  <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "var(--gold)" }}>{box.title}</h4>
                  <ul className="flex flex-col gap-3">
                    {box.items.map(item => (
                      <li key={item} className="flex items-center gap-3 text-xs" style={{ color: "#5A5A4A" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PANCHAKARMA ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }} id="panchakarma">
        <div className="container-xl relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Traditional Detox</span>
              <span className="divider-gold" />
            </motion.div>
            <motion.h2 className="display-md" style={{ color: "var(--cream)" }} {...fadeUp(0.08)}>
              Panchakarma Therapies
            </motion.h2>
            <motion.p className="text-sm mt-4" style={{ color: "rgba(245,241,232,0.6)" }} {...fadeUp(0.16)}>
              Remove toxins, restore internal balance, and improve overall wellness through Ayurveda’s most respected rejuvenation therapies.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {panchakarmaItems.map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeUp(i * 0.05)}
                className={`group p-7 rounded-2xl flex flex-col gap-5 card-lift transition-all duration-300 ${i === 9 ? "lg:col-start-2" : ""}`}
                style={{ background: "rgba(245,241,232,0.06)", border: "1px solid rgba(245,241,232,0.1)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(194,168,120,0.15)", border: "1.5px solid rgba(194,168,120,0.2)" }}>
                    <Droplets size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,232,0.3)" }}>Therapy 0{i+1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2" style={{ color: "var(--cream)", fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(245,241,232,0.6)" }}>{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.benefits.map(b => (
                      <span key={b} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50">{b}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SKINERGY ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--cream)" }} id="skinergy">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Skin & Hair Wellness</span>
            </motion.div>
            <motion.h2 className="display-md mb-6" style={{ color: "var(--deep-green)" }} {...fadeUp(0.1)}>
              Skinergy &mdash; The Soundarya Mantra
            </motion.h2>
            <motion.p className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }} {...fadeUp(0.15)}>
              Our dedicated skin and cosmetology division combining Ayurvedic therapies with modern treatment technologies for natural beauty.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
               {[
                 { Icon: Sparkles, label: "Pimple Care" },
                 { Icon: Heart, label: "Pigmentation" },
                 { Icon: Activity, label: "Under-eye Dark Circles" },
                 { Icon: Gem, label: "Skin Sagging" },
               ].map((item, i) => (
                 <motion.div 
                   key={item.label}
                   {...fadeUp(0.2 + i * 0.05)}
                   className="flex items-center gap-3 p-4 rounded-xl shadow-sm"
                   style={{ background: "#FFFFFF", border: "1px solid rgba(194,168,120,0.15)" }}
                 >
                   <item.Icon size={16} className="text-gold" />
                   <span className="text-xs font-medium" style={{ color: "var(--charcoal)" }}>{item.label}</span>
                 </motion.div>
               ))}
            </div>

            <motion.div {...fadeUp(0.3)} className="flex items-start gap-4 p-6 rounded-2xl bg-sage/5 border border-sage/10">
               <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
                 <ShieldCheck className="text-white" size={20} />
               </div>
               <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--deep-green)" }}>Specialized Product Line</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A5A4A" }}>
                    Arogya Mantra has developed specialized Ayurvedic wellness products designed to support skin and hair care naturally based on years of clinical experience.
                  </p>
               </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
             <Image 
               src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
               alt="Skin & Beauty Wellness"
               fill
               className="object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* ── 6. HAIR REGAIN ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #F5F1E8 0%, #EDE8DE 100%)" }} id="hair-regain">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
           <motion.div {...fadeUp(0.1)} className="order-2 lg:order-1 grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=400&auto=format&fit=crop"
              ].map((src, i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-i-offset" style={{ marginTop: i === 1 ? "2rem" : "0" }}>
                  <img src={src} className="w-full h-full object-cover" alt="Hair Wellness" />
                </div>
              ))}
           </motion.div>

           <div className="order-1 lg:order-2">
             <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
                <span className="divider-gold" />
                <span className="eyebrow" style={{ color: "var(--gold)" }}>Hair Regain Clinic</span>
             </motion.div>
             <motion.h2 className="display-md mb-6" style={{ color: "var(--deep-green)" }} {...fadeUp(0.1)}>
                Non-Surgical Hair Wellness
             </motion.h2>
             <motion.p className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A4A" }} {...fadeUp(0.15)}>
                Specialized non-surgical hair restoration solutions for both men and women. With 10+ years of expertise, we provide natural-looking solutions without surgery, scars, or medicine dependency.
             </motion.p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mb-10">
                {hairSolutions.map((sol, i) => (
                  <motion.div 
                    key={sol}
                    {...fadeUp(0.2 + i * 0.04)}
                    className="flex items-center gap-3 py-2 border-b border-gold/10"
                  >
                    <CheckCircle2 size={14} className="text-sage" />
                    <span className="text-sm" style={{ color: "var(--charcoal)" }}>{sol}</span>
                  </motion.div>
                ))}
             </div>

             <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-full bg-deep-green text-cream text-xs font-semibold">Natural Appearance</div>
                <div className="px-5 py-3 rounded-full border border-deep-green/20 text-deep-green text-xs font-semibold">Zero Surgery</div>
                <div className="px-5 py-3 rounded-full border border-deep-green/20 text-deep-green text-xs font-semibold">Easy Maintenance</div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* ── 7. FOOTER CTA ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--deep-green)" }}>
        <div className="container-xl text-center max-w-4xl">
           <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-6">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Book Your Visit</span>
              <span className="divider-gold" />
           </motion.div>
           <motion.h2 className="display-md mb-8" style={{ color: "var(--cream)" }} {...fadeUp(0.1)}>
              Restore Your Natural <span className="italic" style={{ color: "var(--sage)" }}>Balance</span>
           </motion.h2>
           <motion.p className="text-base max-w-2xl mx-auto mb-10" style={{ color: "rgba(245,241,232,0.6)" }} {...fadeUp(0.2)}>
              At Arogya Mantra, every healing journey is approached with compassion, attention to detail, and personalized care. Begin your path to long-term wellbeing today.
           </motion.p>
           <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-outline text-cream border-cream/20 hover:bg-white/5">
                Learn Our Story
              </Link>
           </motion.div>
        </div>
      </section>

    </div>
  );
}
