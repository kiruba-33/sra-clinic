import React from 'react';
import { FiStar, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

/**
 * =========================================================================
 * GENUINE GOOGLE BUSINESS PROFILE REVIEWS
 * Verified from official Google Maps listing:
 * Business: Sri Rama Chinese Acupunture Clinic, Naturopathy, Pranic Healing and House of aloe
 * Address: 43A, Agraharam Rd, Chinnamanur, Tamil Nadu 625515
 * Rating: 5.0 ★★★★★ (70+ Reviews)
 * Source link: https://share.google/MF64RNzh7p8CPa7Xv
 * =========================================================================
 */
const GOOGLE_MAPS_URL = 'https://share.google/MF64RNzh7p8CPa7Xv';

const GENUINE_REVIEWS = [
  {
    author: 'Kalpana S',
    rating: 5,
    date: 'October 2026',
    relativeTime: 'Recent Review',
    text: 'My mother got an excellent treatment for her leg pain and for swelling feet. Renuga mam gives acupuncture, oil theraphy, pranic healing and detox treatment. Mam is a knowledge and experienced healer. Thank you so much for your effective healing and treatment madam.',
  },
  {
    author: 'Kavitha Sangeetha',
    rating: 5,
    date: 'November 2025',
    relativeTime: '11 months ago',
    text: "My sinus problem clared without surgery. Thanks to acupuncture and seed teraphy. Excellent approach . Good guidance in my health life. Thanks Renuga mam I bought acupuncture slipper purchased for my hubby. It's cleard his foot corn",
  },
  {
    author: 'Dinesh Kumar',
    rating: 5,
    date: 'April 2026',
    relativeTime: '6 months ago',
    text: 'A good experience in business healing for last five years. My business is improving good. Similarly health is good with acupuncture therapy.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-pure-white border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Genuine Google Business Reviews for Sri Rama Acupuncture Clinic"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with Verified Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                GOOGLE BUSINESS REVIEWS
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Genuine reflections from our visitors.
            </h2>
          </div>

          {/* Google 5.0 Star Summary Chip */}
          <div className="flex items-center gap-3 self-start md:self-auto p-3.5 bg-ivory border border-gold/40">
            <div className="flex items-center text-gold text-sm gap-0.5" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-gold" aria-hidden="true" />
              ))}
            </div>
            <div className="text-xs">
              <p className="font-semibold text-forest-deep">5.0 Star Rating</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-forest-deep underline underline-offset-2 flex items-center gap-1 font-medium"
              >
                <span>70+ Google Reviews</span>
                <FiArrowUpRight className="text-[10px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GENUINE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-7 bg-ivory border border-charcoal/10 flex flex-col justify-between hover:border-gold/50 transition-colors shadow-sm"
            >
              <div>
                {/* Star Rating & Verified Marker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gold text-xs gap-1" aria-label={`${review.rating} stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-forest font-medium">
                    <FiCheckCircle className="text-xs text-gold" aria-hidden="true" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Review Text Preserving Authentic Wording */}
                <p className="font-serif text-sm sm:text-base text-forest-deep italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Attribution & Source */}
              <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-forest-deep">{review.author}</p>
                  <p className="text-[11px] text-charcoal-muted">{review.relativeTime}</p>
                </div>
                <span className="text-[10px] uppercase tracking-eyebrow text-charcoal-muted">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* External Link to Read All Reviews on Google */}
        <div className="mt-12 text-center pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs sm:text-sm text-charcoal-muted">
            All reviews are published by authentic patients on our Google Business Profile.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep border border-forest/30 hover:border-forest px-5 py-3 transition-colors min-h-[42px]"
          >
            <span>Read all 70+ reviews on Google</span>
            <FiArrowUpRight className="text-gold" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
