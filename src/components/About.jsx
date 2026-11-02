import React from 'react';
import sraLogo from '../assets/sra-logo.webp';
import aboutImg from '../assets/editorial/clinic-therapy.webp';
import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-ivory border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="About Sri Rama Acupuncture Clinic"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
              {t('about.eyebrow', 'ESTABLISHED FEBRUARY 2012')}
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
            {t('about.title', 'Grounded in traditional roots, serving Chinnamanur with care.')}
          </h2>
        </div>

        {/* Editorial Layout: Story & Verified Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative & Emblem (7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-soft font-normal text-sm sm:text-base leading-relaxed min-w-0">
            <p className="font-serif text-base sm:text-lg text-forest leading-relaxed italic font-medium">
              {t('about.quote', '"An unhurried, patient-centered setting where classical methods meet everyday wellness needs."')}
            </p>
            <p>
              {t('about.p1', 'Founded on 5 February 2012 at Agraharam in Chinnamanur, Sri Rama Acupuncture Clinic provides accessible traditional acupuncture, Varma, and Thokkanam therapy for individuals across Theni district.')}
            </p>
            <p>
              {t('about.p2', 'Drawing upon 15 years of client-provided practice experience in natural healthcare, our focus remains on thorough, individualized consultations that respect natural balance without relying on synthetic medication.')}
            </p>

            {/* Emblem Badge */}
            <div className="pt-4 flex items-center gap-4 border-t border-charcoal/10">
              <img
                src={sraLogo}
                alt={t('about.clinicName', 'Sri Rama Acupuncture Clinic')}
                className="w-12 h-12 rounded-full border border-gold/40 flex-shrink-0"
                width="48"
                height="48"
              />
              <div className="text-xs text-charcoal-muted leading-tight">
                <span className="font-serif text-sm text-forest font-semibold block mb-0.5">
                  {t('about.clinicName', 'Sri Rama Acupuncture Clinic')}
                </span>
                {t('about.mottoLabel', 'Motto:')} <span className="italic font-serif text-forest">{t('about.mottoText', '"Yes to health, No to drugs"')}</span>
              </div>
            </div>
          </div>

          {/* Photograph & Key Facts Card (5 columns) */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="relative aspect-[4/3] overflow-hidden border border-gold/30 bg-pure-white shadow-sm">
              <img
                src={aboutImg}
                alt={t('about.imgAlt', 'Herbal preparations and classical care setting at Sri Rama Acupuncture Clinic')}
                className="w-full h-full object-cover"
                loading="lazy"
                width="500"
                height="375"
              />
            </div>

            {/* Verified Fact Ribbon */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-pure-white border border-charcoal/10 text-center">
              <div>
                <span className="text-[10px] uppercase tracking-eyebrow text-gold font-medium block">
                  {t('about.foundedLabel', 'Founded')}
                </span>
                <p className="font-serif text-sm sm:text-base text-forest-deep font-semibold mt-0.5">
                  {t('about.foundedVal', 'Feb 2012')}
                </p>
              </div>
              <div className="border-x border-charcoal/10 px-2">
                <span className="text-[10px] uppercase tracking-eyebrow text-gold font-medium block">
                  {t('about.experienceLabel', 'Experience')}
                </span>
                <p className="font-serif text-sm sm:text-base text-forest-deep font-semibold mt-0.5">
                  {t('about.experienceVal', '15 Years')}
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-eyebrow text-gold font-medium block">
                  {t('about.locationLabel', 'Location')}
                </span>
                <p className="font-serif text-sm sm:text-base text-forest-deep font-semibold mt-0.5">
                  {t('about.locationVal', 'Chinnamanur')}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
