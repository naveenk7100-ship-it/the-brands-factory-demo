export interface FashionItem {
  id: string;
  name: string;
  category: 'formals' | 'casuals' | 'denim' | 'festive' | 'streetwear' | 'accessories';
  categoryLabel: string;
  description: string;
  fit: string;
  fabric: string;
  tag: string;
  image: string;
  highlights: string[];
}

export interface LookbookCombo {
  id: string;
  title: string;
  occasion: string;
  description: string;
  top: string;
  bottom: string;
  footwear: string;
  accessory: string;
  image: string;
  palette: string[];
}

export const STORE_DATA = {
  name: "The Brands Factory",
  tagline: "Karimnagar's Premier Multi-Brand Fashion Outlet",
  subheading: "Curated Global Brands • Tailored Elegance • Direct Factory Pricing",
  rating: 4.3,
  ratingCategory: "Clothing Store",
  verifiedGoogleMapsUrl: "https://maps.app.goo.gl/XzwuWgQ4mSoM8uvE7?g_st=aw",
  phone: "079957 99565",
  formattedPhone: "+91 79957 99565",
  whatsappUrl: "https://wa.me/917995799565",
  callUrl: "tel:07995799565",
  address: "2-10-1297, near La Delicious Bakery, opp. Old DIG Building, Jyothinagar, Karimnagar, Telangana 505001",
  plusCode: "C4VF+5Q Karimnagar, Telangana",
  landmark: "Opposite Old DIG Building, Beside La Delicious Bakery",
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
  stats: [
    { label: "Google Verified Rating", value: "4.3 ★", detail: "Clothing Store listing" },
    { label: "Top Brand Collections", value: "50+ Brands", detail: "Menswear, casuals & formals" },
    { label: "Store Open Hours", value: "10 AM - 10 PM", detail: "Open all 7 days a week" },
    { label: "Prime Location", value: "Jyothinagar", detail: "Opp. Old DIG Building, Karimnagar" },
  ],
  services: [
    {
      title: "Multi-Brand Curated Wardrobes",
      desc: "Top domestic and international menswear labels gathered under one roof at factory-outlet pricing.",
      icon: "Sparkles",
    },
    {
      title: "In-Store Master Alterations",
      desc: "Complimentary precision sleeve, hem, and waist alterations on selected formal and casual purchases.",
      icon: "Scissors",
    },
    {
      title: "Personal Styling Assistance",
      desc: "Our wardrobe advisors assist you in building complete looks for weddings, interviews, and celebrations.",
      icon: "UserCheck",
    },
    {
      title: "Air-Conditioned Trial Lounges",
      desc: "Spacious, well-lit fitting rooms with 360-degree mirrors for effortless decision making.",
      icon: "ShieldCheck",
    },
    {
      title: "Weekly Fresh Arrivals",
      desc: "Fresh consignments and limited clearance drops arriving every single week.",
      icon: "PackageCheck",
    },
    {
      title: "Express WhatsApp Inquiries",
      desc: "Check size availability, reserve styles, or ask for catalog photos directly on WhatsApp.",
      icon: "MessageSquare",
    },
  ],
  categories: [
    { id: 'all', label: 'All Collections' },
    { id: 'formals', label: 'Formals & Suits' },
    { id: 'casuals', label: 'Linen & Casuals' },
    { id: 'denim', label: 'Denim & Trousers' },
    { id: 'festive', label: 'Festive & Ethnic' },
    { id: 'streetwear', label: 'Urban Streetwear' },
    { id: 'accessories', label: 'Footwear & Accs' },
  ],
  featuredItems: [
    {
      id: "formal-1",
      name: "Italian Cut Midnight Charcoal Blazer",
      category: "formals",
      categoryLabel: "Formals & Suits",
      description: "Structured slim-profile blazer crafted with premium wool blend and peak lapels. Ideal for business galas and wedding receptions.",
      fit: "Tailored Slim Fit",
      fabric: "Poly-Wool Rich Blend",
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      highlights: ["Peak Lapel", "Breathable Viscose Lining", "Double Back Vent", "Interior Stash Pocket"]
    },
    {
      id: "formal-2",
      name: "Royal Oxford Crisp Executive Shirt",
      category: "formals",
      categoryLabel: "Formals & Suits",
      description: "100% long-staple cotton shirt with spread collar and wrinkle-resistant finish for round-the-clock crispness.",
      fit: "Contemporary Regular Fit",
      fabric: "100% Giza Cotton (120s Count)",
      tag: "Wardrobe Essential",
      image: "https://images.unsplash.com/photo-1620012253295-c15c429f66bf?auto=format&fit=crop&w=800&q=80",
      highlights: ["Wrinkle Resistant", "Mother-of-Pearl Buttons", "Removable Collar Stays", "Curved Hem"]
    },
    {
      id: "casual-1",
      name: "Breezy French Linen Resort Shirt",
      category: "casuals",
      categoryLabel: "Linen & Casuals",
      description: "Featherweight pure linen casual shirt with mandarin collar, designed for tropical comfort and relaxed weekends.",
      fit: "Relaxed Summer Fit",
      fabric: "100% Normandy Linen",
      tag: "New Arrival",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      highlights: ["Naturally Breathable", "Pre-Washed Softness", "Band Collar Detail", "Moisture Wicking"]
    },
    {
      id: "casual-2",
      name: "Mercerized Piqué Luxury Polo",
      category: "casuals",
      categoryLabel: "Linen & Casuals",
      description: "High-sheen mercerized cotton polo with ribbed collar and tipping accents. Bridges smart-casual and daytime luxury.",
      fit: "Athletic Smart Fit",
      fabric: "Double Mercerized Combed Cotton",
      tag: "Trending",
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      highlights: ["Silky Smooth Handfeel", "Anti-Pill Finish", "Engraved Button Placket", "Retains Color After Wash"]
    },
    {
      id: "denim-1",
      name: "Vintage Indigo Selvedge Jeans",
      category: "denim",
      categoryLabel: "Denim & Trousers",
      description: "Authentic 13.5oz ring-spun denim with red-line selvedge ID, handcrafted whisker washes, and clean brass hardware.",
      fit: "Slim Tapered Cut",
      fabric: "99% Cotton, 1% Comfort Stretch",
      tag: "Iconic Denim",
      image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      highlights: ["Japanese Red-Line Selvedge", "Reinforced Bar-Tacking", "Custom Rivets", "Fade-Ready Indigo"]
    },
    {
      id: "denim-2",
      name: "Tech-Chino Stretch Commuter Pants",
      category: "denim",
      categoryLabel: "Denim & Trousers",
      description: "Hybrid trouser featuring tailored chino aesthetics with four-way mechanical stretch and stain-repellent finish.",
      fit: "Tailored Ankle Fit",
      fabric: "Cotton-Elastane Gabardine",
      tag: "Popular Pick",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      highlights: ["4-Way Dynamic Stretch", "Hidden Coin Pocket", "Shirt-Gripper Waistband", "Crease Retention"]
    },
    {
      id: "festive-1",
      name: "Emerald Silk Velvet Bandhgala Jodhpuri",
      category: "festive",
      categoryLabel: "Festive & Ethnic",
      description: "Regal bandhgala jacket with metallic brass crest buttons and tonal embroidery on the mandarin collar. Designed for celebrations.",
      fit: "Structured Imperial Fit",
      fabric: "Micro-Velvet & Matka Silk Blend",
      tag: "Wedding Edition",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      highlights: ["Hand-Finished Crest Buttons", "Concealed Placket", "Pocket Square Notch", "Dry Clean Luxury"]
    },
    {
      id: "festive-2",
      name: "Textured Raw Silk Kurta Set",
      category: "festive",
      categoryLabel: "Festive & Ethnic",
      description: "Contemporary asymmetric cut festive kurta paired with slim churidar pants. Subtle woven self-stripes offer refined festive glow.",
      fit: "Comfort Traditional Fit",
      fabric: "Pure Raw Silk & Cotton Mix",
      tag: "Festive Favorite",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
      highlights: ["Asymmetric Hemline", "Side Pockets", "Intricate Stitch Detailing", "Skin-Friendly Cotton Base"]
    },
    {
      id: "streetwear-1",
      name: "Heavyweight Graphic Boxy Hoodie",
      category: "streetwear",
      categoryLabel: "Urban Streetwear",
      description: "420 GSM French terry cotton hoodie with dropped shoulders, double-layered hood, and minimal typography screen print.",
      fit: "Oversized Street Cut",
      fabric: "100% Carded French Terry (420 GSM)",
      tag: "Gen-Z Trend",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      highlights: ["Heavyweight 420 GSM", "Double Lined Hood", "No Drawstring Clean Look", "Kangaroo Warmth Pocket"]
    },
    {
      id: "accessories-1",
      name: "Full-Grain Italian Leather Derby Shoes",
      category: "accessories",
      categoryLabel: "Footwear & Accs",
      description: "Hand-burnished cognac leather derby with Goodyear welt construction, memory foam insole, and non-slip rubberized heel.",
      fit: "Classic European Last",
      fabric: "100% Full-Grain Calfskin Leather",
      tag: "Luxury Finish",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      highlights: ["Hand Burnished Crust", "Orthopedic Cushioning", "Breathable Leather Sock", "Resoleable Construction"]
    },
    {
      id: "accessories-2",
      name: "Reversible Textured Leather Belt & Wallet Set",
      category: "accessories",
      categoryLabel: "Footwear & Accs",
      description: "Dual-sided reversible belt (Black/Cognac Tan) paired with RFID-blocking minimalist bi-fold leather wallet.",
      fit: "Adjustable 28-44 inch",
      fabric: "Top-Grain Cowhide Leather",
      tag: "Gift Ready",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      highlights: ["Twist-Lock Reversible Buckle", "RFID Protected Slots", "Gift Box Packaging", "Scratch-Resistant Grain"]
    },
    {
      id: "streetwear-2",
      name: "Vintage Cargo Utility Joggers",
      category: "streetwear",
      categoryLabel: "Urban Streetwear",
      description: "Durable ripstop cotton cargo pants with multiple tactical bellows pockets and elasticated ankle cuffs.",
      fit: "Relaxed Tapered",
      fabric: "100% Military Ripstop Cotton",
      tag: "Weekend Essential",
      image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      highlights: ["6 Utility Pockets", "Reinforced Knee Panels", "Drawstring Waistband", "Durable Double Stitched"]
    }
  ] as FashionItem[],
  lookbooks: [
    {
      id: "look-1",
      title: "The Executive Gala",
      occasion: "Corporate Dinners & Evening Celebrations",
      description: "Charcoal peak-lapel blazer combined with a crisp Egyptian cotton spread shirt, tailored trousers, and hand-burnished brown monk straps.",
      top: "Midnight Charcoal Blazer + White Giza Shirt",
      bottom: "Charcoal Micro-Houndstooth Trousers",
      footwear: "Double Monk Strap Leather Shoes",
      accessory: "Textured Silk Pocket Square & Silver Chrono",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
      palette: ["#1A1D24", "#FFFFFF", "#C5A059", "#3E2723"]
    },
    {
      id: "look-2",
      title: "Mediterranean Sundowner",
      occasion: "Weekend Brunches, Resort Trips & Casual Evenings",
      description: "Airy sky blue linen shirt unbuttoned over a tailored white crew tee, olive stretch chinos, and suede driving loafers.",
      top: "Breezy Sky French Linen Shirt",
      bottom: "Sand / Olive Tech Stretch Chinos",
      footwear: "Tobacco Suede Driving Loafers",
      accessory: "Tortoiseshell Wayfarer Sunglasses",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
      palette: ["#87CEEB", "#F4F1EA", "#556B2F", "#8B4513"]
    },
    {
      id: "look-3",
      title: "Royal Heritage Festive",
      occasion: "Sangeet, Reception & Festive Puja",
      description: "Emerald bandhgala with subtle raw silk luster, layered over an ivory kurta and tapered churidar with velvet juttis.",
      top: "Emerald Imperial Bandhgala Jacket",
      bottom: "Ivory Spun Silk Churidar",
      footwear: "Embroidered Velvet Juttis",
      accessory: "Antique Brass Pocket Brooch",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80",
      palette: ["#0B3C2A", "#FFFDD0", "#D4AF37", "#1E1E1E"]
    },
    {
      id: "look-4",
      title: "Modern Metro Urban",
      occasion: "Club Nights, Casual Fridays & Travel",
      description: "Boxy heavyweight charcoal hoodie paired with dark selvedge raw denim and retro leather court sneakers.",
      top: "Heavyweight Boxy Drop-Shoulder Hoodie",
      bottom: "Raw Indigo Selvedge Tapered Denim",
      footwear: "Minimalist Low-Top White Sneakers",
      accessory: "Matte Black Crossbody Bag",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80",
      palette: ["#2B2D42", "#1D2A44", "#EDF2F4", "#111111"]
    }
  ] as LookbookCombo[],
  faqs: [
    {
      q: "Where is The Brands Factory located in Karimnagar?",
      a: "The store is located at 2-10-1297, near La Delicious Bakery, right opposite the Old DIG Building in Jyothinagar, Karimnagar, Telangana 505001. You can find us easily on Google Maps via Plus Code C4VF+5Q Karimnagar."
    },
    {
      q: "What are your store timings?",
      a: "The Brands Factory is open all 7 days of the week from 10:00 AM in the morning to 10:00 PM at night."
    },
    {
      q: "What categories of apparel are available?",
      a: "We curate a comprehensive selection of men's branded clothing including formal suits, blazers, executive shirts, trousers, linen casuals, polos, premium denim, ethnic kurtas, bandhgalas, urban streetwear, and footwear/leather accessories."
    },
    {
      q: "Can I check stock or reserve an item on WhatsApp?",
      a: "Yes! You can message our store directly at +91 79957 99565 or tap the WhatsApp button on this website to inquire about sizes, current arrivals, or reserve an ensemble before visiting."
    },
    {
      q: "Do you offer fitting and trial rooms?",
      a: "Yes, we have spacious, fully air-conditioned trial rooms and provide alteration support on selected apparel to ensure your clothes fit you flawlessly."
    }
  ]
};
