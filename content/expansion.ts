/**
 * Data behind the "One character, endless possibilities" diagram.
 * Three branches, each with its own applications. The `body` line is
 * what appears under the diagram when a node is active.
 *
 * The diagram answers "what could a character become?" (breadth). The
 * `selectedApplications` grid below it answers "what does that look
 * like in practice?" (proof) — deliberately only 6 examples, not one
 * per branch.
 */

export type Node = { label: string; body: string };

/** One tile in the "selected applications" grid — a still image, a
 * looping video, or (for the yeti's 3D mascot) an interactive model. */
export type ApplicationAsset = {
  src: string | null;
  alt: string;
  placeholder?: string;
  video?: string;
  model?: string;
  fit?: 'cover' | 'contain';
};

export const expansion = {
  id: 'expansion',
  heading: 'One character.',
  heading2: 'Endless possibilities.',
  standfirst: 'A character can become an entire creative system.',
  standfirst2:
    'One distinctive visual identity can extend across content, campaigns, products, digital experiences and physical spaces.',
  centre: {
    src: null, // wild-child-character-01.png no longer exists — video plays without a poster frame
    alt: 'A single Wild Child character at the centre of the diagram, animated',
    video: '/images/characters/wild-child-character-04-animated.mp4',
  },
  idle: 'Pick a branch. The same character, doing a different job.',
  branches: [
    {
      key: 'social',
      title: 'Social',
      colour: 'magenta',
      nodes: [
        { label: 'Animation', body: 'Short looping animations built from the character rig — the cheapest way to keep a world alive.' },
        { label: 'Content', body: 'An ongoing supply of posts, stories and reels that all look like one thing.' },
        { label: 'Campaign', body: 'A campaign fronted by someone who belongs to you, rather than a stock face you rent.' },
      ] as Node[],
    },
    {
      key: 'space',
      title: 'Physical / Space',
      colour: 'acid',
      nodes: [
        { label: 'Stickers', body: 'Sticker packs, reaction sets and messaging assets people actually choose to use.' },
        { label: 'Mural', body: 'The character at architectural scale, painted or printed across a wall run.' },
        { label: 'Sculpture', body: 'A three-dimensional landmark people photograph themselves next to.' },
        { label: 'Signage', body: 'Wayfinding that guides and belongs, instead of generic arrows.' },
        { label: 'Mascot', body: 'A costumed or animated presence at open days, launches and events.' },
        { label: 'Installation', body: 'An environment built around the character, not a picture hung in one.' },
      ] as Node[],
    },
    {
      key: 'digital',
      title: 'Digital / Product',
      colour: 'cyan',
      nodes: [
        { label: 'Website', body: 'The character as the navigation, the host, the personality of the interface.' },
        { label: 'AR', body: 'Point a phone at the wall and the artwork moves, speaks or leads somewhere.' },
        { label: 'Game', body: 'A rigged, playable model — downloadable, usable in interactive exhibitions.' },
        { label: 'Packaging', body: 'Product, merchandise and packaging carrying the same world.' },
      ] as Node[],
    },
  ],
  // The purple Wild Child yeti is the one character with a genuinely
  // complete pipeline — drawing, 3D model, physical print, sticker,
  // mural mockup, animated content and an AR mockup — so it's used
  // here as the proof case rather than split across other sections.
  // All six tiles below are real, not placeholders.
  selectedApplications: {
    heading: 'Selected applications',
    items: [
      {
        index: '01',
        title: 'Mascot / 3D Character',
        asset: {
          src: null,
          alt: 'The Wild Child yeti rebuilt as a full 3D mascot — drag to rotate',
          model: '/images/process/wildchild-character-3d.glb',
        } as ApplicationAsset,
      },
      {
        index: '02',
        title: 'Mural / Environment',
        asset: {
          src: '/images/characters/yeti-mural-physical-space.png',
          alt: 'The Wild Child yeti painted as a large-scale mural in a courtyard',
        } as ApplicationAsset,
      },
      {
        index: '03',
        title: 'Stickers',
        asset: {
          src: null,
          alt: 'The Wild Child yeti as a printed sticker, applied to a laptop',
          video: '/images/characters/yeti-sticker-video.mp4',
        } as ApplicationAsset,
      },
      {
        index: '04',
        title: 'Digital / AR',
        asset: {
          src: '/images/characters/yeti-ar-space.png',
          alt: 'The Wild Child yeti appearing as an AR overlay, viewed through a phone in a real city space',
        } as ApplicationAsset,
      },
      {
        index: '05',
        title: 'Campaign / Content',
        asset: {
          src: null,
          alt: 'The Wild Child yeti animated and brought to life in a glowing snowy forest',
          video: '/images/characters/yeti-walking-video.mp4',
        } as ApplicationAsset,
      },
      {
        index: '06',
        title: 'Sculpture / Physical Object',
        asset: {
          src: '/images/characters/yeti-physical-object.jpg',
          alt: 'The Wild Child yeti 3D-printed as a real physical object, sitting on a desk',
        } as ApplicationAsset,
      },
    ],
  },
};
