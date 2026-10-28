import React, { useState } from 'react';
import { FiArrowUpRight, FiInfo } from 'react-icons/fi';

// Service & Treatment Images (Optimized WebP < 150 KB)
import acupunctureImg from '../assets/services/acupuncture.webp';
import pranicImg from '../assets/services/pranic-healing.webp';
import cuppingImg from '../assets/services/cupping-therapy.webp';
import seedImg from '../assets/services/seed-therapy.webp';
import steamBathImg from '../assets/services/steam-bath.webp';
import hipBathImg from '../assets/services/hip-bath.webp';
import spineBathImg from '../assets/services/spine-bath.webp';
import bananaLeafImg from '../assets/services/banana-leaf-bath.webp';
import varmaImg from '../assets/services/varma-therapy.webp';
import thokkanamImg from '../assets/services/thokkanam-treatment.webp';
import magneticImg from '../assets/services/magnetic-therapy.webp';
import foodMedicineImg from '../assets/services/food-medicine.webp';
import yogaImg from '../assets/services/yoga.webp';
import mudrasImg from '../assets/services/mudras.webp';

// Authentic Product Images (Clean Studio Photography, Optimized WebP < 150 KB)
import slipperImg from '../assets/products/acupressure-slipper.webp';
import magicRollerImg from '../assets/products/magic-roller.webp';
import twisterImg from '../assets/products/twister-disc.webp';
import kitImg from '../assets/products/acupressure-kit.webp';
import massager12Img from '../assets/products/12-ball-massager.webp';
import eyeMaskImg from '../assets/products/cooling-eye-mask.webp';
import faceMaskImg from '../assets/products/hot-cold-face-mask.webp';
import abdomenImg from '../assets/products/abdomen-gel-pack.webp';
import chairImg from '../assets/products/relaxation-chair.webp';

/**
 * =========================================================================
 * UNIFIED SHOWCASE: TREATMENTS & WELLNESS PRODUCTS
 * Sri Rama Acupuncture Clinic · Chinnamanur, Theni
 * Every service and product has its own verified, relevant photograph.
 * Category Types: "Treatment", "Wellness", "Product"
 * =========================================================================
 */
