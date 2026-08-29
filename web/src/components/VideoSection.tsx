import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Film, Sparkles } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import './VideoSection.css';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Resolving video source and poster
  // TODO: Point to real 9:16 video on Cloudflare R2 or /public/assets/video/
  const videoSrc = resolveAssetUrl(ASSETS.video.src);
  const posterUrl = resolveAssetUrl(ASSETS.video.poster);

  const togglePlay = () => {
    if (!videoRef.current || !videoSrc) {
      // In placeholder mode, toggle state for UI demonstration
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
          <span>Cinemática</span>
        </span>
        <h2 id="video-title" className="section-title">
          Nuestros recuerdos
        </h2>
        <p className="section-subtitle">
          Una pequeña historia hecha de momentos que siempre llevaremos con nosotros.
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
              aria-label={ASSETS.video.title}
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
              aria-label={ASSETS.video.title}
            >
              <div className="video-poster-overlay" />
              {!hasStarted && (
                <div className="video-pending-badge">
                  <Sparkles size={14} />
                  <span>Vídeo en preparación</span>
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
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproducir vídeo de recuerdos'}
              >
                <Play size={28} className="play-icon" />
              </button>
              <span className="video-tap-hint">Pulsa para reproducir</span>
            </div>
          )}

          {/* Quick Floating Controls */}
          {hasStarted && (
            <div className="video-floating-controls" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="video-control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                type="button"
                className="video-control-btn"
                onClick={toggleMute}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
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
