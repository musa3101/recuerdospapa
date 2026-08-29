import React from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './Timeline.css';

const TIMELINE_IMAGES: Record<string, string> = {
  'milestone-1': resolveAssetUrl(ASSETS.timeline.event1),
  'milestone-2': resolveAssetUrl(ASSETS.timeline.event2),
  'milestone-3': resolveAssetUrl(ASSETS.timeline.event3),
  'milestone-4': resolveAssetUrl(ASSETS.timeline.event4),
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

      <div className="timeline-vertical-flow">
        {/* Central Continuous Vertical Spine */}
        <div className="timeline-spine-line" aria-hidden="true" />

        {t.timeline.events.map((event, index) => {
          const imageUrl = TIMELINE_IMAGES[event.id];
          const stepNumber = String(index + 1).padStart(2, '0');

          return (
            <article key={event.id} className="timeline-step-card">
              {/* Vertical Step Milestone Marker */}
              <div className="timeline-step-badge-wrapper">
                <div className="timeline-step-circle">
                  <span className="timeline-step-num">{stepNumber}</span>
                </div>
                <div className="timeline-step-connector" aria-hidden="true" />
              </div>

              {/* Vertical Card Body */}
              <div className="timeline-card-content">
                {/* Meta Header */}
                <div className="timeline-meta-row">
                  <span className="timeline-date-pill">
                    <Calendar size={13} />
                    <span>{event.yearOrDate}</span>
                  </span>
                  {event.tag && (
                    <span className="timeline-category-tag">
                      <Sparkles size={12} />
                      <span>{event.tag}</span>
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-event-desc">{event.description}</p>

                {/* Vertical Portrait Photo Frame */}
                {imageUrl && (
                  <div className="timeline-portrait-frame">
                    <img
                      src={imageUrl}
                      alt={event.title}
                      className="timeline-portrait-img"
                      loading="lazy"
                    />
                    <div className="timeline-frame-overlay" />
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
