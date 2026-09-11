import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Radio,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import {
  CREDENTIAL_BRANDS,
  CREDENTIAL_BRAND_ORDER,
  type CredentialBrand,
} from './credential-logos';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 0 6 5.5 6-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

type Project = {
  name: string;
  tag: string;
  category: string;
  icon: string;
  color: string;
  accent: string;
  desc: string;
  outcome: string;
  tech: string[];
  live?: string;
  repo?: string;
  status?: string;
};

const PUBLIC_PROJECTS: Project[] = [
  {
    name: 'OpenAPI Forge',
    tag: 'Developer Tool',
    category: 'API Platform',
    icon: '◈',
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-300',
    desc: 'Contract-first API workspace for OpenAPI validation, documentation preview, schema-derived mocks, versioned specifications and TypeScript SDK generation.',
    outcome: 'Turns a raw API specification into a developer-ready workflow.',
    tech: ['React 19', 'tRPC', 'Express', 'Drizzle', 'OpenAPI'],
    live: 'https://openapifrg-ewzpndbh.manus.space',
    repo: 'https://github.com/AbbasFullstack/openapi-forge',
  },
  {
    name: 'DevDesk AI',
    tag: 'Private Code Intelligence',
    category: 'AI Developer Tool',
    icon: '⌬',
    color: 'from-cyan-500 to-violet-600',
    accent: 'text-cyan-300',
    desc: 'Authenticated developer workspace for importing GitHub repositories or ZIP projects, creating safe source manifests, and asking source-backed code questions with cited file paths.',
    outcome: 'Combines repository context, secure server-side AI routing and developer workflow design in one full-stack product.',
    tech: ['Next.js', 'TypeScript', 'Supabase Auth', 'PostgreSQL', 'GitHub OAuth', 'Server-side AI'],
    live: 'https://dev-desk-ai-phi.vercel.app',
    repo: 'https://github.com/AbbasFullstack/DevDesk-AI-',
  },
  {
    name: 'PulseBoard AI',
    tag: 'Workspace CRM',
    category: 'Full-Stack Product',
    icon: '◍',
    color: 'from-cyan-500 to-violet-600',
    accent: 'text-cyan-300',
    desc: 'Workspace-scoped customer CRM and pipeline app with Supabase Auth, RLS-protected data, server-side AI boundaries, and manual integration foundations.',
    outcome: 'Demonstrates caller-bound workspace onboarding, real customer and deal flows, and calculated workspace roll-ups.',
    tech: ['Next.js', 'TypeScript', 'Supabase Auth', 'PostgreSQL/RLS', 'Tailwind CSS'],
    live: 'https://pulseboard-ai.vercel.app',
    repo: 'https://github.com/AbbasFullstack/PulseBoard-AI',
  },
  {
    name: 'VaultX',
    tag: 'Web3 Wallet',
    category: 'Web3',
    icon: '⌘',
    color: 'from-violet-500 to-indigo-600',
    accent: 'text-violet-300',
    desc: 'Multi-chain testnet wallet with encrypted keystore flow, account import, live balances, activity history and documented provider proxy routes.',
    outcome: 'Brings wallet UX, RPC security and API contracts into one testnet project.',
    tech: ['Next.js', 'ethers.js', 'Infura', 'OpenAPI', 'TypeScript'],
    live: 'https://vaultx-mu.vercel.app',
    repo: 'https://github.com/AbbasFullstack/vaultx',
  },
  {
    name: 'Abbas AI',
    tag: 'AI SaaS',
    category: 'Full Stack',
    icon: '◌',
    color: 'from-fuchsia-500 to-rose-600',
    accent: 'text-fuchsia-300',
    desc: 'Authenticated AI chat product with streaming responses, multi-conversation history, code rendering, account flows and a production database layer.',
    outcome: 'A full SaaS-style build instead of a single chat-page demo.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'OpenRouter'],
    live: 'https://abbas-ai-eta.vercel.app',
    repo: 'https://github.com/AbbasFullstack/abbas-ai',
  },
  {
    name: 'OmniX',
    tag: 'AI Workspace',
    category: 'AI Engineering',
    icon: '✦',
    color: 'from-orange-500 to-red-600',
    accent: 'text-orange-300',
    desc: 'A multi-modal AI workspace with server routes for chat, audio, image, model and slides experiences, backed by Supabase user data.',
    outcome: 'Shows orchestration across multiple AI capabilities in one product surface.',
    tech: ['Next.js', 'Supabase', 'OpenRouter', 'Hugging Face', 'Tailwind'],
    live: 'https://omnix-pi.vercel.app',
    repo: 'https://github.com/AbbasFullstack/omnix',
  },
  {
    name: 'CryptoWatch',
    tag: 'Realtime Finance',
    category: 'Data Product',
    icon: '↗',
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-300',
    desc: 'Personal crypto watchlist with Supabase authentication, PostgreSQL row-level security, Binance WebSocket prices and interactive coin charts.',
    outcome: 'Combines per-user data, real-time streams and visual market exploration.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'WebSocket', 'Recharts'],
    live: 'https://cryptowatch-rust.vercel.app',
    repo: 'https://github.com/AbbasFullstack/cryptowatch',
  },
  {
    name: 'FaucetX',
    tag: 'Testnet Faucet',
    category: 'Web3 Backend',
    icon: '◒',
    color: 'from-sky-500 to-cyan-600',
    accent: 'text-sky-300',
    desc: 'Testnet faucet workflow with claim and withdrawal API routes, account data, server-side transaction handling and testnet-only payout logic.',
    outcome: 'Demonstrates backend flow design around Web3 interactions without using real funds.',
    tech: ['Next.js', 'Supabase', 'ethers.js', 'Infura', 'API Routes'],
    live: 'https://faucetx-theta.vercel.app',
    repo: 'https://github.com/AbbasFullstack/faucetx',
  },
];

