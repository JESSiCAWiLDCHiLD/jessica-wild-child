export type Asset = {
  src: string | null;
  alt: string;
  /** Set when the asset is a stand-in Jessica needs to replace. */
  placeholder?: string;
};

export const stChristophers = {
  id: 'st-christophers',
  client: "St Christopher's School",
  place: 'Bahrain',
  year: '2021',
  title: 'Four year groups, four worlds',
  standfirst:
    'Commissioned to create four large-scale murals, one for each primary year group, drawing together Humanities, Science, Literature, culture and history into a single continuous scene per year.',
  // One line of process credibility, plus the preliminary material
  // itself kept to a single small row — present, but not competing
  // with the murals for attention.
  methodNote:
    'Each mural starts with a written brief and a site visit, then research and composition — before anything is drawn.',
  sketches: [
    {
      src: '/images/process/site-assessment.jpg',
      alt: 'Annotated site-assessment photographs comparing wall options in the corridor',
      caption: 'Site assessment',
    },
    {
      src: '/images/process/03-visual-brainstorm.jpg',
      alt: 'Visual research and composition board for a Year 5 mural',
      caption: 'Visual brainstorm',
    },
  ],
  murals: [
    {
      src: '/images/murals/st-christophers-year-3.jpg',
      alt: 'Year 3 mural',
      caption: 'Year 3',
      installed: {
        src: '/images/process/installed-year-3-mural.jpg',
        alt: 'The Year 3 mural installed in the school corridor, pupils standing in front of it',
      } as Asset,
    },
    {
      src: '/images/murals/st-christophers-year-4.jpg',
      alt: 'Year 4 mural',
      caption: 'Year 4',
      installed: {
        src: '/images/process/installed-year-4-mural.jpg',
        alt: 'The Year 4 mural installed in the school corridor, pupils standing in front of it',
      } as Asset,
    },
    {
      src: '/images/murals/st-christophers-year-5.jpg',
      alt: 'Year 5 mural',
      caption: 'Year 5',
      installed: {
        src: '/images/process/installed-year-5-mural.png',
        alt: 'The Year 5 mural installed in the school corridor, pupils standing in front of it',
      } as Asset,
    },
    {
      src: '/images/murals/st-christophers-year-6.jpg',
      alt: 'Year 6 mural',
      caption: 'Year 6',
      installed: {
        src: '/images/process/installed-year-6-mural.png',
        alt: 'The Year 6 mural installed in the school corridor, pupils standing in front of it',
      } as Asset,
    },
  ],
  culture: {
    title: 'Artwork rooted in where the school actually is',
    body: 'A second set of year-group artworks drawn from Bahraini culture — a camel, a pearl diver, the city skyline and the historic Bahrain fort — so the building belongs to its place as well as its curriculum.',
    images: [
      { src: '/images/murals/bahrain-year-3-camel.jpg', alt: 'Year 3 artwork — camel' },
      { src: '/images/murals/bahrain-year-4-pearl-diver.jpg', alt: 'Year 4 artwork — pearl diver' },
      { src: '/images/murals/bahrain-year-5-skyline.jpg', alt: 'Year 5 artwork — city skyline' },
      { src: '/images/murals/bahrain-year-6-fort.jpg', alt: 'Year 6 artwork — Bahrain fort' },
    ],
  },
  departmental: {
    title: 'Departmental and key values murals',
    images: [
      { src: '/images/murals/st-christophers-arabic-department.jpg', alt: 'Arabic department mural' },
      { src: '/images/murals/st-christophers-key-values.jpg', alt: 'Key values mural' },
    ],
  },
};

export const geobitmine = {
  id: 'geobitmine',
  client: 'GeoBitmine',
  place: 'Bitcoin mining company',
  year: '2024',
  title: 'A company explained as a landscape',
  standfirst:
    'A digital mural for a Bitcoin mining company. Hardware, energy, portraits and terrain worked into one continuous scene — a technical business told as a world rather than a diagram.',
  body: [
    'The brief was a company, not a picture: what it does, what it believes, the people it looks up to. That gets translated into a single readable landscape someone can stand in front of and keep finding things in.',
    'The same method applies to a hotel group, a developer or a consumer brand. The subject matter changes; the translation does not.',
  ],
  hero: { src: '/images/murals/geobitmine-digital-mural.jpg', alt: 'GeoBitmine digital mural' } as Asset,
  install: {
    src: null,
    alt: 'GeoBitmine mural installed on site',
    placeholder: 'Installed photograph — printed mural in situ at GeoBitmine, plus final dimensions',
  } as Asset,
};

