import Image from 'next/image';
import { clsx } from '@/lib/clsx';

type Props = {
  src: string | null;
  alt: string;
  placeholder?: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  caption?: string;
  /** 'cover' (default) crops to fill the box; 'contain' shows the
   * whole image letterboxed inside it — same box size either way. */
  fit?: 'cover' | 'contain';
  /** When set, plays this video (looped, muted, autoplaying) in place
   * of the still image — `src` is still used as the video's poster
   * frame while it loads. */
  video?: string | null;
};

function videoMimeType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  if (ext === 'mov') return 'video/quicktime';
  if (ext === 'webm') return 'video/webm';
  return 'video/mp4';
}

/**
 * Every image (and now video) on the site goes through here. When
 * `src` is null and no `video` is given, the component renders a
 * clearly labelled gap instead of inventing content — so missing
 * assets are visible rather than hidden.
 */
export function Figure({
  src,
  alt,
  placeholder,
  ratio = '4 / 3',
  sizes = '(max-width: 768px) 100vw, 60vw',
  priority = false,
  className,
  imgClassName,
  caption,
  fit = 'cover',
  video,
}: Props) {
  return (
    <figure className={clsx('relative', className)}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={src ?? undefined}
            aria-label={alt}
            className={clsx('absolute inset-0 h-full w-full', fit === 'contain' ? 'object-contain' : 'object-cover', imgClassName)}
          >
            <source src={video} type={videoMimeType(video)} />
          </video>
        ) : src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            className={clsx(fit === 'contain' ? 'object-contain' : 'object-cover', imgClassName)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between border border-dashed border-current/40 p-4 md:p-6">
            <span className="tag opacity-70">Asset needed</span>
            <span className="max-w-reading font-sans text-sm leading-snug opacity-80">
              {placeholder ?? alt}
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="tag mt-3 opacity-60">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