const MORE_PROJECTS: Project[] = [
  {
    name: 'DevCV AI — Private Beta',
    tag: 'Private Beta',
    category: 'AI + Privacy',
    icon: '◇',
    color: 'from-fuchsia-500 to-violet-600',
    accent: 'text-fuchsia-300',
    desc: 'Privacy-first resume workspace with protected authentication, owner-scoped data controls, and explicit resume version save, load, and delete actions.',
    outcome: 'Demonstrates privacy-aware AI product foundations without automatic raw-resume storage or overstating unverified AI capability.',
    tech: ['Next.js', 'TypeScript', 'Supabase Auth', 'PostgreSQL/RLS', 'Zod', 'Vercel AI Gateway'],
    live: 'https://devcv-ai-blue.vercel.app',
    status: 'Private Beta · live AI verification-gated',
  },
  {
    name: 'Real-Time Crypto Tracker',
    tag: 'Market Dashboard',
    category: 'Realtime Data',
    icon: '⌁',
    color: 'from-amber-500 to-orange-600',
    accent: 'text-amber-300',
    desc: 'Live cryptocurrency dashboard with Binance WebSocket streams, market-data API routes, interactive charts, search and coin detail pages.',
    outcome: 'A focused realtime data interface built around live market movement.',
    tech: ['Next.js', 'WebSocket', 'Binance API', 'Recharts', 'TypeScript'],
    live: 'https://realtime-crypto-tracker.vercel.app',
    repo: 'https://github.com/AbbasFullstack/realtime-crypto-tracker',
  },
  {
    name: 'CryptoAI',
    tag: 'AI Assistant',
    category: 'AI + Data',
    icon: '◉',
    color: 'from-blue-500 to-violet-600',
    accent: 'text-blue-300',
    desc: 'AI crypto assistant that enriches answers with live market context from Binance streams and market-data APIs through a server-side chat route.',
    outcome: 'Connects an LLM-style interface to current crypto market data.',
    tech: ['Next.js', 'Groq', 'Binance API', 'WebSocket', 'Tailwind'],
    live: 'https://cryptoai-two.vercel.app',
    repo: 'https://github.com/AbbasFullstack/cryptoai',
  },
];

