import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Navigation, 
  ShoppingBag, 
  ArrowUp,
  Clock
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

interface FloatingActionBarProps {
  onOpenInquiry: (topic?: string) => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenInquiry }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Below md screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0C14]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-4 gap-2">
          
          {/* Call */}
          <a
            href={STORE_DATA.callUrl}
            className="flex flex-col items-center justify-center py-1 rounded-xl bg-white/5 border border-white/10 text-gray-200 active:bg-white/10"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] font-semibold mt-0.5">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I am browsing your demo site and want to inquire.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 active:bg-emerald-500/25"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={STORE_DATA.verifiedGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 rounded-xl bg-white/5 border border-white/10 text-gray-200 active:bg-white/10"
          >
            <Navigation className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] font-semibold mt-0.5">Directions</span>
          </a>

          {/* Reserve / Inquire */}
          <button
            onClick={() => onOpenInquiry('Sticky Mobile CTA')}
            className="flex flex-col items-center justify-center py-1 rounded-xl luxury-button-gold text-black active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[10px] font-bold mt-0.5">Inquire</span>
          </button>

        </div>
      </div>

      {/* Desktop Floating Action Widget (Bottom-right corner) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-2xl bg-[#0D101A]/90 hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-white/10 hover:border-[#D4AF37] transition-all shadow-xl cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Floating Pill */}
        <a
          href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory, I have a question about sizing and arrivals.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl transition-transform hover:scale-105 group"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Store Phone Quick Pill */}
        <a
          href={STORE_DATA.callUrl}
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0D101A]/95 backdrop-blur-md hover:bg-white/10 text-gray-200 border border-white/15 text-xs font-semibold shadow-xl transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{STORE_DATA.phone}</span>
        </a>

      </div>
    </>
  );
};
