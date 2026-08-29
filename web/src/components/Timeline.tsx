import React from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/timelineData';
import './Timeline.css';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section-wrapper timeline-section" aria-labelledby="timeline-title">
      <div className="section-header">
        <span className="section-tag">
          <Clock size={13} />
          <span>Cronología</span>
        </span>
        <h2 id="timeline-title" className="section-title">
          Una vida de momentos
        </h2>
        <p className="section-subtitle">
          Un recorrido por las etapas y recuerdos que han marcado nuestra historia juntos.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true" />

        {TIMELINE_EVENTS.map((event) => (
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

              {event.image && (
                <div className="timeline-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    className="timeline-image"
                    loading="lazy"
                  />
                  <div className="timeline-image-shadow" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
