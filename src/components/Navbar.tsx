import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Navigation, 
  MessageCircle,
  Star,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const Navbar: React.FC = () => {
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
    { name: 'Storefront & Photos', href: '#gallery' },
    { name: 'Apparel Departments', href: '#departments' },
    { name: 'Size & Fit Guide', href: '#sizing' },
    { name: 'In-Store Services', href: '#services' },
    { name: 'Google Rating', href: '#reputation' },
    { name: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      {/* Top Verified Store Banner */}
      <div className="bg-[#0D111A] border-b border-white/10 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Google Maps Listing
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Opp. Old DIG Building, Jyothinagar, Karimnagar
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>10:00 AM – 10:00 PM (Daily)</span>
            </div>
            <a 
              href={STORE_DATA.callUrl} 
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3" />
              {STORE_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0A0D14]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3' 
          : 'bg-[#0A0D14]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Real Store Brand Mark */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center p-1 group-hover:border-amber-400 transition-colors">
                <span className="font-display font-black text-amber-400 text-lg tracking-tight">BF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white group-hover:text-amber-400 transition-colors leading-tight">
                  THE BRANDS FACTORY
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  KARIMNAGAR • 100+ BRANDS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Google Maps Directions */}
              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold transition-all hover:border-amber-400/40"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Directions</span>
              </a>

              {/* Direct WhatsApp Chat */}
              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about in-store apparel availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={STORE_DATA.callUrl}
                className="btn-primary-amber inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={STORE_DATA.callUrl}
                className="p-2 rounded-lg bg-white/5 text-amber-400 border border-white/10"
                aria-label="Call Store"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D111A] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
              <a
                href={STORE_DATA.callUrl}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {STORE_DATA.phone}
              </a>
              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory, I am inquiring from your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 col-span-2"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                Open Directions in Google Maps
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
