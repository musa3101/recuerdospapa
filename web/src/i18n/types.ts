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
  };
}
