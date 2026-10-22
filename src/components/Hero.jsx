import React from 'react';
import { FiPhone, FiArrowUpRight, FiCalendar } from 'react-icons/fi';
import heroImg from '../assets/editorial/hero-acupuncture.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden bg-ivory"
      aria-label="Hero Introduction"
    >
      {/* Editorial background subtle ambient tone */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-ivory-dark/40 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Actions (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0">
            
            {/* Eyebrow Label with botanical accent */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <span className="w-5 sm:w-6 h-[1.5px] bg-gold flex-shrink-0" aria-hidden="true" />
              <p className="text-[10px] sm:text-xs uppercase tracking-eyebrow sm:tracking-editorial font-medium text-forest">
                SRI RAMA ACUPUNCTURE CLINIC · CHINNAMANUR
              </p>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-forest-deep font-medium leading-[1.2] sm:leading-[1.18] tracking-tight mb-6 sm:mb-8">
              A more thoughtful approach to everyday wellbeing.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-charcoal-soft font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Explore acupuncture and traditional therapy services at Sri Rama Acupuncture Clinic in Chinnamanur, Theni district.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 mb-10 sm:mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-7 py-4 transition-all duration-300 hover:shadow-md focus:ring-2 focus:ring-forest focus:ring-offset-2 min-h-[48px]"
              >
                <span>Book a Consultation</span>
                <FiArrowUpRight className="text-sm text-gold" aria-hidden="true" />
              </a>

              <a
                href="tel:9942611444"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-forest/5 text-forest border border-forest/40 hover:border-forest text-xs uppercase tracking-eyebrow font-medium px-6 py-4 transition-all duration-300 min-h-[48px]"
                aria-label="Call Sri Rama Acupuncture Clinic at 9942611444"
              >
                <FiPhone className="text-sm flex-shrink-0" aria-hidden="true" />
                <span>Call the Clinic</span>
              </a>
            </div>

            {/* Editorial Quick Metadata Ribbon */}
            <div className="pt-6 sm:pt-8 border-t border-charcoal/10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-charcoal-muted mb-1">
                  Established
                </span>
                <span className="font-serif text-base sm:text-lg text-forest font-medium">
                  5 February 2012
                </span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-charcoal-muted mb-1">
                  Location
                </span>
                <span className="font-serif text-base sm:text-lg text-forest font-medium">
                  Chinnamanur, Theni
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-charcoal-muted mb-1">
                  Therapy Discipline
                </span>
                <span className="font-serif text-base sm:text-lg text-forest font-medium">
                  Classical Acupuncture & Varma
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photography Composition (5 columns) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative">
              
              {/* Asymmetric Framed Image */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden border border-gold/30 bg-ivory-dark shadow-[0_20px_50px_-20px_rgba(33,75,56,0.15)]">
                <img
                  src={heroImg}
                  alt="Acupuncture therapy and serene botanical clinic setting with fine sterile needles and fresh herbs"
                  className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="750"
                />
              </div>

              {/* Offset Editorial Caption Card (tablet & desktop safe) */}
              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-8 lg:-left-8 bg-pure-white/95 backdrop-blur-sm border border-charcoal/10 p-4 sm:p-5 max-w-sm shadow-sm">
                <p className="text-[10px] uppercase tracking-editorial text-gold font-medium mb-1">
                  Therapeutic Discipline
                </p>
                <p className="font-serif text-sm sm:text-base text-forest-deep leading-snug">
                  Holistic care guided by classical acupuncture, Varma points, and patient comfort.
                </p>
                <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-[11px] text-charcoal-muted font-sans">
                  <FiCalendar className="text-forest text-xs flex-shrink-0" aria-hidden="true" />
                  <span>Consultations available by appointment</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
