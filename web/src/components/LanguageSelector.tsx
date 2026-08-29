import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/types';
import './LanguageSelector.css';

interface LangOption {
  code: Language;
  flag: string;
  shortLabel: string;
  name: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'es', flag: '🇪🇸', shortLabel: 'ES', name: 'Español' },
  { code: 'en', flag: '🇬🇧', shortLabel: 'EN', name: 'English' },
  { code: 'bn', flag: '🇧🇩', shortLabel: 'BN', name: 'বাংলা' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-dropdown-wrapper" ref={dropdownRef}>
      {/* Compact Main Trigger Button with Flag */}
      <button
        type="button"
        className={`lang-trigger-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Seleccionar idioma"
      >
        <span className="lang-flag-emoji" aria-hidden="true">{currentLang.flag}</span>
        <span className="lang-current-code">{currentLang.shortLabel}</span>
        <ChevronDown size={13} className={`lang-chevron ${isOpen ? 'rotated' : ''}`} aria-hidden="true" />
      </button>

      {/* Compact Luxury Dropdown Menu */}
      {isOpen && (
        <ul className="lang-dropdown-menu" role="listbox" aria-label="Idiomas disponibles">
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <li
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                className={`lang-dropdown-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="lang-item-flag" aria-hidden="true">{lang.flag}</span>
                <span className="lang-item-name">{lang.name}</span>
                {isSelected && <Check size={13} className="lang-check-icon" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
