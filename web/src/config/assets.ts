/**
 * ASSETS CONFIGURATION
 * 
 * Centralized media configuration for the "Para papá" web app.
 * Switch seamlessly between local files and Cloudflare R2 CDN.
 */

export interface AssetsConfig {
  // Toggle to true once Cloudflare R2 bucket/custom domain is ready
  useRemoteR2: boolean;
  
  // TODO: Replace with your actual Cloudflare R2 public URL or custom domain (e.g. 'https://media.tudominio.com')
  r2BaseUrl: string;
  
  // Local base path served from /public
  localBaseUrl: string;

  // Media assets
  hero: {
    image: string;
    alt: string;
  };
  video: {
    // TODO: When real vertical video (9:16) is available, point to its local file or R2 key
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
  // Future Cloudflare R2 Gallery config (for 50 - 200 family photos)
  gallery: {
    // TODO: In Phase 2, define R2 folder prefix (e.g. 'gallery/papa-2026/')
    r2Prefix: string;
    samplePlaceholders: Array<{
      id: string;
      caption: string;
      category: string;
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
    // Video placeholder or actual video file in /public/assets/video/
    src: '', // Leave empty if waiting for video upload; fallback will show interactive poster preview
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
    r2Prefix: 'gallery/',
    samplePlaceholders: [
      { id: '1', caption: 'Viajes y aventuras compartidas', category: 'Viajes' },
      { id: '2', caption: 'Comidas y domingos en familia', category: 'Familia' },
      { id: '3', caption: 'Risas, abrazos y celebraciones', category: 'Momentos' },
      { id: '4', caption: 'Pequeños instantes del día a día', category: 'Cotidiano' },
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
