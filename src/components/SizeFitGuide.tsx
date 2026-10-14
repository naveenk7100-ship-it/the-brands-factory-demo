import React, { useState } from 'react';
import { 
  Ruler, 
  Shirt, 
  Scissors, 
  MessageCircle, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const SizeFitGuide: React.FC = () => {
  const [chest, setChest] = useState<number>(40);
  const [waist, setWaist] = useState<number>(32);
  const [fit, setFit] = useState<'slim' | 'regular' | 'relaxed'>('regular');

  const getShirtSize = (c: number) => {
    if (c <= 38) return '38 / Small (S)';
    if (c <= 40) return '40 / Medium (M)';
    if (c <= 42) return '42 / Large (L)';
    if (c <= 44) return '44 / Extra Large (XL)';
    return '46 / Double XL (XXL)';
  };

  const handleWhatsAppSizeCheck = () => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am checking size availability:\n` +
      `• Chest: ${chest} inches (Recommended Shirt Size: ${getShirtSize(chest)})\n` +
      `• Waist: ${waist} inches (Trouser/Jeans: Size ${waist})\n` +
      `• Fit: ${fit.toUpperCase()}\n\n` +
      `Do you have new arrivals in shirts and trousers in these sizes today?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="sizing" className="py-16 lg:py-24 bg-[#0D111A] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <Ruler className="w-3.5 h-3.5" />
            <span>In-Store Sizing Assistant</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            SIZE & FIT ADVISOR
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Quickly check your sizing before visiting our Jyothinagar store. We carry standard Indian readymade garments from Size 38 to 46 in shirts and 28 to 42 in trousers.
          </p>
        </div>

        {/* Sizing Card */}
        <div className="max-w-4xl mx-auto store-card p-6 sm:p-10 border border-slate-800 bg-slate-900 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="space-y-6">
              
              {/* Chest Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Chest Size:</span>
                  <span className="text-amber-400 font-bold text-sm">{chest} inches</span>
                </div>
                <input
                  type="range"
                  min="36"
                  max="46"
                  step="2"
                  value={chest}
                  onChange={(e) => setChest(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>36"</span>
                  <span>40" (M)</span>
                  <span>46" (XXL)</span>
                </div>
              </div>

              {/* Waist Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Trouser / Jeans Waist:</span>
                  <span className="text-amber-400 font-bold text-sm">{waist} inches</span>
                </div>
                <input
                  type="range"
                  min="28"
                  max="42"
                  step="2"
                  value={waist}
                  onChange={(e) => setWaist(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>28"</span>
                  <span>32"</span>
                  <span>36"</span>
                  <span>42"</span>
                </div>
              </div>

              {/* Fit Preference */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Preferred Fit Style:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['slim', 'regular', 'relaxed'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFit(f)}
                      className={`py-2 px-3 rounded-lg border text-xs font-bold capitalize transition-all cursor-pointer ${
                        fit === f
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {f} Fit
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results & WhatsApp Dispatch */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-display">
                Your Recommended Sizes
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Casual & Formal Shirts</span>
                  <strong className="text-white text-sm">{getShirtSize(chest)}</strong>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Jeans & Trousers</span>
                  <strong className="text-white text-sm">Waist {waist}</strong>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Blazer / Suit Cut</span>
                  <strong className="text-white text-sm">{chest} Regular</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Scissors className="w-4 h-4 text-amber-400 shrink-0" />
                <span>In-Store alteration assistance available on selected purchases.</span>
              </div>

              <button
                onClick={handleWhatsAppSizeCheck}
                className="w-full btn-whatsapp py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Check Available Brands in My Size</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
