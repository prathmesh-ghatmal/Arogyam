export interface Product {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "abhyanga-oil",
    name: "Arogya Mantra Abhyanga Oil",
    category: "Ayurvedic Oils",
    subtitle: "Traditional Ayurvedic Body Wellness Oil",
    description: "A revitalizing Ayurvedic massage oil inspired by traditional Abhyanga therapies. Crafted to support relaxation, nourishment, and overall body wellness.",
    benefits: [
      "Supports relaxation",
      "Nourishes the skin",
      "Helps improve body wellness routines",
      "Promotes a calming self-care experience"
    ],
    idealFor: [
      "Daily wellness massage",
      "Stress relief support",
      "Ayurvedic body care rituals"
    ],
    price: 850,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hair-oil",
    name: "Arogya Mantra Hair Oil",
    category: "Hair Wellness",
    subtitle: "Ayurvedic Hair Wellness Oil",
    description: "A nourishing Ayurvedic hair oil designed to support healthier-looking hair and scalp wellness naturally.",
    benefits: [
      "Supports scalp nourishment",
      "Helps improve hair wellness",
      "Promotes healthier-looking hair",
      "Supports regular hair care routines"
    ],
    idealFor: [
      "Hair nourishment",
      "Dry scalp support",
      "Daily scalp care"
    ],
    price: 620,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "natural-soaps",
    name: "Arogya Mantra Natural Soaps",
    category: "Skin Wellness",
    subtitle: "Gentle Ayurvedic Skin Cleansing",
    description: "Natural wellness soaps crafted to provide a refreshing cleansing experience while supporting healthy skin wellness.",
    benefits: [
      "Gentle skin cleansing",
      "Refreshing bathing experience",
      "Supports skin wellness",
      "Suitable for regular use"
    ],
    idealFor: [
      "Daily bathing",
      "Natural skin care",
      "Wellness routines"
    ],
    price: 220,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "murabba",
    name: "Arogya Mantra Murabba",
    category: "Internal Wellness",
    subtitle: "Traditional Wellness Preserve",
    description: "Prepared using traditional wellness-inspired methods designed to support overall health and vitality as part of a balanced lifestyle.",
    benefits: [
      "Supports daily wellness",
      "Traditional nourishment support",
      "Wellness-focused formulation"
    ],
    idealFor: [
      "Daily wellness routines",
      "Nutritional support",
      "Holistic wellness care"
    ],
    price: 450,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "chyawanprash",
    name: "Arogya Mantra Chyawanprash",
    category: "Internal Wellness",
    subtitle: "Ayurvedic Immunity & Wellness Support",
    description: "A traditional Ayurvedic formulation created to support immunity, vitality, and overall wellness naturally.",
    benefits: [
      "Supports immunity",
      "Helps maintain energy levels",
      "Promotes overall wellbeing",
      "Ayurvedic nourishment support"
    ],
    idealFor: [
      "Daily immunity care",
      "Wellness routines",
      "Family wellness support"
    ],
    price: 1200,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hair-care-shampoo",
    name: "Arogya Mantra Hair Care Shampoo",
    category: "Hair Care Solutions",
    subtitle: "Daily Ayurvedic Hair Care",
    description: "A gentle Ayurvedic shampoo designed to support scalp wellness and maintain healthy hair care routines.",
    benefits: [
      "Gentle scalp cleansing",
      "Supports healthier hair",
      "Maintains scalp freshness",
      "Suitable for regular use"
    ],
    idealFor: [
      "Daily hair care",
      "Scalp wellness",
      "Regular cleansing"
    ],
    price: 580,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "anti-dandruff-shampoo",
    name: "Arogya Mantra Anti-Dandruff Shampoo",
    category: "Hair Care Solutions",
    subtitle: "Ayurvedic Scalp Wellness Solution",
    description: "Specially formulated to support scalp cleanliness and assist in managing dandruff concerns naturally.",
    benefits: [
      "Supports scalp wellness",
      "Helps manage dandruff",
      "Refreshes scalp and hair",
      "Promotes healthy hair care routines"
    ],
    idealFor: [
      "Dandruff management",
      "Scalp wellness",
      "Hair cleansing"
    ],
    price: 640,
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hair-colour",
    name: "Arogya Mantra Hair Colour",
    category: "Hair Care Solutions",
    subtitle: "Natural-Looking Hair Colour Care",
    description: "An Ayurvedic-inspired hair colour solution designed to provide a smooth, natural-looking appearance.",
    benefits: [
      "Natural-looking finish",
      "Smooth application",
      "Hair appearance enhancement"
    ],
    idealFor: [
      "Hair colouring",
      "Grey hair coverage",
      "Grooming routines"
    ],
    price: 390,
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "specialized-hair-wigs",
    name: "Hair Wigs for Cancer Patients & Alopecia",
    category: "Specialized Hair Support",
    subtitle: "Personalized Hair Wellness Solutions",
    description: "Thoughtfully designed hair wigs and wellness solutions created for individuals experiencing hair loss due to alopecia, chemotherapy, or other hair-related conditions. Each solution is selected with comfort, confidence, and natural appearance in mind.",
    benefits: [
      "Natural-looking appearance",
      "Comfortable fit",
      "Lightweight solutions",
      "Personalized consultation",
      "Non-surgical approach"
    ],
    idealFor: [
      "Alopecia",
      "Chemotherapy recovery",
      "Hair thinning support"
    ],
    price: 14500,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
  }
];

export const categories = [
  "All",
  "Ayurvedic Oils",
  "Hair Wellness",
  "Skin Wellness",
  "Herbal Cleansers",
  "Internal Wellness",
  "Hair Care Solutions",
  "Specialized Hair Support"
];
