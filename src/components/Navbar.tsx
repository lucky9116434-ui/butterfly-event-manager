import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-amber-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-400 to-amber-300 p-0.5 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-600 fill-amber-100" />
              </div>
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-gray-900 block leading-tight">
                Butterfly
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700 block -mt-0.5">
                Event Organizer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-amber-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-full text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors border border-gray-200"
              title="Call Us Directly"
            >
              <Phone className="w-4 h-4 text-amber-600" />
            </a>
            <button
              onClick={onOpenEnquiry}
              className="bg-gold-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden bg-gold-gradient text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 shadow-sm"
            >
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-amber-100 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-gray-800 hover:text-amber-700 py-2 px-3 rounded-lg hover:bg-amber-50 transition-colors border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-gold-gradient text-white font-semibold py-3 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Your Event Now</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full bg-gray-50 text-gray-800 border border-gray-200 font-medium py-2.5 rounded-xl text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
