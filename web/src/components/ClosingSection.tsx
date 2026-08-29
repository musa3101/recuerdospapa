import React from 'react';
import { Heart } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import './ClosingSection.css';

export const ClosingSection: React.FC = () => {
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
          Gracias por todos los recuerdos.
        </h2>

        <p className="closing-final-words">
          Te queremos, papá.
        </p>

        <div className="closing-subtle-family">
          <span>Siempre juntos</span>
        </div>
      </div>
    </footer>
  );
};
