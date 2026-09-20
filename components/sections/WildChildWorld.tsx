import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { wildChildWorld } from '@/content/projects';

export function WildChildWorld() {
  const w = wildChildWorld;

  return (
    <section id={w.id} className="room relative overflow-hidden">
      <div className="max-w-reading">
        <span className="tag mb-5 block opacity-50">Original intellectual property</span>
        <Reveal as="h2" className="text-huge font-extrabold">
          {w.heading}
        </Reveal>
        <p className="mt-8 max-w-reading text-lead opacity-75">{w.standfirst}</p>
      </div>

      {/* Title card — the yeti's own 3D model and physical print now
          live in "One character, endless possibilities" instead, so
          this section opens straight into the roster. */}
      <div className="mx-auto mt-12 w-full max-w-md">
        <Reveal>
          <Figure src={w.media.top.src} alt={w.media.top.alt} ratio="1 / 1" sizes="430px" />
        </Reveal>
      </div>

      <div className="mt-8 space-y-4">
        {w.media.rows.map((row, i) => (
          // Tailwind can't generate a grid-cols-N class from a dynamic
          // number, so the column count is set inline here instead —
          // each row stays a single row, exactly as many columns as items.
          <div
            key={i}
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${row.items.length}, minmax(0, 1fr))` }}
          >
            {row.items.map((item, j) => (
              <Reveal key={`${i}-${j}`}>
                <Figure
                  src={item.src}
                  alt={item.alt}
                  video={item.video}
                  ratio={row.ratio ?? '1 / 1'}
                  fit={row.fit}
                  sizes="180px"
                />
              </Reveal>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-24 grid-12 gap-y-10">
        <p className="col-span-4 max-w-reading text-big font-display md:col-span-6">{w.archetype}</p>

        <ol className="col-span-4 md:col-span-5 md:col-start-8">
          {w.chain.map((link, i) => (
            <li key={link.label} className="flex gap-5 border-t border-chalk/15 py-4">
              <span className="tag w-8 shrink-0 pt-1 opacity-40">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-xl">{link.label}</h3>
                <p className="mt-1 text-sm opacity-60">{link.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
