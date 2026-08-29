import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Images, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Grid, X } from 'lucide-react';
import { ASSETS, resolveAssetUrl, resolveThumbUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './GalleryCarousel3D.css';

// Show 7 items in the 3D orbit — enough for visual depth, few enough for performance
const VISIBLE_COUNT = 7;
const ANGLE_STEP = 360 / VISIBLE_COUNT;

export const GalleryCarousel3D: React.FC = () => {
  const { t } = useLanguage();
  const items = ASSETS.gallery.items;
  const totalItems = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [showGridModal, setShowGridModal] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

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

  // Lock background scroll when any modal is open
  useEffect(() => {
    if (showGridModal || activePhotoIndex !== null) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showGridModal, activePhotoIndex]);

  // SPA History Integration for Safari / Mobile Back Button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (!state || !state.modal) {
        setShowGridModal(false);
        setActivePhotoIndex(null);
      } else if (state.modal === 'grid') {
        setShowGridModal(true);
        setActivePhotoIndex(null);
      } else if (state.modal === 'photo') {
        setActivePhotoIndex(state.index ?? 0);
        setShowGridModal(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openGridModal = useCallback(() => {
    window.history.pushState({ modal: 'grid' }, '');
    setShowGridModal(true);
    setActivePhotoIndex(null);
  }, []);

  const closeGridModal = useCallback(() => {
    if (window.history.state?.modal === 'grid') {
      window.history.back();
    } else {
      setShowGridModal(false);
    }
  }, []);

  const openPhotoModal = useCallback((index: number) => {
    setIsImageLoading(true);
    window.history.pushState({ modal: 'photo', index }, '');
    setActivePhotoIndex(index);
  }, []);

  const closePhotoModal = useCallback(() => {
    if (window.history.state?.modal === 'photo') {
      window.history.back();
    } else {
      setActivePhotoIndex(null);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex !== null) {
        if (e.key === 'Escape') closePhotoModal();
        if (e.key === 'ArrowRight') setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % totalItems : 0));
        if (e.key === 'ArrowLeft') setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + totalItems) % totalItems : 0));
      } else if (showGridModal) {
        if (e.key === 'Escape') closeGridModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, showGridModal, totalItems, closePhotoModal, closeGridModal]);

  // Touch gesture handlers for 3D Carousel
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

    if (Math.abs(diff) > 30) {
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
      setIsImageLoading(true);
      if (diff > 0) {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + totalItems) % totalItems : 0));
      } else {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % totalItems : 0));
      }
    }
    modalTouchStartX.current = null;
  };

  // Build visible items positioned around the 3D cylinder
  // Each item gets a FIXED angle on the cylinder; the spinner rotates to show the current one
  const visibleItems = useMemo(() => {
    const halfCount = Math.floor(VISIBLE_COUNT / 2);
    const result = [];
    for (let offset = -halfCount; offset <= halfCount; offset++) {
      const itemIndex = (currentIndex + offset + totalItems * 100) % totalItems;
      result.push({
        item: items[itemIndex],
        itemIndex,
        offset,
        // Each item sits at its absolute angle on the cylinder
        angle: itemIndex * ANGLE_STEP,
      });
    }
    return result;
  }, [currentIndex, totalItems, items]);

  // The spinner rotation brings the current item to face the viewer
  const spinnerRotation = -currentIndex * ANGLE_STEP;

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
            className="carousel-3d-spinner"
            style={{
              transform: `rotateY(${spinnerRotation}deg)`,
            }}
          >
            {visibleItems.map(({ item, itemIndex, offset }) => {
              const itemAngle = itemIndex * ANGLE_STEP;
              const thumbUrl = resolveThumbUrl(item.image);
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              return (
                <div
                  key={`carousel-${item.id}-${offset}`}
                  className={`carousel-3d-item ${isActive ? 'active-item' : ''}`}
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                    opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.88 : absOffset === 2 ? 0.5 : 0.25,
                    zIndex: 10 - absOffset,
                  }}
                  onClick={() => {
                    if (isActive) {
                      openPhotoModal(itemIndex);
                    } else if (offset < 0) {
                      goToPrev();
                    } else {
                      goToNext();
                    }
                  }}
                >
                  <div className="carousel-photo-frame">
                    <img
                      src={thumbUrl}
                      alt={item.caption || `Foto ${itemIndex + 1}`}
                      className="carousel-photo-img"
                      loading={isActive ? 'eager' : 'lazy'}
                      decoding="async"
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
            onClick={openGridModal}
            title={t.gallery.viewAll}
            aria-label={t.gallery.viewAll}
          >
            <Grid size={17} />
          </button>
        </div>

        {/* Swipe Hint */}
        <p className="carousel-swipe-hint">
          <Sparkles size={12} />
          <span>{t.gallery.swipeHint}</span>
        </p>

        {/* Bottom Range Slider / Scrubber */}
        <div className="gallery-scrubber-container">
          <div className="gallery-scrubber-info">
            <span className="gallery-scrubber-counter">
              {t.gallery.photoOf} <strong>{currentIndex + 1}</strong> / {totalItems}
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
              aria-label={t.gallery.viewAll}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal with Swipe Support & Native History */}
      {activePhotoIndex !== null && (
        <div
          className="photo-modal-overlay"
          onClick={closePhotoModal}
          onTouchStart={handleModalTouchStart}
          onTouchEnd={handleModalTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            {isImageLoading && <div className="photo-modal-spinner" />}
            <img
              src={resolveAssetUrl(items[activePhotoIndex].image)}
              alt={`Foto ${activePhotoIndex + 1}`}
              className={`photo-modal-img ${isImageLoading ? 'loading' : 'loaded'}`}
              onLoad={() => setIsImageLoading(false)}
              decoding="async"
            />

            <div className="photo-modal-caption-bar">
              <span>
                {items[activePhotoIndex].caption} ({activePhotoIndex + 1} / {totalItems})
              </span>
            </div>

            <button
              type="button"
              className="photo-modal-close"
              onClick={closePhotoModal}
              aria-label="Cerrar foto"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              className="photo-modal-nav modal-nav-prev"
              onClick={() => {
                setIsImageLoading(true);
                setActivePhotoIndex((prev) =>
                  prev !== null ? (prev - 1 + totalItems) % totalItems : 0
                );
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className="photo-modal-nav modal-nav-next"
              onClick={() => {
                setIsImageLoading(true);
                setActivePhotoIndex((prev) =>
                  prev !== null ? (prev + 1) % totalItems : 0
                );
              }}
              aria-label="Foto siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Full Collection Grid Modal (SPA Overlay with Lazy Thumbnails & History) */}
      {showGridModal && (
        <div className="grid-modal-overlay" onClick={closeGridModal} role="dialog" aria-modal="true">
          <div className="grid-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="grid-modal-header">
              <h3>{t.gallery.allPhotos} ({totalItems})</h3>
              <button
                type="button"
                className="grid-modal-close"
                onClick={closeGridModal}
                aria-label="Cerrar"
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
                    openPhotoModal(idx);
                  }}
                >
                  <img
                    src={resolveThumbUrl(item.image)}
                    alt={`Foto ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
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
