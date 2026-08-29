import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

interface HeroProps {
  onStartClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = (ASSETS.hero.images && ASSETS.hero.images.length > 0)
    ? ASSETS.hero.images
    : [ASSETS.hero.image];

  // Cycle through background photos with Zoom In / Out transitions
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
      {/* Background Slideshow with Zoom-In & Zoom-Out transitions */}
      <div className="hero-slideshow-container">
        {heroImages.map((imgPath, index) => {
          const isCurrent = index === currentImageIndex;
          const imageUrl = resolveAssetUrl(imgPath);
          const isEven = index % 2 === 0;

          return (
            <div
              key={imgPath}
              className={`hero-slide ${isCurrent ? 'active' : ''} ${isEven ? 'zoom-in' : 'zoom-out'}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              role="img"
              aria-label={ASSETS.hero.alt}
            />
          );
        })}
        {/* Gradients: Subtle at top, darker at bottom to guarantee text legibility */}
        <div className="hero-gradient-overlay" />
        <div className="hero-vignette" />
      </div>

      {/* Hero Content Positioned Low to Give Maximum Priority to Family Faces */}
      <div className="hero-bottom-content">
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

        {/* Uiverse.io Inspired Animated Conic Border Button */}
        <div className="hero-cta-wrapper animate-blur-reveal" style={{ animationDelay: '0.55s' }}>
          <button
            type="button"
            className="uiverse-conic-btn"
            onClick={handleScrollDown}
            aria-label={t.hero.cta}
          >
            <span className="uiverse-btn-text">{t.hero.cta}</span>
            <ChevronDown size={18} className="uiverse-btn-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};
