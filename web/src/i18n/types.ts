export type Language = 'es' | 'en' | 'bn';

export interface TranslationSchema {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    scrollHint: string;
  };
  video: {
    tag: string;
    title: string;
    subtitle: string;
    preparing: string;
    playHint: string;
    playAria: string;
    pauseAria: string;
    soundOnAria: string;
    soundOffAria: string;
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
    cardTitle: string;
    cardText: string;
    chipCount: string;
    chipQuality: string;
    swipeHint: string;
    viewAll: string;
    allPhotos: string;
    photoOf: string; // e.g. "Foto {current} de {total}"
  };
  timeline: {
    tag: string;
    title: string;
    subtitle: string;
    events: Array<{
      id: string;
      yearOrDate: string;
      title: string;
      description: string;
      tag?: string;
    }>;
  };
  letter: {
    tag: string;
    title: string;
    subtitle: string;
    openPrompt: string;
    closePrompt: string;
    forDad: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    dateOrPlace: string;
  };
  closing: {
    title: string;
    finalWords: string;
    family: string;
    madeBy: string;
  };
}
