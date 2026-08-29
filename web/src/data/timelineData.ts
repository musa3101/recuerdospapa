import { ASSETS, resolveAssetUrl } from '../config/assets';

export interface TimelineEvent {
  id: string;
  yearOrDate: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
}

/**
 * EDITABLE TIMELINE DATA
 * 
 * You can easily modify, add, or reorder events here.
 */
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'milestone-1',
    yearOrDate: 'Los primeros pasos',
    title: 'Nuestros primeros recuerdos juntos',
    description:
      'Desde que tenemos memoria, siempre has estado ahí para guiarnos con paciencia, enseñarnos a descubrir el mundo y regalarnos tus mejores sonrisas.',
    image: resolveAssetUrl(ASSETS.timeline.event1),
    imageAlt: 'Recuerdo de los primeros pasos en familia',
    tag: 'Comienzos',
  },
  {
    id: 'milestone-2',
    yearOrDate: 'Aventuras y viajes',
    title: 'Los viajes que nunca olvidaremos',
    description:
      'Cada escapada, cada carretera recorrida y cada risa en el coche. Gracias por llenar nuestra infancia y juventud de anécdotas inolvidables.',
    image: resolveAssetUrl(ASSETS.timeline.event2),
    imageAlt: 'Fotografía de viajes y vacaciones familiares',
    tag: 'Aventuras',
  },
  {
    id: 'milestone-3',
    yearOrDate: 'Siempre a nuestro lado',
    title: 'Apoyo incondicional en cada etapa',
    description:
      'En los momentos grandes y en los pequeños detalles del día a día, saber que contamos contigo es el mayor regalo que podemos tener.',
    image: resolveAssetUrl(ASSETS.timeline.event3),
    imageAlt: 'Momento de apoyo y cariño en familia',
    tag: 'Gratitud',
  },
];
