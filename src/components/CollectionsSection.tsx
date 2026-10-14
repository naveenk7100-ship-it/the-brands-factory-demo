import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Tag, 
  Eye, 
  MessageCircle, 
  Check, 
  X, 
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';
import type { FashionItem } from '../data/brandsFactoryData';

interface CollectionsSectionProps {
  onOpenInquiry: (itemTitle: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<FashionItem | null>(null);

  const filteredItems = useMemo(() => {
    return STORE_DATA.featuredItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleWhatsAppInquiry = (item: FashionItem) => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am inquiring about the "${item.name}" (${item.categoryLabel}, Fit: ${item.fit}). Is this available in-store in my size?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="py-20 lg:py-28 relative overflow-hidden bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Apparel Drops</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            SIGNATURE <span className="gold-gradient-text">COLLECTIONS</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From boardroom-ready Italian suits to relaxed French linens and heavy selvedge denim. Explore our in-store selections priced directly for value.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by style, linen, wool, denim, fit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F121C] border border-white/10 focus:border-[#D4AF37] text-sm text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {STORE_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E1B] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5 hover:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/5 p-8 max-w-md mx-auto">
            <p className="text-gray-300 font-medium">No garments matched your search.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#D4AF37] underline font-semibold cursor-pointer"
            >
              Reset filters and show all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="luxury-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#0A0C14]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-gray-200 text-[11px] font-medium">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Quick View Trigger */}
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Fabric & Fit Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">
                        {item.fit}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                        {item.fabric}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleWhatsAppInquiry(item)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all cursor-pointer"
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Size</span>
                    </button>

                    <button
                      onClick={() => onOpenInquiry(`Reserve Look: ${item.name}`)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 text-gray-200 text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Hold In-Store</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom In-Store Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F131F] via-[#141926] to-[#0F131F] border border-[#D4AF37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              Looking for a Specific Brand or Custom Size?
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm">
              We carry extended sizes up to 48 chest / 42 waist with on-site trial rooms & alteration master at our Karimnagar store.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={STORE_DATA.callUrl}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              Call {STORE_DATA.phone}
            </a>
            <button
              onClick={() => onOpenInquiry('Custom Sizing Inquiry')}
              className="luxury-button-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide cursor-pointer"
            >
              Ask Stylist
            </button>
          </div>
        </div>

      </div>

      {/* Item Quick View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0D101A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 sm:h-full bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#D4AF37] text-black text-[10px] font-bold uppercase">
                    {selectedItem.tag}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {selectedItem.name}
                  </h3>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Cut / Fit:</span>
                      <span className="text-white font-medium">{selectedItem.fit}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Fabric Richness:</span>
                      <span className="text-white font-medium">{selectedItem.fabric}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">In-Store Trial:</span>
                      <span className="text-emerald-400 font-semibold">Available Today</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4">
                    <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                      Key Highlights:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-300">
                      {selectedItem.highlights.map((h, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#D4AF37] shrink-0" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Size Availability on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      const name = selectedItem.name;
                      setSelectedItem(null);
                      onOpenInquiry(`Trial Request for ${name}`);
                    }}
                    className="w-full luxury-button-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Book In-Store Trial
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
