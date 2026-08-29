import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Film,
  Sparkles
} from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './VideoSection.css';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const VideoSection: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
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

  const toggleFullscreen = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((videoRef.current as any)?.webkitEnterFullscreen) {
          (videoRef.current as any).webkitEnterFullscreen();
        }
        setIsFullscreen(true);
      } catch {
        // Fallback
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current !== null) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

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
        <div
          ref={containerRef}
          className={`video-frame-container 9-16-aspect ${isFullscreen ? 'fullscreen' : ''}`}
          onClick={togglePlay}
          onMouseMove={resetControlsTimeout}
          onTouchStart={resetControlsTimeout}
        >
          {videoSrc ? (
            <video
              ref={videoRef}
              className="video-element"
              poster={posterUrl}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
                resetControlsTimeout();
              }}
              onPause={() => {
                setIsPlaying(false);
                setShowControls(true);
              }}
              onEnded={() => {
                setIsPlaying(false);
                setHasStarted(false);
                setShowControls(true);
              }}
              aria-label={t.video.title}
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta la reproducción de este vídeo.
            </video>
          ) : (
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

          {/* Clean Center Play Button Overlay */}
          {(!isPlaying || !hasStarted) && (
            <div className="video-play-overlay">
              <button
                type="button"
                className="video-play-button"
                onClick={togglePlay}
                aria-label={isPlaying ? t.video.pauseAria : t.video.playAria}
              >
                <Play size={30} className="play-icon" />
              </button>
            </div>
          )}

          {/* Clean, Sleek Cinema Video Control Bar */}
          {hasStarted && (
            <div
              className={`video-clean-controls-bar ${showControls ? 'visible' : 'hidden'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrubbing Progress Bar */}
              <div className="video-progress-container">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="video-progress-slider"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 ${progressPercent}%, rgba(255, 255, 255, 0.25) ${progressPercent}%)`
                  }}
                  aria-label="Línea de tiempo del vídeo"
                />
              </div>

              {/* Minimal Clean Action Row */}
              <div className="video-controls-actions">
                {/* Left: Play/Pause, Time */}
                <div className="video-left-actions">
                  <button
                    type="button"
                    className="video-action-btn primary-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? t.video.pauseAria : t.video.playAria}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <span className="video-time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right: Volume, Fullscreen */}
                <div className="video-right-actions">
                  <button
                    type="button"
                    className="video-action-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? t.video.soundOnAria : t.video.soundOffAria}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  <button
                    type="button"
                    className="video-action-btn"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: 'var(--space-xl)' }} />
    </section>
  );
};
