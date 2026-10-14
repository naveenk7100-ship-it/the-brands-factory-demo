import React from 'react';
import { 
  Star, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  ThumbsUp,
  Sparkles
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>Google Maps Verified Rating</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            COMMUNITY <span className="gold-gradient-text">REPUTATION</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Directly sourced from the official Google Maps business listing for The Brands Factory in Karimnagar.
          </p>
        </div>

        {/* Big Verified Rating Showcase Card */}
        <div className="max-w-4xl mx-auto luxury-card rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-b from-[#111522] to-[#0A0D15] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Column */}
            <div className="md:col-span-5 text-center md:text-left space-y-3 md:border-r border-white/10 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Score</span>
              </div>

              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold text-white font-serif tracking-tight">
                  {STORE_DATA.rating}
                </span>
                <span className="text-xl text-gray-400 font-medium">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/60 fill-amber-400/60'}`} 
                  />
                ))}
              </div>

              <p className="text-xs text-gray-400">
                Official Google Maps Rating for <br />
                <strong className="text-gray-200">The Brands Factory (Clothing Store)</strong>
              </p>
            </div>

            {/* Right Action & Verified Highlights */}
            <div className="md:col-span-7 space-y-5">
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-white">
                  Karimnagar's Multi-Brand Clothing Destination
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Located in the bustling Jyothinagar fashion hub (opposite the Old DIG Building, near La Delicious Bakery), The Brands Factory serves customers looking for genuine branded quality without the exorbitant mall markup.
                </p>
              </div>

              {/* Verified Trust Points */}
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>100% Genuine Apparel</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Central Jyothinagar Hub</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <ThumbsUp className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Factory Outlet Value</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Personal Styling Fit</span>
                </div>
              </div>

              {/* Verified Link Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto luxury-button-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Write a Review</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
