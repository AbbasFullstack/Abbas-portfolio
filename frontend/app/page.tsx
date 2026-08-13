import { Mail, ExternalLink, MapPin, Sparkles, Award, Code2, ArrowRight, Smartphone, Rocket } from 'lucide-react';

const PROJECTS = [
  {
    name: 'VaultX',
    tag: 'Web3 Wallet',
    icon: '🔐',
    color: 'from-purple-500 to-blue-600',
    desc: 'Multi-chain crypto wallet - mnemonic creation, encrypted keystore, wallet import, live balances, transaction history aur 3 blockchains (Polygon, Ethereum, Base).',
    tech: ['Next.js', 'ethers.js', 'Infura', 'TypeScript'],
    live: 'https://vaultx-mu.vercel.app',
    repo: 'https://github.com/AbbasFullstack/vaultx',
  },
  {
    name: 'CryptoWatch',
    tag: 'Full-Stack App',
    icon: '⭐',
    color: 'from-orange-500 to-amber-600',
    desc: 'Personal crypto watchlist - Supabase auth, PostgreSQL with Row Level Security, live Binance WebSocket prices, interactive charts aur glassmorphism UI.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Recharts'],
    live: 'https://cryptowatch-rust.vercel.app',
    repo: 'https://github.com/AbbasFullstack/cryptowatch',
  },
  {
    name: 'Real-Time Crypto Tracker',
    tag: 'Live Dashboard',
    icon: '📈',
    color: 'from-emerald-500 to-teal-600',
    desc: 'Real-time crypto dashboard - Binance WebSocket streams, interactive Recharts graphs, coin detail pages aur premium glassmorphism design.',
    tech: ['Next.js', 'WebSocket', 'Recharts', 'Tailwind'],
    live: 'https://realtime-crypto-tracker.vercel.app',
    repo: 'https://github.com/AbbasFullstack/realtime-crypto-tracker',
  },
];

const CERTS = [
  { title: 'Foundational C# with Microsoft', issuer: 'freeCodeCamp + Microsoft', year: '2025', url: 'https://freecodecamp.org/certification/abbasweb/foundational-c-sharp-with-microsoft' },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2025', url: 'https://freecodecamp.org/certification/abbasweb/responsive-web-design' },
  { title: 'Front-End Development Libraries', issuer: 'freeCodeCamp', year: '2025', url: 'https://freecodecamp.org/certification/abbasweb/front-end-development-libraries' },
  { title: 'Data Visualization', issuer: 'freeCodeCamp', year: '2025', url: 'https://freecodecamp.org/certification/abbasweb/data-visualization' },
  { title: 'Legacy Front-End', issuer: 'freeCodeCamp', year: '2025', url: 'https://freecodecamp.org/certification/abbasweb/legacy-front-end' },
  { title: 'SEO Certified', issuer: 'HubSpot Academy', year: '2025', url: 'https://app-na2.hubspot.com/academy/achievements/5xkd22gx/en/1/abbas-hussain/seo-certified' },
  { title: 'AI Unlocked: Agents and Skills', issuer: 'Binance Academy', year: '2025', url: 'https://www.binance.com/en/academy/track/ai-unlocked-agents-and-skills' },
];

