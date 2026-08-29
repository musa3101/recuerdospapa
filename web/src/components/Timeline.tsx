import React from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './Timeline.css';

const TIMELINE_IMAGES: Record<string, string> = {
  'milestone-1': resolveAssetUrl(ASSETS.timeline.event1),
  'milestone-2': resolveAssetUrl(ASSETS.timeline.event2),
  'milestone-3': resolveAssetUrl(ASSETS.timeline.event3),
};

export const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="section-wrapper timeline-section" aria-labelledby="timeline-title">
      <div className="section-header">
        <span className="section-tag">
          <Clock size={13} />
          <span>{t.timeline.tag}</span>
        </span>
        <h2 id="timeline-title" className="section-title">
          {t.timeline.title}
        </h2>
        <p className="section-subtitle">
          {t.timeline.subtitle}
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true" />

        {t.timeline.events.map((event) => {
          const imageUrl = TIMELINE_IMAGES[event.id];

          return (
            <article key={event.id} className="timeline-item">
              {/* Timeline Node Icon */}
              <div className="timeline-node" aria-hidden="true">
                <span className="timeline-node-inner" />
              </div>

              {/* Timeline Event Card */}
              <div className="timeline-card">
                <header className="timeline-card-header">
                  <span className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>{event.yearOrDate}</span>
                  </span>
                  {event.tag && (
                    <span className="timeline-tag">
                      <Sparkles size={11} />
                      <span>{event.tag}</span>
                    </span>
                  )}
                </header>

                <h3 className="timeline-card-title">{event.title}</h3>
                <p className="timeline-card-desc">{event.description}</p>

                {imageUrl && (
                  <div className="timeline-image-wrapper">
                    <img
                      src={imageUrl}
                      alt={event.title}
                      className="timeline-image"
                      loading="lazy"
                    />
                    <div className="timeline-image-shadow" />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