export const dimension = {
  id: 'dimension',
  heading: 'From drawing to dimension',
  standfirst:
    'A character that only exists as an image has one use. A character that exists as a model can be animated, placed, printed, rigged, walked around and manufactured.',
  chain: ['Drawing', 'Design', '3D model', 'Animation', 'World', 'Physical object'],
  projects: [
    {
      name: 'OpenBrush character study',
      note: '2D animation transformed into a 3D model using Meta Quest Pro and OpenBrush. Rigged, dropped into 3D environments, and playable as a downloadable character in interactive exhibitions.',
      asset: { src: '/images/dimension/3d-character-openbrush.jpg', alt: '3D character modelled in OpenBrush, rotating' } as Asset,
      video: '/images/characters/wild-child-character-08-3D-rotating-animation.MP4',
      smallVideo: true, // native export is 480x480 — never display large
      tall: true,
    },
    {
      name: 'Island environment',
      note: 'An original character, hand-drawn frame by frame, given a world to actually exist in — the same 2D-to-OpenBrush workflow, built out into a full 3D environment rather than a single figure.',
      asset: { src: '/images/dimension/3d-environment-island.jpg', alt: '3D island environment, rotating' } as Asset,
      video: '/images/characters/wild-child-strawbugs-island.mov',
    },
    {
      name: 'Scene study',
      note: 'Props and set dressing for that same world, drawn frame by frame and modelled into OpenBrush alongside the character rather than built as a separate exercise.',
      asset: { src: '/images/dimension/3d-environment-scene.jpg', alt: '3D scene study, rotating' } as Asset,
      video: '/images/characters/wild-child-character-3d-video.mov',
    },
    {
      name: 'Temple Tiger',
      note: 'Inspired by the ornament of Thai temple architecture, then sketched and rebuilt as a fully surfaced 3D model via the Meshy workflow.',
      asset: { src: null, alt: 'Tiger 3D character, rotating' } as Asset,
      video: '/images/characters/tiger-video-3d.mov',
      detail: [
        { src: '/images/characters/tiger-image-1.png', alt: 'Close-up detail of the tiger’s surfacing and ornament' },
        { src: '/images/characters/tiger-image-3.png', alt: 'Close-up detail of the tiger’s roaring expression and mane' },
        { src: '/images/characters/tiger-image-4.png', alt: 'Close-up detail of the tiger’s shoulder ornament' },
        { src: '/images/characters/tiger-image-5.png', alt: 'Close-up detail of the tiger’s head and shoulder surfacing' },
      ],
      // The fullest process story on the site — gets the wide slot
      // regardless of where it lands in the grid.
      forceWide: true,
      process: [
        { src: '/images/characters/tiger-digital-drawing.png', alt: 'Digital sketch of the tiger', caption: 'Digital sketch' },
        {
          src: '/images/characters/tiger-ai-generated.png',
          alt: 'AI-generated 3D concept of the tiger, seated pose',
          caption: 'AI-generated concept',
        },
      ],
      inspiration: {
        heading: 'Reference — Thai temple architecture',
        items: [
          {
            src: '/images/characters/tiger-temple-inspiration-photo-1.jpg',
            alt: 'Detail of porcelain-mosaic temple ornament',
            caption: 'Temple ornament detail',
          },
          {
            src: '/images/characters/tiger-temple-inspiration-photo-2.jpg',
            alt: 'Porcelain-mosaic temple facade',
            caption: 'Temple facade',
          },
          {
            src: '/images/characters/tiger-temple-inspiration-photo-3.jpg',
            alt: 'Porcelain-mosaic temple detail with floral motifs',
            caption: 'Temple detail',
          },
          {
            src: '/images/characters/tiger-temple-inspiration-photo-1.jpg',
            alt: 'Filmed walkthrough of the temple ornament',
            video: '/images/characters/tiger-temple-inspiration.MOV',
            caption: 'On site',
          },
        ],
      },
      tall: true,
    },
    {
      name: 'Physical form',
      note: 'The last step in the chain: a character that leaves the screen entirely.',
      asset: {
        src: '/images/dimension/physical-form-painted-tote.png',
        alt: 'A Wild Child character painted onto a physical tote bag',
      } as Asset,
    },
    {
      name: 'Meshy character studies',
      note: 'Existing Wild Child artworks fed into Meshy — a text-to-3D model — to test how far a painted character can be pushed into a fully modelled one without redrawing it from scratch.',
      asset: { src: '/images/characters/wild-child-3d-experiment-1.JPG', alt: 'Meshy-generated 3D character, rotating' } as Asset,
      video: '/images/characters/wild-child-3d-experiment.MOV',
      smallVideo: true, // 480x848 screen recording — never display large
      gallery: [
        { src: '/images/characters/wild-child-3d-experiment-2JPG.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
        { src: '/images/characters/wild-child-3d-experiment-3.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
        { src: '/images/characters/wild-child-3d-experiment-4.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
      ],
    },
  ],
};

export const wildChildWorld = {
  id: 'wild-child-world',
  heading: 'Wild Child World',
  standfirst:
    'The Wild Childs are spritely beings that live between imagination and reality. Each one has its own personality, symbolism and metaphor. Every animation is built around breath, motion and life-force.',
  archetype:
    'At the centre is the archetype of the Wild Child: a reconnection to the inner child, to instinct, play and authentic self-expression.',
  chain: [
    { label: 'Character', body: 'An individual, not a style exercise.' },
    { label: 'Personality', body: 'Temperament, posture, the way it moves.' },
    { label: 'Story', body: 'Symbolism and metaphor it carries.' },
    { label: 'World', body: 'The realm it inhabits and who else lives there.' },
    { label: 'Motion', body: 'Organic dynamism — life-force made visible.' },
    { label: 'Physical form', body: 'Canvas, mural, sculpture, object.' },
  ],
  cutouts: [
    {
      src: '/images/characters/wild-child-character-01.png',
      alt: 'Wild Child character, animated',
      video: '/images/characters/wild-child-character-04-animated.mov',
    },
    {
      src: '/images/characters/wild-child-character-07-wildchildworld.JPEG',
      alt: 'Wild Child World title card — a monster with the wordmark inside its open mouth',
    },
  ],
  // Replaces the old mixed-ratio gallery entirely: one title image up
  // top, then three plain rows, smallest to most experimental.
  media: {
    top: {
      src: '/images/characters/wild-child-character-07-wildchildworld.JPEG',
      alt: 'Wild Child World title card — a monster with the wordmark inside its open mouth',
    },
    rows: [
      [
        { src: '/images/characters/wild-child-character-03.JPG', alt: 'Wild Child character study' },
        {
          src: null,
          alt: 'Wild Child character, animated',
          video: '/images/characters/wild-child-character-04-animated.mov',
        },
        { src: '/images/characters/wild-child-character-05.JPG', alt: 'Wild Child character study' },
        { src: '/images/characters/wild-child-character-06.JPG', alt: 'Wild Child character study' },
        { src: '/images/characters/wild-child-character-08.JPG', alt: 'Wild Child character study' },
      ],
      [
        { src: '/images/characters/Indigo_Warrior.GIF', alt: 'Indigo Warrior, animated' },
        { src: '/images/characters/feral-baby.jpg', alt: 'Feral Baby character portrait' },
        { src: '/images/characters/One-ness.jpg', alt: 'One-ness — dreamscape portrait' },
        { src: null, alt: 'Dream 59, animated painting', video: '/images/characters/dream-59.mp4' },
      ],
      [
        { src: null, alt: 'Flower character, animated', video: '/images/characters/flower-animated.mov' },
        { src: null, alt: 'Deranged Rainbow character, animated', video: '/images/characters/deranged-rainbow.mov' },
      ],
    ],
  },
};