const CERTS = [
  { 
    title: 'Introduction to Gemini for Education', 
    issuer: 'Google for Education', 
    year: '2026', 
    url: 'https://edu.google.accredible.com/6d568000-d78b-4a1b-927f-053dbad905cd',
  },
  { 
    title: 'Build student inquiry skills', 
    issuer: 'Google for Education', 
    year: '2026', 
    url: 'https://edu.google.accredible.com/5c5697a1-aa37-49a2-aba2-42dc376b3be9',
  },
  { 
    title: 'CS50x: Introduction to Computer Science', 
    issuer: 'Harvard University', 
    year: '2026', 
    url: 'https://cs50.harvard.edu/certificates/2ce15d90-7211-4f96-9d8f-804e8691cd01',
  },
  { 
    title: 'Claude 101', 
    issuer: 'Anthropic', 
    year: '2026', 
    url: 'https://academy.claude.com/verify/4a3418aee0fff1da35e4042c31b63a52',
  },
  { 
    title: 'Claude Code 101', 
    issuer: 'Anthropic', 
    year: '2026', 
    url: 'https://academy.claude.com/verify/b6cfbbb775198861154a6bbfbf675ef7',
  },
  { 
    title: 'Model Context Protocol: Advanced Topics', 
    issuer: 'Anthropic', 
    year: '2026', 
    url: 'https://academy.claude.com/verify/d784dfe2f1fa6d0b9fa5616632f7f157',
  },
  { 
    title: 'AI Fluency for Creative Work', 
    issuer: 'Anthropic', 
    year: '2026', 
    url: 'https://academy.claude.com/verify/55aed71ad35c72ed27913b720a019ab0',
  },
  { 
    title: 'Collaborate with pull requests in Azure Repos', 
    issuer: 'Microsoft', 
    year: '2026', 
    url: 'https://learn.microsoft.com/api/achievements/share/en-us/AbbasHussain-7685/FEGSEF4X?sharingId=442DF289D55DDE82',
  },
  { 
    title: 'Back-End Development and APIs', 
    issuer: 'freeCodeCamp', 
    year: '2026', 
    url: 'https://www.freecodecamp.org/certification/abbasweb/back-end-development-and-apis-v9',
  },
  { 
    title: 'Python', 
    issuer: 'Kaggle', 
    year: '2026', 
    url: 'https://www.kaggle.com/learn/certification/abbashussaindev/python',
  },
];

const FEATURED_ORDER = ['DevDesk AI', 'VaultX', 'CryptoWatch', 'PulseBoard AI'];
const FEATURED_PROJECTS = FEATURED_ORDER.flatMap((name) => PUBLIC_PROJECTS.filter((project) => project.name === name));
const ADDITIONAL_PROJECTS = [
  ...PUBLIC_PROJECTS.filter((project) => !FEATURED_ORDER.includes(project.name)),
  ...MORE_PROJECTS,
];

