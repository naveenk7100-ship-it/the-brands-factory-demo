import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Star, 
  ArrowRight, 
  Navigation, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Camera,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';

export const Hero: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Hero interactive photo switcher using genuine listing photos
  const heroPhotos = [
    {
      title: "Storefront Façade",
      desc: "Full street view & commercial entrance in Jyothinagar",
      url: STORE_DATA.realPhotos[0].url,
    },
    {
      title: "3D Signage",
      desc: "Official black acrylic 3D branding & wooden soffit lighting",
      url: STORE_DATA.realPhotos[1].url,
    },
    {
      title: "Showroom Windows",
      desc: "Display windows with mannequins, racks & apparel displays",
      url: STORE_DATA.realPhotos[2].url,
    },
    {
      title: "Entrance Steps",
      desc: "Elevated walkway with potted palms and parking approach",
      url: STORE_DATA.realPhotos[4].url,
    }
  ];

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpenNow(currentHour >= 10 && currentHour < 22);
  }, []);

  return (
    <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden store-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Store Identity & Verified Details */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Verified Listing Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-4 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs backdrop-blur-sm">
              <span className="flex items-center gap-1 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Google Verified
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{STORE_DATA.rating}</span>
              </div>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">Clothing Store</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-amber-400/90 font-semibold hidden sm:inline">Karimnagar</span>
            </div>

            {/* Main Headline with Real Storefront Slogan */}
            <div className="space-y-3">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full">
                <span>{STORE_DATA.slogan}</span>
                <span className="text-slate-600">•</span>
                <span>MORE THAN 100+ BRANDS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display tracking-tight break-words">
                THE BRANDS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  FACTORY
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Karimnagar’s prominent multi-brand apparel showroom in Jyothinagar. Explore hundreds of readymade garments including casual shirts, formal executive wear, stretch denim, festive wear, and everyday essentials under one roof.
              </p>
            </div>

            {/* Verified Location & Timing Status Card */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">{STORE_DATA.landmark}</strong>
                    <span className="text-slate-400 text-[11px]">{STORE_DATA.address}</span>
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 self-start sm:self-center flex items-center gap-1.5 border ${
                  isOpenNow 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                    : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{isOpenNow ? 'Open Now (Till 10 PM)' : 'Opens at 10 AM'}</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#departments"
                className="w-full sm:w-auto btn-primary-amber px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Departments</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`${STORE_DATA.whatsappUrl}?text=${encodeURIComponent('Hello The Brands Factory Karimnagar, I want to inquire about clothing stock and new arrivals.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-whatsapp px-6 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={STORE_DATA.verifiedGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Verified Quick Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Multi-Brand Showroom
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> In-Store Trial Rooms
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Open 7 Days (10 AM - 10 PM)
              </span>
            </div>

          </div>

          {/* Right Column: Genuine Image-Led Hero Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              
              {/* Main Real Photo Display */}
              <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden bg-slate-950">
                <img
                  src={heroPhotos[selectedPhotoIndex].url}
                  alt={heroPhotos[selectedPhotoIndex].title}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                
                {/* Gradient vignette for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real Store Photo</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[11px] font-extrabold">
                    Google Maps
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>4.3 ★</span>
                  </span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-white font-bold text-sm font-display">
                        {heroPhotos[selectedPhotoIndex].title}
                      </h4>
                      <p className="text-slate-300 text-xs line-clamp-1 mt-0.5">
                        {heroPhotos[selectedPhotoIndex].desc}
                      </p>
                    </div>
                    <a
                      href="#gallery"
                      className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold shrink-0 flex items-center gap-1"
                    >
                      <span>View Gallery</span>
                      <ChevronRight className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Real Photo Thumbnail Switcher Bar */}
              <div className="p-3 bg-slate-950 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-300">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    Select Store Perspective:
                  </span>
                  <span>{selectedPhotoIndex + 1} of {heroPhotos.length}</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {heroPhotos.map((photo, idx) => (
                    <button
                      key={photo.title}
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`relative rounded-lg overflow-hidden h-14 border transition-all cursor-pointer ${
                        selectedPhotoIndex === idx
                          ? 'border-amber-400 ring-2 ring-amber-400/40 shadow-md'
                          : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] font-semibold text-white truncate px-1 py-0.5 text-center">
                        {photo.title.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
