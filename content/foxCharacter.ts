/**
 * A small, polished "speculative brand concept" module — deliberately
 * not a full case study. It demonstrates the same character -> 3D ->
 * motion pipeline shown in the Dimension section, applied to an
 * existing brand's own mascot, but as a self-directed example of
 * capability rather than commissioned or delivered client work — the
 * character IP is not ours, so this must never read as a client credit.
 */
export const foxCharacter = {
  id: 'fox-character',
  label: 'Speculative brand concept',
  title: '3D Brand Character & Motion',
  standfirst:
    'An example of what could be built from a brand’s existing mascot — rebuilt in 3D and extended into AI-assisted motion to show how quickly a character can become campaign-ready creative.',
  disclaimer: 'Speculative concept, created independently to demonstrate capability — not commissioned or delivered client work. Character IP belongs to its original owner.',
  model: {
    src: '/images/process/fox-3d-character.glb',
    alt: '3D brand character — drag to rotate',
  },
  video: {
    src: '/images/process/fox-walking.mp4',
    alt: 'Animated campaign content — the character brought to motion',
  },
  capabilities: ['Character Design', '3D Asset Creation', 'AI-Assisted Motion'],
  process: 'Character → 3D Asset → Motion → Campaign Content',
};
