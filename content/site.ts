/**
 * All homepage copy lives here. Nothing in this file is invented:
 * every claim traces to the supplied portfolio PDF or the existing
 * Framer site. Items needing Jessica's confirmation are marked with
 * a `verify` field and surfaced by the TODO audit in content/todo.ts.
 */

export const site = {
  name: 'Jessica Wild Child',
  legalName: 'Jessica Daisy Mannings',
  role: 'Character & world artist',
  email: 'mannings.jess@gmail.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/jessicawildchild/' },
    { label: 'X', href: 'https://x.com/jesscawildchild' },
  ],
  metaDescription:
    'Jessica Wild Child creates original characters and visual worlds for brands, schools and physical spaces — built out through 3D, animation, murals and installation.',
};

export const hero = {
  line1: 'I make characters',
  line2: 'that become worlds.',
  standfirst:
    'Original characters and visual worlds for brands, schools and physical spaces. Drawn, modelled, animated, painted at scale — and built into places people walk through.',
  primaryCta: { label: 'Explore the world', href: '#disciplines' },
  secondaryCta: { label: 'Start a project', href: '#contact' },
};

export const credentials = {
  heading: 'Commissioned work',
  clients: [
    { name: "St Christopher's School", place: 'Bahrain', year: '2021', note: 'Four year-group murals' },
    { name: 'GeoBitmine', place: 'United States', year: '2024', note: 'Digital mural', verify: 'Confirm territory/office location for GeoBitmine' },
  ],
  exhibitions: [
    'NFT SOHO, London — 2021',
    'NFT NYC, Times Square — 2021, 2022',
    'ETH Tokyo — 2023',
    "Vietnam's first crypto-canvas exhibition, solo — 2023",
    'NamFungible, solo — 2023',
    'Non Fungible Conference, Lisbon — 2024',
  ],
  facts: [
    { value: 'First Class', label: 'BA (Hons) Fine Art, Loughborough, 2019' },
    { value: '80+', label: 'Commissioned works delivered', verify: 'Confirm count — site says 80+, portfolio says 52+ BAYC' },
    { value: '2.1m', label: 'Tallest painted canvas to date' },
    { value: 'Asia', label: 'Based in Thailand, working internationally' },
  ],
};

export const disciplines = [
  {
    index: '01',
    title: 'Character',
    line: 'A character is a piece of intellectual property, not a drawing.',
    items: ['Character design', 'Mascots', '3D characters', 'Character systems', 'Character families', 'Character IP'],
  },
  {
    index: '02',
    title: 'World',
    line: 'The place the character comes from is what makes it believable.',
    items: ['World building', 'Visual storytelling', 'Campaign universes', 'Narrative environments', 'Brand mythology'],
  },
  {
    index: '03',
    title: 'Space',
    line: 'Work you stand inside rather than look at.',
    items: ['Murals', 'Environmental graphics', 'Installations', 'Sculptures', 'School environments', 'Retail environments', 'Hospitality environments'],
  },
  {
    index: '04',
    title: 'Motion',
    line: 'Breath, weight and life-force — the thing that makes people stay.',
    items: ['Animation', '3D animation', 'AR', 'Mixed reality', 'Social content', 'Interactive experiences'],
  },
];

export const process = {
  heading: 'From idea to world',
  standfirst:
    'Commissions run as a collaboration, not a hand-off. You get the thinking as well as the artwork.',
  steps: [
    { index: '01', title: 'Discover', body: 'Understand the place, the organisation, the audience, the story and the objectives. On site where possible.' },
    { index: '02', title: 'Imagine', body: 'Research, sketching, symbolism, character exploration and world building. This is where the direction gets decided.' },
    { index: '03', title: 'Create', body: 'Illustration, painting, 3D modelling and environmental design, worked up to production scale.' },
    { index: '04', title: 'Bring to life', body: 'Animation, fabrication, murals, installation and interactive layers. The artwork meets the building.' },
    { index: '05', title: 'Expand', body: 'Extend the characters and the world across new campaigns, environments and experiences as the organisation grows.' },
  ],
};

export const about = {
  heading: 'About',
  body: [
    'Jessica Mannings is a multidisciplinary British artist and the creator of Wild Child World.',
    'Originally trained as a painter, her practice has expanded across digital art, character design, animation, 3D and immersive environments.',
    'Her work explores imagination, human psychology and the strange worlds that exist between inner experience and physical reality.',
    'Today she applies that same approach to creating distinctive characters and environments for organisations, spaces and brands.',
  ],
  credentials: [
    'First Class BA (Hons) Fine Art, Loughborough University, 2019',
    'School of the Arts, English & Drama — Outstanding Final Year Student',
    'Exhibited in London, New York, Tokyo, Lisbon and Vietnam',
    'Large-scale commissions for schools and companies',
    'Based in Thailand, working internationally',
  ],
  background:
    'Selected background: an early and sustained practice in crypto art, including 52+ hand-painted Bored Ape Yacht Club derivative commissions posted to collectors worldwide, and live painting at NFT UK and NFT SOHO in London.',
};

export const contact = {
  heading: 'Start a project',
  standfirst:
    'Schools, developers, hotels, malls, brands and the agencies who build for them. Tell me about the place and the people who will use it.',
  prompts: [
    'A character family for a campus or development',
    'Murals and environmental artwork at scale',
    '3D characters, animation and mixed reality',
    'A visual world for a brand or campaign',
  ],
  availability: 'Available for commissions, retainers and collaborations. Enquiries answered within two working days.',
};

export const nav = [
  { label: 'Work', href: '#st-christophers' },
  { label: 'Characters', href: '#dimension' },
  { label: 'Wild Child World', href: '#wild-child-world' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'About', href: '#about' },
];
