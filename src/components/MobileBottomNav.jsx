import React, { useState, useEffect } from 'react';
import {
  FiHome,
  FiUser,
  FiActivity,
  FiPackage,
  FiMoreHorizontal,
  FiInfo,
  FiMessageSquare,
  FiImage,
  FiPhone,
  FiX,
} from 'react-icons/fi';

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  // Primary bottom navigation items
  const primaryNavItems = [
    { id: 'hero', label: 'Home', href: '#hero', icon: FiHome },
    { id: 'doctor', label: 'Doctor', href: '#doctor', icon: FiUser },
    { id: 'services', label: 'Services', href: '#services', icon: FiActivity },
    { id: 'products', label: 'Products', href: '#products', icon: FiPackage },
  ];

  // Secondary items shown inside the "More" compact drawer
  const moreNavItems = [
    { id: 'about', label: 'About the Clinic', href: '#about', icon: FiInfo },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials', icon: FiMessageSquare },
    { id: 'gallery', label: 'Gallery & Setting', href: '#gallery', icon: FiImage },
    { id: 'contact', label: 'Contact & Appointments', href: '#contact', icon: FiPhone },
  ];

  // IntersectionObserver to determine active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'doctor', 'services', 'products', 'about', 'testimonials', 'gallery', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: Close "More" drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && moreMenuOpen) {
        setMoreMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moreMenuOpen]);

  const handleNavClick = (href, sectionId) => {
    setActiveSection(sectionId);
    setMoreMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMoreActive = moreNavItems.some((item) => item.id === activeSection);

  return (
    <>
      {/* "More" Sheet Backdrop Overlay */}
      {moreMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setMoreMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* "More" Accessible Compact Drawer Menu */}
      {moreMenuOpen && (
        <div
          id="mobile-more-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Additional Navigation Options"
          className="fixed bottom-[4.25rem] left-3 right-3 z-50 lg:hidden bg-ivory border border-charcoal/15 shadow-xl rounded-none p-4 transition-all duration-200 ease-out"
          style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-charcoal/10">
            <span className="text-[11px] uppercase tracking-editorial text-forest font-semibold">
              More Sections
            </span>
            <button
              type="button"
              onClick={() => setMoreMenuOpen(false)}
              className="p-1 text-charcoal hover:text-forest min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {moreNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`flex items-center gap-2.5 p-3 text-xs font-medium transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-forest text-ivory'
                      : 'bg-pure-white text-charcoal hover:bg-forest/5 hover:text-forest border border-charcoal/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`text-sm flex-shrink-0 ${isActive ? 'text-gold' : 'text-forest'}`} aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation Bar (Mobile Only) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ivory/95 backdrop-blur-md border-t border-charcoal/15 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        aria-label="Mobile Bottom Navigation"
      >
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.id);
                }}
                className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[44px] transition-colors ${
                  isActive ? 'text-forest font-semibold' : 'text-charcoal-muted hover:text-forest'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Jump to ${item.label} section`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-forest scale-110' : 'text-charcoal-muted'} transition-transform`} aria-hidden="true" />
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />
                  )}
                </div>
                <span className="text-[10px] tracking-wide mt-1 leading-none">
                  {item.label}
                </span>
              </a>
            );
          })}

          {/* "More" Trigger Button */}
          <button
            type="button"
            onClick={() => setMoreMenuOpen(!moreMenuOpen)}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[44px] transition-colors ${
              moreMenuOpen || isMoreActive ? 'text-forest font-semibold' : 'text-charcoal-muted hover:text-forest'
            }`}
            aria-expanded={moreMenuOpen}
            aria-controls="mobile-more-menu"
            aria-label="More navigation options"
          >
            <div className="relative">
              <FiMoreHorizontal
                className={`w-5 h-5 ${moreMenuOpen || isMoreActive ? 'text-forest scale-110' : 'text-charcoal-muted'} transition-transform`}
                aria-hidden="true"
              />
              {isMoreActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />
              )}
            </div>
            <span className="text-[10px] tracking-wide mt-1 leading-none">
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
