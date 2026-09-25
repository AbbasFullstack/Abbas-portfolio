'use client';

import { useEffect } from 'react';

type NetworkInfo = {
  saveData?: boolean;
  effectiveType?: string;
};

/**
 * Warm the image cache before the user reaches the project cards.
 *
 * Lazy-loaded screenshots decode at the moment they enter the viewport,
 * which shows up as a small stutter while scrolling. Once the page is idle
 * we fetch and decode every project image in the background, so scrolling
 * later hits a warm cache and costs nothing.
 */
export default function ImagePrefetch({ images }: { images: string[] }) {
  useEffect(() => {
    if (typeof window === 'undefined' || images.length === 0) return;

    const nav = navigator as Navigator & { connection?: NetworkInfo; webkitConnection?: NetworkInfo };
    const conn = nav.connection ?? nav.webkitConnection;
    if (conn?.saveData) return; // Respect data-saver preferences.
    const effectiveType = conn?.effectiveType ?? '';
    if (effectiveType === '2g' || effectiveType === 'slow-2g') return; // Skip on slow networks.

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (!idle) return; // Older browsers: keep normal lazy loading.

    const timer = idle(
      () => {
        images.forEach((src) => {
          const img = new Image();
          img.decoding = 'async';
          img.src = src;
        });
      },
      { timeout: 3000 },
    );

    return () => {
      (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(timer);
    };
  }, [images]);

  return null;
}
