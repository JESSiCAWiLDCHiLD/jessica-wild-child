/**
 * Data behind the "One character, endless possibilities" diagram.
 * Three branches, each with its own applications. The `body` line is
 * what appears under the diagram when a node is active.
 */

export type Node = { label: string; body: string };

export const expansion = {
  id: 'expansion',
  heading: 'One character.',
  heading2: 'Endless possibilities.',
  standfirst:
    'Commissioning a character is not buying one image. It is commissioning a piece of intellectual property that can keep being spent.',
  centre: {
    src: '/images/characters/wild-child-01.png',
    alt: 'A single Wild Child character at the centre of the diagram',
  },
  idle: 'Pick a branch. The same character, doing a different job.',
  branches: [
    {
      key: 'social',
      title: 'Social',
      colour: 'magenta',
      nodes: [
        { label: 'Animation', body: 'Short looping animations built from the character rig — the cheapest way to keep a world alive.' },
        { label: 'Campaign', body: 'A campaign fronted by someone who belongs to you, rather than a stock face you rent.' },
        { label: 'Content', body: 'An ongoing supply of posts, stories and reels that all look like one thing.' },
        { label: 'Stickers', body: 'Sticker packs, reaction sets and messaging assets people actually choose to use.' },
      ] as Node[],
    },
    {
      key: 'space',
      title: 'Space',
      colour: 'acid',
      nodes: [
        { label: 'Mural', body: 'The character at architectural scale, painted or printed across a wall run.' },
        { label: 'Sculpture', body: 'A three-dimensional landmark people photograph themselves next to.' },
        { label: 'Signage', body: 'Wayfinding that guides and belongs, instead of generic arrows.' },
        { label: 'Mascot', body: 'A costumed or animated presence at open days, launches and events.' },
        { label: 'Installation', body: 'An environment built around the character, not a picture hung in one.' },
      ] as Node[],
    },
    {
      key: 'digital',
      title: 'Digital',
      colour: 'cyan',
      nodes: [
        { label: 'Website', body: 'The character as the navigation, the host, the personality of the interface.' },
        { label: 'AR', body: 'Point a phone at the wall and the artwork moves, speaks or leads somewhere.' },
        { label: 'Game', body: 'A rigged, playable model — downloadable, usable in interactive exhibitions.' },
        { label: 'Packaging', body: 'Product, merchandise and packaging carrying the same world.' },
      ] as Node[],
    },
  ],
};
