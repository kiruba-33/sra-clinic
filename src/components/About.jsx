import React from 'react';
import sraLogo from '../assets/sra-logo.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-ivory relative"
      aria-label="About Sri Rama Acupuncture Clinic"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-xs uppercase tracking-editorial font-medium text-forest">
              ESTABLISHED FEBRUARY 2012
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
            Grounded in traditional roots, serving the community with dignity and care.
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Panel (7 columns) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-charcoal-soft font-normal text-base sm:text-lg leading-relaxed min-w-0">
            <p className="font-serif text-lg sm:text-xl text-forest leading-relaxed italic font-medium">
              "Providing an unhurried, patient-focused environment where traditional methods meet everyday health concerns."
            </p>
            <p>
              Sri Rama Acupuncture Clinic was established on 5 February 2012 at Agraharam in Chinnamanur. Over the years, the clinic has developed a reputation throughout Theni district as a reliable, honest destination for traditional therapy and wellness guidance.
            </p>
            <p>
              Rather than adopting quick-fix claims, our practice honors the timeless philosophies of classical acupuncture, Varma marma points, and traditional Thokkanam body manipulation. Every consultation is conducted with thorough attention to your individual state of balance, discomfort levels, and daily routine.
            </p>

            {/* Emblem Featurette */}
            <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <img
                src={sraLogo}
                alt="Official seal of Sri Rama Acupuncture Clinic"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gold/40 flex-shrink-0"
                width="64"
                height="64"
              />
              <div className="text-xs text-charcoal-muted leading-relaxed">
                <span className="font-serif text-sm text-forest font-semibold block">
                  Sri Rama Acupuncture Clinic Emblem
                </span>
                Reflecting the bow of focus, the healing caduceus needle, and traditional medicinal foliage.
              </div>
            </div>
          </div>

          {/* Right Fact Ledger Panel (5 columns) */}
          <div className="lg:col-span-5 border-l border-gold/30 pl-4 sm:pl-8 lg:pl-12 space-y-8 sm:space-y-10 min-w-0">
            
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block">
                Official Inception
              </span>
              <p className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                5 February 2012
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Founded in Chinnamanur as a dedicated traditional healthcare practice.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-charcoal/10">
              <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block">
                Practice Experience
              </span>
              <p className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                15 Years of Experience
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Client-provided traditional therapy and holistic wellness practice.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-charcoal/10">
              <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block">
                Location & Region
              </span>
              <p className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                Chinnamanur, Theni District
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Located at 109, Agraharam, Chinnamanur 625515, Tamil Nadu.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-charcoal/10">
              <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block">
                Core Therapy Range
              </span>
              <p className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                Classical & Natural
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Acupuncture, Varma point work, Thokkanam massage, and magnetic therapy.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
