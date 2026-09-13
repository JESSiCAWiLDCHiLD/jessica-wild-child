# Jessica Wild Child — commercial portfolio

Next.js 14 (App Router) · TypeScript · Tailwind · deployed on Vercel.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Deploy to Vercel (free tier)

1. Push this folder to a new GitHub repo.
2. vercel.com → Add New → Project → import the repo.
3. Framework preset: **Next.js**. Everything else: defaults. Deploy.
4. Add a custom domain under Project → Settings → Domains when ready.

No environment variables, no database, no paid services. The free
Hobby plan covers this site.

## Where things live

```
app/
  layout.tsx        fonts + metadata
  page.tsx          homepage section order — reorder sections here
  globals.css       design tokens, the "room" system, reveal device
content/
  site.ts           hero, credentials, disciplines, process, about, contact
  projects.ts       St Christopher's, GeoBitmine, 3D, Wild Child World
  expansion.ts      the "One character" diagram data
  concepts.ts       the three speculative concepts
components/
  sections/         one component per homepage section
  ui/               Figure, Reveal, SectionHeader
public/images/      artwork, grouped by section
tailwind.config.ts  palette and type scale
```

**All copy is in `/content`.** Nothing is hard-coded into components,
so text edits never require touching a component file.

## Replacing an image

Drop the new file into the right `public/images/` folder and update
the path in the matching `/content` file. Any entry with `src: null`
renders a visible, labelled "Asset needed" box on the page — so gaps
are obvious rather than silently missing. See `ASSETS-NEEDED.md`.

## Design system

- **Ink** `#0B0A12` — the violet-black the Wild Childs sit on
- **Chalk** `#F4F2F6` — the faintly violet white of the mural register
- **Magenta / Cyan / Acid / Solar / Violet** — sampled from the
  St Christopher's and Dreamscape work. Used only on type, rules and
  interactive state. Never as blocks behind artwork: the art supplies
  the colour, the interface stays out of the way.
- **Bricolage Grotesque** display, **Space Grotesk** text.
- The page alternates dark and light "rooms" to give the scroll rhythm.
- One reveal device (a mask wipe) and one interactive moment (the
  expansion diagram). Everything else stays still on purpose.
