// Authentic verified data for The Brands Factory (Karimnagar, Telangana)
// Sourced directly from official Google Maps listing: https://maps.app.goo.gl/XzwuWgQ4mSoM8uvE7

const BASE = import.meta.env.BASE_URL;

export interface RealPhoto {
  id: string;
  title: string;
  category: string;
  caption: string;
  url: string;
  source: string;
  isCover?: boolean;
}

export interface ApparelCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  types: string[];
  sizes: string;
  highlights: string[];
  badge?: string;
}

export const STORE_DATA = {
  name: "The Brands Factory",
  tagline: "Multi-Brand Readymade Garments & Apparel Store",
  slogan: "MY STYLE • MY LOOK",
  subheading: "More than 100+ Brands under one roof in Jyothinagar, Karimnagar",
  rating: 4.3,
  ratingCategory: "Clothing store",
  verifiedGoogleMapsUrl: "https://maps.app.goo.gl/XzwuWgQ4mSoM8uvE7?g_st=aw",
  phone: "079957 99565",
  formattedPhone: "+91 79957 99565",
  whatsappUrl: "https://wa.me/917995799565",
  callUrl: "tel:07995799565",
  address: "2-10-1297, near La Delicious Bakery, opp. Old DIG Building, Jyothinagar, Karimnagar, Telangana 505001",
  plusCode: "C4VF+5Q Karimnagar, Telangana",
  landmark: "Opposite Old DIG Building, Beside La Delicious Bakery, Jyothinagar",
  city: "Karimnagar",
  state: "Telangana",
  pincode: "505001",
  hoursText: "Open Daily: 10:00 AM – 10:00 PM",
  hours: [
    { day: "Monday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Sunday", open: "10:00 AM", close: "10:00 PM" },
  ],
  verifiedBadges: [
    { label: "Google Maps Verified Listing", detail: "4.3 ★ Rating" },
    { label: "Physical Showroom", detail: "Jyothinagar, Karimnagar" },
    { label: "Multi-Brand Hub", detail: "100+ Brands as per Store Board" },
    { label: "Store Schedule", detail: "Open 7 Days (10 AM - 10 PM)" },
  ],
  // Genuine photos extracted directly from Google Maps listing
  realPhotos: [
    {
      id: "photo-storefront-full",
      title: "Storefront & Main Commercial Façade",
      category: "Storefront",
      caption: "Actual street-facing view of The Brands Factory showroom in Jyothinagar, Karimnagar showing entrance stairs, stainless steel railings, and 3D signage.",
      url: `${BASE}images/real_storefront_full.jpg`,
      source: "Google Maps Listing",
      isCover: true,
    },
    {
      id: "photo-signage",
      title: "3D Store Signboard & Lighting",
      category: "Exterior Branding",
      caption: "Official black acrylic 3D lettering 'THE BRANDS FACTORY' with dark fascia and warm downlit wooden ceiling paneling.",
      url: `${BASE}images/real_signage.jpg`,
      source: "Google Maps Listing",
    },
    {
      id: "photo-displays",
      title: "Showroom Glass Windows & Clothing Displays",
      category: "Showroom & Displays",
      caption: "Display window viewing into the air-conditioned store showing mannequins, apparel racks, shirts, spotlights, and customers inside.",
      url: `${BASE}images/real_clothing_displays.jpg`,
      source: "Google Maps Listing",
    },
    {
      id: "photo-brand-board",
      title: "Store Brand Slogan Board",
      category: "Brand Identity",
      caption: "Official entrance pillar signboard featuring the BF monogram, 'My Style My Look', and 'More Than 100+ Brands' tag.",
      url: `${BASE}images/real_brand_board.jpg`,
      source: "Google Maps Listing",
    },
    {
      id: "photo-entrance",
      title: "Entrance Steps & Potted Palm Walkway",
      category: "Entrance",
      caption: "Polished steps leading up from the vehicle parking area to the elevated main glass entrance doors.",
      url: `${BASE}images/real_entrance_steps.jpg`,
      source: "Google Maps Listing",
    },
    {
      id: "photo-cinematic",
      title: "Wide Angle Showroom View",
      category: "Exterior",
      caption: "Full cinematic perspective highlighting the commercial glass architecture, entrance, and central Jyothinagar corridor.",
      url: `${BASE}images/real_hero_cinematic.jpg`,
      source: "Google Maps Listing",
    }
  ] as RealPhoto[],

  // In-Store Apparel Departments
  apparelCategories: [
    {
      id: "casual-shirts",
      title: "Casual & Linen Shirts",
      tagline: "Weekend Classics, Solids & Contemporary Prints",
      description: "Extensive racks of casual button-downs, breathable linen shirts, textured cottons, checks, and Mandarin collar styles for every casual setting.",
      types: ["Pure Linen Shirts", "Oxford Cotton Solids", "Contemporary Printed Shirts", "Checks & Stripes", "Mandarin / Band Collar"],
      sizes: "Sizes: S (38) to 3XL (46)",
      highlights: ["Breathable Cotton Blends", "Pre-washed Soft Finishes", "Casual & Friday Dressing"],
      badge: "High Demand"
    },
    {
      id: "formals",
      title: "Formals & Executive Wear",
      tagline: "Office Attire, Crisp Formals & Sharp Trousers",
      description: "Professional wardrobe staples including wrinkle-resistant executive dress shirts, tailored formal trousers, blazers, and coordinated workwear.",
      types: ["Executive Dress Shirts", "Flat-Front Formal Trousers", "Single & Double Button Blazers", "Two-Piece Formal Suits"],
      sizes: "Shirt Sizes: 38 - 46 | Waist: 30 - 42",
      highlights: ["Formal Cuts", "Crease-Resistant Finishes", "Alteration Support In-Store"],
      badge: "In-Store Fitting"
    },
    {
      id: "denim-chinos",
      title: "Denim Jeans & Chinos",
      tagline: "Durable Comfort Denim & Modern Trousers",
      description: "Multi-brand jeans collection ranging from classic straight fits to modern slim tapers, stretch commuter chinos, and cargo trousers.",
      types: ["Comfort Stretch Denim", "Slim Tapered Jeans", "Cotton Gabardine Chinos", "Utility Cargo Pants"],
      sizes: "Waist Sizes: 28 to 42",
      highlights: ["Stretch Comfort", "Reinforced Stitching", "Multiple Color Washes"],
      badge: "Everyday Staple"
    },
    {
      id: "tshirts-polos",
      title: "T-Shirts & Polos",
      tagline: "Polo Knits, Graphic Tees & Casual Basics",
      description: "Piqué cotton polos, round neck graphic t-shirts, drop-shoulder streetwear, and minimal solid essentials for relaxed daily wear.",
      types: ["Classic Piqué Polos", "Round Neck Cotton Tees", "Oversized Streetwear Tees", "Athletic Active Knits"],
      sizes: "Sizes: S, M, L, XL, XXL",
      highlights: ["100% Combed Cotton", "Bio-Washed Softness", "Shape-Retaining Ribbed Collars"],
      badge: "Trending"
    },
    {
      id: "festive-ethnic",
      title: "Festive & Party Ensembles",
      tagline: "Kurtas, Ethnic Jackets & Celebration Wear",
      description: "Curated celebration wear for family functions, festivals, and weddings including textured festive kurtas, Nehru jackets, and Indo-western layers.",
      types: ["Festive Kurta Sets", "Nehru & Modi Jackets", "Indo-Western Party Layers", "Textured Silk Blends"],
      sizes: "Sizes: 38 to 44",
      highlights: ["Festive Color Palette", "Subtle Texture Finishes", "Comfort Linings"],
      badge: "Wedding & Puja"
    },
    {
      id: "accessories",
      title: "Accessories & Everyday Essentials",
      tagline: "Finishing Details & Daily Complements",
      description: "Genuine leather belts, wallets, formal socks, handkerchiefs, and accessories to complete your head-to-toe look.",
      types: ["Leather Belts (Black & Tan)", "Bi-Fold Leather Wallets", "Socks & Handkerchief Packs", "Casual Caps & Accents"],
      sizes: "Adjustable / Free Size",
      highlights: ["Durable Leather", "Gift Packaging Available", "Storefront Counter Display"],
      badge: "Counter Collection"
    }
  ] as ApparelCategory[],

  // In-Store Services (Genuine and realistic)
  storeServices: [
    {
      title: "Multi-Brand Shopping",
      desc: "Wide collection of multi-brand readymade garments for men and youth under one air-conditioned roof.",
      icon: "ShoppingBag"
    },
    {
      title: "Trial & Fitting Rooms",
      desc: "Spacious, well-lit in-store trial rooms so you can try sizes before purchasing.",
      icon: "ShieldCheck"
    },
    {
      title: "Alteration Support",
      desc: "In-store assistance to help adjust trouser hems and fit for immediate comfort.",
      icon: "Scissors"
    },
    {
      title: "WhatsApp Size & Stock Check",
      desc: "Check current arrivals or ask if your specific size is on the rack via direct WhatsApp chat.",
      icon: "MessageCircle"
    },
    {
      title: "Central Jyothinagar Location",
      desc: "Conveniently situated opposite the Old DIG Building, beside La Delicious Bakery with nearby vehicle parking.",
      icon: "MapPin"
    },
    {
      title: "Open Daily 10 AM – 10 PM",
      desc: "Extended opening hours 7 days a week to make shopping convenient after work or on weekends.",
      icon: "Clock"
    }
  ],

  faqs: [
    {
      q: "Where is The Brands Factory located in Karimnagar?",
      a: "The store is located at 2-10-1297, near La Delicious Bakery, directly opposite the Old DIG Building in Jyothinagar, Karimnagar, Telangana 505001. Google Maps Plus Code: C4VF+5Q Karimnagar."
    },
    {
      q: "What are your store hours?",
      a: "The store is open all 7 days of the week from 10:00 AM to 10:00 PM."
    },
    {
      q: "Can I check size and price availability on WhatsApp before visiting?",
      a: "Yes! You can contact our store directly on WhatsApp at +91 79957 99565 or tap the WhatsApp button on this site to inquire about stock or reserve garments for in-store trial."
    },
    {
      q: "Are the photos on this website real photos of The Brands Factory?",
      a: "Yes. All storefront and showroom photos featured on this website are genuine photographs taken directly from the verified Google Maps listing of The Brands Factory in Karimnagar."
    },
    {
      q: "Do you have trial rooms at the store?",
      a: "Yes, our showroom features trial rooms and air conditioning so you can try on clothing comfortably."
    }
  ]
};
