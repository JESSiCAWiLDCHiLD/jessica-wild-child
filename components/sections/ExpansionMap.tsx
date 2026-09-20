import { Figure } from '@/components/ui/Figure';
import { ModelViewer } from '@/components/ui/ModelViewer';
import { Reveal } from '@/components/ui/Reveal';
import { expansion } from '@/content/expansion';

const HEX: Record<string, string> = {
  magenta: '#FF1E6F',
  acid: '#B9F227',
  cyan: '#19E0D2',
};

/**
 * Replaces the earlier radial "web" diagram: every application is
 * simply listed on the right, and the left is reserved for Jessica's
 * own selected images (currently honest placeholders — drop a real
 * src into content/expansion.ts -> selectedApplications to replace
 * one). No diagram math, no hover-state to keep in sync — just two
 * columns, image-led on the left, text-led on the right.
 */
export function ExpansionMap() {
  return (
    <section id={expansion.id} className="room overflow-hidden">
      <div className="grid-12 items-end gap-y-8">
        <h2 className="col-span-4 text-huge font-extrabold md:col-span-7">
          <span className="block">{expansion.heading}</span>
          <span className="block text-magenta">{expansion.heading2}</span>
        </h2>
        <div className="col-span-4 max-w-reading md:col-span-5">
          <p className="text-lead opacity-70">{expansion.standfirst}</p>
          <p className="mt-2 text-lead opacity-70">{expansion.standfirst2}</p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-start">
        {/* Left — selected images go here */}
        <div className="md:col-span-7">
          <span className="tag mb-6 block opacity-50">{expansion.selectedApplications.heading}</span>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {expansion.selectedApplications.items.map((item) => (
              <Reveal key={item.index}>
                {item.asset.model ? (
                  <figure className="relative aspect-[4/5] w-full overflow-hidden">
                    <ModelViewer src={item.asset.model} alt={item.asset.alt} />
                  </figure>
                ) : (
                  <Figure
                    src={item.asset.src}
                    alt={item.asset.alt}
                    placeholder={item.asset.placeholder}
                    video={item.asset.video}
                    fit={item.asset.fit}
                    ratio="4 / 5"
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                )}
                <span className="tag mt-2 block opacity-50">{item.title}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — every application, simply listed by category */}
        <div className="md:col-span-5">
          {expansion.branches.map((b) => (
            <Reveal key={b.key} className="mb-10 last:mb-0">
              <h3 className="tag mb-4" style={{ color: HEX[b.colour] }}>
                {b.title}
              </h3>
              <ul className="space-y-2">
                {b.nodes.map((node) => (
                  <li key={node.label} className="text-lead opacity-60 transition-opacity duration-300 hover:opacity-100">
                    {node.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
