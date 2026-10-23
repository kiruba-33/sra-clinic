import React from 'react';
import { FiArrowUpRight, FiUserCheck, FiPhone } from 'react-icons/fi';

/**
 * =========================================================================
 * PRACTITIONER DETAILS PLACEHOLDER
 * Note: The CEO will provide the doctor's actual photograph, name, and
 * verified details later. No fake practitioner credentials or names are
 * published here. Update the object below when genuine details are received.
 * =========================================================================
 */
const PRACTITIONER_CONFIG = {
  // Replace with actual doctor's name when provided
  name: 'Chief Acupuncturist & Traditional Practitioner',
  role: 'Traditional Healthcare & Therapy Specialist',
  // Replace with verified image import when provided (e.g., import doctorImg from '../assets/doctor.jpg')
  image: null,
};

export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="py-20 md:py-28 bg-pure-white border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Doctor Profile and Practitioner Information"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Reserved Doctor Portrait Area */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden border border-gold/30 bg-ivory shadow-sm flex flex-col items-center justify-center p-8 text-center">
              {PRACTITIONER_CONFIG.image ? (
                <img
                  src={PRACTITIONER_CONFIG.image}
                  alt={PRACTITIONER_CONFIG.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                /* Editorial Placeholder Graphic for Real Doctor Photo */
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-forest/10 border border-gold/40 flex items-center justify-center text-forest">
                    <FiUserCheck className="w-10 h-10 text-forest" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-1">
                      Practitioner Portrait
                    </span>
                    <p className="font-serif text-lg text-forest-deep font-medium">
                      Sri Rama Acupuncture Clinic
                    </p>
                    <p className="text-xs text-charcoal-muted mt-2 max-w-xs leading-relaxed">
                      Official verified photograph and practitioner portrait will be published here upon client provision.
                    </p>
                  </div>
                </div>
              )}

              {/* Verified Care Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-pure-white/95 backdrop-blur-sm border border-charcoal/10 py-2.5 px-4 text-center">
                <span className="text-[10px] uppercase tracking-eyebrow text-forest font-medium">
                  Direct In-Person Consultation
                </span>
              </div>
            </div>
          </div>

          {/* Practitioner Introduction & Clinical Approach */}
          <div className="lg:col-span-7 min-w-0">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                CLINICAL PRACTITIONER
              </p>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25] mb-4">
              Personalized guidance for every visitor.
            </h2>

            <p className="font-serif text-lg text-forest font-medium mb-4">
              {PRACTITIONER_CONFIG.name}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-charcoal-soft font-normal leading-relaxed max-w-xl mb-8">
              <p>
                At Sri Rama Acupuncture Clinic, therapies are administered with careful, individualized attention to your comfort and health history.
              </p>
              <p>
                Consultations prioritize classical acupuncture point selection, gentle Varma stimulation, and traditional therapies without synthetic medication.
              </p>
              <p className="text-xs text-charcoal-muted border-l-2 border-gold/40 pl-3.5 italic">
                Verified practitioner qualifications, degrees, and full professional background will be detailed here upon submission.
              </p>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-all duration-300 min-h-[44px]"
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
