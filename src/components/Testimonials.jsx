import React from 'react';
import { FiMessageSquare, FiHeart } from 'react-icons/fi';

/**
 * =========================================================================
 * GENUINE TESTIMONIALS DATA
 * Note: Only genuine, client-provided testimonials are displayed here.
 * Do NOT invent fake patient reviews or ratings. When the client provides
 * authentic patient quotes, add them into this array.
 * =========================================================================
 */
const VERIFIED_TESTIMONIALS = [
  // Example structure for genuine patient reviews when provided:
  // {
  //   quote: "Authentic patient review text...",
  //   location: "Chinnamanur",
  //   service: "Sciatic Nerve Care",
  //   date: "2026",
  // },
];

export default function Testimonials() {
  const hasReviews = VERIFIED_TESTIMONIALS.length > 0;

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-pure-white border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Patient Reflections and Community Feedback"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
              COMMUNITY REFLECTIONS
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
            Experiences from our visitors.
          </h2>
        </div>

        {hasReviews ? (
          /* When genuine testimonials are provided by client */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VERIFIED_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-ivory border border-charcoal/10 flex flex-col justify-between"
              >
                <p className="font-serif text-base text-forest-deep italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="font-medium text-forest">{t.service}</span>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Dignified, Genuine Editorial Notice while authentic reviews are being compiled */
          <div className="max-w-3xl p-8 sm:p-10 bg-ivory/60 border border-gold/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-forest text-sm font-medium">
                <FiHeart className="text-gold" aria-hidden="true" />
                <span>Patient Reflections in Progress</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-forest-deep font-medium">
                Documenting genuine patient feedback with clinical integrity.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Patient notes and recovery reflections are gathered during routine consultations. Authentic, client-verified testimonials will be published here with patient consent.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-5 py-3.5 transition-colors whitespace-nowrap self-start md:self-auto min-h-[44px]"
            >
              <FiMessageSquare className="text-gold text-xs" aria-hidden="true" />
              <span>Share Your Feedback</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
