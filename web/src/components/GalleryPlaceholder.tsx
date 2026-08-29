import React from 'react';
import { Images, Sparkles, FolderHeart } from 'lucide-react';
import './GalleryPlaceholder.css';

/**
 * ============================================================================
 * GALLERY PLACEHOLDER COMPONENT (FASE 1)
 * ============================================================================
 * 
 * TODO [FASE 2]: Integración del componente de galería interactiva definitiva.
 * 
 * Fuentes de inspiración planificadas:
 * - 21st.dev (Interactive 3D carousel / Bento gallery)
 * - CodePen (Smooth polaroid stack / Fluid parallax stream)
 * - Webers.io (Curated media grid)
 * 
 * Arquitectura de datos para Fase 2:
 * - Capacidad: 50 a 200 fotografías familiares.
 * - Origen de medios: Cloudflare R2 (`ASSETS.gallery.r2Prefix`).
 * - Optimización: Lazy loading nativo con IntersectionObserver + WebP / AVIF.
 * 
 * ============================================================================
 */

export const GalleryPlaceholder: React.FC = () => {
  return (
    <section id="galeria" className="section-wrapper gallery-section" aria-labelledby="gallery-title">
      <div className="section-header">
        <span className="section-tag">
          <Images size={13} />
          <span>Álbum familiar</span>
        </span>
        <h2 id="gallery-title" className="section-title">
          Momentos que guardamos
        </h2>
        <p className="section-subtitle">
          Un espacio reservado para revivir cientos de instantes especiales capturados a lo largo de los años.
        </p>
      </div>

      {/* Elegant Visual Placeholder Card */}
      <div className="gallery-placeholder-card">
        <div className="gallery-placeholder-backdrop">
          {/* Subtle decorative polaroid wireframe layers */}
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
              Galería de recuerdos en preparación
            </h3>

            <p className="placeholder-card-text">
              Muy pronto podrás explorar todas las fotografías familiares organizadas con una experiencia interactiva fluida y cuidada al detalle.
            </p>

            <div className="placeholder-badges">
              <span className="placeholder-chip">
                <Sparkles size={12} />
                <span>+50 Recuerdos fotográficos</span>
              </span>
              <span className="placeholder-chip">
                <span>Optimizado en alta calidad</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