const SKILLS = [
  { icon: Code2, cat: 'Frontend', note: 'Interfaces that feel intentional', items: ['React 19', 'Next.js 16', 'Vite', 'TypeScript', 'Tailwind CSS 4', 'Responsive UI'] },
  { icon: Braces, cat: 'Backend & APIs', note: 'Contracts, routes and typed clients', items: ['API Routes', 'Express', 'tRPC', 'REST + JSON-RPC', 'OpenAPI', 'TypeScript SDKs'] },
  { icon: Database, cat: 'Data & Auth', note: 'User data with clear boundaries', items: ['PostgreSQL', 'MySQL / TiDB', 'Supabase RLS', 'Prisma', 'Drizzle ORM', 'OAuth + NextAuth'] },
  { icon: BrainCircuit, cat: 'AI, Realtime & Web3', note: 'Modern product integrations', items: ['Streaming AI', 'WebSockets', 'ethers.js', 'Infura', 'Etherscan', 'Vitest'] },
];

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] ${compact ? 'p-5' : 'p-6'} transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.06]`}>
      <div className={`pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${project.color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-25`} />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-xl font-bold text-white shadow-lg`}>
            {project.icon}
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">{project.category}</p>
            <span className={`mt-1 inline-flex rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${project.accent}`}>
              {project.tag}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{project.desc}</p>
        {!compact && (
          <div className="mt-5 border-l border-white/15 pl-3 text-xs leading-relaxed text-white/45">
            <span className={`${project.accent} font-bold`}>Why it matters: </span>{project.outcome}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md border border-white/[0.08] bg-black/20 px-2 py-1 text-[10px] font-semibold text-white/55">
              {tech}
            </span>
          ))}
        </div>

        {(project.live || project.repo || project.status) && (
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-black transition hover:bg-white/85">
                <ExternalLink className="h-3.5 w-3.5" /> Live demo
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-white/70 transition hover:bg-white/[0.09] hover:text-white">
                <GithubIcon className="h-3.5 w-3.5" /> {project.live ? 'Code' : 'View code'}
              </a>
            )}
            {project.status && <span className="rounded-lg border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-amber-200/85">{project.status}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-400/30">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-orange-500/[0.10] blur-[160px]" />
        <div className="absolute top-[32%] -left-52 h-96 w-96 rounded-full bg-violet-500/[0.08] blur-[145px]" />
        <div className="absolute bottom-0 -right-52 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.07] blur-[145px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-sm font-black shadow-lg shadow-orange-500/20">A</div>
            <span className="font-semibold tracking-tight">Abbas Hussain</span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-semibold text-white/60 md:flex" aria-label="Primary navigation">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#certs" className="transition hover:text-white">Credentials</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-3 text-[11px] font-semibold text-white/70 md:hidden" aria-label="Compact navigation">
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
            <a href="https://github.com/AbbasFullstack" target="_blank" rel="noreferrer" aria-label="Open Abbas Hussain GitHub profile" className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 transition hover:bg-white/10">
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-bold text-emerald-400">
          <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>
          Open to internships & junior roles
        </div>

        <div className="relative mb-8 flex justify-center">
          <div className="absolute -inset-6 rounded-full bg-orange-500/20 blur-3xl" />
          <Image
            src="/Abbasdev.png"
            alt="Portrait of Abbas Hussain"
            width={460}
            height={460}
            priority
            className="relative aspect-square w-full max-w-[18rem] rounded-3xl border border-white/10 object-cover shadow-2xl shadow-orange-500/10"
          />
        </div>

        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-orange-300">Full-stack developer · Pakistan</p>
        <h1 className="mb-5 bg-gradient-to-b from-white via-white to-white/35 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">Abbas Hussain</h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          I build secure, data-driven web applications with <span className="font-semibold text-white/85">Next.js, React, TypeScript, Supabase, PostgreSQL, and APIs</span>.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 text-sm font-bold shadow-xl shadow-orange-500/20 transition duration-200 hover:scale-[1.02]"><Rocket className="h-4 w-4" /> View featured work</a>
          <a href="/Abbas-Hussain-Full-Stack-Developer-CV.pdf" download="Abbas-Hussain-Full-Stack-Developer-CV.pdf" aria-label="Download Abbas Hussain's CV" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-orange-300/30 bg-orange-500/[0.12] px-6 py-3 text-sm font-bold text-orange-100 shadow-lg shadow-orange-500/10 transition duration-200 hover:-translate-y-0.5 hover:border-orange-200/60 hover:bg-orange-400/20 focus:outline-none focus:ring-2 focus:ring-orange-300/70 focus:ring-offset-2 focus:ring-offset-[#050505]">
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[420%]" aria-hidden="true" />
            <Download className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            <span className="relative">Download CV</span>
          </a>
          <a href="https://www.linkedin.com/in/abbas-hussain-56a61338b/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/80 transition hover:bg-white/[0.10]"><ExternalLink className="h-4 w-4" /> Connect on LinkedIn</a>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            { label: '4 verified featured projects' },
            { label: 'Live demos and public source' },
            { label: 'Auth, data and API boundaries' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-200/90">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">Credentials from</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {CREDENTIAL_BRAND_ORDER.map((brand) => (
              <span key={brand} className="flex items-center gap-2 text-xs font-semibold text-white/55" title={CREDENTIAL_BRANDS[brand].title}>
                <BrandGlyph brand={brand} className="h-4 w-4" />
                {CREDENTIAL_BRANDS[brand].title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-4 py-12">
        <SectionLabel icon={Sparkles} text="About me" />
        <div className="grid gap-4 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.035] p-7 backdrop-blur-xl sm:p-8">
            <p className="leading-relaxed text-white/68">
              I am a self-taught full-stack developer focused on building complete, usable products—not just landing pages. My projects cover authenticated SaaS patterns, database design, typed API contracts, real-time market streams, AI integrations and Web3 testnet workflows.
            </p>
            <p className="mt-4 leading-relaxed text-white/48">
              I care about clear product boundaries: secure credentials stay server-side, API contracts stay documented, and financial/testnet projects are presented responsibly.
            </p>
          </div>
          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.07] p-7 backdrop-blur-xl">
            <Smartphone className="mb-5 h-6 w-6 text-orange-300" />
            <p className="text-sm font-bold text-orange-200">Mobile-first builder</p>
            <p className="mt-2 text-sm leading-relaxed text-orange-100/60">Every project in this portfolio was developed through a mobile-first workflow with GitHub, Codespaces and Termux.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-4 py-12">
        <SectionLabel icon={Layers3} text="Capabilities" />
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.cat} className="rounded-3xl border border-white/[0.07] bg-white/[0.035] p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-start gap-3">
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2.5 text-orange-300"><Icon className="h-5 w-5" /></div>
                  <div><h3 className="font-bold">{group.cat}</h3><p className="mt-0.5 text-xs text-white/40">{group.note}</p></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-lg border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs font-semibold text-white/65">{item}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><SectionLabel icon={Rocket} text="Featured work" /><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four projects. Clear full-stack proof.</h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">These projects match the public GitHub showcase and link to a live build or source repository.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-10">
          <div className="mb-5 flex items-center gap-3"><GitBranch className="h-4 w-4 text-orange-300" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Additional public builds</p><p className="mt-1 text-sm text-white/45">Focused experiments, API tools, market data and AI context.</p></div></div>
          <div className="grid gap-4 md:grid-cols-2">{ADDITIONAL_PROJECTS.map((project) => <ProjectCard key={project.name} project={project} compact />)}</div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <ProofCard icon={ShieldCheck} title="Security-aware" text="Environment variables, server-side provider routes and testnet-only Web3 demonstrations." />
          <ProofCard icon={Radio} title="Realtime systems" text="WebSocket market streams, live activity data and responsive chart experiences." />
          <ProofCard icon={WalletCards} title="Product thinking" text="Auth, databases, API contracts and frontend flows designed as connected systems." />
        </div>
      </section>

      <section id="certs" className="relative mx-auto max-w-6xl px-4 py-12">
        <SectionLabel icon={Award} text="Verified credentials" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert) => (
            <article key={cert.title} className="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-orange-500/30 hover:bg-white/[0.06]">
              <div className="flex items-start gap-3">
                <CredentialMark issuer={cert.issuer} title={cert.title} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white group-hover:text-orange-200">{cert.title}</h3>
                  <p className="mt-1 text-xs text-white/40">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-bold text-orange-300 transition hover:bg-orange-500/20"
              >
                Verify <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.13] via-amber-600/[0.08] to-transparent p-8 text-center backdrop-blur-xl sm:p-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-200/70">Let&apos;s build something useful</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Available for internships, junior roles and collaboration.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55">I am interested in teams building developer tools, AI products, data-rich interfaces and responsible Web3 experiences.</p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="mailto:abbaswebdevelopers@gmail.com" className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85">
              <Mail className="h-4 w-4" /> abbaswebdevelopers@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/abbas-hussain-56a61338b/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/85 transition hover:bg-white/[0.10]">
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://wa.me/923088361404" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/85 transition hover:bg-white/[0.10]">
              <Smartphone className="h-4 w-4" /> WhatsApp: 03088361404
            </a>
            <a href="https://github.com/AbbasFullstack" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/85 transition hover:bg-white/[0.10]">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>
          
          <p className="mt-7 flex items-center justify-center gap-1.5 text-[11px] text-white/35"><MapPin className="h-3 w-3" /> Pakistan · Remote-friendly</p>
        </div>
      </section>

      <footer className="relative border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-[11px] text-white/30">Made with ❤️ by Abbas Hussain — Built on a mobile phone</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/AbbasFullstack" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-white/50 transition hover:bg-white/[0.08] hover:text-white">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abbas-hussain-56a61338b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-white/50 transition hover:bg-white/[0.08] hover:text-white">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

type IssuerBrand = CredentialBrand | 'harvard' | 'microsoft' | 'generic';

function resolveIssuerBrand(issuer: string, title: string): IssuerBrand {
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
function BrandGlyph({ brand, className = 'h-5 w-5' }: { brand: IssuerBrand; className?: string }) {
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

function issuerName(brand: IssuerBrand, fallback: string): string {
  if (brand === 'microsoft') return 'Microsoft';
  if (brand === 'harvard') return 'Harvard CS50';
  if (brand === 'generic') return fallback;
  return CREDENTIAL_BRANDS[brand].title;
}

function CredentialMark({ issuer, title }: { issuer: string; title: string }) {
  const brand = resolveIssuerBrand(issuer, title);
  const label = issuerName(brand, issuer);

  return (
    <div
      aria-label={`${label} credential`}
      title={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-inner"
    >
      <BrandGlyph brand={brand} className="h-5 w-5" />
    </div>
  );
}

function SectionLabel({ icon: Icon, text }: { icon: typeof Sparkles; text: string }) {
  return <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40"><Icon className="h-3.5 w-3.5 text-orange-300" /> {text}</p>;
}

function ProofCard({ icon: Icon, title, text }: { icon: typeof Sparkles; title: string; text: string }) {
  return <article className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-xl"><Icon className="h-5 w-5 text-orange-300" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/45">{text}</p></article>;
}

