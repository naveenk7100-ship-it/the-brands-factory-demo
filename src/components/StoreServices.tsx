import React from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Scissors, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Phone
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const StoreServices: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
    MessageCircle: <MessageCircle className="w-5 h-5 text-amber-400" />,
    MapPin: <MapPin className="w-5 h-5 text-amber-400" />,
    Clock: <Clock className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Store Amenities & Perks</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            WHY SHOP AT THE BRANDS FACTORY
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Convenient retail shopping in Karimnagar. Touch the fabrics, test the drape in trial rooms, and walk out ready for any occasion.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_DATA.storeServices.map((service) => (
            <div
              key={service.title}
              className="store-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-bold text-white text-lg font-display">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="text-amber-400 font-medium">In-Store Feature</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
