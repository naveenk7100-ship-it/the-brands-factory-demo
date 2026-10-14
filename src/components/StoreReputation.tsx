import React from 'react';
import { 
  Star, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const StoreReputation: React.FC = () => {
  return (
    <section id="reputation" className="py-16 lg:py-24 bg-[#0D111A] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Maps Verified Score</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            GOOGLE MAPS VERIFIED RATING
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Honest and verifiable. Directly linked to the official Google Maps business profile for The Brands Factory in Karimnagar.
          </p>
        </div>

        {/* Rating Score Card */}
        <div className="max-w-3xl mx-auto store-card p-6 sm:p-10 border border-slate-800 bg-slate-900 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            
            {/* Score Number Column */}
            <div className="sm:col-span-5 text-center sm:text-left space-y-2 sm:border-r border-slate-800 sm:pr-8">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business</span>
              </span>

              <div className="flex items-baseline justify-center sm:justify-start gap-2">
                <span className="text-6xl font-black text-white font-display tracking-tight">
                  {STORE_DATA.rating}
                </span>
                <span className="text-lg text-slate-400 font-medium">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/40 text-amber-400/40'}`} 
                  />
                ))}
              </div>

              <p className="text-xs text-slate-400">
                Listed as <strong className="text-white">Clothing store</strong> in Karimnagar, Telangana.
              </p>
            </div>

            {/* Direct Verification Links */}
            <div className="sm:col-span-7 space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-display">
                  Transparent Google Profile
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We believe in authentic reputation. You can read actual local customer feedback directly on Google Maps or contribute your own experience.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Physical Store: Jyothinagar, Karimnagar</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No fabricated reviews or unverified quotes displayed</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-primary-amber py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Open Official Google Listing</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Write a Google Review</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
