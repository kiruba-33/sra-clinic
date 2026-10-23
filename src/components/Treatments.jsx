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
        'Point stimulation and traditional circulation-support methods aimed at easing leg heaviness, muscular fatigue, and localized tension.',
    },
    {
      num: '02',
      title: 'Sciatic Nerve-Related Concerns',
      category: 'Neuromuscular Pathway Relief',
      description:
        'Targeted needle application along lumbar and leg meridians designed to ease stiffness, physical compression, and radiating discomfort.',
    },
    {
      num: '03',
      title: 'Insomnia & Sleep Concerns',
      category: 'Rest & Calming Support',
      description:
        'Gentle cranial and peripheral acupoints utilized to calm mental overactivity and support the body’s natural rest rhythms.',
    },
    {
      num: '04',
      title: 'Varma Treatment',
      category: 'Classical Energy Junctions',
      description:
        'Traditional Tamil pressure point therapy involving calculated manual touch to release physical blockages and restore balance.',
    },
    {
      num: '05',
      title: 'Thokkanam Treatment',
      category: 'Therapeutic Bodywork',
      description:
        'Structured traditional body manipulation and joint mobilization to soothe tight musculature, joint stiffness, and bodily fatigue.',
    },
    {
      num: '06',
      title: 'Magnetic Therapy',
      category: 'Complementary Polarity Care',
      description:
        'Application of gentle static magnetic pads to support localized circulation, ease joint stiffness, and encourage natural recuperation.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-ivory border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Services and Therapeutic Disciplines"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                SERVICES & DISCIPLINES
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Traditional therapies tailored to your balance.
            </h2>
          </div>

          <p className="text-xs text-charcoal-muted max-w-sm leading-relaxed border-l border-gold/40 pl-3.5 font-sans">
            Traditional therapy services at the clinic do not replace clinical emergency diagnosis or prescription medication.
          </p>
        </div>

        {/* Editorial Layout: Side Image & Condensed Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Visual Anchor (4 columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 w-full">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 bg-pure-white shadow-sm">
              <img
                src={careImg}
                alt="Traditional acupuncture herbs, smooth stones, and serene clinic setting"
                className="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
            <div className="p-5 bg-pure-white border border-charcoal/10">
              <p className="font-serif text-base text-forest-deep font-medium mb-1">
                Consultation First
              </p>
              <p className="text-xs text-charcoal-muted leading-relaxed mb-3">
                Every session begins with a conversation about your symptoms and lifestyle to recommend an appropriate therapy.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep"
              >
                <span>Ask about a specific therapy</span>
                <FiArrowUpRight className="text-gold text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Numbered Service Ledger (8 columns) */}
          <div className="lg:col-span-8 divide-y divide-charcoal/10 border-t border-b border-charcoal/10 min-w-0">
            {services.map((item) => (
              <div
                key={item.num}
                className="py-6 sm:py-7 group transition-colors duration-200 hover:bg-pure-white/60 px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-4 md:gap-6 items-baseline">
                  
                  {/* Number & Category */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between">
                    <span className="font-serif text-2xl text-gold font-medium leading-none">
                      {item.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-eyebrow text-charcoal-muted font-medium mt-1">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="md:col-span-9 space-y-1.5 min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl text-forest-deep font-medium group-hover:text-forest transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-soft font-normal leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-1">
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
