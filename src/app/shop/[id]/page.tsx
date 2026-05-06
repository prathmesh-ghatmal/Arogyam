"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, ShoppingCart, CheckCircle2, 
  Sparkles, Leaf, ShieldCheck, Heart 
} from "lucide-react";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.68, 0, 1] as const },
});

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

 const relatedProducts = products
  .filter((p) => p.id !== product.id)
  .sort((a, b) => {
    if (a.category === product.category && b.category !== product.category) return -1;
    if (a.category !== product.category && b.category === product.category) return 1;
    return a.name.localeCompare(b.name);
  })
  .slice(0, 4);

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--cream)" }}>
      <div className="container-xl">
        
        {/* Back link */}
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-xs font-medium mb-12 opacity-60 hover:opacity-100 hover:text-gold transition-all"
        >
          <ArrowLeft size={14} /> Back to Marketplace
        </Link>

        {/* ── MAIN PRODUCT INFO ─────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6">
               <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/90 text-deep-green backdrop-blur shadow-sm">
                 {product.category}
               </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div>
              <motion.h1 
                {...fadeUp(0)}
                className="display-md mb-2" 
                style={{ color: "var(--deep-green)" }}
              >
                {product.name}
              </motion.h1>
              <motion.p {...fadeUp(0.05)} className="font-serif text-lg italic opacity-60" style={{ fontFamily: "var(--font-serif)" }}>
                {product.subtitle}
              </motion.p>
              
              <motion.div {...fadeUp(0.1)} className="mt-6 flex items-center gap-4">
                <p className="text-3xl font-bold" style={{ color: "var(--deep-green)" }}>
                  ₹{product.price.toLocaleString()}
                </p>
                <div className="h-8 w-px bg-gold/20" />
                <span className="text-xs text-sage font-medium bg-sage/10 px-3 py-1 rounded-full">In Stock</span>
              </motion.div>
            </div>

            <motion.p {...fadeUp(0.15)} className="text-sm leading-relaxed" style={{ color: "#5A5A4A" }}>
              {product.description}
            </motion.p>

            {/* Benefits */}
            <motion.div {...fadeUp(0.2)}>
               <h3 className="font-serif text-base mb-4" style={{ color: "var(--deep-green)" }}>Wellness Benefits</h3>
               <div className="grid sm:grid-cols-2 gap-3">
                 {product.benefits.map((benefit) => (
                   <div key={benefit} className="flex items-start gap-3">
                     <CheckCircle2 size={16} className="text-sage mt-0.5 shrink-0" />
                     <span className="text-xs leading-relaxed" style={{ color: "#5A5A4A" }}>{benefit}</span>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Ideal For */}
            <motion.div {...fadeUp(0.25)}>
               <h3 className="font-serif text-base mb-4" style={{ color: "var(--deep-green)" }}>Ideal For</h3>
               <div className="flex flex-wrap gap-2">
                 {product.idealFor.map((tag) => (
                   <span key={tag} className="text-[10px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-white border border-gold/10 shadow-sm">
                     {tag}
                   </span>
                 ))}
               </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.3)} className="pt-4 flex flex-col sm:flex-row gap-4">
               <button className="btn btn-primary flex-1 justify-center gap-2 py-4">
                 <ShoppingCart size={18} />
                 Buy Now
               </button>
               {product.category.includes("Hair") && (
                 <Link href="/services#hair-regain" className="btn btn-outline justify-center py-4">
                   Book Consultation
                 </Link>
               )}
            </motion.div>

            {/* Trust factors */}
            <motion.div 
              {...fadeUp(0.35)}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gold/10"
            >
               {[
                 { Icon: Leaf, label: "Natural Ingredients" },
                 { Icon: ShieldCheck, label: "Doctor Guided" },
                 { Icon: Heart, label: "Clinically Proven" },
               ].map((item) => (
                 <div key={item.label} className="text-center flex flex-col items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                     <item.Icon size={14} />
                   </div>
                   <span className="text-[9px] font-bold uppercase tracking-tighter opacity-60 leading-tight">{item.label}</span>
                 </div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ──────────────────────────────── */}
        <section className="mt-32">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="divider-gold" />
                <span className="eyebrow" style={{ color: "var(--gold)" }}>Explore More</span>
              </div>
              <h2 className="display-sm" style={{ color: "var(--deep-green)" }}>You May Also Like</h2>
            </div>
            <Link href="/shop" className="text-sm text-gold hover:underline underline-offset-4">View All Products</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p, i) => (
              <motion.div 
                key={p.id}
                {...fadeUp(0.1 + i * 0.05)}
                className="group"
              >
                <Link href={`/shop/${p.id}`} className="block">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image 
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-serif text-sm font-medium mb-1 group-hover:text-gold transition-colors" style={{ color: "var(--deep-green)" }}>{p.name}</h4>
                  <p className="text-xs font-bold" style={{ color: "var(--deep-green)" }}>₹{p.price.toLocaleString()}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
