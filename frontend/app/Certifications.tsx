'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CredentialMark } from './credential-mark';

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

/**
 * Holds the smaller secondary credential cards and the toggle that reveals
 * them. The four featured cards are rendered on the server in page.tsx; this
 * component only owns state, so it stays a client island.
 */
export default function Certifications({ certifications }: { certifications: Certification[] }) {
  const [expanded, setExpanded] = useState(false);

  if (certifications.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="more-certifications"
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.05] px-5 py-3 text-sm font-bold text-white/85 transition hover:border-orange-500/30 hover:bg-white/[0.09]"
        >
          {expanded ? 'Hide Certifications' : 'View All Certifications'}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {expanded && (
        <div id="more-certifications" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="group flex h-full flex-col rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-xl transition hover:border-orange-500/25 hover:bg-white/[0.055]"
            >
              <div className="flex items-start gap-3">
                <CredentialMark issuer={cert.issuer} title={cert.title} compact />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-white group-hover:text-orange-200">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-white/40">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-1 items-end">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Verify ${cert.title} — ${cert.issuer}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 transition hover:text-orange-200"
                >
                  Verify <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
