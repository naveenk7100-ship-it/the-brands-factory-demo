import React, { useState } from 'react';
import { 
  Camera, 
  Eye, 
  X, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Upload, 
  MessageCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';
import type { RealPhoto } from '../data/brandsFactoryData';

export const StoreGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<RealPhoto | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#0D111A] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Listing Photographs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            REAL STOREFRONT & SHOWROOM GALLERY
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Genuine photographs from the verified Google Maps listing of The Brands Factory located in Jyothinagar, Karimnagar (opp. Old DIG Building).
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_DATA.realPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group store-card overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-[11px] font-bold text-amber-400 border border-amber-500/30">
                    {photo.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-lg bg-slate-900/90 text-white text-xs font-semibold flex items-center gap-1 border border-white/20">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Genuine Listing Photo
                  </span>
                  <span>{photo.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Addition Guide & Client Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Upload className="w-4 h-4" />
                <span>Store Media Transparency & Client Guide</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Want to Feature More In-Store Department Photos?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The Google Maps listing currently hosts one verified exterior storefront photograph. To make this website even more immersive without using generic stock imagery, the shop owner can provide photos of:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>1. Formal suits, blazers & trouser section</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>2. Denim wall & casual jeans racks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>3. Casual & festive kurta hangers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>4. Billing desk & trial rooms</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar! I am contacting you regarding your website and would like to share additional showroom photos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Photos via WhatsApp</span>
              </a>

              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <span>View Google Maps Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-slate-950 max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 space-y-2">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-bold">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-slate-400">
                  Source: {selectedPhoto.source}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {selectedPhoto.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
