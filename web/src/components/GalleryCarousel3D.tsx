import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Images, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './GalleryCarousel3D.css';

const TOTAL_ITEMS = 8;
const ANGLE_STEP = 360 / TOTAL_ITEMS; // 45 degrees

export const GalleryCarousel3D: React.FC = () => {
  const { t } = useLanguage();
  const [angle, setAngle] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const touchStartX = useRef<number | null>(null);
  const autoPlayTimerRef = useRef<number | null>(null);

  const rotateNext = useCallback(() => {
    setAngle((prev) => prev - ANGLE_STEP);
  }, []);

  const rotatePrev = useCallback(() => {
    setAngle((prev) => prev + ANGLE_STEP);
  }, []);

  // Auto-spin logic
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayTimerRef.current !== null) window.clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = window.setInterval(() => {
      rotateNext();
    }, 4200);

    return () => {
      if (autoPlayTimerRef.current !== null) window.clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, rotateNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        rotatePrev();
      } else {
        rotateNext();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="galeria" className="section-wrapper gallery-3d-section" aria-labelledby="gallery-title">
      <div className="section-header">
        <span className="section-tag">
          <Images size={13} />
          <span>{t.gallery.tag}</span>
        </span>
        <h2 id="gallery-title" className="section-title">
          {t.gallery.title}
        </h2>
        <p className="section-subtitle">
          {t.gallery.subtitle}
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div
        className="carousel-3d-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-3d-stage">
          <figure
            id="spinner-3d"
            className="carousel-3d-spinner"
            style={{
              transform: `rotateY(${angle}deg)`,
              WebkitTransform: `rotateY(${angle}deg)`,
            }}
          >
            {ASSETS.gallery.items.slice(0, TOTAL_ITEMS).map((item, index) => {
              const itemAngle = index * -ANGLE_STEP;
              const imageUrl = resolveAssetUrl(item.image);

              return (
                <div
                  key={item.id}
                  className="carousel-3d-item"
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                    WebkitTransform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                  }}
                  onClick={() => setActivePhoto(imageUrl)}
                >
                  <div className="carousel-photo-frame">
                    <img
                      src={imageUrl}
                      alt={item.caption}
                      className="carousel-photo-img"
                      loading="lazy"
                    />
                    <div className="carousel-photo-glow" />
                  </div>
                </div>
              );
            })}
          </figure>
        </div>

        {/* Floating Controls */}
        <div className="carousel-3d-controls">
          <button
            type="button"
            className="carousel-ctrl-btn"
            onClick={rotatePrev}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className={`carousel-ctrl-btn auto-toggle ${isAutoPlaying ? 'playing' : ''}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pausar giro automático' : 'Reanudar giro automático'}
          >
            {isAutoPlaying ? <Pause size={17} /> : <Play size={17} />}
          </button>

          <button
            type="button"
            className="carousel-ctrl-btn"
            onClick={rotateNext}
            aria-label="Siguiente foto"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="carousel-swipe-hint">
          <Sparkles size={12} />
          <span>Desliza para girar el carrusel 3D</span>
        </p>
      </div>

      {/* Fullscreen Photo Modal if clicked */}
      {activePhoto && (
        <div className="photo-modal-overlay" onClick={() => setActivePhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto} alt="Recuerdo ampliado" className="photo-modal-img" />
            <button
              type="button"
              className="photo-modal-close"
              onClick={() => setActivePhoto(null)}
              aria-label="Cerrar foto"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
