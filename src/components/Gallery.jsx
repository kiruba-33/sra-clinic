import React from 'react';
import { FiVideo, FiArrowUpRight } from 'react-icons/fi';

import heroImg from '../assets/editorial/hero-acupuncture.jpg';
import clinicImg from '../assets/editorial/clinic-therapy.jpg';
import careImg from '../assets/editorial/traditional-care.jpg';
import chairImg from '../assets/products/relaxation-chair.jpg';
import kitImg from '../assets/products/acupressure-kit.jpg';

/**
 * =========================================================================
 * CLINIC VIDEO ASSETS
 * Note: No fake video thumbnails are used. When authentic clinic walkthrough
 * or therapy video files are provided by the client, add their paths below.
 * =========================================================================
 */
const CLINIC_VIDEOS = [
  // Example when genuine video is supplied:
  // {
  //   title: "Clinic Consultation & Setting Walkthrough",
  //   src: "/videos/clinic-tour.mp4",
  //   description: "A calm look inside our Agraharam clinic in Chinnamanur.",
  // }
];

export default function Gallery() {
  const galleryItems = [
    {
      src: heroImg,
      alt: 'Classical acupuncture needles and fresh herbal therapy setting',
      title: 'Therapeutic Needles & Herbs',
      span: 'md:col-span-8',
      aspect: 'aspect-[16/10]',
    },
    {
      src: clinicImg,
      alt: 'Traditional herbal extracts and botanical wellness preparations',
      title: 'Botanical Therapy Setting',
      span: 'md:col-span-4',
      aspect: 'aspect-[4/5]',
    },
    {
      src: careImg,
      alt: 'Therapeutic stones and peaceful recovery space',
      title: 'Treatment Room Atmosphere',
      span: 'md:col-span-4',
      aspect: 'aspect-[4/5]',
    },
    {
      src: chairImg,
      alt: 'Full body relaxation massager station inside the clinic',
      title: 'In-Clinic Relaxation Equipment',
      span: 'md:col-span-4',
      aspect: 'aspect-[4/5]',
    },
    {
      src: kitImg,
      alt: 'Acupressure therapy accessories and point reflexology tools',
      title: 'Acupressure & Point Aids',
      span: 'md:col-span-4',
      aspect: 'aspect-[4/5]',
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-ivory border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Clinic Gallery and Video Demonstrations"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                CLINIC ATMOSPHERE
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Visuals of our setting and therapies.
            </h2>
          </div>

          <p className="text-xs text-charcoal-muted max-w-sm leading-relaxed border-l border-gold/40 pl-3.5 font-sans">
            Photographs of Sri Rama Acupuncture Clinic, therapy equipment, and traditional botanical accessories.
          </p>
        </div>

        {/* Asymmetrical Editorial Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} relative overflow-hidden border border-gold/30 bg-pure-white shadow-sm group`}
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 bg-pure-white/95 border-t border-charcoal/10 flex items-center justify-between">
                <span className="font-serif text-xs sm:text-sm text-forest-deep font-medium">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-eyebrow text-charcoal-muted">
                  Sri Rama Clinic
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Component Slot (Ready for Authentic Client Videos) */}
        {CLINIC_VIDEOS.length > 0 ? (
          <div className="mt-14 p-6 sm:p-8 bg-pure-white border border-charcoal/10">
            <h3 className="font-serif text-xl text-forest-deep font-medium mb-4">
              Therapy Demonstrations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLINIC_VIDEOS.map((vid, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="aspect-video bg-charcoal">
                    <video controls className="w-full h-full" preload="metadata">
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="font-serif text-sm text-forest-deep font-medium">
                    {vid.title}
                  </p>
                  <p className="text-xs text-charcoal-muted">{vid.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Honest editorial notice that video walkthroughs will appear when provided */
          <div className="mt-12 p-6 sm:p-8 bg-pure-white border border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0">
                <FiVideo className="text-forest text-lg" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-sm sm:text-base text-forest-deep font-medium">
                  Clinic Walkthrough & Video Demonstrations
                </p>
                <p className="text-xs text-charcoal-muted">
                  Authentic video tours and demonstration materials will be published here upon client delivery.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep whitespace-nowrap"
            >
              <span>Arrange an in-person visit</span>
              <FiArrowUpRight className="text-gold" aria-hidden="true" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
