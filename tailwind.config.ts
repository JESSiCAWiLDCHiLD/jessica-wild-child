import type { Config } from 'tailwindcss';

/**
 * Palette is sampled directly from Jessica's own work.
 * `ink` is the violet-black the Wild Childs sit on; `chalk` is the
 * faintly violet white of the gallery/mural register. The five
 * spectrum colours are pulled from the St Christopher's and
 * Dreamscape paintings and are only ever used on type, rules and
 * state — never as blocks behind artwork.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A12',
        'ink-soft': '#161327',
        chalk: '#F4F2F6',
        'chalk-soft': '#E4E0EC',
        magenta: '#FF1E6F',
        cyan: '#19E0D2',
        acid: '#B9F227',
        solar: '#FFC21F',
        violet: '#6C2BD9',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      // Trimmed down from the original scale so more content fits on
      // screen at once — same ratios between sizes, roughly 20% smaller
      // at the top end where it mattered most.
      fontSize: {
        mega: ['clamp(2.6rem, 10.5vw, 8.5rem)', { lineHeight: '0.84', letterSpacing: '-0.035em' }],
        // lineHeight nudged up from 0.88 — tight enough to clip
        // descenders (the 'g' in "From drawing to dimension") when a
        // heading in this size happens to have one.
        huge: ['clamp(2rem, 6.2vw, 4.8rem)', { lineHeight: '0.96', letterSpacing: '-0.03em' }],
        big: ['clamp(1.5rem, 3.6vw, 2.6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        lead: ['clamp(0.95rem, 1.4vw, 1.15rem)', { lineHeight: '1.42', letterSpacing: '-0.01em' }],
        meta: ['0.68rem', { lineHeight: '1.3', letterSpacing: '0.14em' }],
      },
      maxWidth: { measure: '34ch', reading: '52ch' },
      transitionTimingFunction: { world: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};

export default config;
