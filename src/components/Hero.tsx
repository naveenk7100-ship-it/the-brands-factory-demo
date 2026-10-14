import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Star, 
  ArrowRight, 
  Navigation, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Tag, 
  ShoppingBag,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

interface HeroProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check if store is open (10:00 AM to 10:00 PM)
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpenNow(currentHour >= 10 && currentHour < 22);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden luxury-mesh">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Verified Trust Marks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Verified Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-4 rounded-full bg-white/5 border border-white/10 text-xs backdrop-blur-md">
              <span className="flex items-center gap-1 bg-gradient-to-r from-[#D4AF37] to-[#B88E1B] text-black px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5" /> Verified Store
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{STORE_DATA.rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300 font-medium">Clothing Store Listing</span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-[#D4AF37] font-semibold hidden sm:inline">Jyothinagar, Karimnagar</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase font-brand">
                THE BRANDS FACTORY • MULTI-BRAND OUTLET
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-serif">
                CURATING <br className="hidden sm:inline" />
                <span className="gold-gradient-text">LUXURY & STYLE</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
                Karimnagar’s premier destination for genuine branded menswear, bespoke executive blazers, Italian-cut suits, effortless linen casuals, authentic denim, and festive heritage ensembles.
              </p>
            </div>

            {/* Location & Real-Time Open Status Card */}
            <div className="p-4 rounded-2xl bg-[#0F121C]/80 border border-white/10 backdrop-blur-md max-w-xl mx-auto lg:mx-0 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start gap-2.5 text-gray-300 text-left">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Opp. Old DIG Building, Jyothinagar</p>
                    <p className="text-gray-400 text-[11px]">Beside La Delicious Bakery, Karimnagar (505001)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span className={isOpenNow ? 'text-emerald-400 font-bold' : 'text-amber-400 font-medium'}>
                    {isOpenNow ? 'Open Now (Till 10 PM)' : 'Opens at 10:00 AM'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto luxury-button-gold px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-[#D4AF37]/25"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about your menswear & clothing collection.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:border-emerald-500/50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Store</span>
              </a>

              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:border-[#D4AF37]/40"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> 100% Genuine Branded Wear
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Factory Outlet Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Complimentary Alterations
              </span>
            </div>

          </div>

          {/* Right Column: High Fashion Visual Editorial Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Border Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-indigo-500/30 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0D101A] border border-white/10 shadow-2xl">
                
                {/* Hero Showcase Image */}
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80"
                    alt="The Brands Factory Fashion Showcase Karimnagar"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
                      New Season Drop
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                      <Tag className="w-3 h-3" /> Factory Prices
                    </span>
                  </div>

                  {/* Rating Floating Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.3 Verified Listing</span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider">
                          Featured Ensemble
                        </p>
                        <h4 className="text-white font-serif font-bold text-base sm:text-lg">
                          Italian Cut Midnight Suit
                        </h4>
                        <p className="text-gray-300 text-xs">
                          Available in Sizes 38 to 46 • In-Store Fitting
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenInquiry('Italian Cut Midnight Suit')}
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold flex items-center gap-1 transition-all shrink-0 cursor-pointer"
                      >
                        <span>Reserve</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Sub-bar below image */}
                <div className="p-4 bg-[#0A0C14] border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Open Today: 10 AM – 10 PM</span>
                  </div>
                  <a
                    href={STORE_DATA.callUrl}
                    className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {STORE_DATA.phone}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
