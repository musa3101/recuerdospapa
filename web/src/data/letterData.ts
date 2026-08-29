/**
 * EDITABLE DEDICATION LETTER DATA
 * 
 * Replace paragraphs or signature with your personal text for dad.
 */

export interface LetterData {
  title: string;
  subtitle: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  dateOrPlace?: string;
}

export const LETTER_CONTENT: LetterData = {
  title: 'Una carta para ti',
  subtitle: 'Palabras sinceras desde el corazón',
  salutation: 'Querido papá,',
  paragraphs: [
    'Si estás leyendo esto mientras disfrutas de tu café o té con esta taza, queremos que recuerdes cada día lo profundamente importante que eres para nosotros.',
    'Gracias por tu ejemplo de trabajo, por tu paciencia infinita, por tus consejos en los momentos clave y por hacernos reír incluso en los días difíciles.',
    'Esta página web reúne sólo un pequeño destello de todo lo vivido, pero lo que guardamos en el corazón es infinito. Gracias por ser nuestro pilar, nuestro refugio y nuestro mayor orgullo.',
  ],
  closing: 'Con todo nuestro cariño y admiración,',
  signature: 'Tus hijos y tu familia que te adoran',
  dateOrPlace: 'Para siempre',
};
