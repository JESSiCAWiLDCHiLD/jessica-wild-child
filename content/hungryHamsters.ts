import type { Asset } from './projects';

/**
 * A real, exhibited collaboration — grouped with the other two case
 * studies (St Christopher's, GeoBitmine) as proof of real-world,
 * dated, credited work, rather than living inside the Wild Child
 * character arc.
 */
export const hungryHamsters = {
  id: 'hungry-hamsters',
  client: 'Hungry Hamster Collectibles',
  place: 'DesignerCon, Las Vegas',
  year: '2025',
  title: 'Hungry Hamsters × Wild Child World',
  standfirst:
    'An artist collaboration with designer-toy brand Hungry Hamster Collectibles — original Wild Child paintwork applied by hand to their figures, exhibited at DesignerCon, Las Vegas.',
  process: {
    src: null,
    alt: 'Close-up process footage of a Hungry Hamster figure being hand-painted',
    video: '/images/characters/hh-process.mp4',
  } as Asset,
  featured: {
    src: null,
    alt: 'Close-up of one of the finished hand-painted Hungry Hamster designs',
    video: '/images/characters/hh-video.mp4',
  } as Asset,
  gallery: [
    { src: '/images/characters/hungry-hamster-example1.jpg', alt: 'Finished hand-painted Hungry Hamster figure — front view' } as Asset,
    { src: '/images/characters/hungry-hamster-example2.jpg', alt: 'Finished hand-painted Hungry Hamster figure — side view' } as Asset,
    { src: '/images/characters/hungry-hamster-example3.jpg', alt: 'Finished hand-painted Hungry Hamster figure — back view' } as Asset,
    { src: '/images/characters/hungry-hamster-example4.jpg', alt: 'Finished hand-painted Hungry Hamster figure — other side view' } as Asset,
  ],
  // A second, differently painted figure — same four-angle treatment,
  // shown directly underneath the first.
  secondGallery: [
    { src: '/images/characters/hungryhamsters-secondmodel4.jpg', alt: 'Second hand-painted Hungry Hamster figure — other side view' } as Asset,
    { src: '/images/characters/hungryhamsters-secondmodel2.jpg', alt: 'Second hand-painted Hungry Hamster figure — side view' } as Asset,
    { src: '/images/characters/hungryhamsters-secondmodel3.jpg', alt: 'Second hand-painted Hungry Hamster figure — back view' } as Asset,
    { src: '/images/characters/hungryhamsters-secondmodel1.jpg', alt: 'Second hand-painted Hungry Hamster figure — front view' } as Asset,
  ],
  exhibition: [
    {
      src: '/images/characters/hh-artist-at-designercon.jpg',
      alt: 'Jessica at the Hungry Hamster Collectibles booth, DesignerCon, Las Vegas, holding two hand-painted figures',
      caption: 'At the booth',
    } as Asset,
    {
      src: '/images/characters/hh-stall.jpg',
      alt: 'The Hungry Hamster Collectibles stall at DesignerCon, Las Vegas',
      caption: 'The stall',
    } as Asset,
  ],
};
