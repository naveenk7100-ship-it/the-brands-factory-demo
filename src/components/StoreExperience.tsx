import React from 'react';
import { 
  Sparkles, 
  Scissors, 
  UserCheck, 
  ShieldCheck, 
  PackageCheck, 
  MessageSquare,
  CheckCircle2,
  Phone,
  Clock,
  ArrowRight
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

interface StoreExperienceProps {
  onOpenInquiry: (topic?: string) => void;
}

export const StoreExperience: React.FC<StoreExperienceProps> = ({ onOpenInquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    Scissors: <Scissors className="w-6 h-6 text-[#D4AF37]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    PackageCheck: <PackageCheck className="w-6 h-6 text-[#D4AF37]" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-[#D4AF37]" />,
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0C14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Brands Factory Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            THE IN-STORE <span className="gold-gradient-text">EXPERIENCE</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Shopping in person allows you to touch the fabrics, test the drape, and walk out with outfits altered to perfection. Here is what awaits you at our Jyothinagar store.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STORE_DATA.services.map((serv) => (
            <div
              key={serv.title}
              className="luxury-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37]/35 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/15 transition-colors">
                  {iconMap[serv.icon] || <Sparkles className="w-6 h-6 text-[#D4AF37]" />}
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                  {serv.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {serv.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="font-semibold">Karimnagar Store Perk</span>
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Big In-Store VIP Banner */}
        <div className="mt-16 rounded-3xl overflow-hidden relative border border-white/15 bg-[#0F1320] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Personal Stylist Session
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Preparing for a Wedding, Gala, or Interview?
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Book a 1-on-1 complimentary styling appointment with our in-house wardrobe consultant at our Karimnagar store. We will prepare curated combinations tailored to your event and physique.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenInquiry('VIP In-Store Styling Session')}
                  className="luxury-button-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={STORE_DATA.callUrl}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call {STORE_DATA.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="The Brands Factory Store Experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F1320] via-transparent to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
