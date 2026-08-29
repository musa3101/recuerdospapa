import { TranslationSchema, Language } from './types';

export const translations: Record<Language, TranslationSchema> = {
  es: {
    hero: {
      badge: 'UN REGALO DESDE EL CORAZÓN',
      title: 'Para papá',
      subtitle: 'Un pequeño recuerdo de todo lo que significas para nosotros.',
      cta: 'COMENZAR',
      scrollHint: 'DESLIZA PARA VER MÁS',
    },
    video: {
      tag: 'Cinemática',
      title: 'Nuestros recuerdos',
      subtitle: 'Una pequeña historia hecha de momentos que siempre llevaremos con nosotros.',
      preparing: 'Vídeo en preparación',
      playHint: 'Pulsa para reproducir',
      playAria: 'Reproducir vídeo de recuerdos',
      pauseAria: 'Pausar vídeo',
      soundOnAria: 'Activar sonido',
      soundOffAria: 'Silenciar',
    },
    gallery: {
      tag: 'Álbum familiar',
      title: 'Momentos que guardamos',
      subtitle: 'Un espacio reservado para revivir cientos de instantes especiales capturados a lo largo de los años.',
      cardTitle: 'Galería de recuerdos en preparación',
      cardText: 'Muy pronto podrás explorar todas las fotografías familiares organizadas con una experiencia interactiva fluida y cuidada al detalle.',
      chipCount: '+50 Recuerdos fotográficos',
      chipQuality: 'Optimizado en alta calidad',
    },
    timeline: {
      tag: 'Cronología',
      title: 'Una vida de momentos',
      subtitle: 'Un recorrido por las etapas y recuerdos que han marcado nuestra historia juntos.',
      events: [
        {
          id: 'milestone-1',
          yearOrDate: 'Los primeros pasos',
          title: 'Nuestros primeros recuerdos juntos',
          description:
            'Desde que tenemos memoria, siempre has estado ahí para guiarnos con paciencia, enseñarnos a descubrir el mundo y regalarnos tus mejores sonrisas.',
          tag: 'Comienzos',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'Aventuras y viajes',
          title: 'Los viajes que nunca olvidaremos',
          description:
            'Cada escapada, cada carretera recorrida y cada risa en el coche. Gracias por llenar nuestra infancia y juventud de anécdotas inolvidables.',
          tag: 'Aventuras',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'Siempre a nuestro lado',
          title: 'Apoyo incondicional en cada etapa',
          description:
            'En los momentos grandes y en los pequeños detalles del día a día, saber que contamos contigo es el mayor regalo que podemos tener.',
          tag: 'Gratitud',
        },
      ],
    },
    letter: {
      tag: 'Dedicatoria',
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
    },
    closing: {
      title: 'Gracias por todos los recuerdos.',
      finalWords: 'Te queremos, papá.',
      family: 'SIEMPRE JUNTOS',
    },
  },

  en: {
    hero: {
      badge: 'A GIFT FROM THE HEART',
      title: 'For Dad',
      subtitle: 'A small tribute to everything you mean to our family.',
      cta: 'BEGIN',
      scrollHint: 'SCROLL TO EXPLORE',
    },
    video: {
      tag: 'Cinematic Story',
      title: 'Our Cherished Memories',
      subtitle: 'A short story woven from unforgettable moments we carry in our hearts.',
      preparing: 'Video coming soon',
      playHint: 'Tap to play video',
      playAria: 'Play memory video',
      pauseAria: 'Pause video',
      soundOnAria: 'Unmute audio',
      soundOffAria: 'Mute audio',
    },
    gallery: {
      tag: 'Family Album',
      title: 'Moments We Hold Dear',
      subtitle: 'A dedicated space reserved to relive hundreds of special memories captured over the years.',
      cardTitle: 'Memory gallery in preparation',
      cardText: 'Very soon you will be able to browse all our family photographs through an elegant and fluid interactive experience.',
      chipCount: '+50 Family Photos',
      chipQuality: 'High-definition optimized',
    },
    timeline: {
      tag: 'Timeline',
      title: 'A Lifetime of Moments',
      subtitle: 'A gentle journey through the milestones and memories that define our story.',
      events: [
        {
          id: 'milestone-1',
          yearOrDate: 'The Early Days',
          title: 'Our First Memories Together',
          description:
            'For as long as we can remember, you have always been there to guide us with patience, teach us the world, and share your warmest smiles.',
          tag: 'Beginnings',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'Adventures & Trips',
          title: 'Unforgettable Journeys',
          description:
            'Every road trip, every holiday, and every laugh shared along the way. Thank you for filling our lives with unforgettable stories.',
          tag: 'Adventures',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'Always By Our Side',
          title: 'Unconditional Love & Support',
          description:
            'In life’s greatest milestones and in the simple daily moments, knowing we have you is the greatest blessing of all.',
          tag: 'Gratitude',
        },
      ],
    },
    letter: {
      tag: 'Dedication',
      title: 'A Letter for You',
      subtitle: 'Heartfelt words from the depth of our hearts',
      salutation: 'Dearest Dad,',
      paragraphs: [
        'If you are reading this while enjoying your morning cup with this special mug, we want you to always remember how deeply meaningful you are to all of us.',
        'Thank you for your tireless dedication, your endless patience, your wise counsel in crucial times, and for always bringing laughter into our home.',
        'This website captures only a small glimpse of everything we have shared, but what lives in our hearts is boundless. Thank you for being our anchor and our greatest pride.',
      ],
      closing: 'With all our endless love and respect,',
      signature: 'Your loving children and family',
      dateOrPlace: 'Forever & Always',
    },
    closing: {
      title: 'Thank you for every beautiful memory.',
      finalWords: 'We love you, Dad.',
      family: 'FOREVER TOGETHER',
    },
  },

  bn: {
    hero: {
      badge: 'হৃদয় থেকে এক ভালোবাসার উপহার',
      title: 'বাবার জন্য',
      subtitle: 'আমাদের জীবনে তোমার অবদান ও ভালোবাসার এক ছোট্ট স্মৃতিময় উপহার।',
      cta: 'শুরু করুন',
      scrollHint: 'আরও দেখতে নিচে স্ক্রোল করুন',
    },
    video: {
      tag: 'সিনেমাটিক স্মৃতি',
      title: 'আমাদের স্মৃতিকথা',
      subtitle: 'জীবনের স্মরণীয় কিছু মুহূর্তের এক সুন্দর গল্প, যা আমরা হৃদয়ে ধারণ করি।',
      preparing: 'ভিডিও প্রস্তুত হচ্ছে',
      playHint: 'প্লে করতে চাপুন',
      playAria: 'স্মৃতির ভিডিও প্লে করুন',
      pauseAria: 'ভিডিও থামান',
      soundOnAria: 'শব্দ চালু করুন',
      soundOffAria: 'শব্দ বন্ধ করুন',
    },
    gallery: {
      tag: 'পারিবারিক অ্যালবাম',
      title: 'যে মুহূর্তগুলো হৃদয়ে অমলিন',
      subtitle: 'বছরের পর বছর ধরে পরিবারের শত শত স্মরণীয় মুহূর্তের এক বিশেষ সংগ্রহশালা।',
      cardTitle: 'স্মৃতির অ্যালবাম প্রস্তুত হচ্ছে',
      cardText: 'খুব শীঘ্রই এখানে আমাদের সকল পারিবারিক ছবি এক চমৎকার ইন্টারঅ্যাক্টিভ অভিজ্ঞতায় দেখতে পাবেন।',
      chipCount: '+৫০ স্মৃতিময় ছবি',
      chipQuality: 'উচ্চ মানে প্রস্তুত',
    },
    timeline: {
      tag: 'জীবনের পথচলা',
      title: 'স্মৃতিঘেরা এক জীবন',
      subtitle: 'আমাদের একসাথে কাটানো স্মরণীয় অধ্যায়গুলোর এক সুন্দর যাত্রা।',
      events: [
        {
          id: 'milestone-1',
          yearOrDate: 'প্রথম দিনগুলো',
          title: 'একসাথে আমাদের প্রথম স্মৃতি',
          description:
            'ছোটবেলা থেকেই তুমি ধৈর্যের সাথে আমাদের হাত ধরে পথ চলতে শিখিয়েছো, পৃথিবী চিনিয়েছো এবং মুখে সবসময় হাসি ফুটিয়েছো।',
          tag: 'শুরু',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'ভ্রমণ ও অভিযান',
          title: 'ভুলতে না পারা চমৎকার ভ্রমণগুলো',
          description:
            'প্রতিটি আনন্দঘন যাত্রা, গাড়িতে সবার সাথে হাসাহাসি আর ছুটির দিনগুলো। আমাদের জীবন সুন্দর স্মৃতিতে ভরিয়ে দেওয়ার জন্য ধন্যবাদ।',
          tag: 'অভিযান',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'সর্বদা পাশে',
          title: 'প্রতি পদক্ষেপে তোমার অটুট সমর্থন',
          description:
            'জীবনের প্রতিটি গুরুত্বপূর্ণ সময় এবং দৈনন্দিন ছোট ছোট মুহূর্তে তোমাকে পাশে পাওয়া আমাদের জীবনের সেরা উপহার।',
          tag: 'কৃতজ্ঞতা',
        },
      ],
    },
    letter: {
      tag: 'শ্রদ্ধাঞ্জলি',
      title: 'তোমার জন্য একটি চিঠি',
      subtitle: 'হৃদয়ের গভীর থেকে ভালোবাসার কয়েকটি কথা',
      salutation: 'শ্রদ্ধেয় বাবা,',
      paragraphs: [
        'এই বিশেষ মগে চা বা কফি পান করার সময় আমরা চাই তুমি প্রতি মুহূর্তে অনুভব করো যে তুমি আমাদের জন্য কতটা মূল্যবান ও প্রিয়।',
        'তোমার অক্লান্ত পরিশ্রমের উদাহরণ, অফুরন্ত ধৈর্য, সময়োপযোগী সঠিক উপদেশ এবং কঠিন দিনেও মুখে হাসি ধরে রাখার জন্য তোমাকে জানাই আন্তরিক কৃতজ্ঞতা।',
        'এই ওয়েবসাইটে আমাদের কাটানো জীবনের মাত্র কয়েকটি ঝলক রয়েছে, কিন্তু হৃদয়ে তোমার জন্য যে ভালোবাসা ও শ্রদ্ধা রয়েছে তা সীমাহীন। তুমি আমাদের গর্ব ও জীবনের সবচেয়ে বড় অনুপ্রেরণা।',
      ],
      closing: 'গভীর শ্রদ্ধা, ভালোবাসা ও দোয়াসহ,',
      signature: 'তোমার আদরের সন্তান ও পরিবার',
      dateOrPlace: 'চিরকালের জন্য',
    },
    closing: {
      title: 'সব সুন্দর স্মৃতির জন্য অশেষ ধন্যবাদ।',
      finalWords: 'বাবা, আমরা তোমাকে অনেক ভালোবাসি।',
      family: 'চিরকাল একসাথে',
    },
  },
};
