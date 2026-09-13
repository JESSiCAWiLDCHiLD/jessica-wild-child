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
      fontSize: {
        mega: ['clamp(3.2rem, 13vw, 12rem)', { lineHeight: '0.84', letterSpacing: '-0.035em' }],
        huge: ['clamp(2.4rem, 8vw, 6.5rem)', { lineHeight: '0.88', letterSpacing: '-0.03em' }],
        big: ['clamp(1.9rem, 4.6vw, 3.6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.05rem, 1.7vw, 1.45rem)', { lineHeight: '1.42', letterSpacing: '-0.01em' }],
        meta: ['0.72rem', { lineHeight: '1.3', letterSpacing: '0.14em' }],
      },
      maxWidth: { measure: '34ch', reading: '52ch' },
      transitionTimingFunction: { world: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};

export default config;
