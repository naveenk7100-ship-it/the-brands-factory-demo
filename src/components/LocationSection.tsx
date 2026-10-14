import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronDown,
  Building,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STORE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Check if store is currently open
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <section id="location" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0C14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Coordinates & Hours</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            VISIT OUR <span className="gold-gradient-text">SHOWROOM</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Jyothinagar, Karimnagar opposite the Old DIG Building and beside La Delicious Bakery.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Verified Location Details & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Details Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              
              {/* Store Name & Open Indicator */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-brand">
                    Physical Storefront
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    {STORE_DATA.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Multi-Brand Fashion & Clothing Store
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border ${
                  isOpen 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{isOpen ? 'Open Now' : 'Closed Now'}</span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-semibold text-gray-300">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" /> Official Address
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1 text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-200 leading-relaxed font-normal">
                  {STORE_DATA.address}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                  <Building className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Landmark: <strong>{STORE_DATA.landmark}</strong></span>
                </div>
                <div className="text-xs text-gray-400">
                  Plus Code: <strong className="text-gray-200">{STORE_DATA.plusCode}</strong>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-semibold text-gray-300">
                    <Phone className="w-4 h-4 text-[#D4AF37]" /> Verified Phone
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1 text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={STORE_DATA.callUrl}
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2.5 text-xs text-gray-200 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">Call Store</span>
                      <strong className="text-white text-xs">{STORE_DATA.phone}</strong>
                    </div>
                  </a>

                  <a
                    href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about clothing stock.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-gray-200 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-400 block">WhatsApp</span>
                      <strong className="text-white text-xs">+91 79957 99565</strong>
                    </div>
                  </a>
                </div>
              </div>

              {/* Direct Working Navigation CTA */}
              <div className="pt-2">
                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full luxury-button-gold py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Google Maps Turn-by-Turn Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Operating Hours Table Card */}
            <div className="luxury-card rounded-3xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Store Hours Breakdown</span>
                </div>
                <span className="text-xs text-[#D4AF37] font-semibold">
                  Open 7 Days a Week
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {STORE_DATA.hours.map((item) => {
                  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  const todayName = dayNames[new Date().getDay()];
                  const isToday = todayName === item.day;

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                        isToday 
                          ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-white font-bold' 
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-[#D4AF37] text-black">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-gray-300">
                        {item.open} – {item.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Visual & Area Context */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Map Frame Card */}
            <div className="luxury-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative">
              <div className="h-[420px] sm:h-[460px] w-full relative bg-[#101422]">
                
                {/* Embed Map with verified coordinates */}
                <iframe
                  title="The Brands Factory Location Karimnagar"
                  src="https://maps.google.com/maps?q=18.4388,79.1287&z=15&output=embed"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80"
                  loading="lazy"
                />

                {/* Floating Map Pin Info Overlay */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">
                      Verified Landmark
                    </span>
                    <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                      ★ 4.3
                    </span>
                  </div>
                  <h4 className="text-white font-serif font-bold text-sm">
                    {STORE_DATA.name}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Opp. Old DIG Building, beside La Delicious Bakery, Jyothinagar, Karimnagar
                  </p>
                  <a
                    href={STORE_DATA.verifiedGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline font-semibold pt-1"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Bottom Map Floating Action */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <a
                    href={STORE_DATA.verifiedGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-button-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Parking & Accessibility Notice */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
              <div className="space-y-1 text-center sm:text-left">
                <strong className="text-white block font-medium">Visiting By Vehicle?</strong>
                <span>Ample two-wheeler and roadside four-wheeler parking is available along the Jyothinagar Old DIG corridor.</span>
              </div>
              <a
                href={STORE_DATA.callUrl}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold shrink-0"
              >
                Call For Parking Help
              </a>
            </div>

          </div>

        </div>

        {/* Section FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Quick answers about visiting, sizing, brands, and hours at The Brands Factory Karimnagar.
            </p>
          </div>

          <div className="space-y-3">
            {STORE_DATA.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="luxury-card rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-serif font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
