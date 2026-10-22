import React from 'react';

export default function WhyVisit() {
  const pillars = [
    {
      num: 'I',
      title: 'Established Local Clinic',
      highlight: 'Continuous presence since 5 February 2012',
      detail:
        'Situated at 109, Agraharam in Chinnamanur, offering a dependable, permanent home for traditional therapy across Theni district.',
    },
    {
      num: 'II',
      title: 'Traditional Therapy Services',
      highlight: 'Classical acupuncture, Varma & Thokkanam',
      detail:
        'Focusing on natural therapeutic principles and targeted pressure methods without synthetic medications or invasive procedures.',
    },
    {
      num: 'III',
      title: 'Broad Range of Available Care',
      highlight: 'Addressing circulation, nerves & rest',
      detail:
        'Dedicated therapy options for varicose vein-related concerns, sciatic tension, sleep difficulties, and muscular stiffness.',
    },
    {
      num: 'IV',
      title: 'Direct Contact for Enquiries',
      highlight: 'Personal telephone & in-person access',
      detail:
        'Reach the clinic directly at 99426 11444 or visit our Agraharam location for open, transparent consultation guidance.',
    },
  ];

  return (
    <section
      id="why-visit"
      className="py-24 md:py-36 bg-pure-white border-b border-charcoal/10"
      aria-label="Why Visit the Clinic"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-xs uppercase tracking-editorial font-medium text-forest">
              THE CLINICAL COMMITMENT
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
            Factual principles that define our daily practice.
          </h2>
        </div>

        {/* Distinct 4-Column Horizontal Architectural Ledger (Responsive 1/2/4 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-charcoal/10">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className={`py-8 sm:py-10 md:py-12 px-0 md:px-6 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between group hover:bg-ivory/30 transition-colors border-charcoal/10 ${
                idx !== 0 ? 'border-t md:border-t-0' : ''
              } ${
                idx % 2 === 1 ? 'md:border-l' : ''
              } ${
                idx >= 2 ? 'md:border-t lg:border-t-0' : ''
              } ${
                idx > 0 ? 'lg:border-l' : ''
              }`}
            >
              <div>
                <span className="font-serif text-lg sm:text-xl text-gold font-medium block mb-4 sm:mb-6">
                  ({pillar.num})
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-forest-deep font-semibold mb-2 group-hover:text-forest transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs uppercase tracking-eyebrow text-forest font-medium mb-3 sm:mb-4">
                  {pillar.highlight}
                </p>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-charcoal/5">
                <span className="text-[11px] text-charcoal-muted/80 font-sans">
                  Verifiable clinic record
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
