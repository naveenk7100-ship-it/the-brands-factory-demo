import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Tag, 
  MessageCircle, 
  CheckCircle2, 
  Calendar,
  Clock,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_DATA } from '../data/brandsFactoryData';

interface StoreInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const StoreInquiryModal: React.FC<StoreInquiryModalProps> = ({
  isOpen,
  onClose,
  initialTopic
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Casual & Linen Shirts');
  const [sizePreference, setSizePreference] = useState('Size 40 (M)');
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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#ffffff']
      });
    } catch (err) {
      // safe fallback
    }

    const message = encodeURIComponent(
      `Hello The Brands Factory Karimnagar! I am submitting an inquiry via your website:\n\n` +
      `• Name: ${name || 'Customer'}\n` +
      `• Contact: ${phone || 'Not specified'}\n` +
      `• Department: ${department}\n` +
      `• Approximate Size: ${sizePreference}\n` +
      `• Notes: ${notes || initialTopic || 'General Inquiry'}\n\n` +
      `Please let me know about current in-store availability.`
    );

    setTimeout(() => {
      window.open(`${STORE_DATA.whatsappUrl}?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-1 mb-5">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block font-display">
                Showroom Inquiry & Size Check
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Check Garment Availability
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Connect directly with our staff at The Brands Factory (Jyothinagar, Karimnagar) to check current arrivals or hold sizes for trial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" /> Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-sm text-white placeholder-slate-500 rounded-xl px-3.5 py-2 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" /> Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-sm text-white placeholder-slate-500 rounded-xl px-3.5 py-2 outline-none"
                />
              </div>

              {/* Department & Size Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-400" /> Clothing Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-xs text-white rounded-xl px-3 py-2.5 outline-none"
                  >
                    <option value="Casual & Linen Shirts">Casual & Linen Shirts</option>
                    <option value="Formal Executive Wear">Formal Executive Wear</option>
                    <option value="Denim Jeans & Chinos">Denim Jeans & Chinos</option>
                    <option value="T-Shirts & Polos">T-Shirts & Polos</option>
                    <option value="Festive & Party Wear">Festive & Party Wear</option>
                    <option value="Accessories & Belts">Accessories & Belts</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Approximate Size
                  </label>
                  <select
                    value={sizePreference}
                    onChange={(e) => setSizePreference(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-xs text-white rounded-xl px-3 py-2.5 outline-none"
                  >
                    <option value="Size 38 (S) / Waist 30">Size 38 (S) / Waist 30</option>
                    <option value="Size 40 (M) / Waist 32">Size 40 (M) / Waist 32</option>
                    <option value="Size 42 (L) / Waist 34">Size 42 (L) / Waist 34</option>
                    <option value="Size 44 (XL) / Waist 36">Size 44 (XL) / Waist 36</option>
                    <option value="Size 46 (XXL) / Waist 38+">Size 46 (XXL) / Waist 38+</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Notes / Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for light blue linen shirt or dark navy formal trouser"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-xs text-white placeholder-slate-500 rounded-xl px-3.5 py-2 outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full btn-whatsapp py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit & Inquire via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Connected directly to store mobile: {STORE_DATA.phone}</span>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-display">
                Inquiry Generated!
              </h3>
              <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                Opening WhatsApp to connect you with The Brands Factory Karimnagar staff for size checking.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-left text-slate-300 space-y-1.5 max-w-sm mx-auto">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{STORE_DATA.name}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {STORE_DATA.address}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Open 10:00 AM – 10:00 PM Daily</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="py-2 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
