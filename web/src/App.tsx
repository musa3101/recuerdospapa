import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { GalleryPlaceholder } from './components/GalleryPlaceholder';
import { Timeline } from './components/Timeline';
import { LetterSection } from './components/LetterSection';
import { ClosingSection } from './components/ClosingSection';
import './styles/global.css';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        {/* Language Selector Fixed Floating Pill */}
        <LanguageSelector />

        {/* 1. Hero Emocional */}
        <Hero />

        {/* Main Content Sections */}
        <main style={{ width: '100%' }}>
          {/* 2. Sección de Vídeo Vertical 9:16 */}
          <VideoSection />

          {/* 3. Placeholder de Galería (Fase 1) */}
          <GalleryPlaceholder />

          {/* 4. Línea Temporal */}
          <Timeline />

          {/* 5. Carta / Dedicatoria */}
          <LetterSection />
        </main>

        {/* 6. Cierre Emocional */}
        <ClosingSection />
      </div>
    </LanguageProvider>
  );
};

export default App;
