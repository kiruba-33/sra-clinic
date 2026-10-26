import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import careImg from '../assets/editorial/traditional-care.jpg';

/**
 * =========================================================================
 * SERVICES & THERAPEUTIC DISCIPLINES
 * Sri Rama Acupuncture Clinic · Chinnamanur, Theni
 * Verified Client-Provided Service Categories:
 * 1. Treatments & Therapies (7 services)
 * 2. Bath & Natural Therapies (4 services)
 * 3. Wellness Practices (3 services)
 * Total: 14 unique services, zero duplicates.
 * =========================================================================
 */
const SERVICE_GROUPS = [
  {
    groupTitle: 'Treatments & Therapies',
    groupSubtitle: 'Classical In-Clinic Therapeutic Interventions',
    items: [
      {
        num: '01',
        title: 'Acupuncture',
        description:
          'Classical meridian point stimulation to restore energetic balance, relieve bodily pain, and support natural recuperation.',
      },
      {
        num: '02',
        title: 'Pranic Healing',
        description:
          'Non-touch vital energy therapy to cleanse, harmonize, and revitalize the body’s natural life-force pathways.',
      },
      {
        num: '03',
        title: 'Cupping Therapy',
        description:
          'Traditional suction therapy along muscular meridians to ease deep tension and stimulate micro-circulation.',
      },
      {
        num: '04',
        title: 'Seed Therapy',
        description:
          'Placement of natural therapeutic seeds upon targeted reflex points for continuous, gentle pressure stimulation.',
      },
      {
        num: '05',
        title: 'Varmam (Varma) Therapy',
        description:
          'Traditional Tamil vital pressure point therapy involving calculated touch to release blockages and restore natural flow.',
      },
      {
        num: '06',
        title: 'Thokkanam Treatment',
        description:
          'Traditional therapeutic bodywork and mobilization technique to soothe muscular stiffness, joints, and bodily fatigue.',
      },
      {
        num: '07',
        title: 'Magnetic Therapy',
        description:
          'Application of gentle static magnetic pads to support localized blood flow and natural comfort.',
      },
    ],
  },
  {
    groupTitle: 'Bath & Natural Therapies',
    groupSubtitle: 'Hydrotherapy & Natural Cleansing Modalities',
    items: [
      {
        num: '08',
        title: 'Steam Bath',
        description:
          'Traditional herbal steam exposure to open pores, encourage healthy perspiration, and promote bodily relaxation.',
      },
      {
        num: '09',
        title: 'Hip Bath',
        description:
          'Specialized pelvic hydrotherapy immersion designed to support lower abdominal harmony and pelvic wellness.',
      },
      {
        num: '10',
        title: 'Spine Bath',
        description:
          'Targeted hydrotherapy along the spinal column to soothe nervous exhaustion and alleviate back fatigue.',
      },
      {
        num: '11',
        title: 'Banana Leaf Bath',
        description:
          'Classical natural sun therapy wrapped in fresh banana leaves for full-body natural cleansing and vitality.',
      },
    ],
  },
  {
    groupTitle: 'Wellness Practices',
    groupSubtitle: 'Holistic Lifestyle & Restorative Disciplines',
    items: [
      {
        num: '12',
        title: 'Food Medicine',
        description:
          'Personalized dietary and nutritional guidance rooted in classical healing principles to nourish natural self-recovery.',
      },
      {
        num: '13',
        title: 'Yoga',
        description:
          'Therapeutic postures, gentle breathwork, and restorative techniques tailored to individual physical wellbeing.',
      },
      {
        num: '14',
        title: 'Mudras',
        description:
          'Traditional hand gestures and energetic seals designed to harmonize subtle elements and focus vital energy.',
      },
    ],
  },
];

export default function Treatments() {
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

        {/* Editorial Layout: Side Anchor & Grouped Services Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Visual Anchor (4 columns on desktop, sticky) */}
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
            <div className="p-6 bg-pure-white border border-charcoal/10 shadow-sm">
              <p className="font-serif text-lg text-forest-deep font-medium mb-1.5">
                Consultation First
              </p>
              <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                Every session begins with an individual consultation to determine the appropriate therapy combination for your wellbeing.
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

          {/* Grouped Services Ledger (8 columns on desktop) */}
          <div className="lg:col-span-8 space-y-10 min-w-0">
            {SERVICE_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="bg-pure-white border border-charcoal/10 p-6 sm:p-8 shadow-sm">
                
                {/* Group Banner */}
                <div className="border-b border-charcoal/10 pb-4 mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-medium">
                      {group.groupTitle}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      {group.groupSubtitle}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-eyebrow font-medium text-gold self-start sm:self-auto">
                    {group.items.length} Services
                  </span>
                </div>

                {/* Service Items in Group */}
                <div className="divide-y divide-charcoal/10">
                  {group.items.map((item) => (
                    <div
                      key={item.num}
                      className="py-4 sm:py-5 first:pt-0 last:pb-0 group transition-colors"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                        
                        {/* Service Number */}
                        <div className="sm:col-span-2 flex items-center gap-2">
                          <span className="font-serif text-base sm:text-lg text-gold font-medium">
                            {item.num}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-sage/40 group-hover:bg-gold transition-colors hidden sm:inline-block" aria-hidden="true" />
                        </div>

                        {/* Title & Short Description */}
                        <div className="sm:col-span-10 min-w-0">
                          <h4 className="font-serif text-base sm:text-lg text-forest-deep font-medium group-hover:text-forest transition-colors mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-charcoal-soft font-normal leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}

            {/* Bottom Consultation Prompt */}
            <div className="p-6 bg-pure-white border border-gold/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-base text-forest-deep font-medium">
                  Looking for a customized treatment plan?
                </p>
                <p className="text-xs text-charcoal-muted mt-1">
                  Therapies may be integrated harmoniously based on in-person diagnostic evaluation.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-5 py-3 transition-colors min-h-[42px] whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                <span>Schedule Consultation</span>
                <FiArrowUpRight className="text-gold text-xs" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
