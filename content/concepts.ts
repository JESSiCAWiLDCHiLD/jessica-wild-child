/**
 * Speculative work. Every item here carries a persistent
 * "Concept application" label and must never read as delivered
 * client work. No client names, no results, no metrics.
 */

export const concepts = {
  id: 'concepts',
  heading: 'Imagine what we could build',
  standfirst:
    'Two worked-through propositions. Neither is a commission — they are what a first conversation usually turns into.',
  label: 'Concept application',
  disclaimer: 'Speculative concept. Not a completed commission.',
  items: [
    {
      index: '01',
      sector: 'Property & destination',
      title: 'A resident nobody has to explain',
      body:
        'An original character who lives in the development before anyone moves in — on the hoardings during construction, in the sales gallery during launch, and in the community afterwards.',
      applications: ['Landmark sculpture', 'Sales gallery centrepiece', "Children's area", 'Site hoardings', 'Social campaign', 'Wayfinding', 'Resident welcome gifts', 'Launch events', 'AR trail'],
    },
    {
      index: '02',
      sector: 'Brand & retail',
      title: 'A world the product lives inside',
      body:
        'Character creation, then a campaign that runs from animation through to a physical pop-up — so the brand owns a universe rather than licensing a season of imagery.',
      applications: ['Character creation', 'Campaign animation', 'Physical pop-up', 'Social media', 'Merchandise', 'Packaging', 'Large-scale installation', 'Interactive experience'],
    },
  ],
};
