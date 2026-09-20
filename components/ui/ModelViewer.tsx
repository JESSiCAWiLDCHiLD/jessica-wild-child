'use client';

import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string;
        'disable-zoom'?: boolean;
        exposure?: string;
        loading?: 'auto' | 'lazy' | 'eager';
        reveal?: 'auto' | 'interaction' | 'manual';
      };
    }
  }
}

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * A small interactive 3D viewer (drag to rotate, pinch/scroll to zoom)
 * for the real character model, using Google's <model-viewer> web
 * component. Registers itself as a side effect on mount — there's no
 * server-renderable fallback, so this only ever runs client-side.
 */
export function ModelViewer({ src, alt, className }: Props) {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
      src={src}
      alt={alt}
      camera-controls
      auto-rotate
      rotation-per-second="18deg"
      shadow-intensity="0.7"
      exposure="1"
      loading="lazy"
      reveal="auto"
      className={className}
      style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
    />
  );
}
