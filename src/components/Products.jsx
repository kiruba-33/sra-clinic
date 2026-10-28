import React from 'react';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';

import twisterImg from '../assets/products/twister-disc.webp';
import massager12Img from '../assets/products/12-ball-massager.webp';
import kitImg from '../assets/products/acupressure-kit.webp';
import eyeMaskImg from '../assets/products/cooling-eye-mask.webp';
import slipperImg from '../assets/products/acupressure-slipper.webp';
import faceMaskImg from '../assets/products/hot-cold-face-mask.webp';
import magicRollerImg from '../assets/products/magic-roller.webp';
import abdomenImg from '../assets/products/abdomen-gel-pack.webp';
import chairImg from '../assets/products/relaxation-chair.webp';

export default function Products({ onSelectProduct }) {
  const products = [
    {
      name: 'Full Body Relaxation Massager',
      category: 'In-Clinic Equipment',
      description:
        'Multi-zone relaxation chair available at the clinic for gentle muscular decompression and quiet restorative sessions.',
      image: chairImg,
      badge: 'Available at Clinic',
    },
    {
      name: 'Magic Roller ACS Body Massager',
      category: 'Acupressure Rolling Unit',
      description:
        'Contoured roller with flexible handle cords and rotating nodules suited for back, neck, and thigh comfort.',
      image: magicRollerImg,
    },
    {
      name: '5-in-1 Acupressure Twister Disc',
      category: 'Balance & Reflex Platform',
      description:
        'Rotating disc with textured foot pyramids and embedded nodes for standing balance exercises and foot stimulation.',
      image: twisterImg,
    },
    {
      name: 'Acupressure Reflexology Slipper',
      category: 'Foot Reflexology Wear',
      description:
        'Indoor footwear lined with spring-loaded acupressure nodules to gently stimulate key reflexology points during walking.',
      image: slipperImg,
    },
    {
      name: 'Multi-Piece Acupressure Wellness Kit',
      category: 'Home Reflexology Set',
      description:
        'Complete collection including an acupressure foot mat, wooden rollers, and therapy ball for routine point care.',
      image: kitImg,
    },
    {
      name: '12-Ball Targeted Massager',
      category: 'Localized Massage Tool',
      description:
        'Ergonomic massage unit with dual grips and rotating spheres designed for targeted back, waist, and shoulder ease.',
      image: massager12Img,
    },
    {
      name: 'Cooling Gel Eye Mask',
      category: 'Eye Rest & Thermal Care',
      description:
        'Contoured gel pack usable chilled or at ambient temperature to soothe routine eye strain from prolonged screen use.',
      image: eyeMaskImg,
    },
    {
      name: 'Hot & Cold Facial Mask',
      category: 'Thermal Facial Compress',
      description:
        'Full-face thermal mask that can be chilled or warmed to provide soothing comfort across the face and forehead.',
      image: faceMaskImg,
    },
    {
      name: 'Thermal Abdomen Gel Pack',
      category: 'Reusable Hot & Cold Compress',
      description:
        'Durable thermal gel pack adaptable for warm or cold application across the abdomen, lower back, and joints.',
      image: abdomenImg,
    },
  ];

  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-pure-white border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Wellness Products and Supportive Devices"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                SUPPORTIVE WELLNESS DEVICES
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Therapeutic aids from the clinic collection.
            </h2>
          </div>

          <p className="text-xs text-charcoal-muted max-w-sm leading-relaxed border-l border-gold/40 pl-3.5 font-sans">
            Supportive accessories available at the clinic. Inquire directly for availability and consultation guidance.
          </p>
        </div>

        {/* Clean Editorial Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-ivory/50 border border-charcoal/10 flex flex-col justify-between transition-all duration-300 hover:border-gold/60 group min-w-0"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative aspect-[4/3] bg-pure-white p-5 flex items-center justify-center overflow-hidden border-b border-charcoal/10">
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

                {/* Details */}
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-editorial text-gold font-medium block mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-forest-deep font-medium mb-2 group-hover:text-forest transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 pb-4 pt-3 border-t border-charcoal/5 flex items-center justify-between gap-3">
                <a
                  href="#contact"
                  onClick={() => onSelectProduct && onSelectProduct(product.name)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep py-1"
                >
                  <span>Enquire Availability</span>
                  <FiArrowUpRight className="text-gold text-xs" aria-hidden="true" />
                </a>

                <a
                  href="tel:9942611444"
                  className="text-xs text-charcoal-muted hover:text-forest flex items-center gap-1.5 py-1 px-1"
                  aria-label={`Call to enquire about ${product.name}`}
                >
                  <FiPhone className="text-xs text-forest flex-shrink-0" aria-hidden="true" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
