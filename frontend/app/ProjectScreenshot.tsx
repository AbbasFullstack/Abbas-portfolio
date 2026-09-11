'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type Props = {
  image: string;
  imageAlt: string;
  projectName: string;
  live?: string;
  repo?: string;
};

/**
 * A "View screenshot" trigger that opens the project screenshot in a lightbox.
 * Non-featured projects keep a compact card, so the screenshot is opt-in here
 * rather than taking up the card face.
 */
export default function ProjectScreenshot({ image, imageAlt, projectName, live, repo }: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const modal =
    open
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${projectName} screenshot`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b0c10] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                <p className="truncate text-sm font-bold text-white">{projectName}</p>
                <div className="flex items-center gap-2">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-white/80 transition hover:bg-white/[0.12]"
                    >
                      Live demo
                    </a>
                  )}
                  {repo && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-white/80 transition hover:bg-white/[0.12]"
                    >
                      Code
                    </a>
                  )}
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    aria-label="Close screenshot"
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-1.5 text-white/70 transition hover:bg-white/[0.12] hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="max-h-[76vh] overflow-auto bg-black/40 p-3">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 960px, 94vw"
                  className="mx-auto h-auto w-full rounded-lg border border-white/10"
                />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`View ${projectName} screenshot`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-white/70 transition hover:bg-white/[0.09] hover:text-white"
      >
        <ImageIcon />
        View screenshot
      </button>
      {modal}
    </>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
