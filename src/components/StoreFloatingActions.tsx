import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Navigation, 
  ArrowUp, 
  Clock 
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

interface StoreFloatingActionsProps {
  onOpenInquiry: (topic?: string) => void;
}

export const StoreFloatingActions: React.FC<StoreFloatingActionsProps> = ({ onOpenInquiry }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0D14]/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5">
          {/* Call */}
          <a
            href={STORE_DATA.callUrl}
            className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 active:bg-slate-800"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-semibold mt-0.5">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about clothing stock.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 active:bg-emerald-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={STORE_DATA.verifiedGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 active:bg-slate-800"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-semibold mt-0.5">Maps</span>
          </a>

          {/* Inquire */}
          <button
            onClick={() => onOpenInquiry('Mobile Action Bar')}
            className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold active:scale-95"
          >
            <span className="text-[11px] font-extrabold">Inquire</span>
            <span className="text-[9px] font-medium leading-none">Stock</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Connect Widget */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl cursor-pointer transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Pill */}
        <a
          href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about your apparel stock.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto btn-whatsapp flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold shadow-2xl transition-transform hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Store</span>
        </a>

        {/* Call Pill */}
        <a
          href={STORE_DATA.callUrl}
          className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold shadow-xl"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>{STORE_DATA.phone}</span>
        </a>
      </div>
    </>
  );
};
