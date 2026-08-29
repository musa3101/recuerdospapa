import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './ClosingSection.css';

export const ClosingSection: React.FC = () => {
  const { t } = useLanguage();
  const closingImageUrl = resolveAssetUrl(ASSETS.closing.image);

  return (
    <footer className="closing-section" role="contentinfo">
      {/* Background with warm ambient lighting */}
      <div
        className="closing-background"
        style={{ backgroundImage: `url(${closingImageUrl})` }}
        role="img"
        aria-label={ASSETS.closing.alt}
      >
        <div className="closing-overlay" />
      </div>

      <div className="closing-content">
        <div className="closing-heart-badge" aria-hidden="true">
          <Heart size={20} className="closing-heart-icon" />
        </div>

        <h2 className="closing-title">
          {t.closing.title}
        </h2>

        <p className="closing-final-words">
          {t.closing.finalWords}
        </p>

        <div className="closing-subtle-family">
          <Sparkles size={11} className="closing-sparkle-icon" />
          <span>{t.closing.family}</span>
        </div>

        {/* Dedicated Personalized Footer Credit for Musa */}
        <div className="closing-made-by-musa">
          <span className="made-by-text">{t.closing.madeBy}</span>
          <Heart size={14} className="made-by-heart" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
};
