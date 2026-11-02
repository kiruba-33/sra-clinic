import React, { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import { LanguageContext } from './createLanguageContext';

const STORAGE_KEY = 'sra_language';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ta') {
        return saved;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'en';
  });

  const setLanguage = (lang) => {
    if (lang !== 'en' && lang !== 'ta') return;
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Silent fail if storage is restricted
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  useEffect(() => {
    // Sync document HTML lang attribute
    document.documentElement.lang = language === 'ta' ? 'ta' : 'en';
  }, [language]);

  /**
   * Helper function to look up nested translation key (e.g. 'nav.home')
   */
  const t = (path, fallback = '') => {
    if (!path) return fallback;
    const parts = path.split('.');
    let curr = translations[language];
    for (const p of parts) {
      if (curr && typeof curr === 'object' && p in curr) {
        curr = curr[p];
      } else {
        // Fallback to English if missing in current language
        let enCurr = translations.en;
        for (const ep of parts) {
          if (enCurr && typeof enCurr === 'object' && ep in enCurr) {
            enCurr = enCurr[ep];
          } else {
            return fallback || path;
          }
        }
        return enCurr ?? fallback;
      }
    }
    return curr ?? fallback;
  };

  const isTamil = language === 'ta';

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isTamil,
        t,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
