import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreGallery } from './components/StoreGallery';
import { ApparelDepartments } from './components/ApparelDepartments';
import { SizeFitGuide } from './components/SizeFitGuide';
import { StoreServices } from './components/StoreServices';
import { StoreReputation } from './components/StoreReputation';
import { StoreLocation } from './components/StoreLocation';
import { StoreFooter } from './components/StoreFooter';
import { StoreFloatingActions } from './components/StoreFloatingActions';
import { StoreInquiryModal } from './components/StoreInquiryModal';

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
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Verified Header & Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Image-Led Hero Section Featuring Real Storefront Photo */}
        <Hero />

        {/* Real Listing Photo Gallery & Client Photo Upload Guide */}
        <StoreGallery />

        {/* Multi-Brand Apparel Departments & In-Store Categories */}
        <ApparelDepartments onOpenInquiry={handleOpenInquiry} />

        {/* Practical Size & Fit Guide */}
        <SizeFitGuide />

        {/* Showroom Services & Amenities */}
        <StoreServices />

        {/* Google Maps Verified Community Rating (4.3★) */}
        <StoreReputation />

        {/* Store Coordinates, Verified Address, Schedule & FAQs */}
        <StoreLocation />
      </main>

      {/* Store Footer */}
      <StoreFooter />

      {/* Sticky Mobile Bar & Floating Desktop Shortcuts */}
      <StoreFloatingActions onOpenInquiry={handleOpenInquiry} />

      {/* In-Store Inquiry & Size Check Modal */}
      <StoreInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialTopic={inquiryTopic}
      />
    </div>
  );
}

export default App;