const SKILLS = [
  { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Recharts'] },
  { cat: 'Backend', items: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'API Routes'] },
  { cat: 'Web3', items: ['ethers.js', 'Wallet Security', 'Multi-Chain RPC', 'Mnemonics', 'Testnets'] },
  { cat: 'Tools', items: ['Git & GitHub', 'Vercel', 'Codespaces', 'Termux', 'Binance API'] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-orange-500/[0.07] blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-purple-500/[0.05] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[400px] bg-blue-500/[0.05] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur-2xl">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-semibold tracking-tight">Abbas Hussain</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-white/60">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certs" className="hover:text-white transition">Certifications</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="https://github.com/AbbasFullstack" target="_blank" className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-bold text-emerald-400 mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          Open to Internships & Junior Roles
        </div>

        <div className="relative inline-block mb-8">
          <div className="absolute -inset-3 rounded-full bg-orange-500/30 blur-2xl" />
          <img
            src="https://github.com/AbbasFullstack.png"
            alt="Abbas Hussain"
            className="relative w-28 h-28 rounded-full border-2 border-orange-500/50 object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent mb-4">
          Abbas Hussain
        </h1>

        <img
          src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=22&pause=1000&color=F7931A&center=true&vCenter=true&width=700&lines=Full-Stack+Developer;Web3+Developer;freeCodeCamp+Certified"
          alt="Typing"
          className="mx-auto mb-6"
        />

        <p className="text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
          16-year-old self-taught developer building <span className="text-white/80 font-semibold">production-ready apps from a mobile phone</span>.
          3 deployed projects, 7 professional certifications, and a passion for blockchain! ⛓️
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 font-bold shadow-xl shadow-orange-500/25 hover:scale-[1.02] transition-all">
            <Rocket className="w-4 h-4" /> View Projects
          </a>
          <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-white/80 hover:bg-white/10 transition-all">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {[
            { num: '3+', label: 'Deployed Projects' },
            { num: '7', label: 'Certifications' },
            { num: '3', label: 'Blockchains' },
            { num: '100%', label: 'Self-Taught' },
          ].map(s => (
            <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 backdrop-blur-xl">
              <p className="text-2xl font-bold text-orange-400">{s.num}</p>
              <p className="text-[11px] text-white/40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative max-w-5xl mx-auto px-4 py-12">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" /> About Me
        </h2>
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-xl">
          <p className="text-white/70 leading-relaxed mb-6">
            I am a <span className="text-orange-400 font-semibold">self-taught full-stack and Web3 developer</span> from Pakistan.
            I began my coding journey using only a mobile phone, leveraging GitHub Codespaces and Termux to build
            <span className="text-white/90 font-semibold"> production-ready applications</span>. My work spans real-time crypto
            dashboards, full-stack apps with authentication and databases, and a complete multi-chain Web3 wallet.
            I am passionate about clean user interfaces, real-time data, and blockchain security — and I back my skills
            with 7 professional certifications from freeCodeCamp, Microsoft, HubSpot and Binance Academy.
          </p>
          <div className="flex items-center gap-3 bg-orange-500/[0.08] border border-orange-500/20 rounded-2xl p-4">
            <Smartphone className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <p className="text-xs text-orange-200/80 leading-relaxed">
              <strong className="text-orange-300">Fun fact:</strong> Every project I have shipped was built entirely on a mobile phone - no laptop needed!
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative max-w-5xl mx-auto px-4 py-12">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
          <Code2 className="w-3.5 h-3.5 text-orange-400" /> Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map(group => (
            <div key={group.cat} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="font-bold text-sm mb-4 text-orange-400">{group.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative max-w-5xl mx-auto px-4 py-12">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
          <Rocket className="w-3.5 h-3.5 text-orange-400" /> Featured Projects
        </h2>
        <div className="space-y-5">
          {PROJECTS.map(p => (
            <div key={p.name} className="group bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all">
              <div className="flex items-start gap-4 flex-wrap">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {p.icon}
                </div>
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 uppercase tracking-wider">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-semibold text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.live} target="_blank" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-xs font-bold hover:scale-[1.02] transition-all">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a href={p.repo} target="_blank" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white/70 hover:bg-white/10 transition-all">
                      <Github className="w-3.5 h-3.5" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="relative max-w-5xl mx-auto px-4 py-12">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
          <Award className="w-3.5 h-3.5 text-orange-400" /> Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTS.map(c => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-xl hover:bg-white/[0.06] hover:border-orange-500/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-orange-300 transition">{c.title}</h3>
                  <p className="text-[11px] text-white/40">{c.issuer} · {c.year}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 border border-orange-500/20 rounded-3xl p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-3">Let&apos;s Build Together! 🚀</h2>
          <p className="text-white/50 max-w-md mx-auto mb-8">
            Internship, collaboration ya sirf hello - mera inbox hamesha khula hai!
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a href="mailto:abbaswebdevelopers@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 font-bold shadow-xl shadow-orange-500/25 hover:scale-[1.02] transition-all">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://github.com/AbbasFullstack" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-white/80 hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
          <p className="text-[11px] text-white/30 mt-6 flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3" /> Pakistan · Remote-friendly
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-8">
        <p className="text-center text-[11px] text-white/30">
          © 2026 Abbas Hussain · Built with Next.js on a mobile phone 📱 · Made with ❤️
        </p>
      </footer>
    </main>
  );
}

function Github(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
