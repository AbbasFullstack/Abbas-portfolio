import { Award } from 'lucide-react';
import { CREDENTIAL_BRANDS, type CredentialBrand } from './credential-logos';

export type IssuerBrand = CredentialBrand | 'harvard' | 'microsoft' | 'generic';

export function resolveIssuerBrand(issuer: string, title: string): IssuerBrand {
  const normalized = `${issuer} ${title}`.toLowerCase();
  if (normalized.includes('claude')) return 'claude';
  if (normalized.includes('anthropic')) return 'anthropic';
  if (normalized.includes('harvard') || normalized.includes('cs50')) return 'harvard';
  if (normalized.includes('kaggle')) return 'kaggle';
  if (normalized.includes('freecodecamp')) return 'freecodecamp';
  if (normalized.includes('microsoft')) return 'microsoft';
  if (normalized.includes('google')) return 'google';
  return 'generic';
}

/** Renders the authentic issuer mark as an inline SVG — no icon font, no network request. */
export function BrandGlyph({ brand, className = 'h-5 w-5' }: { brand: IssuerBrand; className?: string }) {
  if (brand === 'microsoft') {
    return (
      <svg viewBox="0 0 23 23" className={className} aria-hidden="true">
        <rect x="1" y="1" width="10" height="10" fill="#F25022" />
        <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
        <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
      </svg>
    );
  }
  if (brand === 'harvard') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#A51C30" d="M12 1.4 3.6 5v7.1c0 5.2 3.7 9.1 8.4 10.5 4.7-1.4 8.4-5.3 8.4-10.5V5L12 1.4Z" />
        <path fill="#fff" d="M10.6 7.2h1.6v3.3h2.4V7.2h1.6v9.6h-1.6v-4.7h-2.4v4.7h-1.6V7.2Z" />
      </svg>
    );
  }
  if (brand === 'generic') {
    return <Award className={`${className} text-white/70`} aria-hidden="true" />;
  }
  const mark = CREDENTIAL_BRANDS[brand];
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={`${mark.title} logo`}>
      <path fill={mark.fill} d={mark.path} />
    </svg>
  );
}

export function issuerName(brand: IssuerBrand, fallback: string): string {
  if (brand === 'microsoft') return 'Microsoft';
  if (brand === 'harvard') return 'Harvard CS50';
  if (brand === 'generic') return fallback;
  return CREDENTIAL_BRANDS[brand].title;
}

/**
 * The authentic issuer mark. Defaults to the large treatment used on the
 * featured credential cards; pass `compact` for the smaller secondary cards.
 */
export function CredentialMark({
  issuer,
  title,
  compact = false,
}: {
  issuer: string;
  title: string;
  compact?: boolean;
}) {
  const brand = resolveIssuerBrand(issuer, title);
  const label = issuerName(brand, issuer);
  const box = compact ? 'h-11 w-11 rounded-xl' : 'h-14 w-14 rounded-2xl';
  const glyph = compact ? 'h-5 w-5' : 'h-7 w-7';

  return (
    <div
      aria-label={`${label} credential`}
      title={label}
      className={`flex ${box} shrink-0 items-center justify-center border border-white/10 bg-white/[0.06] shadow-inner`}
    >
      <BrandGlyph brand={brand} className={glyph} />
    </div>
  );
}
