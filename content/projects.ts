export type Asset = {
  src: string | null;
  alt: string;
  /** Set when the asset is a stand-in Jessica needs to replace. */
  placeholder?: string;
  /** Small label shown under the image, e.g. in a Detail/Process row. */
  caption?: string;
  /** Plays this video instead of the still — src is used as poster. */
  video?: string;
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
  ],
  // Sits to the right of the sketch still — a timelapse of one of the
  // murals actually being painted, start to finish. The caption folds
  // in what the (now-removed) visual-brainstorm still used to show,
  // since the timelapse itself covers that ground.
  timelapse: {
    video: '/images/murals/year-four-timelapse.mp4',
    alt: 'Timelapse of the Year 4 mural being painted, start to finish',
    caption: 'Year 4 mural — from visual brainstorm to finished piece',
  },
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
};

export const dimension = {
  id: 'dimension',
  heading: 'From drawing to dimension',
  standfirst:
    'A character that only exists as an image has one use. A character that exists as a model can be animated, placed, printed, rigged, walked around and manufactured.',
  chain: ['Drawing', 'Design', '3D model', 'Animation', 'World', 'Physical object'],
  projects: [
    {
      // Feral Baby and Strawbugs, side by side on their own row, each
      // keeping their own text. Matched by height, not width — Feral
      // Baby is shown at its full natural (portrait) proportions, and
      // that height is what Strawbugs' square image stretches to
      // match, rather than forcing both into the same box shape.
      name: 'Feral Baby & Strawbugs',
      layout: 'paired-originals' as const,
      left: {
        name: 'Feral Baby',
        note: 'A wild child of the forest, drawn barefoot as a statement of freedom and instinct — crowned not as royalty but as her own kind of authority over her own wildness. The original hand-drawn character, before it was rebuilt in 3D in Meta Quest.',
        asset: { src: '/images/process/feral-baby-original.gif', alt: 'Feral Baby — the original 2D character, animated' } as Asset,
        ratio: '900 / 1236',
      },
      right: {
        name: 'Strawbugs',
        note: 'A frame-by-frame animated character built around strawberries-and-cream sweetness, skateboarding energy and a sense of childhood nostalgia. The aim was to capture curiosity, playfulness and a slightly dreamlike charm through colour, movement and expression.',
        asset: { src: '/images/dimension/3d-environment-island.jpg', alt: '3D island environment, rotating' } as Asset,
        video: '/images/characters/wild-child-strawbugs-island.mp4',
      },
    },
    {
      // A dedicated row: the two Meta Quest results, side by side at
      // the same size as a standard card (matching Strawbugs above),
      // with one shared caption sitting to their right rather than
      // underneath — they're one process applied to two characters.
      name: 'From 2D to 3D',
      layout: 'paired-videos' as const,
      note: 'Feral Baby and Strawbugs rebuilt in OpenBrush using Meta Quest — approached as a 3D painting rather than a 3D construction, carrying the same brush instincts from canvas directly into space instead of modelling toward a technically "correct" mesh. The result can be developed further through rigging, animation, virtual environments and physical production such as 3D printing.',
      pairedVideos: [
        {
          src: null,
          alt: 'Feral Baby recreated in 3D, rotating',
          video: '/images/characters/feral-baby-3d.mp4',
        } as Asset,
        {
          // No poster — the previous one (a generic "3D island"
          // photo) wasn't Strawbugs at all, and the Meta Quest clip
          // has no clean frame to use in its place instead (OpenBrush
          // UI is visible throughout).
          src: null,
          alt: 'Strawbugs recreated in 3D, rotating',
          video: '/images/characters/strawbugs-meta-quest.mp4',
        } as Asset,
      ],
    },
    {
      name: 'Temple Tiger',
      note: 'Inspired by the ornament of Thai temple architecture, then sketched and rebuilt as a fully surfaced 3D model via the Meshy workflow.',
      asset: { src: null, alt: 'Tiger 3D character, rotating' } as Asset,
      video: '/images/characters/tiger-video-3d.mp4',
      // The supporting development shots (Detail/Process/Reference)
      // run in a column next to the video; the heading and note sit
      // below everything as one full-width banner.
      layout: 'split-bottom' as const,
      detail: [
        { src: '/images/characters/tiger-image-1.png', alt: 'Close-up detail of the tiger’s surfacing and ornament' } as Asset,
        { src: '/images/characters/tiger-image-3.png', alt: 'Close-up detail of the tiger’s roaring expression and mane' } as Asset,
        { src: '/images/characters/tiger-image-4.png', alt: 'Close-up detail of the tiger’s shoulder ornament' } as Asset,
        { src: '/images/characters/tiger-image-5.png', alt: 'Close-up detail of the tiger’s head and shoulder surfacing' } as Asset,
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
            video: '/images/characters/tiger-temple-inspiration.mp4',
            caption: 'On site',
          },
        ],
      },
      tall: true,
    },
    {
      name: 'Meshy character studies',
      note: [
        'Existing Wild Child artworks fed into Meshy — a text-to-3D model — to test how far a digitally-drawn character can be pushed into a fully modelled one without redrawing it from scratch.',
        'These characters are not isolated AI outputs. They are developed from an existing original IP, with recurring colour, form, symbolism and personality so each new character feels unique while still belonging to the same world.',
      ],
      asset: { src: null, alt: 'Meshy-generated 3D character, rotating' } as Asset,
      video: '/images/characters/wild-child-3d-experiment.MOV',
      smallVideo: true, // 480x848 screen recording — never display large
      // Video + all four stills on the left, text on the right.
      layout: 'split-right' as const,
      gallery: [
        { src: '/images/characters/wild-child-3d-experiment-1.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
        { src: '/images/characters/wild-child-3d-experiment-2JPG.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
        { src: '/images/characters/wild-child-3d-experiment-3.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
        { src: '/images/characters/wild-child-3d-experiment-4.JPG', alt: 'Meshy-generated 3D character study' } as Asset,
      ],
    },
    // No "physical form" row for this section's own cast (Feral Baby,
    // Strawbugs, Temple Tiger) — none of them exist as a physical
    // object yet. That proof point belongs to the yeti's pipeline in
    // "One character, endless possibilities" instead, rather than
    // reaching for an unrelated product here just to cover the step.
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
      src: null, // wild-child-character-01.png no longer exists — video plays without a poster frame
      alt: 'Wild Child character, animated',
      video: '/images/characters/wild-child-character-04-animated.mp4',
    },
    {
      src: '/images/characters/wild-child-character-07-wildchildworld.JPEG',
      alt: 'Wild Child World title card — a monster with the wordmark inside its open mouth',
    },
  ],
  // Replaces the old mixed-ratio gallery entirely: one title image up
  // top, then three plain rows, smallest to most experimental.
  media: {
    // The yeti's 3D model and physical print now live in the "One
    // character, endless possibilities" section as that character's
    // proof case — kept out of here so this section reads purely as
    // the roster (breadth), not a repeat of the process story.
    top: {
      src: '/images/characters/wild-child-character-07-wildchildworld.JPEG',
      alt: 'Wild Child World title card — a monster with the wordmark inside its open mouth',
    },
    rows: [
      {
        items: [
          { src: '/images/characters/wild-child-character-03.JPG', alt: 'Wild Child character study' },
          {
            src: null,
            alt: 'Wild Child character, animated',
            video: '/images/characters/wild-child-character-04-animated.mp4',
          },
          { src: '/images/characters/wild-child-character-05.JPG', alt: 'Wild Child character study' },
          { src: '/images/characters/wild-child-character-06.JPG', alt: 'Wild Child character study' },
          { src: '/images/characters/wild-child-character-08.JPG', alt: 'Wild Child character study' },
        ],
      },
      {
        // These four are genuinely portrait (as tall as 2095x3423) — a
        // square crop was cutting them off, so this row runs taller and
        // shows the whole image instead of cropping to fill the box.
        ratio: '3 / 4',
        fit: 'contain' as const,
        items: [
          { src: '/images/characters/Indigo_Warrior.GIF', alt: 'Indigo Warrior, animated' },
          { src: '/images/process/feral-baby-original.gif', alt: 'Feral Baby, animated' },
          { src: '/images/characters/One-ness.jpg', alt: 'One-ness — dreamscape portrait' },
          { src: null, alt: 'Dream 59, animated painting', video: '/images/characters/dream-59.mp4' },
        ],
      },
      {
        items: [
          { src: null, alt: 'Flower character, animated', video: '/images/characters/flower-animated.mp4' },
          { src: null, alt: 'Deranged Rainbow character, animated', video: '/images/characters/deranged-rainbow.mp4' },
        ],
      },
    ],
  },
};
