import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import sraLogo from '../assets/sra-logo.webp';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isTamil } = useLanguage();

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
    { label: t('nav.home', 'Home'), href: '#hero' },
    { label: t('nav.doctor', 'Healer'), href: '#doctor' },
    { label: t('nav.treatments', 'Treatments & Products'), href: '#treatments' },
    { label: t('nav.about', 'About'), href: '#about' },
    { label: t('nav.testimonials', 'Testimonials'), href: '#testimonials' },
    { label: t('nav.gallery', 'Gallery'), href: '#gallery' },
    { label: t('nav.contact', 'Contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 shadow-[0_4px_20px_-10px_rgba(33,75,56,0.08)]'
          : 'bg-ivory/90 border-b border-charcoal/5'
      }`}
    >
      <div
        className={`${
          isTamil
            ? 'w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 xl:px-4 2xl:px-8'
            : 'max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'
        }`}
      >
        <div
          className={`flex items-center justify-between h-20 md:h-24 ${
            isTamil ? 'ta-navbar-grid gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4' : 'gap-2'
          }`}
        >
          {/* Clinic Brand & Logo */}
          <a
            href="#hero"
            className={`flex items-center group focus:outline-none flex-shrink-0 min-w-0 ${
              isTamil ? 'ta-brand-col gap-2 sm:gap-2.5 xl:gap-3' : 'gap-2.5 sm:gap-3.5'
            }`}
            aria-label={isTamil ? 'ஸ்ரீ ராமா அக்குபஞ்சர் கிளினிக் - முகப்பு' : 'Sri Rama Acupuncture Clinic - Home'}
          >
            <div
              className={`relative flex-shrink-0 rounded-full overflow-hidden border border-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                isTamil
                  ? 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12'
                  : 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
              }`}
            >
              <img
                src={sraLogo}
                alt="Sri Rama Acupuncture Clinic emblem"
                className="w-full h-full object-cover"
                width="56"
                height="56"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-serif font-semibold text-forest leading-tight group-hover:text-forest-deep transition-colors whitespace-nowrap ${
                  isTamil
                    ? 'ta-brand-title text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] tracking-normal font-medium'
                    : 'text-sm sm:text-base lg:text-lg xl:text-xl tracking-tight'
                }`}
              >
                {isTamil ? 'ஸ்ரீ ராமா அக்குபஞ்சர் கிளினிக்' : 'Sri Rama Acupuncture Clinic'}
              </span>
              <span
                className={`text-[10px] text-charcoal-muted font-sans font-medium truncate ${
                  isTamil
                    ? 'ta-brand-sub sm:text-[10.5px] tracking-normal'
                    : 'sm:text-[11px] uppercase tracking-wider sm:tracking-editorial'
                }`}
              >
                {isTamil ? 'சின்னமனூர் · தேனி மாவட்டம்' : 'Chinnamanur · Theni District'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`items-center flex-shrink-0 ${
              isTamil
                ? 'ta-nav-links hidden xl:flex gap-1.5 xl:gap-2 2xl:gap-3.5'
                : 'hidden lg:flex gap-4 xl:gap-6'
            }`}
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${
                  isTamil
                    ? 'ta-nav-link text-[13px] 2xl:text-sm font-medium text-charcoal/80 hover:text-forest transition-colors tracking-normal px-1 py-1 whitespace-nowrap'
                    : 'text-xs xl:text-sm font-medium text-charcoal/80 hover:text-forest transition-colors tracking-wide py-1'
                } relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-forest hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Phone (Tablet & Desktop) */}
          {isTamil ? (
            <>
              <a
                href="tel:9942611444"
                className="ta-phone-cta hidden sm:flex text-xs font-medium text-charcoal-soft hover:text-forest tracking-wide items-center gap-1.5 transition-colors py-2 px-1 whitespace-nowrap min-h-[44px]"
                aria-label={t('nav.callNow', 'Call Clinic')}
              >
                <FiPhone className="text-forest text-sm flex-shrink-0" aria-hidden="true" />
                <span className="hidden md:inline font-sans">99426 11444</span>
              </a>

              <a
                href="#contact"
                className="ta-appointment-cta hidden sm:inline-flex items-center gap-1.5 md:gap-2 bg-forest hover:bg-forest-deep text-ivory font-medium transition-all duration-300 hover:shadow-sm focus:ring-2 focus:ring-forest focus:ring-offset-2 whitespace-nowrap min-h-[40px] text-xs tracking-normal px-3 py-2 rounded-none font-sans"
              >
                <span>{t('nav.bookConsultation', 'Book Appointment')}</span>
                <FiArrowUpRight className="text-sm text-gold flex-shrink-0" aria-hidden="true" />
              </a>
            </>
          ) : (
            <div className="hidden sm:flex items-center gap-3 md:gap-4 flex-shrink-0">
              <a
                href="tel:9942611444"
                className="text-xs font-medium text-charcoal-soft hover:text-forest tracking-wide flex items-center gap-1.5 transition-colors py-2 px-1 whitespace-nowrap min-h-[44px]"
                aria-label={t('nav.callNow', 'Call Clinic')}
              >
                <FiPhone className="text-forest text-sm flex-shrink-0" aria-hidden="true" />
                <span className="hidden md:inline font-sans">99426 11444</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 md:gap-2 bg-forest hover:bg-forest-deep text-ivory font-medium transition-all duration-300 hover:shadow-sm focus:ring-2 focus:ring-forest focus:ring-offset-2 whitespace-nowrap min-h-[44px] text-[11px] md:text-xs uppercase tracking-eyebrow px-3.5 md:px-5 py-2.5 rounded-none"
              >
                <span>{t('nav.bookConsultation', 'Book Appointment')}</span>
                <FiArrowUpRight className="text-sm text-gold flex-shrink-0" aria-hidden="true" />
              </a>
            </div>
          )}

          {/* Mobile & Tablet Menu Toggle Button */}
          <div
            className={`flex items-center flex-shrink-0 ${
              isTamil ? 'ta-mobile-toggle xl:hidden' : 'lg:hidden'
            }`}
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-charcoal hover:text-forest transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-top-drawer"
              aria-label={mobileMenuOpen ? t('nav.closeMenu', 'Close menu') : t('nav.menuToggle', 'Open main menu')}
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

      {/* Mobile & Tablet Top Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-top-drawer"
          className={`${
            isTamil ? 'xl:hidden' : 'lg:hidden'
          } bg-ivory border-b border-charcoal/10 px-4 sm:px-6 pt-3 pb-6 transition-all duration-300 shadow-lg`}
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-sans font-medium text-charcoal hover:text-forest transition-colors py-2.5 border-b border-charcoal/5 min-h-[44px] flex items-center ${
                  isTamil ? 'tracking-normal' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="tel:9942611444"
                className="flex items-center justify-center gap-2 text-sm text-forest font-medium py-2.5 border border-forest/30 min-h-[44px]"
              >
                <FiPhone aria-hidden="true" />
                <span>{isTamil ? 'அழைக்க: 99426 11444' : 'Call: 99426 11444'}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center gap-2 bg-forest text-ivory text-xs font-medium py-3 text-center min-h-[44px] ${
                  isTamil ? 'tracking-normal' : 'uppercase tracking-eyebrow'
                }`}
              >
                <span>{t('nav.bookConsultation', 'Book an Appointment')}</span>
                <FiArrowUpRight className="text-gold" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
