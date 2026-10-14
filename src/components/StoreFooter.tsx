import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const StoreFooter: React.FC = () => {
  return (
    <footer className="bg-[#07090E] border-t border-slate-800 pt-14 pb-20 md:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-amber-500/30 flex items-center justify-center p-1">
                <span className="font-display font-black text-amber-400 text-sm">BF</span>
              </div>
              <div>
                <span className="font-display font-black text-base tracking-wider text-white">
                  THE BRANDS FACTORY
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  KARIMNAGAR • 100+ BRANDS
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Multi-brand readymade garment showroom in Jyothinagar, Karimnagar. Casual shirts, formal executive wear, stretch denim, ethnic collections, and accessories.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>4.3 ★ Verified on Google Maps</span>
              <a 
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-0.5 ml-1"
              >
                <span>View</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Quick Departments */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              In-Store Departments
            </h4>
            <ul className="space-y-1.5 text-slate-300">
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">Casual & Linen Shirts</a></li>
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">Formal Executive Suits & Trousers</a></li>
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">Denim Jeans & Chinos</a></li>
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">Festive & Ethnic Wear</a></li>
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">T-Shirts & Streetwear</a></li>
              <li><a href="#departments" className="hover:text-amber-400 transition-colors">Belts & Accessories</a></li>
            </ul>
          </div>

          {/* Location & Contacts */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Karimnagar Showroom
            </h4>
            <div className="space-y-2 text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{STORE_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Open 7 Days: 10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={STORE_DATA.callUrl} className="hover:text-white font-semibold">{STORE_DATA.phone}</a>
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} The Brands Factory, Karimnagar. All rights reserved.</p>
            <p className="text-slate-400 mt-0.5">
              Photographs and verified store details sourced from official Google Maps listing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={STORE_DATA.verifiedGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 flex items-center gap-1"
            >
              <span>Google Maps Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#location" className="text-slate-400 hover:text-amber-400">
              Hours & Directions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
