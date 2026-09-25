'use client';

import { useEffect } from 'react';

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
    if (typeof window === 'undefined') return;
    if (!('requestIdleCallback' in window) || !('Connection' in window)) {
      // Fallback: nothing smart available; browsers handle lazily anyway.
      return;
    }
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (connection?.saveData) return; // Respect data-saver preferences.
    if (connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') return;

    const idle = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
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
      const cancel = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
      cancel?.(timer);
    };
  }, [images]);

  return null;
}
