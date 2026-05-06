"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ShoppingBag, ArrowRight } from "lucide-react";
import { products, categories } from "@/data/products";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 0.68, 0, 1] as const },
});

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--cream)" }}>
      
      {/* ── 1. HEADER ────────────────────────────────────────── */}
      <section className="container-xl mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div {...up(0)} className="flex items-center gap-3 mb-4">
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Wellness Marketplace</span>
            </motion.div>
            <motion.h1 
              className="display-md mb-4" 
              style={{ color: "var(--deep-green)" }}
              {...up(0.1)}
            >
              Healing <span className="italic" style={{ color: "var(--sage)" }}>Marketplace</span>
            </motion.h1>
            <motion.p 
              className="text-sm leading-relaxed" 
              style={{ color: "#5A5A4A" }}
              {...up(0.15)}
            >
              Authentic Ayurvedic wellness products thoughtfully crafted to support holistic healing, skin wellness, hair care, and everyday self-care rituals.
            </motion.p>
          </div>

          {/* Search */}
          <motion.div 
            {...up(0.2)}
            className="relative w-full md:w-80 group"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold transition-transform group-focus-within:scale-110" size={18} />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full text-sm outline-none transition-all duration-300"
              style={{ background: "#FFFFFF", border: "1px solid rgba(194,168,120,0.2)", color: "var(--charcoal)" }}
            />
          </motion.div>
        </div>
      </section>

      <div className="container-xl grid lg:grid-cols-4 gap-12">
        
        {/* ── 2. FILTERS (Sidebar) ────────────────────────────── */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32">
             <div className="flex items-center gap-2 mb-6">
                <Filter size={16} className="text-gold" />
                <h3 className="font-serif text-lg" style={{ color: "var(--deep-green)", fontFamily: "var(--font-serif)" }}>Categories</h3>
             </div>
             <div className="flex flex-col gap-2">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`text-left text-sm py-2 px-4 rounded-xl transition-all duration-300 ${activeCategory === cat ? "font-semibold translate-x-2" : "opacity-60 hover:opacity-100"}`}
                   style={{ 
                     color: activeCategory === cat ? "var(--deep-green)" : "#5A5A4A",
                     background: activeCategory === cat ? "rgba(31,58,44,0.05)" : "transparent"
                   }}
                 >
                   {cat}
                 </button>
               ))}
             </div>

             {/* Badge */}
             <div className="mt-12 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #1F3A2C 0%, #234733 100%)" }}>
               <p className="eyebrow text-[0.6rem] mb-2" style={{ color: "var(--gold)" }}>Why Choose Us</p>
               <h4 className="font-serif text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>Authentic Formulations</h4>
               <ul className="text-[10px] text-white/60 flex flex-col gap-2">
                 <li>• Doctor-Guided Wellness</li>
                 <li>• Holistic Healing Approach</li>
                 <li>• Personalized Care Focus</li>
               </ul>
             </div>
          </div>
        </aside>

        {/* ── 3. PRODUCT GRID ─────────────────────────────────── */}
        <main className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <Link href={`/shop/${product.id}`} className="block h-full flex flex-col">
                      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-deep-green shadow-lg">
                             <ArrowRight size={18} />
                           </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/90 text-deep-green">
                             {product.category}
                           </span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-serif text-base leading-tight group-hover:text-gold transition-colors" style={{ color: "var(--deep-green)", fontFamily: "var(--font-serif)" }}>
                          {product.name}
                        </h3>
                        <p className="text-[11px] opacity-60 leading-tight mb-2 line-clamp-1">{product.subtitle}</p>
                        <div className="mt-auto flex items-center justify-between">
                           <p className="font-bold text-sm" style={{ color: "var(--deep-green)" }}>
                             ₹{product.price.toLocaleString()}
                           </p>
                           <span className="text-[10px] font-semibold flex items-center gap-1 text-gold">
                             View Details <ArrowRight size={10} />
                           </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
               <ShoppingBag size={48} className="mx-auto text-gold mb-4 opacity-20" />
               <p className="text-lg opacity-40">No products found matches your search.</p>
               <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 text-sm text-gold underline underline-offset-4">Clear all filters</button>
            </div>
          )}
        </main>
      </div>

    </div>
  );
}
