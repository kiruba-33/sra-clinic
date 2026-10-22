import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import introImg from '../assets/editorial/clinic-therapy.jpg';

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="py-20 md:py-32 bg-pure-white border-y border-charcoal/10"
      aria-label="Clinic Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Supporting Photograph with subtle editorial frame (5 columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden border border-gold/30 bg-ivory">
                <img
                  src={introImg}
                  alt="Traditional therapy herbal preparations and botanical care at Sri Rama Acupuncture Clinic"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  width="480"
                  height="640"
                />
              </div>

              {/* Motto from Clinic Seal */}
              <div className="mt-4 pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row gap-1 sm:gap-0 sm:items-center sm:justify-between text-xs text-charcoal-muted">
                <span className="font-serif italic text-forest text-sm">
                  "Yes to health, No to drugs"
                </span>
                <span className="uppercase tracking-eyebrow text-[10px]">
                  Clinic Emblem Motto
                </span>
              </div>
            </div>
          </div>

          {/* Text Content (7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 min-w-0">
            
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-xs uppercase tracking-editorial font-medium text-forest">
                A PLACE FOR NATURAL RECOVERY
              </p>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25] mb-8">
              A quiet sanctuary for understanding traditional therapies.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-charcoal-soft font-normal leading-relaxed max-w-2xl">
              <p>
                Sri Rama Acupuncture Clinic was founded in Chinnamanur to provide a calm, dedicated space where visitors can learn about traditional healing modalities. We focus on attentive, individualized consultations that respect traditional knowledge while prioritizing patient comfort.
              </p>
              <p>
                Whether seeking guidance on everyday neuromuscular tension, circulation concerns, or sleep disturbances, our clinic offers access to classical acupuncture, Varma pressure points, Thokkanam therapeutic massage, and supportive wellness devices in a clean, professional setting.
              </p>
            </div>

            {/* Editorial Features Strip */}
            <div className="mt-10 pt-8 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-lg text-forest font-semibold mb-1.5">
                  Consultation First
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Every visit begins with a conversation about your lifestyle, comfort levels, and specific wellness concerns.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-forest font-semibold mb-1.5">
                  Non-Invasive Principles
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Approaches rooted in traditional touch, point stimulation, and botanical principles without synthetic medication.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-forest font-medium group hover:text-forest-deep"
              >
                <span>Explore Available Services</span>
                <FiArrowRight className="text-gold group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
