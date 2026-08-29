import React, { useState } from 'react';
import { Mail, Heart, Feather, Sparkles, ChevronUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './LetterSection.css';

export const LetterSection: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="carta" className="section-wrapper letter-section" aria-labelledby="letter-title">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={13} />
          <span>{t.letter.tag}</span>
        </span>
        <h2 id="letter-title" className="section-title">
          {t.letter.title}
        </h2>
        <p className="section-subtitle">
          {t.letter.subtitle}
        </p>
      </div>

      <div className="letter-interactive-container">
        {/* State 1: Sealed Envelope */}
        {!isOpen ? (
          <div
            className="envelope-sealed-card"
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(true)}
            aria-label={t.letter.openPrompt}
          >
            {/* Envelope Flap Structure */}
            <div className="envelope-top-flap" />

            <div className="envelope-center-seal">
              <div className="wax-seal-badge">
                <Heart size={22} className="wax-seal-heart" />
              </div>
            </div>

            <div className="envelope-front-body">
              <span className="envelope-for-text">Para papá</span>
              <div className="envelope-open-hint">
                <Sparkles size={14} className="hint-sparkle" />
                <span>{t.letter.openPrompt}</span>
              </div>
            </div>
          </div>
        ) : (
          /* State 2: Unfolded Parchment Letter */
          <div className="letter-paper animate-letter-unfold">
            {/* Wax Seal Stamp on Top of the Letter */}
            <div className="letter-seal" aria-hidden="true">
              <Heart size={18} className="seal-heart" />
            </div>

            <div className="letter-inner-content">
              <p className="letter-salutation">{t.letter.salutation}</p>

              <div className="letter-body">
                {t.letter.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="letter-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="letter-footer">
                <div className="letter-closing-line">{t.letter.closing}</div>
                <div className="letter-signature-block">
                  <span className="letter-signature">{t.letter.signature}</span>
                  {t.letter.dateOrPlace && (
                    <span className="letter-date-place">{t.letter.dateOrPlace}</span>
                  )}
                </div>
                <div className="letter-feather-icon" aria-hidden="true">
                  <Feather size={22} />
                </div>
              </div>

              {/* Close / Fold Back Button */}
              <div className="letter-fold-action">
                <button
                  type="button"
                  className="letter-fold-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label={t.letter.closePrompt}
                >
                  <ChevronUp size={15} />
                  <span>{t.letter.closePrompt}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
