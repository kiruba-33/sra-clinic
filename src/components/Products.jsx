import React from 'react';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';

import twisterImg from '../assets/products/twister-disc.jpg';
import massager12Img from '../assets/products/12-ball-massager.jpg';
import kitImg from '../assets/products/acupressure-kit.jpg';
import eyeMaskImg from '../assets/products/cooling-eye-mask.jpg';
import slipperImg from '../assets/products/acupressure-slipper.jpg';
import faceMaskImg from '../assets/products/hot-cold-face-mask.jpg';
import magicRollerImg from '../assets/products/magic-roller.jpg';
import abdomenImg from '../assets/products/abdomen-gel-pack.jpg';
import chairImg from '../assets/products/relaxation-chair.jpg';

export default function Products({ onSelectProduct }) {
  const products = [
    {
      name: 'Full Body Relaxation Massager',
      category: 'In-Clinic Equipment · Deep Relaxation',
      description:
        'Comprehensive multi-zone relaxation chair available at the clinic for deep muscular decompression, circulation ease, and quiet restorative sessions.',
      image: chairImg,
      badge: 'Available at Clinic',
    },
    {
      name: 'Magic Roller ACS Body Massager',
      category: 'Client Category · Muscular & Joint Care',
      description:
        'Contoured acupressure rolling device fitted with flexible handle cords and rotating nodules, suited for neck, back, thigh, and knee comfort.',
      image: magicRollerImg,
    },
    {
      name: '5-in-1 Acupressure Twister Device',
      category: 'Client Category · Core Balance & Reflex',
      description:
        'Rotating circular disc with textured foot pyramids and embedded magnetic nodes for standing balance exercises and plantar stimulation.',
      image: twisterImg,
    },
    {
      name: 'Acupressure Reflexology Slipper',
      category: 'Client Category · Foot Reflex & Stress Relief',
      description:
        'Footwear lined with spring-loaded acupressure nodules positioned to gently stimulate key reflexology points during brief indoor walking.',
      image: slipperImg,
    },
    {
      name: 'Multi-Piece Acupressure Wellness Kit',
      category: 'Client Category · Home Reflex Support',
      description:
        'Set comprising an acupressure foot mat, wooden handle rollers, spiked therapy ball, and finger rings for routine point stimulation at home.',
      image: kitImg,
    },
    {
      name: '12-Ball Targeted Massager',
      category: 'Client Category · Multi-Part Massage',
      description:
        'Ergonomically shaped massage unit with dual handle grips and rotating spheres designed for targeted back, waist, shoulder, and leg comfort.',
      image: massager12Img,
    },
    {
      name: 'Cooling Gel Eye Mask',
      category: 'Client Category · Rest & Deep Sleep Support',
      description:
        'Comfort-shaped gel pack for cold or ambient temperature use, created to soothe eye strain from prolonged screen use and promote restful sleep.',
      image: eyeMaskImg,
    },
    {
      name: 'Hot & Cold Facial Gel Mask',
      category: 'Client Category · Stress Relief & Thermal Care',
      description:
        'Full-face thermal mask that can be gently chilled or warmed to relieve facial tightness, headache heaviness, and ambient discomfort.',
      image: faceMaskImg,
    },
    {
      name: 'Thermal Abdomen Gel Pack',
      category: 'Client Category · Abdominal & Muscular Ease',
      description:
        'Reusable medium and large sized gel compress adaptable for hot or cold therapy across abdomen, lower back, and joint muscle areas.',
      image: abdomenImg,
    },
  ];

  return (
    <section
      id="products"
      className="py-24 md:py-36 bg-ivory relative"
      aria-label="Wellness Products & Devices"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
              <p className="text-xs uppercase tracking-editorial font-medium text-forest">
                WELLNESS DEVICES & HOME THERAPY
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Therapeutic devices from the clinic collection.
            </h2>
          </div>

          <div className="max-w-md text-xs text-charcoal-muted leading-relaxed border-l border-gold/40 pl-4 font-sans">
            Items shown represent wellness aids and supportive equipment available at Sri Rama Acupuncture Clinic. Product categories follow client materials. Inquire directly for availability.
          </div>
        </div>

        {/* Editorial Product Showcase: Asymmetric & Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-pure-white border border-charcoal/10 flex flex-col justify-between transition-all duration-300 hover:border-gold/60 hover:shadow-sm group min-w-0"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative aspect-[4/3] bg-ivory/60 p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b border-charcoal/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-forest text-ivory text-[10px] uppercase tracking-eyebrow px-2.5 py-1 font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] uppercase tracking-editorial text-gold font-medium block mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-forest-deep font-medium mb-2.5 group-hover:text-forest transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-3 border-t border-charcoal/5 flex items-center justify-between gap-3 min-h-[48px]">
                <a
                  href="#contact"
                  onClick={() => onSelectProduct && onSelectProduct(product.name)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep py-2 min-h-[40px]"
                >
                  <span>Enquire Availability</span>
                  <FiArrowUpRight className="text-gold text-xs" aria-hidden="true" />
                </a>

                <a
                  href="tel:9942611444"
                  className="text-xs text-charcoal-muted hover:text-forest flex items-center gap-1.5 py-2 px-1 min-h-[40px]"
                  title="Call clinic to enquire"
                  aria-label={`Call clinic to enquire about ${product.name}`}
                >
                  <FiPhone className="text-xs text-forest flex-shrink-0" aria-hidden="true" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Product Consultation Footnote */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-pure-white border border-gold/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-lg sm:text-xl text-forest font-semibold mb-1">
              Looking for a specific traditional wellness tool?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Our clinic carries an evolving range of therapeutic accessories for foot acupressure, gentle traction, and muscle relaxation. Speak directly with the clinic to check current stock and guidance.
            </p>
          </div>
          <a
            href="tel:9942611444"
            className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-colors whitespace-nowrap self-start md:self-auto min-h-[44px]"
          >
            <FiPhone className="text-gold" aria-hidden="true" />
            <span>Call 99426 11444</span>
          </a>
        </div>

      </div>
    </section>
  );
}
