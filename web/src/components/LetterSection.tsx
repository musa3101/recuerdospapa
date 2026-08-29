import React from 'react';
import { Mail, Heart, Feather } from 'lucide-react';
import { LETTER_CONTENT } from '../data/letterData';
import './LetterSection.css';

export const LetterSection: React.FC = () => {
  return (
    <section id="carta" className="section-wrapper letter-section" aria-labelledby="letter-title">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={13} />
          <span>Dedicatoria</span>
        </span>
        <h2 id="letter-title" className="section-title">
          {LETTER_CONTENT.title}
        </h2>
        <p className="section-subtitle">
          {LETTER_CONTENT.subtitle}
        </p>
      </div>

      {/* Intimate Letter / Card Container */}
      <div className="letter-paper">
        {/* Subtle decorative wax seal / ribbon accent */}
        <div className="letter-seal" aria-hidden="true">
          <Heart size={18} className="seal-heart" />
        </div>

        <div className="letter-inner-content">
          <p className="letter-salutation">{LETTER_CONTENT.salutation}</p>

          <div className="letter-body">
            {LETTER_CONTENT.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="letter-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="letter-footer">
            <div className="letter-closing-line">{LETTER_CONTENT.closing}</div>
            <div className="letter-signature-block">
              <span className="letter-signature">{LETTER_CONTENT.signature}</span>
              {LETTER_CONTENT.dateOrPlace && (
                <span className="letter-date-place">{LETTER_CONTENT.dateOrPlace}</span>
              )}
            </div>
            <div className="letter-feather-icon" aria-hidden="true">
              <Feather size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
