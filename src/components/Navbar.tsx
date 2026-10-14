import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Navigation, 
  MessageCircle,
  Star,
  ShoppingBag
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

interface NavbarProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Style Studio', href: '#style-studio' },
    { name: 'Fit Finder', href: '#fit-finder' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#0D101A] border-b border-white/5 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Verified Google Maps Listing
            </span>
            <span className="text-gray-500 hidden md:inline">|</span>
            <span className="text-gray-300 hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4AF37]" /> Jyothinagar, Karimnagar (Opp. Old DIG Building)
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>10:00 AM – 10:00 PM (Daily)</span>
            </div>
            <a 
              href={STORE_DATA.callUrl} 
              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3" />
              {STORE_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08090E]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
          : 'bg-[#08090E]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Brand Mark */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6C25B] via-[#D4AF37] to-[#8C6B10] p-0.5 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <span className="font-brand font-bold text-lg gold-gradient-text tracking-tighter">BF</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-brand font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  THE BRANDS FACTORY
                </span>
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                  KARIMNAGAR • MULTI-BRAND OUTLET
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Google Maps Directions */}
              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-semibold transition-all hover:border-[#D4AF37]/40"
                title="Open in Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Directions</span>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I am interested in inquiring about your fashion collections.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* VIP Inquiry / Consultation Button */}
              <button
                onClick={() => onOpenInquiry('General VIP Styling')}
                className="luxury-button-gold px-4 py-2 rounded-lg text-xs tracking-wide uppercase font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Reserve / Inquire</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={STORE_DATA.callUrl}
                className="p-2 rounded-lg bg-white/5 text-[#D4AF37] border border-white/10 hover:bg-white/10"
                aria-label="Call Store"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0C13] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-gray-200 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
              <a
                href={STORE_DATA.callUrl}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Call Store
              </a>
              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory, I want to inquire about current offers.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-xs font-semibold text-emerald-400"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 col-span-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Open Directions in Google Maps
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Mobile Navigation Inquiry');
              }}
              className="w-full luxury-button-gold py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Inquire / Reserve A Look
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
