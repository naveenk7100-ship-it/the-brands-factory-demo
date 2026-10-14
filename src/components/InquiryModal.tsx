import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  User, 
  Phone, 
  Tag, 
  MessageCircle, 
  CheckCircle2, 
  ShoppingBag,
  Clock,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_DATA } from '../data/brandsFactoryData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  initialTopic 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Formals & Suits');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setNotes(`Inquiry regarding: ${initialTopic}`);
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [initialTopic, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#ffffff', '#AA7C11']
      });
    } catch (err) {
      // safe fallback
    }

    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am booking a VIP In-Store Styling / Reservation:\n\n` +
      `• Name: ${name || 'Customer'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Interest: ${category}\n` +
      `• Preferred Visit Date: ${preferredDate || 'This Week'}\n` +
      `• Notes: ${notes || initialTopic || 'None'}\n\n` +
      `Please let me know if an appointment is confirmed!`
    );

    setTimeout(() => {
      window.open(`${STORE_DATA.whatsappUrl}?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0D101A] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest font-brand flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> In-Store VIP Reservation
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Reserve Look & Personal Trial
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Reserve styles in your size or book a 1-on-1 wardrobe consultation at our Jyothinagar, Karimnagar showroom.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" /> Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#131724] border border-white/10 focus:border-[#D4AF37] text-sm text-white placeholder-gray-500 rounded-xl px-3.5 py-2.5 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#131724] border border-white/10 focus:border-[#D4AF37] text-sm text-white placeholder-gray-500 rounded-xl px-3.5 py-2.5 outline-none transition-all"
                />
              </div>

              {/* Category & Date Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#D4AF37]" /> Apparel Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#131724] border border-white/10 focus:border-[#D4AF37] text-xs text-white rounded-xl px-3 py-2.5 outline-none transition-all"
                  >
                    <option value="Formals & Suits">Formals & Suits</option>
                    <option value="Linen & Casuals">Linen & Casuals</option>
                    <option value="Denim & Trousers">Denim & Trousers</option>
                    <option value="Festive & Ethnic">Festive & Ethnic</option>
                    <option value="Urban Streetwear">Urban Streetwear</option>
                    <option value="Footwear & Accessories">Footwear & Accessories</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Preferred Visit Day
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#131724] border border-white/10 focus:border-[#D4AF37] text-xs text-white rounded-xl px-3 py-2.5 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">
                  Notes / Specific Sizes or Brands (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Size 40 formal shirt and 32 chinos for a reception this weekend"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#131724] border border-white/10 focus:border-[#D4AF37] text-xs text-white placeholder-gray-500 rounded-xl px-3.5 py-2 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full luxury-button-gold py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm & Open WhatsApp Chat</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                Instant response from store stylist • Store open daily 10 AM – 10 PM
              </p>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-bold text-white">
                Reservation Forwarded!
              </h3>
              <p className="text-gray-300 text-xs max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>! Your inquiry details are being shared with our in-house stylist on WhatsApp.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-left text-gray-300 space-y-2 max-w-sm mx-auto">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{STORE_DATA.name}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                {STORE_DATA.address}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1 border-t border-white/5">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                <span>Open 10:00 AM – 10:00 PM (Daily)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
