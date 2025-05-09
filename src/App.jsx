import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SpaceBackground() {
  // Cosmic blue background and animated stars
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-sky-900 to-black blur-2xl" />
        <div className="hidden sm:block absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-800 opacity-20 rounded-full blur-2xl" />
        <div className="hidden sm:block absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-400 opacity-10 rounded-full blur-2xl" />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10 sm:opacity-20 animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

// Typewriter effect for hero text
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
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Home() {
  return (
    <motion.main
      className="relative z-10 flex flex-col items-center px-6 py-32 min-h-screen justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-6 animate-fade-in text-white">
        Christian Millar
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-8 text-sky-200 animate-fade-in delay-200 text-center max-w-xs sm:max-w-md md:max-w-none break-words whitespace-normal">
        <Typewriter texts={["Engineer.", "Builder.", "Problem-solver."]} />
      </h2>
      <p className="text-lg md:text-xl text-sky-100 mb-6 text-center max-w-2xl animate-fade-in delay-300">
        I build robots, write code, and chase problems worth solving — here's what I've made.
      </p>
      <Link
        to="/projects"
        className="mt-4 px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 animate-fade-in delay-400"
      >
        View My Work
      </Link>
    </motion.main>
  );
}

function About() {
  return (
    <motion.section
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero section with image, subtitle, and passions */}
      <div className="flex flex-col items-center mb-10">
        {/* Profile image placeholder (replace src with your image if desired) */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-500 to-blue-900 shadow-lg mb-4 flex items-center justify-center overflow-hidden">
          {/* <img src="/profile.jpg" alt="Christian Millar" className="w-full h-full object-cover" /> */}
          <span className="text-5xl text-white">👨‍🚀</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Christian Millar</h2>
        <div className="text-lg text-sky-200 mb-1 font-semibold text-center w-full">Mechanical Engineering Graduate from UCLA</div>
        <div className="text-base text-sky-300 text-center max-w-xl">
          Passions: space, marine robotics, innovation, product management, and building things that move, solve problems, and push boundaries.
        </div>
      </div>
      {/* Main about card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="space-y-8 text-sky-100 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-2">Early Inspiration</h3>
            <p>Hi, I'm Christian, a recent UCLA mechanical engineering graduate with a passion for building things that move, solve problems, and push boundaries. My journey didn't start in a lab or workshop. It started in my childhood living room, watching Star Trek with my dad and dreaming about the future. I grew up surrounded by engineering influence, my grandfather ran a machine shop in Chatsworth, and my uncle worked on satellites and fighter jets, but I didn't start college as an engineer. I began as a business major.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-2">The Pivot</h3>
            <p>That all changed the day I graduated high school. It happened to be the same day as SpaceX's first Launch America mission, a moment that reignited my childhood awe and made it clear I had to pivot. I switched into engineering, and from that point forward, I never looked back. I finished my mechanical degree in just two years, fueled by purpose and passion.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-2">Hands-On Learning</h3>
            <p>Even before that switch, I was already getting my hands dirty, mixing homemade rocket fuel in my friend's front yard and launching DIY rockets into the California desert. That same energy carried into my time at UCLA, where I joined Sigma Eta Pi, the university's entrepreneurship fraternity. There, I worked alongside startup founders, built projects from scratch, and learned what it meant to be resourceful, creative, and relentlessly driven.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-2">What Drives Me</h3>
            <p>Since then, I've built autonomous robots, designed underwater submersibles, created apps and websites, and tackled technical challenges across mechanical, electrical, and software domains. Whether I'm wiring motors, prototyping hardware, or debugging code, I approach every project with curiosity, precision, and grit.</p>
            <p className="mt-4">But more than anything, I'm driven by connection. I believe the best engineers aren't just problem-solvers, they're collaborators, communicators, and teammates. What sets me apart is my ability to form genuine relationships and bring energy to every team I'm on.</p>
            <p className="mt-4 font-bold text-white">Let's build something remarkable.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Projects() {
  // Example icons (replace with your own or use react-icons)
  const icons = [
    "🚗", // Robot
    "🌊", // Submarine
    "🤖", // Arm
    "📄", // Report/Video
  ];
  return (
    <motion.section
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-32"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {/* Top row: Robot and Submersible side by side */}
        <div className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-8 md:justify-center flex-wrap">
          <div className="flex-1 flex justify-center md:justify-end mx-auto">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 flex flex-col items-center transition-transform duration-300 text-center mx-auto w-[400px] h-[500px]"
            >
              <span className="text-5xl mb-4">{icons[0]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">Autonomous Food Delivery Robot</h3>
              <p className="text-sky-100 mb-2 w-full text-center break-words md:w-auto md:break-normal">Team Lead, UCLA (<span className="whitespace-nowrap">2024 –{'\u00A0'}Present</span>)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left w-full">
                <li>Designed and developed the entire autonomous system using SIMULINK and State Flow</li>
                <li>Integrated hardware: IR sensors, servo motors, PID controllers, ultrasonic sensing</li>
                <li>Electronics design: wiring, soldering, software integration</li>
                <li>Robot detects objects, follows routes, delivers food, and returns home</li>
              </ul>
            </motion.div>
          </div>
          {/* SWAPPED: Demo & Report Box now in top row */}
          <div className="flex-1 flex justify-center md:justify-start mt-10 md:mt-0">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-sky-900 via-blue-800 to-black/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-sky-400/40 flex flex-col items-center transition-transform duration-300 mx-auto w-[400px] h-[500px] overflow-hidden"
            >
              <span className="text-6xl mb-4">{icons[3]}</span>
              <h3 className="text-2xl font-bold mb-2 text-sky-200 text-center">Autonomous Food Delivery Robot<br/>Demo & Report</h3>
              <a
                href="/Project%20Delivery%20Report.pdf"
                className="text-sky-300 underline hover:text-sky-100 mt-2 mb-4 block text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View Project Design Report (PDF)
              </a>
              <div className="w-full aspect-w-16 aspect-h-9 mt-4 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/EK-CFdtdBk4"
                  title="Robot Demo"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-sky-100 text-center text-sm">
                <strong>See the robot in action and read the full engineering report!</strong>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Bottom row: Robotic Arm and RC Submersible side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center mt-10">
          <div className="flex-1 flex justify-center md:justify-end">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 flex flex-col items-center transition-transform duration-300 mx-auto w-[400px] h-[500px]"
            >
              <span className="text-5xl mb-4">{icons[2]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">Robotic Arm Manipulator</h3>
              <p className="text-sky-100 mb-2">Lead, UCLA (Summer 2023)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Designed and developed robotic arms for a 100+ part manipulator</li>
                <li>Calculated torque and stress for safe, reliable movement</li>
                <li>Produced engineering drawings and CAD for manufacturing</li>
              </ul>
            </motion.div>
          </div>
          {/* SWAPPED: RC Submersible now in bottom row */}
          <div className="flex-1 flex justify-center md:justify-start mt-10 md:mt-0 mx-auto">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 flex flex-col items-center transition-transform duration-300 mx-auto w-[400px] h-[500px]"
            >
              <span className="text-5xl mb-4">{icons[1]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">Custom Built RC Submersible</h3>
              <p className="text-sky-100 mb-2 w-full text-center break-words md:w-auto md:break-normal">Personal Project (<span className="whitespace-nowrap">2025 – Present</span>)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left w-full">
                <li>Designing and fabricating a remotely operated underwater vehicle (ROV)</li>
                <li>Arduino-based electronics, IR remote, custom propulsion, buoyancy control</li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* Add SongBattle and CNVP project cards below the existing project rows */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center mt-10">
          {/* SongBattle Project Card */}
          <div className="flex-1 flex justify-center md:justify-end">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 flex flex-col items-center transition-transform duration-300 mx-auto w-[400px] h-[500px]"
            >
              <span className="text-5xl mb-4">🎵</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">SongBattle (iOS App)</h3>
              <p className="text-sky-100 mb-2">Work in Progress (2025 – Present)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Shazam-style music guessing game for teams</li>
                <li>Modern SwiftUI interface, Spotify integration</li>
                <li>Fair song selection, scoring, and team management</li>
              </ul>
              <a
                href="https://github.com/christianmillar31/SongBattle"
                className="text-sky-300 underline hover:text-sky-100 mt-2 mb-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
          {/* CNVP Project Card */}
          <div className="flex-1 flex justify-center md:justify-start mt-10 md:mt-0">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(0, 200, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 flex flex-col items-center transition-transform duration-300 mx-auto w-[400px] h-[500px]"
            >
              <span className="text-5xl mb-4">🌐</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">CNVP Website</h3>
              <p className="text-sky-100 mb-2">2025 – Present</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Website for CNVP</li>
                <li>Modern web technologies and design</li>
              </ul>
              <a
                href="https://github.com/christianmillar31"
                className="text-sky-300 underline hover:text-sky-100 mt-2 mb-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Resume() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <h2 className="text-4xl font-bold mb-4 text-white">Resume</h2>
      <a href="/CHRISTIANMILLARARPIL29.pdf" className="mb-4 underline text-sky-300 hover:text-sky-100" download>Download PDF</a>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
      <p className="text-sky-100 mb-2">Email: <a href="mailto:christianmillar31@gmail.com" className="underline hover:text-sky-300">christianmillar31@gmail.com</a></p>
      <p className="text-sky-100 mb-2">Phone: <a href="tel:8058077790" className="underline hover:text-sky-300">(805) 807-7790</a></p>
      <p className="text-sky-200 mb-2">Thousand Oaks, CA || Los Angeles, CA</p>
      <div className="flex flex-col items-center gap-2 mt-6">
        <motion.a
          href="https://github.com/christianmillar31"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-lg underline"
          whileHover={{ scale: 1.1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.3 2 1.9 6.3 1.9 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.1.1-2.2 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.1.2 2 .1 2.2.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5 3.9-1.3 6.8-5 6.8-9.4C22.1 6.3 17.7 2 12 2z"/></svg>
          @christianmillar31
        </motion.a>
      </div>
    </section>
  );
}

function Navbar() {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-black/80 via-blue-900/80 to-sky-900/80 backdrop-blur-md shadow-lg flex justify-center py-3 px-2">
      <ul className="flex flex-nowrap gap-3 sm:gap-6 md:gap-8 text-base sm:text-lg font-semibold text-sky-100 overflow-x-auto scrollbar-hide">
        {navLinks.map((link) => (
          <li key={link.to} className="shrink-0">
            <Link
              to={link.to}
              className={`hover:text-white transition ${location.pathname === link.to ? 'text-white underline underline-offset-8' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Back-to-top button
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
          className="fixed bottom-6 right-6 z-50 bg-sky-600 hover:bg-sky-500 text-white rounded-full p-4 shadow-lg focus:outline-none"
          aria-label="Back to top"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  // Scroll to top on route change for better UX
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen font-sans">
      <SpaceBackground />
      <Navbar />
      <BackToTopButton />
      <div className="pt-6 md:pt-8">
        <AnimatePresence mode="wait">
          <Routes>
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
