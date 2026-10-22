import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import sraLogo from '../assets/sra-logo.jpg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Products', href: '#products' },
    { label: 'Why Visit', href: '#why-visit' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 shadow-[0_4px_20px_-10px_rgba(33,75,56,0.08)]'
          : 'bg-ivory/90 border-b border-charcoal/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24 gap-2">
          {/* Clinic Brand & Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none min-w-0"
            aria-label="Sri Rama Acupuncture Clinic - Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden border border-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={sraLogo}
                alt="Sri Rama Acupuncture Clinic emblem"
                className="w-full h-full object-cover"
                width="56"
                height="56"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm sm:text-lg md:text-xl font-semibold text-forest tracking-tight leading-tight group-hover:text-forest-deep transition-colors truncate">
                Sri Rama Acupuncture Clinic
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-editorial text-charcoal-muted font-sans font-medium truncate">
                Chinnamanur · Theni District
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 flex-shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-forest transition-colors tracking-wide py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-forest hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Phone (Tablet & Desktop) */}
          <div className="hidden sm:flex items-center gap-3 md:gap-5 flex-shrink-0">
            <a
              href="tel:9942611444"
              className="text-xs font-medium text-charcoal-soft hover:text-forest tracking-wide flex items-center gap-1.5 transition-colors py-2 px-1 whitespace-nowrap min-h-[44px]"
              aria-label="Call clinic at 9942611444"
            >
              <FiPhone className="text-forest text-sm flex-shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">99426 11444</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 md:gap-2 bg-forest hover:bg-forest-deep text-ivory text-[11px] md:text-xs uppercase tracking-eyebrow font-medium px-3.5 md:px-5 py-2.5 rounded-none transition-all duration-300 hover:shadow-sm focus:ring-2 focus:ring-forest focus:ring-offset-2 whitespace-nowrap min-h-[44px]"
            >
              <span>Book Appointment</span>
              <FiArrowUpRight className="text-sm text-gold" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden flex-shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-charcoal hover:text-forest transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" aria-hidden="true" />
              ) : (
                <FiMenu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-ivory border-b border-charcoal/10 px-4 sm:px-6 pt-3 pb-6 transition-all duration-300 shadow-lg"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans font-medium text-charcoal hover:text-forest transition-colors py-3 border-b border-charcoal/5 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:9942611444"
                className="flex items-center justify-center gap-2 text-sm text-forest font-medium py-3 border border-forest/30 min-h-[44px]"
              >
                <FiPhone aria-hidden="true" />
                <span>Call: 99426 11444</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-forest text-ivory text-xs uppercase tracking-eyebrow font-medium py-3.5 text-center min-h-[44px]"
              >
                <span>Book an Appointment</span>
                <FiArrowUpRight className="text-gold" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
