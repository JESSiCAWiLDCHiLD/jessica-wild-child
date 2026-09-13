import Image from 'next/image';
import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { wildChildWorld } from '@/content/projects';

export function WildChildWorld() {
  const w = wildChildWorld;

  return (
    <section id={w.id} className="room relative overflow-hidden">
      <div className="grid-12 items-start gap-y-10">
        <div className="col-span-4 md:col-span-6">
          <span className="tag mb-5 block opacity-50">Original intellectual property</span>
          <Reveal as="h2" className="text-huge font-extrabold">
            {w.heading}
          </Reveal>
          <p className="mt-8 max-w-reading text-lead opacity-75">{w.standfirst}</p>
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-9 md:pt-24">
          <Reveal>
            <Image
              src={w.cutouts[1].src}
              alt={w.cutouts[1].alt}
              width={720}
              height={720}
              sizes="(max-width: 768px) 70vw, 30vw"
              className="h-auto w-2/3 md:w-full"
            />
          </Reveal>
        </div>
      </div>

      {/* Large imagery, little text — as briefed. */}
      <div className="mt-20 grid grid-cols-4 gap-4 md:mt-28 md:grid-cols-12 md:gap-6">
        {w.gallery.map((img, i) => {
          const spans = [
            'col-span-4 md:col-span-7',
            'col-span-4 md:col-span-4 md:col-start-9 md:mt-24',
            'col-span-2 md:col-span-4 md:mt-8',
            'col-span-2 md:col-span-5 md:col-start-6',
            'col-span-4 md:col-span-5 md:col-start-2 md:mt-12',
            'col-span-4 md:col-span-5 md:col-start-8',
          ];
          return (
            <Reveal key={img.src} className={spans[i % spans.length]}>
              <Figure
                src={img.src}
                alt={img.alt}
                ratio={i % 2 === 0 ? '3 / 4' : '4 / 5'}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </Reveal>
          );
        })}
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
