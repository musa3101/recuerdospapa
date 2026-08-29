import React from 'react';
import { Mail, Heart, Feather } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './LetterSection.css';

export const LetterSection: React.FC = () => {
  const { t } = useLanguage();

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

      {/* Intimate Letter / Card Container */}
      <div className="letter-paper">
        {/* Decorative wax seal / ribbon accent */}
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
              <Feather size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