const ALL_ITEMS = [
  // --- Treatments & Therapies ---
  {
    id: 'acupuncture',
    name: 'Acupuncture',
    category: 'Treatment',
    categoryType: 'treatment',
    image: acupunctureImg,
    description:
      'Classical meridian point stimulation to relieve pain and restore vital energy balance.',
  },
  {
    id: 'pranic-healing',
    name: 'Pranic Healing',
    category: 'Treatment',
    categoryType: 'treatment',
    image: pranicImg,
    description:
      'Non-touch vital energy therapy to cleanse and harmonize subtle energy pathways.',
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy',
    category: 'Treatment',
    categoryType: 'treatment',
    image: cuppingImg,
    description:
      'Traditional suction therapy along muscular meridians to ease deep muscle tension.',
  },
  {
    id: 'seed-therapy',
    name: 'Seed Therapy',
    category: 'Treatment',
    categoryType: 'treatment',
    image: seedImg,
    description:
      'Placement of natural therapeutic seeds on reflex points for sustained stimulation.',
  },
  {
    id: 'varma-therapy',
    name: 'Varmam (Varma) Therapy',
    category: 'Treatment',
    categoryType: 'treatment',
    image: varmaImg,
    description:
      'Traditional Tamil vital pressure point therapy to release energy blockages.',
  },
  {
    id: 'thokkanam-treatment',
    name: 'Thokkanam Treatment',
    category: 'Treatment',
    categoryType: 'treatment',
    image: thokkanamImg,
    description:
      'Traditional therapeutic bodywork and mobilization to relieve muscular and joint stiffness.',
  },
  {
    id: 'magnetic-therapy',
    name: 'Magnetic Therapy',
    category: 'Treatment',
    categoryType: 'treatment',
    image: magneticImg,
    description:
      'Application of gentle static magnetic pads to support localized circulation.',
  },
  {
    id: 'steam-bath',
    name: 'Steam Bath',
    category: 'Treatment',
    categoryType: 'treatment',
    image: steamBathImg,
    description:
      'Traditional herbal steam exposure to open pores and encourage natural bodily relaxation.',
  },
  {
    id: 'hip-bath',
    name: 'Hip Bath',
    category: 'Treatment',
    categoryType: 'treatment',
    image: hipBathImg,
    description:
      'Specialized pelvic hydrotherapy immersion to support abdominal and lower body wellness.',
  },
  {
    id: 'spine-bath',
    name: 'Spine Bath',
    category: 'Treatment',
    categoryType: 'treatment',
    image: spineBathImg,
    description:
      'Targeted spinal hydrotherapy to calm the nervous system and relieve back tension.',
  },
  {
    id: 'banana-leaf-bath',
    name: 'Banana Leaf Bath',
    category: 'Treatment',
    categoryType: 'treatment',
    image: bananaLeafImg,
    description:
      'Classical natural sun-bath therapy wrapped in fresh banana leaves for full-body revitalization.',
  },

  // --- Wellness Practices ---
  {
    id: 'food-medicine',
    name: 'Food Medicine',
    category: 'Wellness',
    categoryType: 'wellness',
    image: foodMedicineImg,
    description:
      'Personalized dietary guidance rooted in traditional healing principles to nourish recovery.',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    category: 'Wellness',
    categoryType: 'wellness',
    image: yogaImg,
    description:
      'Therapeutic postures and gentle breathwork tailored to individual physical wellbeing.',
  },
  {
    id: 'mudras',
    name: 'Mudras',
    category: 'Wellness',
    categoryType: 'wellness',
    image: mudrasImg,
    description:
      'Traditional hand gestures designed to harmonize subtle elements and focus vital energy.',
  },

  // --- Clinic Products ---
  {
    id: 'acupressure-slipper',
    name: 'Acupressure Reflexology Slipper',
    category: 'Product',
    categoryType: 'product',
    image: slipperImg,
    description:
      'Footwear lined with spring-loaded acupressure nodules for everyday foot stimulation.',
  },
  {
    id: 'magic-roller',
    name: 'Magic Roller ACS Body Massager',
    category: 'Product',
    categoryType: 'product',
    image: magicRollerImg,
    description:
      'Contoured roller with flexible handle cords and rotating nodules for back and leg relief.',
  },
  {
    id: 'twister-disc',
    name: '5-in-1 Acupressure Twister Disc',
    category: 'Product',
    categoryType: 'product',
    image: twisterImg,
    description:
      'Rotating balance platform with textured foot pyramids and embedded reflexology nodes.',
  },
  {
    id: 'acupressure-kit',
    name: 'Multi-Piece Acupressure Wellness Kit',
    category: 'Product',
    categoryType: 'product',
    image: kitImg,
    description:
      'Home reflexology collection with acupressure mat, wooden rollers, and therapy ball.',
  },
  {
    id: '12-ball-massager',
    name: '12-Ball Targeted Massager',
    category: 'Product',
    categoryType: 'product',
    image: massager12Img,
    description:
      'Ergonomic massage unit with dual grips and rotating spheres for targeted muscle ease.',
  },
  {
    id: 'cooling-eye-mask',
    name: 'Cooling Gel Eye Mask',
    category: 'Product',
    categoryType: 'product',
    image: eyeMaskImg,
    description:
      'Contoured gel pack used chilled to soothe routine eye strain from prolonged screen use.',
  },
  {
    id: 'hot-cold-face-mask',
    name: 'Hot & Cold Facial Mask',
    category: 'Product',
    categoryType: 'product',
    image: faceMaskImg,
    description:
      'Thermal full-face compress usable warm or chilled for facial relaxation and tension relief.',
  },
  {
    id: 'abdomen-gel-pack',
    name: 'Thermal Abdomen Gel Pack',
    category: 'Product',
    categoryType: 'product',
    image: abdomenImg,
    description:
      'Reusable thermal gel pack adaptable for warm or cold application across abdomen and joints.',
  },
  {
    id: 'relaxation-chair',
    name: 'Full Body Relaxation Massager',
    category: 'Product',
    categoryType: 'product',
    image: chairImg,
    description:
      'Multi-zone therapeutic relaxation chair available at the clinic for restorative sessions.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'treatment', label: 'Treatments' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'product', label: 'Products' },
];

export default function TreatmentsAndProducts({ onSelectItem }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? ALL_ITEMS
      : ALL_ITEMS.filter((item) => item.categoryType === activeFilter);

  const handleEnquiry = (itemName) => {
    if (onSelectItem) {
      onSelectItem(itemName);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="treatments"
      className="py-20 md:py-28 bg-ivory border-b border-charcoal/10 scroll-mt-20 md:scroll-mt-24"
      aria-label="Treatments and Wellness Products Showcase"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-forest" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-forest">
                CLINICAL CARE & SUPPORTIVE AIDS
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
              Treatments & Wellness Products
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2 leading-relaxed">
              Explore our traditional therapies and supportive wellness devices designed to restore balance naturally.
            </p>
          </div>

          {/* Understated Clinical Disclaimer */}
          <p className="text-xs text-charcoal-muted max-w-xs leading-relaxed border-l border-gold/40 pl-3.5 font-sans">
            Therapies and devices are recommended individually during personal consultation.
          </p>
        </div>

        {/* Clinical Health Concerns Preserved Strip */}
        <div className="mb-8 p-4 bg-pure-white/80 border border-charcoal/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-charcoal-muted">
          <div className="flex items-center gap-1.5 font-medium text-forest">
            <FiInfo className="text-gold text-sm" aria-hidden="true" />
            <span className="uppercase tracking-eyebrow text-[10px]">Concerns Addressed:</span>
          </div>
          <span className="text-charcoal-soft font-medium">Varicose Vein Relief</span>
          <span className="text-charcoal/30">·</span>
          <span className="text-charcoal-soft font-medium">Sciatic Nerve Pathway Relief</span>
          <span className="text-charcoal/30">·</span>
          <span className="text-charcoal-soft font-medium">Insomnia & Sleep Balance</span>
          <span className="text-charcoal/30">·</span>
          <span className="text-charcoal-soft font-medium">Joint & Muscular Tension</span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-charcoal/10">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? ALL_ITEMS.length
                : ALL_ITEMS.filter((i) => i.categoryType === cat.id).length;
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-eyebrow font-medium transition-all min-h-[38px] ${
                  isActive
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'bg-pure-white text-charcoal-soft hover:bg-pure-white/80 border border-charcoal/10 hover:border-forest/30'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-forest-deep text-gold' : 'bg-charcoal/5 text-charcoal-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Editorial Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-pure-white border border-charcoal/10 hover:border-gold/50 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden"
            >
              <div>
                {/* Relevant Photograph for Every Item */}
                <div className="relative aspect-[4/3] bg-ivory overflow-hidden border-b border-charcoal/10">
                  <img
                    src={item.image}
                    alt={`${item.name} at Sri Rama Acupuncture Clinic`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />

                  {/* Understated Category Label */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] uppercase tracking-eyebrow font-semibold px-2.5 py-1 border shadow-xs ${
                        item.categoryType === 'treatment'
                          ? 'bg-forest-deep/90 text-ivory border-gold/40'
                          : item.categoryType === 'wellness'
                          ? 'bg-sage-dark/90 text-ivory border-sage-light/30'
                          : 'bg-pure-white/95 text-forest-deep border-gold/40'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-forest-deep font-medium group-hover:text-forest transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-charcoal-soft font-normal leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2 border-t border-charcoal/5">
                <button
                  type="button"
                  onClick={() => handleEnquiry(item.name)}
                  className="w-full inline-flex items-center justify-between text-xs uppercase tracking-eyebrow font-medium text-forest hover:text-forest-deep py-2 group-hover:underline min-h-[36px]"
                >
                  <span>
                    {item.categoryType === 'product'
                      ? 'Enquire Availability'
                      : 'Consult for This Therapy'}
                  </span>
                  <FiArrowUpRight className="text-gold text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-pure-white border border-gold/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-xl">
            <p className="font-serif text-lg sm:text-xl text-forest-deep font-medium">
              Personalized Treatment Combinations
            </p>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Our healer evaluates your health background during an in-person consultation to recommend appropriate acupuncture, traditional therapies, and supportive aids.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-all duration-300 min-h-[44px] whitespace-nowrap self-stretch md:self-auto shadow-sm"
          >
            <span>Book Consultation</span>
            <FiArrowUpRight className="text-gold text-sm" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
