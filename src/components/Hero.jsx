import React from 'react';
import { FiPhone, FiArrowUpRight } from 'react-icons/fi';
import heroBg from '../assets/editorial/hero-acupuncture.webp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-forest-deep bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label="Sri Rama Acupuncture Clinic Introduction"
    >
      {/* Dark Green Editorial Overlays Extending Seamlessly to Every Edge */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-forest-deep/65 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/75 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center sm:text-left w-full">
        <div className="max-w-2xl">
          {/* Eyebrow Accent */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-gold-light">
              SRI RAMA ACUPUNCTURE CLINIC · CHINNAMANUR
            </p>
          </div>

          {/* Primary Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-medium leading-[1.15] tracking-tight mb-5 sm:mb-6">
            Sri Rama Acupuncture Clinic
          </h1>

          {/* Concise Subtitle */}
          <p className="text-base sm:text-xl text-ivory/85 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
            Traditional acupuncture and therapy services in Chinnamanur, Theni.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-forest-deep text-xs uppercase tracking-eyebrow font-semibold px-7 py-4 transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px]"
            >
              <span>Book an Appointment</span>
              <FiArrowUpRight className="text-base" aria-hidden="true" />
            </a>

            <a
              href="tel:9942611444"
              className="inline-flex items-center justify-center gap-2.5 bg-forest-deep/60 hover:bg-forest-deep/80 text-ivory border border-ivory/30 hover:border-ivory/60 text-xs uppercase tracking-eyebrow font-medium px-6 py-4 backdrop-blur-sm transition-all duration-300 min-h-[48px]"
              aria-label="Call clinic at 9942611444"
            >
              <FiPhone className="text-sm text-gold" aria-hidden="true" />
              <span>Call the Clinic</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
