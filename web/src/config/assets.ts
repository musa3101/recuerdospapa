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
    image: string;
    alt: string;
  };
  video: {
    src: string;
    poster: string;
    title: string;
  };
  timeline: {
    [key: string]: string;
  };
  letter: {
    backgroundTexture?: string;
  };
  closing: {
    image: string;
    alt: string;
  };
  // 3D Carousel Gallery Photos
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
    image: '/assets/images/hero-cover.jpg',
    alt: 'Fotografía familiar de portada para papá',
  },

  video: {
    src: '',
    poster: '/assets/images/video-poster.jpg',
    title: 'Recuerdos y momentos inolvidables para papá',
  },

  timeline: {
    event1: '/assets/images/timeline-1.jpg',
    event2: '/assets/images/timeline-2.jpg',
    event3: '/assets/images/timeline-3.jpg',
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
