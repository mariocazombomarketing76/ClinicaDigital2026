/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Specialties } from './components/Specialties.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { SupportModal } from './components/SupportModal.tsx';

export default function App() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const handleOpenBooking = () => {
    window.open('https://t.me/mariocazombo', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] font-sans selection:bg-[#0056b3] selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenSupport={() => setSupportModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenSupport={() => setSupportModalOpen(true)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Services / Specialties Bento Grid */}
        <Specialties />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact & Telegram Channel Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Support Dialog */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />
    </div>
  );
}

