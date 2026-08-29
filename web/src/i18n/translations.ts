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
          yearOrDate: 'Los primeros sobrinos',
          title: 'Disfrutando con la nueva generación',
          description:
            'La inmensa alegría de ver crecer a la familia y compartir momentos entrañables de ternura y cariño con los primeros sobrinos.',
          tag: 'Familia',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'Etapa militar y de servicio',
          title: 'Años de trabajo, disciplina y honor',
          description:
            'Tu etapa de servicio y esfuerzo incansable como trabajador y militar. Un ejemplo de constancia y rectitud que nos llena de orgullo.',
          tag: 'Honor',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'Celebración de Eid Mubarak',
          title: 'Unión y alegría familiar',
          description:
            'Días de bendición, abrazos y sonrisas compartidas, celebrando las tradiciones y la felicidad de estar todos juntos.',
          tag: 'Eid Mubarak',
        },
        {
          id: 'milestone-4',
          yearOrDate: 'Celebrando tu cumpleaños',
          title: 'Un homenaje de amor y gratitud',
          description:
            'Un día inolvidable celebrando tu vida, rodeado del cariño más sincero de toda tu familia que te admira y te quiere.',
          tag: 'Cumpleaños',
        },
      ],
    },
    letter: {
      tag: 'Dedicatoria',
      title: 'Una carta para ti',
      subtitle: 'Palabras sinceras desde el corazón',
      openPrompt: 'Toca para abrir la carta',
      closePrompt: 'Plegar carta',
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
      madeBy: 'Hecho por Musa con amor',
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
          yearOrDate: 'The First Nieces & Nephews',
          title: 'Joy with the New Generation',
          description:
            'The pure joy of watching our family grow, sharing warm and unforgettable smiles with the very first nieces and nephews.',
          tag: 'Family',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'Years of Military Service',
          title: 'Dedication, Discipline & Honor',
          description:
            'Your honorable service in the military and your tireless work ethic. A true model of integrity and devotion that inspires us every single day.',
          tag: 'Honor',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'Eid Mubarak Celebrations',
          title: 'Family Unity & Festive Blessings',
          description:
            'Sacred holiday moments filled with blessings, warm embraces, and joyful memories gathered together as one united family.',
          tag: 'Eid Mubarak',
        },
        {
          id: 'milestone-4',
          yearOrDate: 'Celebrating Your Birthday',
          title: 'A Tribute of Boundless Love',
          description:
            'A deeply special day celebrating your life, surrounded by the warmth, admiration, and endless love of everyone in the family.',
          tag: 'Birthday',
        },
      ],
    },
    letter: {
      tag: 'Dedication',
      title: 'A Letter for You',
      subtitle: 'Heartfelt words from the depth of our hearts',
      openPrompt: 'Tap to open the letter',
      closePrompt: 'Fold letter',
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
      madeBy: 'Made by Musa with love',
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
          yearOrDate: 'নতুন প্রজন্মের আগমন',
          title: 'প্রথম ভাগ্নে-ভাগ্নিদের সাথে আনন্দঘন সময়',
          description:
            'পরিবারে নতুন সদস্যদের আগমন ও তোমার মুখের সেই নির্মল হাসি। তাদের স্নেহ ও ভালোবাসায় জড়িয়ে রাখার সুন্দর মুহূর্ত।',
          tag: 'পরিবার',
        },
        {
          id: 'milestone-2',
          yearOrDate: 'সামরিক জীবন ও কর্মনিষ্ঠা',
          title: 'শৃঙ্খলা, আত্মত্যাগ ও সম্মান',
          description:
            'সামরিক বাহিনীতে নিষ্ঠার সাথে দেশসেবা ও কঠোর পরিশ্রমের দিনগুলো। তোমার এই ত্যাগ ও সততা আমাদের আজীবন অনুপ্রাণিত করে।',
          tag: 'সম্মান',
        },
        {
          id: 'milestone-3',
          yearOrDate: 'ঈদের আনন্দঘন মুহূর্ত',
          title: 'পারিবারিক ঐক্য ও উৎসবের আনন্দ',
          description:
            'পবিত্র ঈদের দিনে পরিবারের সবাইকে সাথে নিয়ে কাটানো বরকতময় ও স্মৃতিময় কিছু সুন্দর মুহূর্ত।',
          tag: 'ঈদ মোবারক',
        },
        {
          id: 'milestone-4',
          yearOrDate: 'জন্মদিনের বিশেষ উদযাপন',
          title: 'ভালোবাসা ও শ্রদ্ধায় ঘেরা দিন',
          description:
            'তোমার জন্মদিন উপলক্ষে পরিবারের সবার একত্র হয়ে ভালোবাসা ও সম্মান জানানোর এক অনন্য ও স্মরণীয় দিন।',
          tag: 'শুভ জন্মদিন',
        },
      ],
    },
    letter: {
      tag: 'শ্রদ্ধাঞ্জলি',
      title: 'তোমার জন্য একটি চিঠি',
      subtitle: 'হৃদয়ের গভীর থেকে ভালোবাসার কয়েকটি কথা',
      openPrompt: 'চিঠিটি খুলতে চাপুন',
      closePrompt: 'চিঠি বন্ধ করুন',
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
      madeBy: 'মুসা কর্তৃক ভালোবাসায় তৈরি',
    },
  },
};
