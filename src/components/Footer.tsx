import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Star, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060A] border-t border-white/10 pt-16 pb-24 md:pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6B10] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <span className="font-brand font-bold text-sm gold-gradient-text">BF</span>
                </div>
              </div>
              <div>
                <span className="font-brand font-extrabold text-base tracking-wider text-white">
                  THE BRANDS FACTORY
                </span>
                <span className="block text-[9px] tracking-widest text-[#D4AF37] uppercase">
                  KARIMNAGAR • CLOTHING STORE
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
              Karimnagar's verified destination for premium branded menswear, executive suits, crisp linen casuals, authentic denim, and festive wedding ensembles.
            </p>

            {/* Verified Google Maps Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-[11px]">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Verified 4.3★ Rating on Google Maps</span>
              <a 
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-0.5 ml-1"
              >
                View
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-brand font-bold text-white uppercase tracking-wider text-xs">
              Collections
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Formals & Suits</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Linen & Casuals</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Denim & Trousers</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Festive & Ethnic</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Urban Streetwear</a></li>
              <li><a href="#collections" className="hover:text-[#D4AF37] transition-colors">Footwear & Accs</a></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-brand font-bold text-white uppercase tracking-wider text-xs">
              Store Features
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#style-studio" className="hover:text-[#D4AF37] transition-colors">Virtual Style Studio</a></li>
              <li><a href="#fit-finder" className="hover:text-[#D4AF37] transition-colors">Smart Fit Calculator</a></li>
              <li><a href="#experience" className="hover:text-[#D4AF37] transition-colors">Master Alterations</a></li>
              <li><a href="#experience" className="hover:text-[#D4AF37] transition-colors">Personal Stylist</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Verified Reviews</a></li>
              <li><a href="#location" className="hover:text-[#D4AF37] transition-colors">Store Hours & Maps</a></li>
            </ul>
          </div>

          {/* Store Location & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand font-bold text-white uppercase tracking-wider text-xs">
              Karimnagar Showroom
            </h4>
            <div className="space-y-2.5 text-gray-300 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{STORE_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Open Daily: 10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={STORE_DATA.callUrl} className="hover:text-white">{STORE_DATA.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={STORE_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  +91 79957 99565 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} The Brands Factory, Karimnagar. All rights reserved.</p>
            <p className="text-gray-400 text-[10px] mt-0.5">
              Verified details sourced directly from the official Google Maps listing.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={STORE_DATA.verifiedGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>Google Maps Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#location" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
              Directions & Hours
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
