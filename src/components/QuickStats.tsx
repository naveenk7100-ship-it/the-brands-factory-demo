import React from 'react';
import { Star, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const QuickStats: React.FC = () => {
  const icons = [
    <Star className="w-5 h-5 text-amber-400 fill-amber-400" key="star" />,
    <Sparkles className="w-5 h-5 text-[#D4AF37]" key="sparkles" />,
    <Clock className="w-5 h-5 text-[#D4AF37]" key="clock" />,
    <MapPin className="w-5 h-5 text-[#D4AF37]" key="mappin" />,
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {STORE_DATA.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="luxury-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 hover:border-[#D4AF37]/40 shadow-xl group transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                {icons[idx]}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] opacity-80">
                Verified
              </span>
            </div>

            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-serif tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
