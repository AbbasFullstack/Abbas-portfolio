import { readFileSync } from 'node:fs';

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
  'Back-End Development and APIs',
  'https://www.freecodecamp.org/certification/abbasweb/back-end-development-and-apis-v9',
  'B1 English for Developers (Beta)',
  'https://www.freecodecamp.org/certification/abbasweb/b1-english-for-developers',
  'Connect on LinkedIn',
];

const forbidden = [
  'abbas-dev-card.png',
  'mailto:',
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

console.log('Portfolio content contract passed.');
