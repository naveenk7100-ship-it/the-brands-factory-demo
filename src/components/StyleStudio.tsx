import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  MessageCircle, 
  Check, 
  Layers, 
  ArrowRight,
  Shirt,
  Scissors,
  CheckCircle2
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';
import type { LookbookCombo } from '../data/brandsFactoryData';

interface StyleStudioProps {
  onOpenInquiry: (lookName: string) => void;
}

export const StyleStudio: React.FC<StyleStudioProps> = ({ onOpenInquiry }) => {
  const [selectedLook, setSelectedLook] = useState<LookbookCombo>(STORE_DATA.lookbooks[0]);
  
  // Custom outfit builder state
  const customTops = [
    { name: "Midnight Charcoal Italian Peak Blazer", type: "Formal" },
    { name: "Pure Sky Blue French Linen Resort Shirt", type: "Casual" },
    { name: "Royal Emerald Matka Silk Bandhgala", type: "Festive" },
    { name: "Heavyweight Boxy Graphic Drop Hoodie", type: "Streetwear" },
  ];

  const customBottoms = [
    { name: "Tailored Micro-Houndstooth Trousers", type: "Formal" },
    { name: "Sand & Olive Tech-Stretch Chinos", type: "Casual" },
    { name: "13.5oz Red-Line Selvedge Indigo Denim", type: "Casual/Street" },
    { name: "Ivory Spun Silk Tapered Churidar", type: "Festive" },
  ];

  const customFootwear = [
    { name: "Hand-Burnished Cognac Double Monk Straps", type: "Formal" },
    { name: "Tobacco Suede Driving Loafers", type: "Casual" },
    { name: "Handcrafted Embroidered Velvet Juttis", type: "Festive" },
    { name: "Minimalist Full-Grain Leather White Court Sneakers", type: "Streetwear" },
  ];

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [footwearIndex, setFootwearIndex] = useState(0);

  const handleShareCustomLookWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I curated a look in your Virtual Style Studio:\n\n` +
      `• Topwear: ${customTops[topIndex].name}\n` +
      `• Bottomwear: ${customBottoms[bottomIndex].name}\n` +
      `• Footwear: ${customFootwear[footwearIndex].name}\n\n` +
      `Can you check if these items/sizes are in stock at your Jyothinagar store?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  const handleShareCuratedLookWhatsApp = (look: LookbookCombo) => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am interested in the curated ensemble "${look.title}" (${look.occasion}). Top: ${look.top}, Bottom: ${look.bottom}. Is this look available in-store?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="style-studio" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0C14] border-t border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Wardrobe Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            VIRTUAL <span className="gold-gradient-text">STYLE STUDIO</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Browse our head-to-toe signature looks or mix & match separates to build your customized lookbook before walking into our Karimnagar store.
          </p>
        </div>

        {/* Tab 1: Signature Curated Looks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Look Selector Pills */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-2 font-brand">
              Curated Occasion Ensembles
            </h3>
            
            <div className="space-y-2.5">
              {STORE_DATA.lookbooks.map((look) => (
                <div
                  key={look.id}
                  onClick={() => setSelectedLook(look)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    selectedLook.id === look.id
                      ? 'bg-gradient-to-r from-white/10 to-white/5 border-[#D4AF37] shadow-xl'
                      : 'bg-white/5 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">
                        {look.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {look.occasion}
                      </p>
                    </div>

                    <div className="flex gap-1">
                      {look.palette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Look Preview Card */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl grid grid-cols-1 md:grid-cols-12">
              
              {/* Look Image */}
              <div className="md:col-span-6 relative h-72 md:h-auto min-h-[360px] bg-black">
                <img
                  src={selectedLook.image}
                  alt={selectedLook.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#D4AF37] text-[11px] font-bold uppercase">
                  {selectedLook.occasion}
                </div>
              </div>

              {/* Look Breakdown Details */}
              <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-[#0D101A]">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ensemble Breakdown</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    {selectedLook.title}
                  </h3>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                    {selectedLook.description}
                  </p>

                  {/* Components */}
                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase">Topwear</span>
                      <span className="text-gray-200">{selectedLook.top}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase">Bottomwear</span>
                      <span className="text-gray-200">{selectedLook.bottom}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase">Footwear & Accent</span>
                      <span className="text-gray-200">{selectedLook.footwear} • {selectedLook.accessory}</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                  <button
                    onClick={() => handleShareCuratedLookWhatsApp(selectedLook)}
                    className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Look on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => onOpenInquiry(`Curated Look Reservation: ${selectedLook.title}`)}
                    className="w-full luxury-button-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Schedule In-Store Trial
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Tab 2: Custom Mix & Match Look Builder */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/25 bg-gradient-to-br from-[#0F121C] via-[#0A0D15] to-[#0A0C13] shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-brand">
              Interactive Stylist Tool
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              CUSTOM OUTFIT BUILDER
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Combine your preferred pieces and click below to send the spec straight to our in-store stylist for immediate inventory check.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Topwear */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Shirt className="w-4 h-4 text-[#D4AF37]" />
                1. Select Topwear
              </label>
              <div className="space-y-2">
                {customTops.map((top, idx) => (
                  <button
                    key={top.name}
                    onClick={() => setTopIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      topIndex === idx
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{top.name}</span>
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase">{top.type}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Bottomwear */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#D4AF37]" />
                2. Select Bottomwear
              </label>
              <div className="space-y-2">
                {customBottoms.map((bot, idx) => (
                  <button
                    key={bot.name}
                    onClick={() => setBottomIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      bottomIndex === idx
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{bot.name}</span>
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase">{bot.type}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Footwear */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                3. Select Footwear
              </label>
              <div className="space-y-2">
                {customFootwear.map((fw, idx) => (
                  <button
                    key={fw.name}
                    onClick={() => setFootwearIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      footwearIndex === idx
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{fw.name}</span>
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase">{fw.type}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Builder Summary & Action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl">
            <div className="text-xs text-gray-300 space-y-1 text-center sm:text-left">
              <span className="text-[#D4AF37] font-bold block uppercase text-[10px]">
                Your Configured Ensemble:
              </span>
              <p className="text-white font-medium">
                {customTops[topIndex].name} + {customBottoms[bottomIndex].name} + {customFootwear[footwearIndex].name}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleShareCustomLookWhatsApp}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to Stylist via WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
