import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/types';
import './LanguageSelector.css';

const LANGUAGES: Array<{ code: Language; label: string; name: string }> = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'bn', label: 'বাংলা', name: 'বাংলা' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="lang-switcher-container" aria-label="Selección de idioma / Language switcher">
      <div className="lang-switcher-pill">
        <Globe size={13} className="lang-globe-icon" aria-hidden="true" />
        <div className="lang-buttons-group" role="group">
          {LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                className={`lang-btn ${isActive ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
                aria-pressed={isActive}
                title={lang.name}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
