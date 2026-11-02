import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageSwitcher() {
  const { setLanguage, isTamil } = useLanguage();

  return (
    <div
      className="fixed z-50 right-4 sm:right-6 bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] lg:bottom-6 lg:right-6 transition-all duration-300 pointer-events-auto"
      aria-label="Language selector"
    >
      <div
        role="group"
        aria-label="Select website language"
        className="inline-flex items-center gap-1 p-1 bg-ivory/95 backdrop-blur-md border border-gold/50 shadow-[0_4px_20px_rgba(33,75,56,0.18)] rounded-full transition-transform hover:scale-[1.02]"
      >
        {/* Globe Icon */}
        <div className="pl-2 pr-1 text-forest flex items-center justify-center">
          <FiGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" aria-hidden="true" />
        </div>

        {/* English Option */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-[11px] sm:text-xs tracking-wider rounded-full font-medium transition-all duration-200 min-h-[30px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 focus:ring-offset-ivory cursor-pointer ${
            !isTamil
              ? 'bg-forest text-ivory shadow-xs font-semibold'
              : 'text-charcoal-muted hover:text-forest hover:bg-forest/5'
          }`}
          aria-pressed={!isTamil}
          aria-label="Switch website language to English"
        >
          EN
        </button>

        {/* Divider */}
        <span className="w-[1px] h-3 bg-charcoal/20" aria-hidden="true" />

        {/* Tamil Option */}
        <button
          type="button"
          onClick={() => setLanguage('ta')}
          className={`px-2.5 py-1 text-[11px] sm:text-xs rounded-full font-medium transition-all duration-200 min-h-[30px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 focus:ring-offset-ivory cursor-pointer ${
            isTamil
              ? 'bg-forest text-ivory shadow-xs font-semibold'
              : 'text-charcoal-muted hover:text-forest hover:bg-forest/5'
          }`}
          aria-pressed={isTamil}
          aria-label="இணையதள மொழியை தமிழிற்கு மாற்றவும்"
        >
          தமிழ்
        </button>
      </div>
    </div>
  );
}
