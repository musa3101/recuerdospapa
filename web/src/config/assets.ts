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
      {
            "id": "g-1",
            "image": "/assets/images/gallery/0abe13d2-512b-4bd5-aa30-8e83329b1728.JPG",
            "caption": "Recuerdo en familia #1"
      },
      {
            "id": "g-2",
            "image": "/assets/images/gallery/1064f3ae-701d-45f4-94f1-189449e50c69.JPG",
            "caption": "Recuerdo en familia #2"
      },
      {
            "id": "g-3",
            "image": "/assets/images/gallery/11695c8a-a4f1-4e26-9905-90dce4339382.JPG",
            "caption": "Recuerdo en familia #3"
      },
      {
            "id": "g-4",
            "image": "/assets/images/gallery/1260486f-c6e1-4276-bd80-6eacdc95fc82.JPG",
            "caption": "Recuerdo en familia #4"
      },
      {
            "id": "g-5",
            "image": "/assets/images/gallery/140784d1-38a2-4432-9197-e3d42454fa1c.JPG",
            "caption": "Recuerdo en familia #5"
      },
      {
            "id": "g-6",
            "image": "/assets/images/gallery/15bd424b-9729-47c9-8f99-e48b6ca988cf.JPG",
            "caption": "Recuerdo en familia #6"
      },
      {
            "id": "g-7",
            "image": "/assets/images/gallery/16a4cbed-6845-4e70-8f19-5f213dcedaa7.JPG",
            "caption": "Recuerdo en familia #7"
      },
      {
            "id": "g-8",
            "image": "/assets/images/gallery/172432f2-606e-4e12-bf97-47e9bf4ee50f.JPG",
            "caption": "Recuerdo en familia #8"
      },
      {
            "id": "g-9",
            "image": "/assets/images/gallery/1941994f-1576-4425-8a1b-d031afe106c5.jpg",
            "caption": "Recuerdo en familia #9"
      },
      {
            "id": "g-10",
            "image": "/assets/images/gallery/1ebf2766-4a3d-4c5a-96d9-ee305cf875f8.JPG",
            "caption": "Recuerdo en familia #10"
      },
      {
            "id": "g-11",
            "image": "/assets/images/gallery/1f3cc318-04ba-46ab-b768-7c9b3f27cf3b.jpg",
            "caption": "Recuerdo en familia #11"
      },
      {
            "id": "g-12",
            "image": "/assets/images/gallery/20171001_211919_Original.jpg",
            "caption": "Recuerdo en familia #12"
      },
      {
            "id": "g-13",
            "image": "/assets/images/gallery/20171009_163225_Original.jpg",
            "caption": "Recuerdo en familia #13"
      },
      {
            "id": "g-14",
            "image": "/assets/images/gallery/20171009_163248_Original.jpg",
            "caption": "Recuerdo en familia #14"
      },
      {
            "id": "g-15",
            "image": "/assets/images/gallery/20171010_201223_Original.jpg",
            "caption": "Recuerdo en familia #15"
      },
      {
            "id": "g-16",
            "image": "/assets/images/gallery/20171026_182126_Original.jpg",
            "caption": "Recuerdo en familia #16"
      },
      {
            "id": "g-17",
            "image": "/assets/images/gallery/20180402_005216_Original.jpg",
            "caption": "Recuerdo en familia #17"
      },
      {
            "id": "g-18",
            "image": "/assets/images/gallery/20180402_005240_Original.jpg",
            "caption": "Recuerdo en familia #18"
      },
      {
            "id": "g-19",
            "image": "/assets/images/gallery/20180703_191944_Original.jpg",
            "caption": "Recuerdo en familia #19"
      },
      {
            "id": "g-20",
            "image": "/assets/images/gallery/2350072e-abc0-487a-b980-cd38dd916fb8.JPG",
            "caption": "Recuerdo en familia #20"
      },
      {
            "id": "g-21",
            "image": "/assets/images/gallery/2a6f8415-7ecb-49ff-baf9-a4b97fda88e4.JPG",
            "caption": "Recuerdo en familia #21"
      },
      {
            "id": "g-22",
            "image": "/assets/images/gallery/2e590be3-923a-40b6-95f4-dd878064b885.JPG",
            "caption": "Recuerdo en familia #22"
      },
      {
            "id": "g-23",
            "image": "/assets/images/gallery/31a6b2d1-8233-438e-a98d-ac27bd358832.JPG",
            "caption": "Recuerdo en familia #23"
      },
      {
            "id": "g-24",
            "image": "/assets/images/gallery/3d1d5202-fc02-4c04-a6a2-511a9508dddb.JPG",
            "caption": "Recuerdo en familia #24"
      },
      {
            "id": "g-25",
            "image": "/assets/images/gallery/435e60da-e41b-4ba6-9a5d-5d522fa3357d.JPG",
            "caption": "Recuerdo en familia #25"
      },
      {
            "id": "g-26",
            "image": "/assets/images/gallery/4532e8a6-2140-4e66-ad8d-1646757f556e.JPG",
            "caption": "Recuerdo en familia #26"
      },
      {
            "id": "g-27",
            "image": "/assets/images/gallery/46612c0f-444d-4e14-acbe-f752c9a11c2e.JPG",
            "caption": "Recuerdo en familia #27"
      },
      {
            "id": "g-28",
            "image": "/assets/images/gallery/4b805b91-b793-427a-852d-851c2e4ee27c.JPG",
            "caption": "Recuerdo en familia #28"
      },
      {
            "id": "g-29",
            "image": "/assets/images/gallery/4d7850e9-32eb-4a84-84a2-805ffd486b73.JPG",
            "caption": "Recuerdo en familia #29"
      },
      {
            "id": "g-30",
            "image": "/assets/images/gallery/4de6ffb5-7100-493f-a0bb-4a4783292a81.JPG",
            "caption": "Recuerdo en familia #30"
      },
      {
            "id": "g-31",
            "image": "/assets/images/gallery/4e7c5d80-8c6a-46ef-9c00-ce8c4aad8d08.JPG",
            "caption": "Recuerdo en familia #31"
      },
      {
            "id": "g-32",
            "image": "/assets/images/gallery/4f2a477f-5295-4f7b-bd56-868d7c869607.JPG",
            "caption": "Recuerdo en familia #32"
      },
      {
            "id": "g-33",
            "image": "/assets/images/gallery/4f2a5592-acb5-492d-8456-852408536f91.JPG",
            "caption": "Recuerdo en familia #33"
      },
      {
            "id": "g-34",
            "image": "/assets/images/gallery/53a6e084-49ee-4d0d-accd-478ec9d5609c.JPG",
            "caption": "Recuerdo en familia #34"
      },
      {
            "id": "g-35",
            "image": "/assets/images/gallery/56b033ef-bea0-45f7-a70b-ab8595a789e6.JPG",
            "caption": "Recuerdo en familia #35"
      },
      {
            "id": "g-36",
            "image": "/assets/images/gallery/57a9655f-0e8b-4b47-9ba0-e8d1331cf0e0.JPG",
            "caption": "Recuerdo en familia #36"
      },
      {
            "id": "g-37",
            "image": "/assets/images/gallery/5d0d976f-1f41-46ca-a9f1-727dcd289529.JPG",
            "caption": "Recuerdo en familia #37"
      },
      {
            "id": "g-38",
            "image": "/assets/images/gallery/64803e80-5ea0-420b-b169-a9010e70f4de.JPG",
            "caption": "Recuerdo en familia #38"
      },
      {
            "id": "g-39",
            "image": "/assets/images/gallery/678394fd-0470-49f3-a427-718005894797.JPG",
            "caption": "Recuerdo en familia #39"
      },
      {
            "id": "g-40",
            "image": "/assets/images/gallery/69c1057c-d932-4729-ba88-c82a623bab1e.JPG",
            "caption": "Recuerdo en familia #40"
      },
      {
            "id": "g-41",
            "image": "/assets/images/gallery/6f632881-b1be-4822-8c8a-443d1a217d59.JPG",
            "caption": "Recuerdo en familia #41"
      },
      {
            "id": "g-42",
            "image": "/assets/images/gallery/77aca21e-1bb2-49dc-8e01-b5a9de1c26a3.jpg",
            "caption": "Recuerdo en familia #42"
      },
      {
            "id": "g-43",
            "image": "/assets/images/gallery/7d4bcb16-455d-40bf-a6c3-6fe2cc2664ef.JPG",
            "caption": "Recuerdo en familia #43"
      },
      {
            "id": "g-44",
            "image": "/assets/images/gallery/7f2e159d-f634-4106-b701-f7fa07c2f402.JPG",
            "caption": "Recuerdo en familia #44"
      },
      {
            "id": "g-45",
            "image": "/assets/images/gallery/8a815802-1524-4dcd-8f03-13ce1a57cc47.JPG",
            "caption": "Recuerdo en familia #45"
      },
      {
            "id": "g-46",
            "image": "/assets/images/gallery/8a8c1b98-a203-4c86-95e3-085742151a04.JPG",
            "caption": "Recuerdo en familia #46"
      },
      {
            "id": "g-47",
            "image": "/assets/images/gallery/920d2a0e-b394-497c-94ea-96dcad7f4fdf.JPG",
            "caption": "Recuerdo en familia #47"
      },
      {
            "id": "g-48",
            "image": "/assets/images/gallery/92f20e10-8915-4e07-af50-946df6a5ab6c.JPG",
            "caption": "Recuerdo en familia #48"
      },
      {
            "id": "g-49",
            "image": "/assets/images/gallery/93b06b78-6139-4c21-b3be-7fe1fa5b2980.JPG",
            "caption": "Recuerdo en familia #49"
      },
      {
            "id": "g-50",
            "image": "/assets/images/gallery/94227bf6-214c-44f5-811e-255952b10fb6.JPG",
            "caption": "Recuerdo en familia #50"
      },
      {
            "id": "g-51",
            "image": "/assets/images/gallery/9fb4b0a5-8120-45dc-bc61-dfca47d7275c.JPG",
            "caption": "Recuerdo en familia #51"
      },
      {
            "id": "g-52",
            "image": "/assets/images/gallery/IMG-20150425-WA0006_Original.jpg",
            "caption": "Recuerdo en familia #52"
      },
      {
            "id": "g-53",
            "image": "/assets/images/gallery/IMG_2843_Original.jpg",
            "caption": "Recuerdo en familia #53"
      },
      {
            "id": "g-54",
            "image": "/assets/images/gallery/IMG_5122_Original.jpg",
            "caption": "Recuerdo en familia #54"
      },
      {
            "id": "g-55",
            "image": "/assets/images/gallery/IMG_5127_Original.jpg",
            "caption": "Recuerdo en familia #55"
      },
      {
            "id": "g-56",
            "image": "/assets/images/gallery/IMG_5131_Original.jpg",
            "caption": "Recuerdo en familia #56"
      },
      {
            "id": "g-57",
            "image": "/assets/images/gallery/IMG_5136_Original.jpg",
            "caption": "Recuerdo en familia #57"
      },
      {
            "id": "g-58",
            "image": "/assets/images/gallery/IMG_5139_Original.jpg",
            "caption": "Recuerdo en familia #58"
      },
      {
            "id": "g-59",
            "image": "/assets/images/gallery/IMG_5143_Original.jpg",
            "caption": "Recuerdo en familia #59"
      },
      {
            "id": "g-60",
            "image": "/assets/images/gallery/IMG_5161_Original.jpg",
            "caption": "Recuerdo en familia #60"
      },
      {
            "id": "g-61",
            "image": "/assets/images/gallery/IMG_5263_Original.jpg",
            "caption": "Recuerdo en familia #61"
      },
      {
            "id": "g-62",
            "image": "/assets/images/gallery/IMG_5681_Original.jpg",
            "caption": "Recuerdo en familia #62"
      },
      {
            "id": "g-63",
            "image": "/assets/images/gallery/IMG_5755_Original.jpg",
            "caption": "Recuerdo en familia #63"
      },
      {
            "id": "g-64",
            "image": "/assets/images/gallery/WP_20120901_007_Original.jpg",
            "caption": "Recuerdo en familia #64"
      },
      {
            "id": "g-65",
            "image": "/assets/images/gallery/WP_20120901_015_Original.jpg",
            "caption": "Recuerdo en familia #65"
      },
      {
            "id": "g-66",
            "image": "/assets/images/gallery/WP_20131224_005_Original.jpg",
            "caption": "Recuerdo en familia #66"
      },
      {
            "id": "g-67",
            "image": "/assets/images/gallery/a1b7cbd8-5d6d-4bd8-b482-96fdcad32c59.JPG",
            "caption": "Recuerdo en familia #67"
      },
      {
            "id": "g-68",
            "image": "/assets/images/gallery/a894a141-1933-466d-aa1f-4863c46d0ad6.JPG",
            "caption": "Recuerdo en familia #68"
      },
      {
            "id": "g-69",
            "image": "/assets/images/gallery/ab45f5a2-9fe2-43ad-b563-b23381927e54.JPG",
            "caption": "Recuerdo en familia #69"
      },
      {
            "id": "g-70",
            "image": "/assets/images/gallery/ad2828e4-9ffa-4f21-ba83-2f32d1927c2f.JPG",
            "caption": "Recuerdo en familia #70"
      },
      {
            "id": "g-71",
            "image": "/assets/images/gallery/b17d20c8-648a-4f83-bacb-9b958ac9d93e.JPG",
            "caption": "Recuerdo en familia #71"
      },
      {
            "id": "g-72",
            "image": "/assets/images/gallery/b2a2242c-5a0e-4371-82f8-ba535cb9120d.JPG",
            "caption": "Recuerdo en familia #72"
      },
      {
            "id": "g-73",
            "image": "/assets/images/gallery/b31e5b85-2097-4423-b46c-c8069f4d9677.jpg",
            "caption": "Recuerdo en familia #73"
      },
      {
            "id": "g-74",
            "image": "/assets/images/gallery/b3d08838-03ce-4ca7-a811-ca2c6d6df144.JPG",
            "caption": "Recuerdo en familia #74"
      },
      {
            "id": "g-75",
            "image": "/assets/images/gallery/b58bb156-c270-4993-a301-f88cd6fb53ae.JPG",
            "caption": "Recuerdo en familia #75"
      },
      {
            "id": "g-76",
            "image": "/assets/images/gallery/b671cada-cfea-4377-9a61-f7d38e48ec89.JPG",
            "caption": "Recuerdo en familia #76"
      },
      {
            "id": "g-77",
            "image": "/assets/images/gallery/b7a490bf-b4ad-4fb7-a88a-6f5820b52048.JPG",
            "caption": "Recuerdo en familia #77"
      },
      {
            "id": "g-78",
            "image": "/assets/images/gallery/c0f3064f-109a-445c-9399-cb75b152172d.JPG",
            "caption": "Recuerdo en familia #78"
      },
      {
            "id": "g-79",
            "image": "/assets/images/gallery/c1409fa6-efd6-4ee0-81d2-defd6fef27df.JPG",
            "caption": "Recuerdo en familia #79"
      },
      {
            "id": "g-80",
            "image": "/assets/images/gallery/c16127f1-d74e-4f61-bcad-eefef6ebbf3a.JPG",
            "caption": "Recuerdo en familia #80"
      },
      {
            "id": "g-81",
            "image": "/assets/images/gallery/cb2891a9-e5a7-4ab4-9769-0f9e069ed520.JPG",
            "caption": "Recuerdo en familia #81"
      },
      {
            "id": "g-82",
            "image": "/assets/images/gallery/cbe82d82-7296-41ba-97ce-99deb9bc1e22.JPG",
            "caption": "Recuerdo en familia #82"
      },
      {
            "id": "g-83",
            "image": "/assets/images/gallery/ced472c5-7868-46bf-a53f-bca34d46e474.JPG",
            "caption": "Recuerdo en familia #83"
      },
      {
            "id": "g-84",
            "image": "/assets/images/gallery/cf379ec3-b931-46d6-904c-b110cec6c6bb.JPG",
            "caption": "Recuerdo en familia #84"
      },
      {
            "id": "g-85",
            "image": "/assets/images/gallery/d253c609-9516-4df4-83be-00cdee6c27ac.JPG",
            "caption": "Recuerdo en familia #85"
      },
      {
            "id": "g-86",
            "image": "/assets/images/gallery/d5009651-39c6-4c33-85dd-28570add71ef.JPG",
            "caption": "Recuerdo en familia #86"
      },
      {
            "id": "g-87",
            "image": "/assets/images/gallery/d67752f6-5b28-4b8e-b7b7-83ffad694540.JPG",
            "caption": "Recuerdo en familia #87"
      },
      {
            "id": "g-88",
            "image": "/assets/images/gallery/d9d40ead-6af9-409f-94b3-4e59f5af2e92.jpg",
            "caption": "Recuerdo en familia #88"
      },
      {
            "id": "g-89",
            "image": "/assets/images/gallery/da66c650-d2ac-4c97-a953-9d39900e2ddb.JPG",
            "caption": "Recuerdo en familia #89"
      },
      {
            "id": "g-90",
            "image": "/assets/images/gallery/db651398-509f-40c7-b091-c0a7fee7bb92.JPG",
            "caption": "Recuerdo en familia #90"
      },
      {
            "id": "g-91",
            "image": "/assets/images/gallery/dbbe93c7-c350-46b8-a30b-57b3047cafb2.JPG",
            "caption": "Recuerdo en familia #91"
      },
      {
            "id": "g-92",
            "image": "/assets/images/gallery/df6cef22-17c1-4286-8a00-33947136bd35.JPG",
            "caption": "Recuerdo en familia #92"
      },
      {
            "id": "g-93",
            "image": "/assets/images/gallery/e0d7ccf2-3cd7-4aa7-a6d8-9807e97222e7.JPG",
            "caption": "Recuerdo en familia #93"
      },
      {
            "id": "g-94",
            "image": "/assets/images/gallery/e194ac73-5286-416d-a173-4d723b888416.JPG",
            "caption": "Recuerdo en familia #94"
      },
      {
            "id": "g-95",
            "image": "/assets/images/gallery/e55c8d9b-2c0b-439f-b254-251b593895f8.JPG",
            "caption": "Recuerdo en familia #95"
      },
      {
            "id": "g-96",
            "image": "/assets/images/gallery/e9f3e2d1-1a08-46e6-9b13-a06aaf2139d9.JPG",
            "caption": "Recuerdo en familia #96"
      },
      {
            "id": "g-97",
            "image": "/assets/images/gallery/eb3fb2d8-4d98-4be7-a64f-5250aacd7fdd.JPG",
            "caption": "Recuerdo en familia #97"
      },
      {
            "id": "g-98",
            "image": "/assets/images/gallery/f013a448-4c76-444d-ae23-142ce9421b5d.JPG",
            "caption": "Recuerdo en familia #98"
      },
      {
            "id": "g-99",
            "image": "/assets/images/gallery/f1ad083b-fb47-4ecf-971c-592c36ffae76.JPG",
            "caption": "Recuerdo en familia #99"
      },
      {
            "id": "g-100",
            "image": "/assets/images/gallery/fab6162a-abac-45a2-a102-bb1e1b1092a0.JPG",
            "caption": "Recuerdo en familia #100"
      },
      {
            "id": "g-101",
            "image": "/assets/images/gallery/ffc72141-43fa-492e-855d-542877f75211.JPG",
            "caption": "Recuerdo en familia #101"
      },
      {
            "id": "g-102",
            "image": "/assets/images/gallery/gallery-1.jpg",
            "caption": "Recuerdo en familia #102"
      },
      {
            "id": "g-103",
            "image": "/assets/images/gallery/gallery-2.jpg",
            "caption": "Recuerdo en familia #103"
      },
      {
            "id": "g-104",
            "image": "/assets/images/gallery/gallery-3.jpg",
            "caption": "Recuerdo en familia #104"
      },
      {
            "id": "g-105",
            "image": "/assets/images/gallery/gallery-4.jpg",
            "caption": "Recuerdo en familia #105"
      },
      {
            "id": "g-106",
            "image": "/assets/images/gallery/gallery-5.jpg",
            "caption": "Recuerdo en familia #106"
      },
      {
            "id": "g-107",
            "image": "/assets/images/gallery/gallery-6.jpg",
            "caption": "Recuerdo en familia #107"
      },
      {
            "id": "g-108",
            "image": "/assets/images/gallery/gallery-7.jpg",
            "caption": "Recuerdo en familia #108"
      },
      {
            "id": "g-109",
            "image": "/assets/images/gallery/gallery-8.jpg",
            "caption": "Recuerdo en familia #109"
      }
],
  },
};

/**
 * Helper to resolve the correct URL whether using local files, GitHub Pages, or Cloudflare R2
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
  const rawBase = (import.meta as any).env?.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const cleanPath = pathOrKey.startsWith('/') ? pathOrKey : `/${pathOrKey}`;
  return base ? `${base}${cleanPath}` : cleanPath;
}

/**
 * Helper to resolve the optimized thumbnail URL for gallery images
 */
export function resolveThumbUrl(pathOrKey: string): string {
  if (!pathOrKey) return '';
  if (pathOrKey.includes('/assets/images/gallery/') && !pathOrKey.includes('/thumbs/')) {
    const thumbPath = pathOrKey.replace('/assets/images/gallery/', '/assets/images/gallery/thumbs/');
    return resolveAssetUrl(thumbPath);
  }
  return resolveAssetUrl(pathOrKey);
}

