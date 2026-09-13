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
  stages: [
    {
      label: 'Brief',
      body: 'A written brief from the school, broken down into a subject-by-subject brainstorm. What each year group studies, what the school values, what the children should recognise.',
      asset: { src: '/images/process/01-written-brief.jpg', alt: 'Annotated written brief and subject brainstorm' } as Asset,
    },
    {
      label: 'Concept',
      body: 'A site visit to assess where the artwork would live — wall runs, sightlines, height, the way children move through the corridor.',
      asset: { src: '/images/process/02-site-visit-a.jpg', alt: 'Site assessment photograph of the corridor walls' } as Asset,
    },
    {
      label: 'World building',
      body: 'Visual research boards pulling together references, symbols and characters, then composition tests for each year group.',
      asset: { src: '/images/process/03-visual-brainstorm.jpg', alt: 'Visual research and composition board' } as Asset,
    },
    {
      label: 'Artwork',
      body: 'Production in Procreate at mural resolution, building each subject into one continuous illustrated world rather than a row of separate motifs.',
      asset: { src: '/images/murals/st-christophers-year-5.jpg', alt: 'Year 5 mural artwork' } as Asset,
    },
    {
      label: 'Physical space',
      body: 'Printed and installed across the primary school, where the children see their own curriculum on the walls every day.',
      asset: { src: '/images/process/05-installed-in-use-a.jpg', alt: 'Pupils standing in front of an installed mural' } as Asset,
    },
  ],
  murals: [
    { src: '/images/murals/st-christophers-year-3.jpg', alt: 'Year 3 mural', caption: 'Year 3' },
    { src: '/images/murals/st-christophers-year-4.jpg', alt: 'Year 4 mural', caption: 'Year 4' },
    { src: '/images/murals/st-christophers-year-5.jpg', alt: 'Year 5 mural', caption: 'Year 5' },
    { src: '/images/murals/st-christophers-year-6.jpg', alt: 'Year 6 mural', caption: 'Year 6' },
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
  wide: {
    src: '/images/process/05-installed-wall-run.jpg',
    alt: 'Installed mural run along the school corridor',
  } as Asset,
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
      asset: { src: '/images/dimension/3d-character-openbrush.jpg', alt: '3D character modelled in OpenBrush' } as Asset,
      tall: true,
    },
    {
      name: 'Island environment',
      note: 'A character given a place to stand. Environment and character modelled together so the world reads as one piece.',
      asset: { src: '/images/dimension/3d-environment-island.jpg', alt: '3D island environment with character' } as Asset,
    },
    {
      name: 'Scene study',
      note: 'Objects, props and set dressing built out from the same drawing language as the characters.',
      asset: { src: '/images/dimension/3d-environment-scene.jpg', alt: '3D scene study' } as Asset,
    },
    {
      name: 'Mixed reality',
      note: 'Artworks animated in 2D, then layered over the physical painting through augmented reality — the wall behaves differently through a phone.',
      asset: { src: '/images/dimension/ar-in-situ-phone.jpg', alt: 'Augmented reality artwork viewed through a phone' } as Asset,
    },
    {
      name: 'Tiger',
      note: 'Sketch to 3D model via the Meshy workflow, surfaced with Thai temple architecture.',
      asset: {
        src: null,
        alt: 'Tiger 3D character',
        placeholder: 'Tiger 3D character — hero render plus turntable clip (MP4/WebM)',
      } as Asset,
      tall: true,
    },
    {
      name: 'Physical form',
      note: 'The last step in the chain: a character that leaves the screen entirely.',
      asset: {
        src: null,
        alt: 'Character as a physical object',
        placeholder: 'Photograph of a character as a physical object — print, sculpt, resin figure or fabricated piece',
      } as Asset,
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
    { src: '/images/characters/wild-child-01.png', alt: 'Wild Child character' },
    { src: '/images/characters/wild-child-02.png', alt: 'Wild Child character' },
  ],
  gallery: [
    { src: '/images/characters/wild-child-03.jpg', alt: 'Wild Child character study' },
    { src: '/images/world/dreamscape-01.jpg', alt: 'Dreamscape painting' },
    { src: '/images/characters/wild-child-05.jpg', alt: 'Wild Child character study' },
    { src: '/images/world/dreamscape-03.jpg', alt: 'Dreamscape painting' },
    { src: '/images/characters/wild-child-04.jpg', alt: 'Wild Child character study' },
    { src: '/images/world/dreamscape-05.jpg', alt: 'Dreamscape painting' },
  ],
};
