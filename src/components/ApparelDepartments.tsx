import React, { useState, useMemo } from 'react';
import { 
  Shirt, 
  Tag, 
  MessageCircle, 
  Check, 
  Search, 
  SlidersHorizontal, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { STORE_DATA } from '../data/brandsFactoryData';
import type { ApparelCategory } from '../data/brandsFactoryData';

interface ApparelDepartmentsProps {
  onOpenInquiry: (categoryTitle: string) => void;
}

export const ApparelDepartments: React.FC<ApparelDepartmentsProps> = ({ onOpenInquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return STORE_DATA.apparelCategories.filter(cat => {
      const matchesFilter = selectedFilter === 'all' || cat.id === selectedFilter;
      const matchesSearch = 
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.types.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const handleWhatsAppInquiry = (cat: ApparelCategory) => {
    const text = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am inquiring about the "${cat.title}" department (${cat.sizes}). Do you have new arrivals in stock?`
    );
    window.open(`${STORE_DATA.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="departments" className="py-16 lg:py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
            <Shirt className="w-3.5 h-3.5" />
            <span>Showroom Departments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            CLOTHING COLLECTIONS & DEPARTMENTS
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Explore the key readymade garment sections available at our Jyothinagar store. With over 100+ brands, we cater to daily casual wear, office formals, and celebrations.
          </p>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search shirts, trousers, denim, formals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 text-sm text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 outline-none transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Departments
            </button>
            {STORE_DATA.apparelCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Departments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="store-card p-6 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      {cat.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {cat.badge && (
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300 text-[10px] font-bold shrink-0">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {cat.description}
                </p>

                {/* Available Garment Types */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Available Types on Racks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[11px]"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Size Range & Highlights */}
                <div className="pt-2 text-xs space-y-1 text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cat.sizes}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleWhatsAppInquiry(cat)}
                  className="btn-whatsapp py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Check Sizes</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(`Inquiry for ${cat.title}`)}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Transparency & Authentic Policy Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400 space-y-1">
          <p className="font-semibold text-slate-300 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Transparent In-Store Pricing Policy
          </p>
          <p>
            Prices and clearance offers vary based on brand consignments and seasonal arrivals. Contact store staff on WhatsApp (+91 79957 99565) or visit our Jyothinagar showroom for today's active rack offers.
          </p>
        </div>

      </div>
    </section>
  );
};
