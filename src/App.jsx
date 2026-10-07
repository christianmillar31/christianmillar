import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// -----------------------------------------------------------------------------
// Dramatic surface: near-black base + two oversized gradient blobs + grid + noise
// -----------------------------------------------------------------------------
function DramaticBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div
        className="absolute -top-40 -left-40 w-[70vw] h-[70vw] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #8B5CF6 0%, transparent 60%)',
          mixBlendMode: 'screen',
          opacity: 0.55,
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[70vw] h-[70vw] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at 70% 70%, #F43F5E 0%, transparent 60%)',
          mixBlendMode: 'screen',
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 noise opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/60" />
    </div>
  );
}

// -----------------------------------------------------------------------------
// Typewriter (kept, restyled externally)
// -----------------------------------------------------------------------------
function Typewriter({ texts, speed = 80, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, pause]);
  return (
    <span>
      {texts[index].substring(0, subIndex)}
      <span className="inline-block w-[0.6ch] animate-caret-blink">_</span>
    </span>
  );
}

// -----------------------------------------------------------------------------
// Marquee strip
// -----------------------------------------------------------------------------
function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl tracking-tight text-ink/80 uppercase"
          >
            {t}
            <span className="text-secondary mx-8">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Home
// -----------------------------------------------------------------------------
function Home() {
  return (
    <motion.main
      className="relative z-10 min-h-screen flex flex-col justify-end pt-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 max-w-[1400px] w-full mx-auto">
        <h1
          className="font-display font-black leading-[0.85] tracking-tighter text-ink"
          style={{ fontSize: 'clamp(64px, 14vw, 220px)' }}
        >
          CHRISTIAN
          <br />
          <span className="stroke-text">MILLAR.</span>
        </h1>
        <div className="mt-8 font-mono text-lg md:text-xl text-secondary">
          <Typewriter texts={['engineer.', 'builder.', 'problem-solver.']} />
        </div>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/80 font-normal leading-relaxed">
          I like to build servo drive systems, ML pipelines, robots, submersibles, and whatever
          else I can get my hands on. Here&rsquo;s some things I&rsquo;ve done.
        </p>
        <div className="mt-10 border-l-2 border-secondary pl-6 py-2 max-w-2xl">
          <div className="font-mono text-xs text-secondary mb-2 uppercase tracking-widest">
            // CURRENTLY
          </div>
          <div className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-ink leading-tight">
            Electrical Engineer
          </div>
          <div className="font-mono text-sm text-ink/60 mt-1">
            Advanced Motion Controls · Camarillo, CA · 2025 — Present
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 bg-ink text-surface font-display font-black uppercase tracking-wide text-base px-6 py-4 hover:bg-secondary hover:text-ink transition-colors"
          >
            View the work
            <span className="font-mono font-normal">→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white/20 text-ink font-display font-black uppercase tracking-wide text-base px-6 py-4 hover:border-secondary hover:text-secondary transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="mt-24">
        <Marquee items={['HARDWARE', 'SPACE', 'ROBOTICS', 'PRODUCT', 'BUILD', 'SHIP']} />
      </div>
    </motion.main>
  );
}

