import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { CollectionsSection } from './components/CollectionsSection';
import { StyleStudio } from './components/StyleStudio';
import { FitFinder } from './components/FitFinder';
import { StoreExperience } from './components/StoreExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { InquiryModal } from './components/InquiryModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Footer } from './components/Footer';

export function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090E] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Verified Quick Stats */}
        <QuickStats />

        {/* Curated Collections & Fast WhatsApp Inquiry */}
        <CollectionsSection onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Virtual Style Studio & Mix-and-Match Lookbook */}
        <StyleStudio onOpenInquiry={handleOpenInquiry} />

        {/* Smart Fit & Tailoring Calculator */}
        <FitFinder />

        {/* In-Store Showroom Experience */}
        <StoreExperience onOpenInquiry={handleOpenInquiry} />

        {/* Verified Google Maps Community Reviews & Trust Score */}
        <ReviewsSection />

        {/* Store Location, Navigation & Working Hours */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Actions on Mobile + Floating Quick Connect on Desktop */}
      <FloatingActionBar onOpenInquiry={handleOpenInquiry} />

      {/* In-Store Reservation & VIP Consultation Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialTopic={inquiryTopic}
      />
    </div>
  );
}

export default App;
