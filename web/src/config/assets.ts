/**
 * ASSETS CONFIGURATION
 * 
 * Centralized media configuration for the "Para papá" web app.
 * Switch seamlessly between local files and Cloudflare R2 CDN.
 */

export interface AssetsConfig {
  useRemoteR2: boolean;
  r2BaseUrl: string;
  localBaseUrl: string;

  hero: {
    images: string[];
    image: string;
    alt: string;
  };
  video: {
    src: string;
    poster: string;
    title: string;
  };
  ambientMusic: {
    // Optional MP3 path (e.g. '/assets/audio/bengali_flute.mp3')
    src: string;
    title: string;
  };
  timeline: {
    event1: string;
    event2: string;
    event3: string;
    event4: string;
  };
  letter: {
    backgroundTexture?: string;
  };
  closing: {
    image: string;
    alt: string;
  };
  gallery: {
    items: Array<{
      id: string;
      image: string;
      caption: string;
    }>;
  };
}

export const ASSETS: AssetsConfig = {
  useRemoteR2: false,
  r2BaseUrl: 'https://pub-your-r2-id.r2.dev/recuerdos-papa',
  localBaseUrl: '',

  hero: {
    images: [
      '/assets/images/hero/hero-1.jpg',
      '/assets/images/hero/hero-2.jpg',
      '/assets/images/hero/hero-3.jpg',
      '/assets/images/hero/hero-4.jpg',
      '/assets/images/hero/hero-5.jpg',
    ],
    image: '/assets/images/hero/hero-1.jpg',
    alt: 'Fotografía familiar de portada para papá',
  },

  video: {
    src: '/assets/video/video_recuerdos_papa.mp4',
    poster: '/assets/images/video-poster.jpg',
    title: 'Recuerdos y momentos inolvidables para papá',
  },

  ambientMusic: {
    src: '/assets/audio/bengali_ambient.mp3',
    title: 'Melodía tradicional de Bengala (Flauta & Sitar)',
  },

  timeline: {
    event1: '/assets/images/timeline/timeline-1.jpg',
    event2: '/assets/images/timeline/timeline-2.jpg',
    event3: '/assets/images/timeline/timeline-3.jpg',
    event4: '/assets/images/timeline/timeline-4.jpg',
  },

  letter: {
    backgroundTexture: '',
  },

  closing: {
    image: '/assets/images/closing-cover.jpg',
    alt: 'Fotografía familiar de cierre',
  },

  gallery: {
    items: [
      { id: 'g-1', image: '/assets/images/gallery/gallery-1.jpg', caption: 'Sonrisas y momentos únicos' },
      { id: 'g-2', image: '/assets/images/gallery/gallery-2.jpg', caption: 'Aventuras en familia' },
      { id: 'g-3', image: '/assets/images/gallery/gallery-3.jpg', caption: 'Celebraciones y abrazos' },
      { id: 'g-4', image: '/assets/images/gallery/gallery-4.jpg', caption: 'Recuerdos inolvidables' },
      { id: 'g-5', image: '/assets/images/gallery/gallery-5.jpg', caption: 'Días de paseo y risas' },
      { id: 'g-6', image: '/assets/images/gallery/gallery-6.jpg', caption: 'Historias compartidas' },
      { id: 'g-7', image: '/assets/images/gallery/gallery-7.jpg', caption: 'La calidez de nuestro hogar' },
      { id: 'g-8', image: '/assets/images/gallery/gallery-8.jpg', caption: 'Juntos en cada paso' },
    ],
  },
};

/**
 * Helper to resolve the correct URL whether using local files or Cloudflare R2
 */
export function resolveAssetUrl(pathOrKey: string): string {
  if (!pathOrKey) return '';
  if (pathOrKey.startsWith('http://') || pathOrKey.startsWith('https://')) {
    return pathOrKey;
  }
  if (ASSETS.useRemoteR2) {
    const cleanKey = pathOrKey.replace(/^\/+/, '').replace(/^assets\//, '');
    return `${ASSETS.r2BaseUrl.replace(/\/+$/, '')}/${cleanKey}`;
  }
  return pathOrKey;
}