// -----------------------------------------------------------------------------
// About
// -----------------------------------------------------------------------------
function About() {
  const sections = [
    {
      title: 'Early Inspiration',
      body:
        "I'm Christian. UCLA mechanical engineering, class of '24. Now I'm an electrical engineer at Advanced Motion Controls in Camarillo. Grew up in Thousand Oaks watching Star Trek with my dad. My grandfather ran a machine shop in Chatsworth; my uncle built satellites and fighter jets. Enough hours staring up at my heroes and the ceiling of the Griffith Planetarium, I figured I could chart my own path too.",
    },
    {
      title: 'The Pivot',
      body:
        "The day I graduated high school was the same day SpaceX flew Launch America. I switched majors as soon as I could and graduated with a ME degree from the Samueli School of Engineering.",
    },
    {
      title: 'Hands-On Learning',
      body:
        "Before any of that I was mixing homemade rocket fuel in my friend's front yard and competing in FIRST Robotics. At UCLA I joined Sigma Eta Pi and spent a lot of time around people starting companies. Most of what I know about shipping came from watching them.",
    },
    {
      title: 'What Drives Me',
      body:
        "Since then: autonomous robots, underwater submersibles, ML models, a few apps. Hardware, firmware, software, whichever the problem needs. I'm mostly interested in the messy integration layer where nothing works the first time.",
    },
  ];
  return (
    <motion.section
      className="relative z-10 min-h-screen px-6 md:px-12 py-32 max-w-[1400px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-mono text-xs text-ink/60 mb-8">// CHRISTIAN MILLAR — UCLA ME &rsquo;24 · AMC &rsquo;25</div>
      <div className="grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <h2
              className="font-display font-black leading-[0.85] tracking-tighter text-ink"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
            >
              LET&rsquo;S
              <br />
              <span className="stroke-text">BUILD</span>
              <br />
              THINGS
              <br />
              THAT WORK.
            </h2>
            <p className="mt-6 font-mono text-sm text-ink/60 max-w-xs">
              Mechanical engineer. Mostly interested in the hardware/software boundary, motor
              control, embedded systems, things that move.
            </p>
          </div>
        </aside>
        <div className="md:col-span-7 space-y-12">
          {sections.map((s, i) => (
            <article key={s.title} className="pl-6 border-l-2 border-secondary/60">
              <div className="font-mono text-xs text-secondary mb-2">
                {String(i + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-ink mb-4">
                {s.title}
              </h3>
              <p className="text-lg text-ink/80 leading-relaxed font-normal">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// -----------------------------------------------------------------------------
// Projects
// -----------------------------------------------------------------------------
const PROJECTS = [
  {
    tag: 'Live · draftai.live · 2025 — Present',
    title: 'DraftAI — ML Fantasy Football',
    bullets: [
      'ML projection models (ElasticNet, RidgeCV, XGBoost) trained on 8 seasons of NFL data',
      '128 unique league configurations ranked via Value-Based Drafting',
      'FastAPI + Jinja2 SSR backend; Python pipeline automated via GitHub Actions',
      'Live draft board, mock draft simulator, trade analyzer, auction values',
    ],
    link: { href: 'https://draftai.live', label: 'Visit draftai.live' },
  },
  {
    tag: 'Built for AMC · 2025 — Present',
    title: 'Agentic Support Chatbot',
    bullets: [
      'RAG pipeline over 372 PDF manuals, datasheets, and application notes',
      'Claude AI backend with semantic search for support engineers',
      'Python + Docker, deployed on Hugging Face Spaces',
      'Built for internal use at Advanced Motion Controls',
    ],
    link: { href: 'https://github.com/christianmillar31/amc-support-chatbot', label: 'View on GitHub' },
  },
  {
    tag: 'Team Lead · UCLA · 2024 – Present',
    title: 'Autonomous Food Delivery Robot',
    bullets: [
      'Designed and developed the entire autonomous system using SIMULINK and State Flow',
      'Integrated IR sensors, servo motors, PID controllers, and ultrasonic sensing',
      'Full electronics design: wiring, soldering, software integration',
      'Detects objects, follows routes, delivers food, and returns home',
    ],
  },
  {
    tag: 'Personal Project · 2025 – Present',
    title: 'Custom Built RC Submersible',
    bullets: [
      'Designing and fabricating a remotely operated underwater vehicle (ROV)',
      'Arduino-based electronics, IR remote, custom propulsion, buoyancy control',
    ],
  },
  {
    tag: 'Demo & Report',
    title: 'Food Delivery Robot — Demo',
    embedVideo: 'https://www.youtube.com/embed/EK-CFdtdBk4',
    pdfHref: '/Project%20Delivery%20Report.pdf',
    pdfLabel: 'Project design report (PDF)',
  },
  {
    tag: 'Live on the App Store · 2025 — Present',
    title: 'SongSmash (iOS App)',
    bullets: [
      'Team music-guessing game: a mystery clip plays, name the song and artist before the reveal',
      'SwiftUI; 30-second previews from the Apple Music catalog, no account or subscription needed',
      'Genre, decade, and difficulty filters with smart repeat protection across rounds',
      'Free on the App Store since September 2026',
    ],
    link: { href: 'https://apps.apple.com/us/app/songsmash/id6801002521', label: 'Get it on the App Store' },
  },
  {
    tag: 'Lead · UCLA · Summer 2023',
    title: 'Robotic Arm Manipulator',
    bullets: [
      'Designed and developed robotic arms for a 100+ part manipulator',
      'Calculated torque and stress for safe, reliable movement',
      'Produced engineering drawings and CAD for manufacturing',
    ],
  },
  {
    tag: 'Niche engineering interests · Off the clock',
    title: 'Rabbit Holes',
    bullets: [
      'United States nuclear submarines',
      'The Griffith Observatory and astronomy',
      'Solid rocket propulsion and static-fire testing',
      'Deep-sea exploration and remotely operated vehicles',
    ],
  },
];

function ProjectCard({ project, index, total }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-surface border border-white/10 hover:border-secondary transition-colors p-8 flex flex-col min-h-[420px]"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-secondary">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="font-mono text-xs text-ink/50 text-right max-w-[60%]">{project.tag}</span>
      </div>
      <h3 className="font-display font-black text-2xl uppercase tracking-tight text-ink leading-none mb-4">
        {project.title}
      </h3>
      <span className="h-px w-12 bg-secondary mb-6 group-hover:w-full transition-all duration-500" />
      {project.bullets && (
        <ul className="space-y-2 text-ink/75 text-base font-normal leading-relaxed flex-1">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="font-mono text-secondary">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {project.embedVideo && (
        <div className="mt-2 aspect-video w-full overflow-hidden border border-white/10">
          <iframe
            src={project.embedVideo}
            title={project.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
      {project.pdfHref && (
        <a
          href={project.pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-mono text-sm text-secondary hover:text-ink underline underline-offset-4"
        >
          ↗ {project.pdfLabel}
        </a>
      )}
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 font-mono text-sm text-secondary hover:text-ink underline underline-offset-4"
        >
          ↗ {project.link.label}
        </a>
      )}
    </motion.article>
  );
}

function Projects() {
  return (
    <motion.section
      className="relative z-10 min-h-screen px-6 md:px-12 py-32 max-w-[1400px] mx-auto"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
        <h2
          className="font-display font-black leading-[0.85] tracking-tighter text-ink"
          style={{ fontSize: 'clamp(56px, 12vw, 180px)' }}
        >
          SELECTED
          <br />
          <span className="stroke-text">WORK.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </motion.section>
  );
}

// -----------------------------------------------------------------------------
// Resume
// -----------------------------------------------------------------------------
function Resume() {
  return (
    <motion.section
      className="relative z-10 min-h-screen px-6 md:px-12 py-32 max-w-[1400px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-mono text-xs text-ink/60 mb-8">// RESUME / PDF</div>
      <h2
        className="font-display font-black leading-[0.85] tracking-tighter text-ink mb-8"
        style={{ fontSize: 'clamp(72px, 16vw, 260px)' }}
      >
        RESUME<span className="stroke-text">.</span>
      </h2>
      <p className="font-mono text-sm text-ink/60 max-w-md mb-8">
        Education, experience, tools. Shorter than this site.
      </p>
      <a
        href="/ChristianMillarResume2026.pdf"
        download
        className="inline-flex items-center gap-3 bg-ink text-surface font-display font-black uppercase tracking-wide text-base px-6 py-4 hover:bg-secondary hover:text-ink transition-colors"
      >
        Download PDF
        <span className="font-mono font-normal">↓</span>
      </a>
      <div className="mt-12 border border-white/10 bg-black/40">
        <object
          data="/ChristianMillarResume2026.pdf"
          type="application/pdf"
          className="w-full h-[80vh]"
          aria-label="Resume preview"
        >
          <p className="p-8 font-mono text-sm text-ink/60">
            Your browser can&rsquo;t display embedded PDFs.{' '}
            <a href="/ChristianMillarResume2026.pdf" className="text-secondary underline">
              Download it here.
            </a>
          </p>
        </object>
      </div>
    </motion.section>
  );
}

// -----------------------------------------------------------------------------
// Contact
// -----------------------------------------------------------------------------
function Contact() {
  const rows = [
    { label: 'EMAIL', value: 'christianmillar31@gmail.com', href: 'mailto:christianmillar31@gmail.com' },
    { label: 'PHONE', value: '(805) 807-7790', href: 'tel:8058077790' },
    { label: 'LOCATION', value: 'Thousand Oaks, CA · Los Angeles, CA' },
    { label: 'GITHUB', value: '@christianmillar31', href: 'https://github.com/christianmillar31' },
  ];
  return (
    <motion.section
      className="relative z-10 min-h-screen px-6 md:px-12 py-32 max-w-[1400px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-mono text-xs text-ink/60 mb-8">// SAY HELLO</div>
      <h2
        className="font-display font-black leading-[0.85] tracking-tighter text-ink mb-16"
        style={{ fontSize: 'clamp(72px, 16vw, 260px)' }}
      >
        CONTACT<span className="stroke-text">.</span>
      </h2>
      <div className="border-t border-white/10">
        {rows.map((r) => {
          const Wrapper = r.href ? motion.a : 'div';
          const wrapperProps = r.href
            ? {
                href: r.href,
                target: r.href.startsWith('http') ? '_blank' : undefined,
                rel: r.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                whileHover: { x: 8 },
              }
            : {};
          return (
            <Wrapper
              key={r.label}
              {...wrapperProps}
              className="grid grid-cols-12 gap-6 py-6 border-b border-white/10 group items-baseline"
            >
              <span className="col-span-12 md:col-span-3 font-mono text-xs text-ink/50 uppercase tracking-widest">
                {r.label}
              </span>
              <span
                className={`col-span-12 md:col-span-9 font-display font-black text-2xl md:text-[40px] leading-none tracking-tight ${
                  r.href ? 'text-ink group-hover:text-secondary transition-colors' : 'text-ink'
                }`}
              >
                {r.value}
              </span>
            </Wrapper>
          );
        })}
      </div>
    </motion.section>
  );
}

// -----------------------------------------------------------------------------
// Navbar
// -----------------------------------------------------------------------------
function Navbar() {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Work' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          className="font-mono font-bold text-base text-ink hover:text-secondary transition-colors"
          aria-label="Home"
        >
          CM<span className="text-secondary">.</span>
        </Link>
        <ul className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to} className="shrink-0 relative">
                <Link
                  to={link.to}
                  className={`font-display font-black uppercase tracking-wide text-xs sm:text-sm transition-colors ${
                    active ? 'text-ink' : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-secondary"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// -----------------------------------------------------------------------------
// Back to top
// -----------------------------------------------------------------------------
function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-primary text-ink hover:bg-secondary font-mono font-bold text-lg w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// -----------------------------------------------------------------------------
// Shell
// -----------------------------------------------------------------------------
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen font-sans text-ink bg-surface">
      <DramaticBackground />
      <Navbar />
      <BackToTopButton />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
