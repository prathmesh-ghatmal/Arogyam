"use client";

import { motion } from "framer-motion";
import { Droplets, Waves, Heart, Sparkles, ShoppingCart, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: [0.22, 0.68, 0, 1] },
});

const products = [
  {
    id: "abhyanga-oil",
    Icon: Droplets,
    iconColor: "#5D8A6A",
    name: "Arogya Mantra Abhyanga Oil",
    description: "Revitalizing full-body massage oil with 24 active herbs.",
    price: "₹850",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    bg: "linear-gradient(150deg, #e8ede0 0%, #c9d8b6 100%)",
    badgeBg: "rgba(31,58,44,0.1)",
    badgeColor: "var(--deep-green)",
  },
  {
    id: "hair-oil",
    Icon: Waves,
    iconColor: "#3D7A8A",
    name: "Arogya Mantra Hair Oil",
    description: "Concentrated Brahmi and Bhringraj extract for root repair.",
    price: "₹620",
    rating: 4.8,
    reviews: 96,
    badge: "New Arrival",
    bg: "linear-gradient(150deg, #dce8f0 0%, #b6ccd8 100%)",
    badgeBg: "rgba(35,71,51,0.1)",
    badgeColor: "var(--forest-green)",
  },
  {
    id: "chyawanprash",
    Icon: Heart,
    iconColor: "#8B6914",
    name: "Arogya Mantra Chyawanprash",
    description: "Immunity-boosting blend with organic Amla and forest honey.",
    price: "₹1,200",
    rating: 4.9,
    reviews: 215,
    badge: "Top Rated",
    bg: "linear-gradient(150deg, #f0e8d0 0%, #dcc4a0 100%)",
    badgeBg: "rgba(194,168,120,0.18)",
    badgeColor: "#8B6914",
  },
  {
    id: "natural-soaps",
    Icon: Sparkles,
    iconColor: "#5A6A4A",
    name: "Natural Soaps",
    description: "Cold-processed botanical soaps for healthy glowing skin.",
    price: "₹220",
    rating: 4.7,
    reviews: 74,
    badge: "Organic",
    bg: "linear-gradient(150deg, #e8e0d8 0%, #cdc0b0 100%)",
    badgeBg: "rgba(61,122,85,0.1)",
    badgeColor: "#3D7A55",
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          strokeWidth={1.5}
          fill={s <= Math.round(rating) ? "var(--gold)" : "none"}
          style={{ color: s <= Math.round(rating) ? "var(--gold)" : "#C8C0AA" }}
        />
      ))}
      <span className="text-xs ml-0.5" style={{ color: "#8A8A7A" }}>
        {rating} ({reviews})
      </span>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="section-pad"
      style={{ background: "var(--cream)" }}
      aria-labelledby="products-heading"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              {...fadeUp(0)}
              className="flex items-center gap-3 mb-4"
            >
              <span className="divider-gold" />
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                Apothecary
              </span>
            </motion.div>
            <motion.h2
              id="products-heading"
              {...fadeUp(0.08)}
              className="display-md"
              style={{ color: "var(--deep-green)" }}
            >
              Bestsellers
            </motion.h2>
            <motion.p
              {...fadeUp(0.16)}
              className="text-sm mt-3"
              style={{ color: "#6A6A5A" }}
            >
              Clinically tested formulations from our in-house pharmacy.
            </motion.p>
          </div>
          <motion.a
            {...fadeUp(0.08)}
            href="#"
            className="btn btn-outline self-start sm:self-auto flex-shrink-0"
          >
            Explore All Products
          </motion.a>
        </div>

        {/* Product cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              {...fadeUp(i * 0.1)}
              className="group card-lift rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 2px 16px rgba(31,58,44,0.07)",
              }}
            >
              {/* Visual area */}
              <div
                className="h-52 flex items-center justify-center relative overflow-hidden"
                style={{ background: product.bg }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(6px)",
                      border: "1.5px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    <product.Icon
                      size={28}
                      strokeWidth={1.4}
                      style={{ color: product.iconColor }}
                    />
                  </div>
                  <span
                    className="tag-pill text-xs"
                    style={{
                      background: product.badgeBg,
                      color: product.badgeColor,
                      border: `1px solid ${product.badgeColor}30`,
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3
                    className="text-sm font-medium leading-snug"
                    style={{
                      color: "var(--charcoal)",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mt-1.5"
                    style={{ color: "#7A7A6A" }}
                  >
                    {product.description}
                  </p>
                </div>

                <StarRating rating={product.rating} reviews={product.reviews} />

                <div
                  className="flex items-center justify-between mt-auto pt-3"
                  style={{ borderTop: "1px solid rgba(194,168,120,0.2)" }}
                >
                  <p
                    className="font-serif text-xl font-semibold"
                    style={{
                      color: "var(--deep-green)",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {product.price}
                  </p>
                  <button
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: "var(--deep-green)", color: "var(--cream)" }}
                    aria-label={`Add ${product.name} to cart`}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background =
                        "var(--forest-green)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background =
                        "var(--deep-green)")
                    }
                  >
                    <ShoppingCart size={15} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
