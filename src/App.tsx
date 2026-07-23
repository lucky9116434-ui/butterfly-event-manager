import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedEventsSection } from './components/FeaturedEventsSection';
import { EventProcessSection } from './components/EventProcessSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { PackagesSection } from './components/PackagesSection';
import { BookingSection } from './components/BookingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState('');

  const handleOpenEnquiry = (prefillTitle?: string) => {
    setModalPrefill(prefillTitle || '');
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Top Bar for Desktop */}
      <TopBar />

      {/* Sticky Main Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Booking')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('Event Planning Quote')} />

        {/* About Butterfly Event Organizer */}
        <AboutSection />

        {/* Services Showcase */}
        <ServicesSection onEnquireService={(serviceTitle) => handleOpenEnquiry(serviceTitle)} />

        {/* Featured Event Categories */}
        <FeaturedEventsSection onEnquireCategory={(categoryName) => handleOpenEnquiry(categoryName)} />

        {/* 4-Step Event Planning Process */}
        <EventProcessSection />

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Photo Gallery with Lightbox */}
        <GallerySection onEnquireImage={(title) => handleOpenEnquiry(title)} />

        {/* Featured Real Projects Showcase */}
        <FeaturedProjectsSection onEnquireProject={(projectTitle) => handleOpenEnquiry(projectTitle)} />

        {/* Event Packages */}
        <PackagesSection onSelectPackage={(packageName) => handleOpenEnquiry(packageName)} />

        {/* Booking & Enquiry Form */}
        <BookingSection prefilledCategory={modalPrefill} />

        {/* Google Reviews */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Map Location & Area Served */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry('Mobile Quick Booking')} />

      {/* Quick Enquiry Popup Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        prefilledTitle={modalPrefill}
      />
    </div>
  );
}
