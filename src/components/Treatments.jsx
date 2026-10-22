import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import careImg from '../assets/editorial/traditional-care.jpg';

export default function Treatments() {
  const services = [
    {
      num: '01',
      title: 'Varicose Vein-Related Concerns',
      category: 'Circulation & Lower Limb Comfort',
      description:
        'Acupuncture point stimulation and traditional circulation-support techniques designed to assist lower limb circulation and provide comfort for feelings of heaviness and fatigue in the legs.',
    },
    {
      num: '02',
      title: 'Sciatic Nerve-Related Concerns',
      category: 'Neuromuscular Tension & Pathway Relief',
      description:
        'Targeted needle application along lumbar, gluteal, and leg meridian lines aimed at easing physical stiffness, muscular compression, and radiating discomfort along the sciatic pathway.',
    },
    {
      num: '03',
      title: 'Insomnia & Sleep-Related Concerns',
      category: 'Rest Rhythms & Nervous Calming',
      description:
        'Gentle cranial and peripheral acupoints utilized to calm mental overactivity, ease restlessness, and support the body’s natural transition toward deeper, uninterrupted night sleep.',
    },
    {
      num: '04',
      title: 'Varma Treatment',
      category: 'Classical Energy Junction Points',
      description:
        'Ancient traditional Tamil Varma therapy involving calculated manual pressure applied to vital bio-energetic centers to release deep-seated physical blockage and restore bodily vitality.',
    },
    {
      num: '05',
      title: 'Thokkanam Treatment',
      category: 'Traditional Therapeutic Bodywork',
      description:
        'Specialized traditional body manipulation and structured physical therapy techniques that stretch, mobilize, and soothe tight musculature, joint stiffness, and chronic bodily fatigue.',
    },
    {
      num: '06',
      title: 'Magnetic Therapy',
      category: 'Complementary Polarity Care',
      description:
        'Application of gentle static magnetic therapy pads and devices arranged to support local blood flow, ease joint stiffness, and encourage natural tissue recuperation without discomfort.',
    },
  ];

  return (
    <section
      id="treatments"
      className="py-24 md:py-36 bg-pure-white border-y border-charcoal/10"
      aria-label="Treatments and Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-xs uppercase tracking-editorial font-medium text-forest">
                SERVICES & THERAPEUTIC DISCIPLINES
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Traditional therapies tailored to your body's balance.
            </h2>
          </div>

          <p className="text-xs text-charcoal-muted max-w-sm leading-relaxed border-l border-gold/40 pl-4 font-sans">
            Information provided describes traditional therapeutic services available at the clinic. These services do not replace formal clinical emergency diagnosis or prescription medication.
          </p>
        </div>

        {/* Asymmetrical Layout: Left Feature Visual & Right Numbered Editorial Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual & Atmosphere (4 columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 sm:space-y-8 w-full">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 bg-ivory">
              <img
                src={careImg}
                alt="Natural traditional therapeutic care environment with smooth stones, eucalyptus, and linen"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>

            <div className="p-5 sm:p-6 bg-ivory border border-charcoal/10">
              <h3 className="font-serif text-lg text-forest font-semibold mb-2">
                Consultation Guidance
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
                Not sure which service suits your needs? Our practitioner will discuss your physical symptoms and recommend an appropriate therapy session.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep min-h-[44px]"
              >
                <span>Ask about a specific concern</span>
                <FiArrowUpRight className="text-gold" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Services (8 columns) */}
          <div className="lg:col-span-8 divide-y divide-charcoal/10 border-t border-b border-charcoal/10 min-w-0">
            {services.map((item) => (
              <div
                key={item.num}
                className="py-6 sm:py-8 md:py-10 group transition-colors duration-300 hover:bg-ivory/40"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-baseline">
                  
                  {/* Number & Category */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between">
                    <span className="font-serif text-2xl md:text-3xl text-gold font-medium block leading-none">
                      {item.num}
                    </span>
                    <span className="text-[11px] uppercase tracking-eyebrow text-charcoal-muted font-medium mt-1">
                      {item.category}
                    </span>
                  </div>

                  {/* Service Title & Detailed Description */}
                  <div className="md:col-span-9 space-y-2.5 sm:space-y-3 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-medium group-hover:text-forest transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-soft font-normal leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs text-forest font-medium hover:underline tracking-wide py-1 min-h-[36px]"
                      >
                        <span>Enquire for this service</span>
                        <FiArrowUpRight className="text-xs text-gold" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
