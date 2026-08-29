import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { ASSETS, resolveAssetUrl } from '../config/assets';
import { useLanguage } from '../i18n/LanguageContext';
import './AmbientMusic.css';

// Translation labels for ambient music
const MUSIC_LABELS: Record<string, { title: string; hint: string }> = {
  es: {
    title: 'Melodía tradicional (Flauta & Sitar)',
    hint: 'Música de fondo',
  },
  en: {
    title: 'Traditional Bengali Ambience (Flute & Sitar)',
    hint: 'Background music',
  },
  bn: {
    title: 'শান্ত বাঁশির সুর ও সেতারের মূর্ছনা',
    hint: 'আবহ সঙ্গীত',
  },
};

export const AmbientMusic: React.FC = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{ gainNode?: GainNode; oscs?: OscillatorNode[]; intervalId?: number }>({});

  const musicSrc = resolveAssetUrl(ASSETS.ambientMusic?.src || '');
  const labels = MUSIC_LABELS[language] || MUSIC_LABELS.es;

  // Synthesize tranquil traditional Bengali Raag (Bansuri flute & Tanpura harmonics) as acoustic fallback
  const startBengaliSynth = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tanpura Root Drone (D - 146.83 Hz & A - 220 Hz)
      const droneNotes = [146.83, 220.0, 293.66];
      const oscs: OscillatorNode[] = [];

      droneNotes.forEach((freq) => {
        const osc = ctx.createOscillator();
        const droneGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        droneGain.gain.setValueAtTime(0.025, ctx.currentTime);
        osc.connect(droneGain);
        droneGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      // Soothing Indian Classical Raga Yaman / Bhairavi Flute Scale notes
      const ragaNotes = [293.66, 329.63, 369.99, 440.0, 493.88, 554.37, 587.33];
      let noteIndex = 0;

      const playFluteNote = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const noteFreq = ragaNotes[noteIndex % ragaNotes.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % ragaNotes.length;

        const fluteOsc = ctx.createOscillator();
        const fluteGain = ctx.createGain();
        fluteOsc.type = 'triangle'; // Warm acoustic flute warmth
        fluteOsc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        const now = ctx.currentTime;
        fluteGain.gain.setValueAtTime(0, now);
        fluteGain.gain.linearRampToValueAtTime(0.04, now + 0.8);
        fluteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        fluteOsc.connect(fluteGain);
        fluteGain.connect(masterGain);

        fluteOsc.start(now);
        fluteOsc.stop(now + 3.4);
      };

      playFluteNote();
      const intervalId = window.setInterval(playFluteNote, 2800);

      synthNodesRef.current = { gainNode: masterGain, oscs, intervalId };
    } catch {
      // Fallback
    }
  }, []);

  const stopBengaliSynth = useCallback(() => {
    if (synthNodesRef.current.intervalId) {
      clearInterval(synthNodesRef.current.intervalId);
    }
    if (synthNodesRef.current.oscs) {
      synthNodesRef.current.oscs.forEach((osc) => {
        try {
          osc.stop();
        } catch {
          // Ignore
        }
      });
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.suspend();
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !hasError) {
        audioRef.current.pause();
      } else {
        stopBengaliSynth();
      }
      setIsPlaying(false);
    } else {
      if (audioRef.current && !hasError && musicSrc) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            setHasError(true);
            startBengaliSynth();
            setIsPlaying(true);
          });
      } else {
        startBengaliSynth();
        setIsPlaying(true);
      }
    }
  };

  // Pause ambient music when video plays
  useEffect(() => {
    const handlePauseAmbient = () => {
      if (isPlaying) {
        if (audioRef.current) audioRef.current.pause();
        stopBengaliSynth();
        setIsPlaying(false);
      }
    };

    window.addEventListener('pause-ambient-music', handlePauseAmbient);
    return () => window.removeEventListener('pause-ambient-music', handlePauseAmbient);
  }, [isPlaying, stopBengaliSynth]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopBengaliSynth();
    };
  }, [stopBengaliSynth]);

  return (
    <div className="ambient-music-widget" aria-label="Reproductor de música ambiental tradicional">
      {musicSrc && (
        <audio
          ref={audioRef}
          src={musicSrc}
          loop
          preload="none"
          onError={() => setHasError(true)}
        />
      )}

      <button
        type="button"
        className={`ambient-music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        title={isPlaying ? 'Pausar melodía tradicional' : 'Reproducir melodía tradicional'}
        aria-pressed={isPlaying}
      >
        <div className="ambient-music-icon-wrapper">
          {isPlaying ? (
            <div className="sound-wave-bars" aria-hidden="true">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </div>
          ) : (
            <Music size={15} className="music-note-icon" />
          )}
        </div>

        <div className="ambient-text-block">
          <span className="ambient-title">{labels.hint}</span>
        </div>

        <div className="ambient-vol-icon">
          {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </div>
      </button>
    </div>
  );
};
