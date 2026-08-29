import React from 'react';
import { Images, Sparkles, FolderHeart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './GalleryPlaceholder.css';

export const GalleryPlaceholder: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="section-wrapper gallery-section" aria-labelledby="gallery-title">
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

      {/* Elegant Visual Placeholder Card */}
      <div className="gallery-placeholder-card">
        <div className="gallery-placeholder-backdrop">
          {/* Decorative polaroid wireframe layers */}
          <div className="placeholder-polaroid-stack" aria-hidden="true">
            <div className="stack-layer layer-1" />
            <div className="stack-layer layer-2" />
            <div className="stack-layer layer-3" />
          </div>

          <div className="gallery-placeholder-content">
            <div className="placeholder-icon-circle">
              <FolderHeart size={32} className="folder-icon" />
            </div>

            <h3 className="placeholder-card-title">
              {t.gallery.cardTitle}
            </h3>

            <p className="placeholder-card-text">
              {t.gallery.cardText}
            </p>

            <div className="placeholder-badges">
              <span className="placeholder-chip">
                <Sparkles size={12} />
                <span>{t.gallery.chipCount}</span>
              </span>
              <span className="placeholder-chip">
                <span>{t.gallery.chipQuality}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
