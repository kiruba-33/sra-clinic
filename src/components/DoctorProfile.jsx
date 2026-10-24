import React from 'react';
import { FiArrowUpRight, FiPhone, FiAward } from 'react-icons/fi';
import healerPhoto from '../assets/editorial/sra-healer.webp';

/**
 * =========================================================================
 * HEALER PROFILE — SRI RAMA ACUPUNCTURE CLINIC
 * Client-provided verified details:
 * Name: Renuga Ramadass
 * Credentials: MD. (Acu), M.Sc. (Yoga), ACPH, DNYS.
 * Experience: 15 Years of Experience
 * Photograph: sra-healer.webp (authentic client photograph)
 * =========================================================================
 */
const HEALER_DETAILS = {
  name: 'Renuga Ramadass',
  credentials: 'MD. (Acu), M.Sc. (Yoga), ACPH, DNYS.',
  experience: '15 Years of Experience',
  photoAlt: 'Renuga Ramadass — Healer at Sri Rama Acupuncture Clinic',
};

export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="py-20 md:py-28 bg-pure-white border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Meet Our Healer — Sri Rama Acupuncture Clinic"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Authentic Healer Portrait Area */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden border border-gold/40 bg-ivory shadow-md group">
              <img
                src={healerPhoto}
                alt={HEALER_DETAILS.photoAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1368}
                height={912}
              />

              {/* In-Person Care Badge Overlay - High Contrast Solid Ivory */}
              <div className="absolute bottom-3 left-3 right-3 z-10 bg-[#F7F6F0] border border-[#B69A58] py-2.5 px-2.5 sm:px-4 text-center shadow-md">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-[#214B38] font-bold block leading-snug">
                  15 Years of Experience · In-Person Care
                </span>
              </div>
            </div>
          </div>

          {/* Healer Information & Background */}
          <div className="lg:col-span-7 min-w-0">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                TRADITIONAL HEALING & WELLNESS
              </p>
            </div>

            {/* Section Title */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.2] mb-5">
              Meet Our Healer
            </h2>

            {/* Healer Name & Credentials */}
            <div className="mb-6 pb-6 border-b border-charcoal/10">
              <h3 className="font-serif text-2xl sm:text-3xl text-forest-deep font-medium mb-2 tracking-tight">
                {HEALER_DETAILS.name}
              </h3>

              {/* Credentials Line */}
              <p className="text-sm sm:text-base font-medium text-forest tracking-wide mb-3">
                {HEALER_DETAILS.credentials}
              </p>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage/15 border border-forest/20 text-forest text-xs uppercase tracking-eyebrow font-semibold">
                <FiAward className="text-gold text-sm" aria-hidden="true" />
                <span>{HEALER_DETAILS.experience}</span>
              </div>
            </div>

            {/* Concise Description */}
            <div className="space-y-4 text-sm sm:text-base text-charcoal-soft font-normal leading-relaxed max-w-xl mb-8">
              <p>
                With 15 years of dedicated clinical experience in traditional healthcare, Renuga Ramadass provides personalized acupuncture, yoga therapy, and natural healing treatments tailored to each individual.
              </p>
              <p>
                Every consultation prioritizes classical point selection, gentle stimulation, and natural therapies designed to restore balance and relieve pain without synthetic medication.
              </p>
            </div>

            {/* Direct Consultation Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-all duration-300 min-h-[44px] shadow-sm hover:shadow-md"
              >
                <span>Schedule Consultation</span>
                <FiArrowUpRight className="text-gold" aria-hidden="true" />
              </a>

              <a
                href="tel:9942611444"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep border border-forest/30 hover:border-forest px-5 py-3.5 transition-colors min-h-[44px]"
              >
                <FiPhone className="text-xs text-gold" aria-hidden="true" />
                <span>Call 99426 11444</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
