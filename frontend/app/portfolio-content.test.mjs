import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./page.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('./layout.tsx', import.meta.url), 'utf8');

const required = [
  'https://github.com/AbbasFullstack/DevDesk-AI-',
  'https://pulseboard-ai.vercel.app',
  'Four projects. Clear full-stack proof.',
  'Verified credentials',
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
