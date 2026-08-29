import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Film, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './VideoSection.css';

export const VideoSection: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Resolving video source and poster
  const videoSrc = resolveAssetUrl(ASSETS.video.src);
  const posterUrl = resolveAssetUrl(ASSETS.video.poster);

  const togglePlay = () => {
    if (!videoRef.current || !videoSrc) {
      setIsPlaying(!isPlaying);
      setHasStarted(true);
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-section" className="section-wrapper video-section" aria-labelledby="video-title">
      <div className="section-header">
        <span className="section-tag">
          <Film size={13} />
          <span>{t.video.tag}</span>
        </span>
        <h2 id="video-title" className="section-title">
          {t.video.title}
        </h2>
        <p className="section-subtitle">
          {t.video.subtitle}
        </p>
      </div>

      <div className="video-player-outer">
        <div className="video-frame-container 9-16-aspect" onClick={togglePlay}>
          {videoSrc ? (
            <video
              ref={videoRef}
              className="video-element"
              poster={posterUrl}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setHasStarted(false);
              }}
              aria-label={t.video.title}
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta la reproducción de este vídeo.
            </video>
          ) : (
            /* Elegant Placeholder/Poster State */
            <div
              className="video-poster-placeholder"
              style={{ backgroundImage: `url(${posterUrl})` }}
              role="img"
              aria-label={t.video.title}
            >
              <div className="video-poster-overlay" />
              {!hasStarted && (
                <div className="video-pending-badge">
                  <Sparkles size={14} />
                  <span>{t.video.preparing}</span>
                </div>
              )}
            </div>
          )}

          {/* Center Play/Pause Overlay */}
          {(!isPlaying || !hasStarted) && (
            <div className="video-play-overlay">
              <button
                type="button"
                className="video-play-button"
                onClick={togglePlay}
                aria-label={isPlaying ? t.video.pauseAria : t.video.playAria}
              >
                <Play size={28} className="play-icon" />
              </button>
              <span className="video-tap-hint">{t.video.playHint}</span>
            </div>
          )}

          {/* Quick Floating Controls */}
          {hasStarted && (
            <div className="video-floating-controls" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="video-control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? t.video.pauseAria : t.video.playAria}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                type="button"
                className="video-control-btn"
                onClick={toggleMute}
                aria-label={isMuted ? t.video.soundOnAria : t.video.soundOffAria}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
