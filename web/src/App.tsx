import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { GalleryCarousel3D } from './components/GalleryCarousel3D';
import { Timeline } from './components/Timeline';
import { LetterSection } from './components/LetterSection';
import { ClosingSection } from './components/ClosingSection';
import './styles/global.css';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        {/* Floating Language Dropdown Selector */}
        <LanguageSelector />

        {/* 1. Hero Emocional */}
        <Hero />

        {/* Main Content Sections */}
        <main style={{ width: '100%' }}>
          {/* 2. Sección de Vídeo Vertical 9:16 con Controles Cinemáticos */}
          <VideoSection />

          {/* 3. Galería Interactiva 3D Carousel (CodePen Dudley Storey) */}
          <GalleryCarousel3D />

          {/* 4. Línea Temporal Vertical con 4 Etapas */}
          <Timeline />

          {/* 5. Carta / Dedicatoria con Sobre Desplegable */}
          <LetterSection />
        </main>

        {/* 6. Cierre Emocional */}
        <ClosingSection />
      </div>
    </LanguageProvider>
  );
};

export default App;
