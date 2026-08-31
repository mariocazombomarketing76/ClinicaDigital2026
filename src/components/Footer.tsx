import React from 'react';
import { Send } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      id="main-footer"
      className="w-full py-12 bg-[#f3f4f5] border-t border-[#c2c6d4]/40 text-[#424752]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-10 max-w-[1280px] mx-auto gap-6 md:gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          id="footer-brand-logo"
          className="text-xl font-bold text-[#003f87] tracking-tight hover:opacity-90 transition-opacity"
        >
          Saúde para Todos
        </a>

        {/* Navigation Links */}
        <nav id="footer-nav" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="#services"
            id="footer-link-privacy"
            className="text-[#424752] text-sm hover:text-[#003f87] transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#about"
            id="footer-link-terms"
            className="text-[#424752] text-sm hover:text-[#003f87] transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="https://t.me/mariocazombo"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-link-telegram"
            className="text-[#424752] text-sm hover:text-[#003f87] transition-colors duration-200 flex items-center gap-1"
          >
            <Send className="w-3 h-3" />
            <span>Telegram Channel</span>
          </a>
          <a
            href="#contact"
            id="footer-link-contact"
            className="text-[#424752] text-sm hover:text-[#003f87] transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>

        {/* Copyright */}
        <div
          id="footer-copyright"
          className="text-sm font-medium text-[#003f87] text-center md:text-right"
        >
          © 2024 Saúde para Todos. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
