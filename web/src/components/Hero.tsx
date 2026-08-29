import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

interface HeroProps {
  onStartClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  const { t } = useLanguage();
  const heroImageUrl = resolveAssetUrl(ASSETS.hero.image);

  const handleScrollDown = () => {
    if (onStartClick) {
      onStartClick();
      return;
    }
    const target = document.getElementById('video-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-container" role="banner">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        role="img"
        aria-label={ASSETS.hero.alt}
      >
        <div className="hero-overlay" />
        <div className="hero-vignette" />
      </div>

      {/* Hero Content with Blur-Reveal Animation */}
      <div className="hero-content">
        <div className="hero-badge animate-blur-reveal" style={{ animationDelay: '0.1s' }}>
          <Heart className="hero-badge-icon" size={13} />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className="hero-title animate-blur-reveal" style={{ animationDelay: '0.25s' }}>
          {t.hero.title}
        </h1>

        <p className="hero-subtitle animate-blur-reveal" style={{ animationDelay: '0.4s' }}>
          {t.hero.subtitle}
        </p>

        <div className="hero-cta-wrapper animate-blur-reveal" style={{ animationDelay: '0.55s' }}>
          <button
            type="button"
            className="hero-cta-button"
            onClick={handleScrollDown}
            aria-label={t.hero.cta}
          >
            <span>{t.hero.cta}</span>
            <ChevronDown size={17} className="hero-cta-icon" />
          </button>
        </div>
      </div>

      {/* Sutil Scroll Indicator */}
      <div className="hero-scroll-indicator" onClick={handleScrollDown} aria-hidden="true">
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-dot" />
        </div>
        <span className="scroll-indicator-text">{t.hero.scrollHint}</span>
      </div>
    </header>
  );
};
