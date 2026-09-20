import { Figure } from '@/components/ui/Figure';
import { ModelViewer } from '@/components/ui/ModelViewer';
import { Reveal } from '@/components/ui/Reveal';
import { foxCharacter } from '@/content/foxCharacter';

/**
 * Compact, deliberately not a full case study — the character is the
 * asset; the AI-assisted motion is one thing it can be extended into,
 * not the headline. Original character first, technology second.
 */
export function FoxCharacter() {
  const p = foxCharacter;

  return (
    <section id={p.id} className="room room--light">
      <div className="grid-12 items-end gap-y-6">
        <div className="col-span-4 md:col-span-7">
          <span className="tag mb-5 block opacity-50">{p.label}</span>
          <Reveal as="h2" className="text-huge font-extrabold">
            {p.title}
          </Reveal>
        </div>
        <p className="col-span-4 max-w-reading text-lead opacity-70 md:col-span-5">{p.standfirst}</p>
      </div>
      <p className="mt-4 text-xs opacity-45">{p.disclaimer}</p>

      {/* items-stretch: the video's 16:9 box sets the row's height,
          and the model viewer (no fixed ratio of its own on desktop)
          stretches to match it exactly, rather than each having an
          independent height. */}
      <div className="mt-14 grid gap-6 md:grid-cols-12 md:items-stretch">
        <div className="md:col-span-4">
          <Reveal className="h-full">
            <figure className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
              <ModelViewer src={p.model.src} alt={p.model.alt} />
              <figcaption className="tag absolute bottom-3 left-3 opacity-60">Drag to rotate</figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={100}>
            <Figure src={null} alt={p.video.alt} video={p.video.src} ratio="16 / 9" sizes="(max-width: 768px) 100vw, 64vw" />
          </Reveal>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {p.capabilities.map((c) => (
            <li key={c} className="tag opacity-55">
              {c}
            </li>
          ))}
        </ul>
        <p className="tag opacity-40">{p.process}</p>
      </div>
    </section>
  );
}
