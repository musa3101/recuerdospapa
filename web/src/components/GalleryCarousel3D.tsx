import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Images, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Grid, X } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './GalleryCarousel3D.css';

const VISIBLE_3D_COUNT = 10;
const ANGLE_STEP = 360 / VISIBLE_3D_COUNT; // 36 degrees for 10 items in 3D orbit

export const GalleryCarousel3D: React.FC = () => {
  const { t } = useLanguage();
  const items = ASSETS.gallery.items;
  const totalItems = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [showGridModal, setShowGridModal] = useState(false);

  // Touch and drag refs
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const autoPlayTimerRef = useRef<number | null>(null);

  // Navigate next / prev
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || activePhotoIndex !== null || showGridModal) {
      if (autoPlayTimerRef.current !== null) window.clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = window.setInterval(() => {
      goToNext();
    }, 7000);

    return () => {
      if (autoPlayTimerRef.current !== null) window.clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, activePhotoIndex, showGridModal, goToNext]);

  // Touch gesture handlers for Carousel
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    touchStartXRef.current = clientX;
    touchDeltaXRef.current = 0;
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingRef.current || touchStartXRef.current === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    touchDeltaXRef.current = clientX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = touchDeltaXRef.current;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  // Lightbox Modal Touch Navigation
  const modalTouchStartX = useRef<number | null>(null);

  const handleModalTouchStart = (e: React.TouchEvent) => {
    modalTouchStartX.current = e.touches[0].clientX;
  };

  const handleModalTouchEnd = (e: React.TouchEvent) => {
    if (modalTouchStartX.current === null || activePhotoIndex === null) return;
    const diff = e.changedTouches[0].clientX - modalTouchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Prev photo
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + totalItems) % totalItems : 0));
      } else {
        // Next photo
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % totalItems : 0));
      }
    }
    modalTouchStartX.current = null;
  };

  // Generate 10 visible items around the current index for 3D stage
  const visibleItems = [];
  const halfCount = Math.floor(VISIBLE_3D_COUNT / 2);
  for (let offset = -halfCount; offset <= halfCount; offset++) {
    const itemIndex = (currentIndex + offset + totalItems * 10) % totalItems;
    visibleItems.push({
      item: items[itemIndex],
      itemIndex,
      offset,
    });
  }

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
          {t.gallery.subtitle} ({totalItems} recuerdos)
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div
        className="carousel-3d-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div className="carousel-3d-stage">
          <figure
            id="spinner-3d"
            className="carousel-3d-spinner"
            style={{
              transform: `rotateY(${-currentIndex * ANGLE_STEP}deg)`,
              WebkitTransform: `rotateY(${-currentIndex * ANGLE_STEP}deg)`,
            }}
          >
            {visibleItems.map(({ item, itemIndex }) => {
              const itemAngle = itemIndex * ANGLE_STEP;
              const imageUrl = resolveAssetUrl(item.image);
              const isActive = itemIndex === currentIndex;

              return (
                <div
                  key={`${item.id}-${itemIndex}`}
                  className={`carousel-3d-item ${isActive ? 'active-item' : ''}`}
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                    WebkitTransform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                  }}
                  onClick={() => setActivePhotoIndex(itemIndex)}
                >
                  <div className="carousel-photo-frame">
                    <img
                      src={imageUrl}
                      alt={item.caption || `Foto ${itemIndex + 1}`}
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

        {/* Floating Play/Pause Controls */}
        <div className="carousel-3d-controls">
          <button
            type="button"
            className="carousel-ctrl-btn"
            onClick={goToPrev}
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
            onClick={goToNext}
            aria-label="Siguiente foto"
          >
            <ChevronRight size={20} />
          </button>

          <button
            type="button"
            className="carousel-ctrl-btn grid-btn"
            onClick={() => setShowGridModal(true)}
            title="Ver todas las fotos"
            aria-label="Ver todas las fotos en cuadrícula"
          >
            <Grid size={17} />
          </button>
        </div>

        {/* Swipe Hint */}
        <p className="carousel-swipe-hint">
          <Sparkles size={12} />
          <span>Desliza con el dedo para cambiar de foto</span>
        </p>

        {/* Bottom Range Slider / Scrubber */}
        <div className="gallery-scrubber-container">
          <div className="gallery-scrubber-info">
            <span className="gallery-scrubber-counter">
              Foto <strong>{currentIndex + 1}</strong> de {totalItems}
            </span>
          </div>
          <div className="gallery-scrubber-slider-wrapper">
            <input
              type="range"
              min="0"
              max={totalItems - 1}
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
              className="gallery-range-scrubber"
              aria-label="Navegar por las fotos"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal with Swipe Support */}
      {activePhotoIndex !== null && (
        <div
          className="photo-modal-overlay"
          onClick={() => setActivePhotoIndex(null)}
          onTouchStart={handleModalTouchStart}
          onTouchEnd={handleModalTouchEnd}
        >
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={resolveAssetUrl(items[activePhotoIndex].image)}
              alt={`Foto ${activePhotoIndex + 1}`}
              className="photo-modal-img"
            />

            <div className="photo-modal-caption-bar">
              <span>
                {items[activePhotoIndex].caption} ({activePhotoIndex + 1} / {totalItems})
              </span>
            </div>

            <button
              type="button"
              className="photo-modal-close"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Cerrar foto"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              className="photo-modal-nav modal-nav-prev"
              onClick={() =>
                setActivePhotoIndex((prev) =>
                  prev !== null ? (prev - 1 + totalItems) % totalItems : 0
                )
              }
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className="photo-modal-nav modal-nav-next"
              onClick={() =>
                setActivePhotoIndex((prev) =>
                  prev !== null ? (prev + 1) % totalItems : 0
                )
              }
              aria-label="Foto siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Full Collection Grid Modal */}
      {showGridModal && (
        <div className="grid-modal-overlay" onClick={() => setShowGridModal(false)}>
          <div className="grid-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="grid-modal-header">
              <h3>Todas las fotografías ({totalItems})</h3>
              <button
                type="button"
                className="grid-modal-close"
                onClick={() => setShowGridModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid-modal-body">
              {items.map((item: { id: string; image: string; caption: string }, idx: number) => (
                <div
                  key={item.id}
                  className={`grid-modal-thumb ${idx === currentIndex ? 'selected' : ''}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setActivePhotoIndex(idx);
                    setShowGridModal(false);
                  }}
                >
                  <img
                    src={resolveAssetUrl(item.image)}
                    alt={`Foto ${idx + 1}`}
                    loading="lazy"
                  />
                  <span className="thumb-idx">{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
