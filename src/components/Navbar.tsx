import React, { useState, useEffect } from 'react';
import { Send, Headphones, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSupport: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSupport, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-[#c2c6d4]/40'
          : 'bg-white/80 backdrop-blur-md border-[#c2c6d4]/30'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-10 h-16 max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="text-xl md:text-2xl font-bold text-[#003f87] tracking-tight hover:opacity-90 transition-opacity"
        >
          Saúde para Todos
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#services"
            id="nav-link-services"
            className="text-[#424752] hover:text-[#003f87] font-medium text-sm transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#about"
            id="nav-link-about"
            className="text-[#424752] hover:text-[#003f87] font-medium text-sm transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#testimonials"
            id="nav-link-testimonials"
            className="text-[#424752] hover:text-[#003f87] font-medium text-sm transition-colors duration-200"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            id="nav-link-contact"
            className="text-[#424752] hover:text-[#003f87] font-medium text-sm transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="btn-support-header"
            onClick={onOpenSupport}
            className="text-sm font-medium text-[#003f87] hover:text-[#0056b3] transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-[#e3f2fd]/50 cursor-pointer"
          >
            Support
          </button>
          <a
            id="btn-join-telegram-header"
            href="https://t.me/mariocazombo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0056b3] hover:bg-[#003f87] text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow active:scale-98"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://t.me/mariocazombo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0056b3] text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#424752] hover:text-[#003f87] focus:outline-none rounded-lg"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-white border-b border-[#c2c6d4]/40 px-6 py-5 shadow-lg space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#424752] hover:text-[#003f87] font-medium text-base py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#424752] hover:text-[#003f87] font-medium text-base py-1"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#424752] hover:text-[#003f87] font-medium text-base py-1"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#424752] hover:text-[#003f87] font-medium text-base py-1"
            >
              Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="w-full text-center text-[#003f87] border border-[#c2c6d4]/60 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#e3f2fd]/30"
            >
              <Headphones className="w-4 h-4" />
              <span>Falar com Atendimento</span>
            </button>
            <a
              href="https://t.me/mariocazombo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#0056b3] text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#003f87]"
            >
              <Send className="w-4 h-4" />
              <span>Agendar via Telegram (@mariocazombo)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
