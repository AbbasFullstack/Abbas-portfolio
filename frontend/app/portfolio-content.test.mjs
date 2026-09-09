import { existsSync, readFileSync } from 'node:fs';

const page = readFileSync(new URL('./page.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('./layout.tsx', import.meta.url), 'utf8');

const required = [
  'https://github.com/AbbasFullstack/DevDesk-AI-',
  'https://pulseboard-ai.vercel.app',
  'DevCV AI — Private Beta',
  'https://devcv-ai-blue.vercel.app',
  'live AI verification-gated',
  'Four projects. Clear full-stack proof.',
  'Verified credentials',
  'CS50x: Introduction to Computer Science',
  'https://cs50.harvard.edu/certificates/2ce15d90-7211-4f96-9d8f-804e8691cd01',
  "title: 'Python'",
  "issuer: 'Kaggle'",
  "year: '2026'",
  'https://www.kaggle.com/learn/certification/abbashussaindev/python',
  "title: 'Claude 101'",
  "issuer: 'Anthropic'",
  "year: '2026'",
  'https://academy.claude.com/verify/4a3418aee0fff1da35e4042c31b63a52',
  'Back-End Development and APIs',
  'https://www.freecodecamp.org/certification/abbasweb/back-end-development-and-apis-v9',
  'Connect on LinkedIn',
  'Download CV',
  '/Abbas-Hussain-Full-Stack-Developer-CV.pdf',
  'Abbas-Hussain-Full-Stack-Developer-CV.pdf',
];

if (!page.includes('<CredentialMark issuer={cert.issuer} title={cert.title} />')) {
  throw new Error('Credential cards must use the deployment-safe CredentialMark component.');
}

for (const unstableLogoRef of ['simple-icons', 'cdn.jsdelivr', 'cert.logo']) {
  if (page.includes(unstableLogoRef)) {
    throw new Error(`Unstable certificate logo reference remains: ${unstableLogoRef}`);
  }
}

const forbidden = [
  'abbas-dev-card.png',
  'Muneeza2071/DevDesk-AI-',
  'BNB Chain Developer Specialization',
  'AWS Node Runners for BNB Chain',
  'Offchain Computing using TEE Coprocessors',
];

for (const value of required) {
  if (!page.includes(value)) throw new Error(`Missing required portfolio content: ${value}`);
}

for (const value of forbidden) {
  if (page.includes(value)) throw new Error(`Forbidden portfolio content remains: ${value}`);
}

if (!layout.includes('Abbas Hussain | Full-Stack Developer')) {
  throw new Error('Recruiter-facing metadata title is missing.');
}
if (!existsSync(new URL('../public/Abbas-Hussain-Full-Stack-Developer-CV.pdf', import.meta.url))) {
  throw new Error('Downloadable CV PDF asset is missing.');
}

console.log('Portfolio content contract passed.');
