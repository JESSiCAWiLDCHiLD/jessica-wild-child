/**
 * Speculative work. Every item here renders behind a
 * "Concept application" label and must never read as delivered
 * client work. No client names, no results, no metrics.
 */

export const concepts = {
  id: 'concepts',
  heading: 'Imagine what we could build',
  standfirst:
    'Three worked-through propositions. None of these are commissions — they are what a first conversation usually turns into.',
  label: 'Concept application',
  disclaimer: 'Speculative concept. Not a completed commission.',
  items: [
    {
      index: '01',
      sector: 'International school',
      title: 'Five characters, five values',
      body:
        'A family of original characters standing for curiosity, courage, creativity, kindness and imagination — one per house, each with a personality children can actually describe.',
      applications: ['Corridor mural', '3D sculpture in the courtyard', 'Campus wayfinding', 'Sticker and reward system', 'Assembly and events', 'Short animations', 'House identity', 'Letters home and student comms'],
      asset: {
        src: '/images/murals/st-christophers-key-values.jpg',
        alt: 'Reference imagery for a school character family concept',
        placeholder: 'Concept visual — five-character family sheet, replace this stand-in',
      },
    },
    {
      index: '02',
      sector: 'Property & destination',
      title: 'A resident nobody has to explain',
      body:
        'An original character who lives in the development before anyone moves in — on the hoardings during construction, in the sales gallery during launch, and in the community afterwards.',
      applications: ['Landmark sculpture', 'Sales gallery centrepiece', "Children's area", 'Site hoardings', 'Social campaign', 'Wayfinding', 'Resident welcome gifts', 'Launch events', 'AR trail'],
      asset: {
        src: '/images/dimension/3d-environment-island.jpg',
        alt: 'Reference imagery for a property destination character concept',
        placeholder: 'Concept visual — character sited within a development, replace this stand-in',
      },
    },
    {
      index: '03',
      sector: 'Brand & retail',
      title: 'A world the product lives inside',
      body:
        'Character creation, then a campaign that runs from animation through to a physical pop-up — so the brand owns a universe rather than licensing a season of imagery.',
      applications: ['Character creation', 'Campaign animation', 'Physical pop-up', 'Social media', 'Merchandise', 'Packaging', 'Large-scale installation', 'Interactive experience'],
      asset: {
        src: '/images/world/dreamscape-01.jpg',
        alt: 'Reference imagery for a brand and retail character concept',
        placeholder: 'Concept visual — brand world board, replace this stand-in',
      },
    },
  ],
};
