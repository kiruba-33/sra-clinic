import React from 'react';
import { FiMapPin, FiArrowUpRight, FiStar, FiPhone, FiClock } from 'react-icons/fi';

/**
 * =========================================================================
 * GOOGLE BUSINESS PROFILE & MAP SECTION
 * Verified from client-supplied Google link: https://share.google/MF64RNzh7p8CPa7Xv
 * Listing Name: Sri Rama Chinese Acupunture Clinic, Naturopathy, Pranic Healing and House of aloe
 * Verified Address: 43A, Agraharam Rd, Chinnamanur, Tamil Nadu 625515
 * Coordinates: 9.8406985, 77.3810558
 * Rating: 5.0 ★ (70+ Reviews)
 * =========================================================================
 */
const GOOGLE_MAPS_SHARE_URL = 'https://share.google/MF64RNzh7p8CPa7Xv';
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Sri+Rama+Acupuncture+Clinic,+43A+Agraharam+Rd,+Chinnamanur,+Tamil+Nadu+625515&z=16&output=embed';

export default function LocationMap() {
  return (
    <section
      id="location"
      className="py-20 md:py-28 bg-ivory border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Find Us on Google Maps — Sri Rama Acupuncture Clinic Location"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
              CLINIC LOCATION & VISITATION
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25] mb-4">
            Find Us on Google Maps
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Conveniently situated on Agraharam Road in Chinnamanur, Theni district. Easy road connectivity for visitors across Tamil Nadu.
          </p>
        </div>

        {/* Map & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Clinic Location Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 bg-pure-white border border-gold/40 shadow-sm">
            <div>
              {/* Clinic Branding */}
              <div className="flex items-center gap-2 text-forest text-xs uppercase tracking-eyebrow font-semibold mb-3">
                <FiMapPin className="text-gold text-base" aria-hidden="true" />
                <span>Verified Google Business Profile</span>
              </div>

              <h3 className="font-serif text-2xl text-forest-deep font-medium mb-3">
                Sri Rama Acupuncture Clinic
              </h3>
              <p className="text-xs text-charcoal-muted italic mb-6">
                Official listing: Sri Rama Chinese Acupunture Clinic, Naturopathy, Pranic Healing and House of aloe
              </p>

              {/* Address Block */}
              <div className="space-y-4 text-sm text-charcoal border-t border-charcoal/10 pt-5 mb-6">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-gold text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-forest-deep">Clinic Address</p>
                    <p className="text-charcoal-soft leading-relaxed mt-0.5">
                      43A, Agraharam Rd, Chinnamanur,<br />
                      Theni District, Tamil Nadu – 625515
                    </p>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Landmark: Opposite to Agraharam, Chinnamanur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="text-gold text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-forest-deep">Consultation Hours</p>
                    <p className="text-charcoal-soft leading-relaxed mt-0.5">
                      Monday – Sunday · 9:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiStar className="text-gold text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-forest-deep">Google Rating</p>
                    <p className="text-charcoal-soft leading-relaxed mt-0.5">
                      5.0 ★★★★★ based on 70+ authentic reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="pt-6 border-t border-charcoal/10 space-y-3">
              <a
                href={GOOGLE_MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-all duration-300 min-h-[44px] shadow-sm hover:shadow-md"
              >
                <span>View on Google Maps</span>
                <FiArrowUpRight className="text-gold text-sm" aria-hidden="true" />
              </a>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={GOOGLE_MAPS_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-forest hover:text-forest-deep font-medium underline underline-offset-4"
                >
                  <span>Read Original Google Reviews</span>
                  <FiArrowUpRight className="text-[11px]" aria-hidden="true" />
                </a>

                <a
                  href="tel:9942611444"
                  className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-forest font-medium"
                >
                  <FiPhone className="text-gold text-xs" aria-hidden="true" />
                  <span>Call 99426 11444</span>
                </a>
              </div>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] sm:min-h-[440px] bg-pure-white border border-gold/40 shadow-sm overflow-hidden">
              <iframe
                title="Google Maps Location of Sri Rama Acupuncture Clinic, Chinnamanur"
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Overlay Chip */}
              <div className="absolute top-3 left-3 bg-pure-white/95 backdrop-blur-sm border border-gold/30 px-3 py-1.5 shadow-sm pointer-events-none hidden sm:flex items-center gap-2">
                <FiMapPin className="text-forest text-xs" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-forest-deep">
                  Sri Rama Acupuncture Clinic · Chinnamanur
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
