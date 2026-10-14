import React, { useState } from 'react';
import { 
  Ruler, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Scissors, 
  HelpCircle,
  Shirt,
  ArrowRight
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const FitFinder: React.FC = () => {
  const [chestSize, setChestSize] = useState<number>(40);
  const [waistSize, setWaistSize] = useState<number>(32);
  const [preferredFit, setPreferredFit] = useState<'slim' | 'regular' | 'relaxed'>('slim');

  // Fit calculations
  const recommendedShirt = chestSize <= 38 ? '38 (S / Slim)' : chestSize <= 40 ? '40 (M / Smart)' : chestSize <= 42 ? '42 (L / Executive)' : '44+ (XL / Classic)';
  const recommendedBlazer = `${chestSize}R (${preferredFit === 'slim' ? 'Drop 7 Italian Slim' : 'Drop 6 Classic British'})`;
  const alterationNote = preferredFit === 'slim' 
    ? "Sleeve taper and side contouring recommended — complimentary at The Brands Factory." 
    : "Standard comfortable drape with clean ankle break.";

  const handleConsultWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I used your Fit Finder on the website:\n` +
      `• Chest: ${chestSize} inches\n` +
      `• Waist: ${waistSize} inches\n` +
      `• Fit Preference: ${preferredFit.toUpperCase()}\n` +
      `• Recommended Size: Shirt ${recommendedShirt}, Blazer ${recommendedBlazer}\n\n` +
      `Can you advise which brands and cuts you have available in this size?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="fit-finder" className="py-20 lg:py-28 relative overflow-hidden bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <Ruler className="w-3.5 h-3.5" />
            <span>Smart Sizing & Tailoring Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            PRECISION <span className="gold-gradient-text">FIT CALCULATOR</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ensure an impeccable drape. Select your measurements to see recommended shirt sizes, suit drops, and tailoring advice before your store visit.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Input Controls */}
          <div className="lg:col-span-6 luxury-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            
            {/* 1. Chest Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-300">Chest Measurement:</span>
                <span className="text-[#D4AF37] font-bold text-sm">{chestSize} inches</span>
              </div>
              <input
                type="range"
                min="36"
                max="46"
                step="2"
                value={chestSize}
                onChange={(e) => setChestSize(Number(e.target.value))}
                className="w-full accent-[#D4AF37] bg-white/10 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>36" (Small)</span>
                <span>40" (Medium)</span>
                <span>46" (XXL)</span>
              </div>
            </div>

            {/* 2. Waist Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-300">Waist Measurement:</span>
                <span className="text-[#D4AF37] font-bold text-sm">{waistSize} inches</span>
              </div>
              <input
                type="range"
                min="28"
                max="42"
                step="2"
                value={waistSize}
                onChange={(e) => setWaistSize(Number(e.target.value))}
                className="w-full accent-[#D4AF37] bg-white/10 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>28"</span>
                <span>32"</span>
                <span>36"</span>
                <span>42"</span>
              </div>
            </div>

            {/* 3. Fit Silhouette Preference */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 block">
                Desired Silhouette:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'slim', label: 'Slim Fit', sub: 'Tapered & Sharp' },
                  { id: 'regular', label: 'Regular Fit', sub: 'Balanced Classic' },
                  { id: 'relaxed', label: 'Relaxed Fit', sub: 'Contemporary Boxy' }
                ].map((fit) => (
                  <button
                    key={fit.id}
                    onClick={() => setPreferredFit(fit.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      preferredFit === fit.id
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{fit.label}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{fit.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* In-Store Perk Note */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-gray-400">
              <Scissors className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>In-House Master Alterations:</strong> Every pair of trousers or blazer purchased at our Karimnagar outlet can be custom hemmed while you wait.
              </span>
            </div>

          </div>

          {/* Recommendation Results Card */}
          <div className="lg:col-span-6 luxury-card rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 bg-gradient-to-br from-[#121624] via-[#0E111C] to-[#0A0D15] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest font-brand">
                  Computed Recommendation
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  Your Signature Fit Profile
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase">
                {preferredFit}
              </span>
            </div>

            {/* Recommended Sizes List */}
            <div className="space-y-3.5">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-xs block">Recommended Shirt Size</span>
                  <span className="text-base font-bold text-white font-serif">{recommendedShirt}</span>
                </div>
                <Shirt className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-xs block">Recommended Trouser Waist</span>
                  <span className="text-base font-bold text-white font-serif">Size {waistSize}</span>
                </div>
                <Ruler className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-xs block">Recommended Suit / Blazer Cut</span>
                  <span className="text-base font-bold text-white font-serif">{recommendedBlazer}</span>
                </div>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            {/* Tailoring Note */}
            <div className="text-xs text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{alterationNote}</span>
            </div>

            {/* Direct WhatsApp Consultation CTA */}
            <button
              onClick={handleConsultWhatsApp}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Store Stylist To Pull My Sizes</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
