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
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const StoreLocation: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STORE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[now.getDay()];

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#0A0D14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Coordinates & Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            STORE ADDRESS & WORKING HOURS
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Easily accessible showroom in Jyothinagar, Karimnagar opposite the Old DIG Building and next to La Delicious Bakery.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="store-card p-6 sm:p-8 bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block font-display">
                    Commercial Showroom
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                    {STORE_DATA.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Readymade Garments & Multi-Brand Apparel
                  </p>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${
                  isOpen 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{isOpen ? 'Open Now (Till 10 PM)' : 'Closed Now'}</span>
                </div>
              </div>

              {/* Address with Copy */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <MapPin className="w-4 h-4 text-amber-400" /> Physical Address
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed">
                  {STORE_DATA.address}
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-1">
                  <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Landmark: <strong className="text-slate-200">{STORE_DATA.landmark}</strong></span>
                </div>
                <div className="text-slate-400">
                  Plus Code: <strong className="text-slate-200">{STORE_DATA.plusCode}</strong>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <Phone className="w-4 h-4 text-amber-400" /> Store Contact
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={STORE_DATA.callUrl}
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Call Directly</span>
                      <strong className="text-white text-xs">{STORE_DATA.phone}</strong>
                    </div>
                  </a>

                  <a
                    href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to ask about your location and clothing collection.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
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

              {/* Turn by turn navigation */}
              <div className="pt-2">
                <a
                  href={STORE_DATA.verifiedGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary-amber py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Turn-By-Turn Navigation (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Schedule Table */}
            <div className="store-card p-6 bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm font-display">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Weekly Showroom Hours</span>
                </div>
                <span className="text-xs text-amber-400 font-semibold">
                  Open All 7 Days
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                {STORE_DATA.hours.map((item) => {
                  const isToday = item.day === todayName;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                        isToday 
                          ? 'bg-amber-500/15 border border-amber-500/30 text-white font-bold' 
                          : 'text-slate-300 hover:bg-slate-950'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-extrabold">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-slate-300">
                        {item.open} – {item.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="store-card rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative">
              <div className="h-[440px] sm:h-[480px] w-full relative bg-slate-950">
                <iframe
                  title="The Brands Factory Location Karimnagar"
                  src="https://maps.google.com/maps?q=18.4388,79.1287&z=15&output=embed"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-85"
                  loading="lazy"
                />

                {/* Overlay Card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      Verified Storefront
                    </span>
                    <span className="text-xs text-amber-400 font-bold">
                      ★ 4.3 Google Maps
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm font-display">
                    {STORE_DATA.name}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Opp. Old DIG Building, beside La Delicious Bakery, Jyothinagar, Karimnagar
                  </p>
                  <a
                    href={STORE_DATA.verifiedGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold pt-1"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <a
                    href={STORE_DATA.verifiedGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-amber px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open Live Route on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Parking & Approach Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4">
              <div>
                <strong className="text-white block font-semibold">Storefront Parking & Approach</strong>
                <span className="text-slate-400">Roadside parking is available in front of the showroom along the Jyothinagar Old DIG stretch.</span>
              </div>
              <a
                href={STORE_DATA.callUrl}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0"
              >
                Call For Help
              </a>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-slate-800 space-y-4">
          <div className="text-center space-y-1 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              COMMON QUESTIONS
            </h3>
            <p className="text-slate-400 text-xs">
              Quick facts about visiting The Brands Factory in Karimnagar.
            </p>
          </div>

          <div className="space-y-2.5">
            {STORE_DATA.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="store-card bg-slate-900 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
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
