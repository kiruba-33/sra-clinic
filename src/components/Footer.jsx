import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi';
import sraLogo from '../assets/sra-logo.jpg';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About the Clinic', href: '#about' },
    { label: 'Treatments & Services', href: '#treatments' },
    { label: 'Wellness Products', href: '#products' },
    { label: 'Why Visit Us', href: '#why-visit' },
    { label: 'Appointment & Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-ivory/80 pt-16 sm:pt-20 pb-12 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-ivory/10">
          
          {/* Brand & Lineage Column (5 columns) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gold/60 flex-shrink-0 bg-ivory">
                <img
                  src={sraLogo}
                  alt="Sri Rama Acupuncture Clinic Emblem"
                  className="w-full h-full object-cover"
                  width="56"
                  height="56"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg sm:text-2xl text-ivory font-semibold tracking-tight truncate sm:whitespace-normal">
                  Sri Rama Acupuncture Clinic
                </h3>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-editorial text-sage font-medium truncate">
                  Chinnamanur · Theni District
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory/70 leading-relaxed max-w-md font-sans">
              Dedicated to classical acupuncture, traditional Varma, and Thokkanam therapy services in Chinnamanur since 5 February 2012. Providing an unhurried, patient-focused setting for everyday wellbeing and natural health.
            </p>

            <div className="inline-block px-3.5 py-1.5 border border-gold/30 bg-forest/40 text-[11px] uppercase tracking-eyebrow text-gold font-medium">
              "Yes to health, No to drugs"
            </div>
          </div>

          {/* Quick Navigation Links (3 columns) */}
          <div className="lg:col-span-3 space-y-4 min-w-0">
            <h4 className="text-xs uppercase tracking-editorial text-gold font-medium mb-3 sm:mb-5">
              EXPLORE CLINIC
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors inline-flex items-center py-1 text-ivory/75 font-sans min-h-[36px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Particulars (4 columns) */}
          <div className="lg:col-span-4 space-y-4 min-w-0">
            <h4 className="text-xs uppercase tracking-editorial text-gold font-medium mb-3 sm:mb-5">
              VISIT OR CALL
            </h4>
            
            <div className="space-y-3.5 text-sm text-ivory/75">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-gold mt-1 flex-shrink-0 text-base" aria-hidden="true" />
                <address className="not-italic leading-relaxed font-sans">
                  109, Agraharam<br />
                  Sri Rama Acupuncture Clinic<br />
                  Chinnamanur – 625515<br />
                  Theni district, Tamil Nadu
                </address>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <FiPhone className="text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:9942611444"
                  className="hover:text-gold transition-colors text-ivory font-serif text-lg font-medium inline-flex items-center min-h-[44px]"
                >
                  99426 11444
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:renugaramdass@gmail.com"
                  className="hover:text-gold transition-colors break-all inline-flex items-center min-h-[44px]"
                >
                  renugaramdass@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p className="text-center sm:text-left">
            © {CURRENT_YEAR} Sri Rama Acupuncture Clinic. All rights reserved. Established 5 February 2012.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-ivory/40">Chinnamanur, Theni</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-ivory/70 hover:text-gold transition-colors p-2 min-h-[44px]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <FiArrowUp className="text-xs" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
