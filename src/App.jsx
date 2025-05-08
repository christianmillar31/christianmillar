import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function SpaceBackground() {
  // Cosmic blue background and animated stars
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-sky-900 to-black blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-800 opacity-20 rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-400 opacity-10 rounded-full blur-2xl" />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-twinkle"
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

function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center px-6 py-32 min-h-screen justify-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-6 animate-fade-in text-white">
        Christian Millar
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-8 text-sky-200 animate-fade-in delay-200 text-center">
        Mechanical Engineering Graduate from UCLA
      </h2>
      <Link
        to="/about"
        className="mt-4 px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 animate-fade-in delay-400"
      >
        View My Work
      </Link>
    </main>
  );
}

function About() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-32">
      {/* Hero section with image, subtitle, and passions */}
      <div className="flex flex-col items-center mb-10">
        {/* Profile image placeholder (replace src with your image if desired) */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-500 to-blue-900 shadow-lg mb-4 flex items-center justify-center overflow-hidden">
          {/* <img src="/profile.jpg" alt="Christian Millar" className="w-full h-full object-cover" /> */}
          <span className="text-5xl text-white">👨‍🚀</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Christian Millar</h2>
        <div className="text-lg text-sky-200 mb-1 font-semibold">Mechanical Engineering Graduate from UCLA</div>
        <div className="text-base text-sky-300 text-center max-w-xl">
          Passions: space, marine robotics, innovation, product management, and building things that move, solve problems, and push boundaries.
        </div>
      </div>
      {/* Main about card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="space-y-8 text-sky-100 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-2">Early Inspiration</h3>
            <p>Hey, I'm Christian, a recent UCLA mechanical engineering graduate with a passion for building things that move, solve problems, and push boundaries. My journey didn't start in a lab or workshop. It started in my childhood living room, watching Star Trek with my dad and dreaming about the future. I grew up surrounded by engineering influence, my grandfather ran a machine shop in Chatsworth, and my uncle worked on satellites and fighter jets, but I didn't start college as an engineer. I began as a business major.</p>
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
    </section>
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
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-32" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {/* Top row: Robot and Submersible side by side */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center">
          <div className="flex-1 flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 hover:scale-105 transition-transform duration-300 flex flex-col items-center w-full max-w-md">
              <span className="text-5xl mb-4">{icons[0]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">Autonomous Food Delivery Robot</h3>
              <p className="text-sky-100 mb-2">Team Lead, UCLA (2024 – Present)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Designed and developed the entire autonomous system using SIMULINK and State Flow</li>
                <li>Integrated hardware: IR sensors, servo motors, PID controllers, ultrasonic sensing</li>
                <li>Electronics design: wiring, soldering, software integration</li>
                <li>Robot detects objects, follows routes, delivers food, and returns home</li>
              </ul>
            </div>
          </div>
          {/* SWAPPED: Demo & Report Box now in top row */}
          <div className="flex-1 flex justify-start mt-10 md:mt-0">
            <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-black/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-sky-400/40 hover:scale-105 transition-transform duration-300 flex flex-col items-center w-full max-w-md">
              <span className="text-6xl mb-4 animate-bounce">{icons[3]}</span>
              <h3 className="text-2xl font-bold mb-2 text-sky-200 text-center">Autonomous Food Delivery Robot<br/>Demo & Report</h3>
              <a
                href="/Project%20Delivery%20Report.pdf"
                className="text-sky-300 underline hover:text-sky-100 mt-2 mb-4 block text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View Full Project Report (PDF)
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
            </div>
          </div>
        </div>
        {/* Bottom row: Robotic Arm and RC Submersible side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center mt-10">
          <div className="flex-1 flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 hover:scale-105 transition-transform duration-300 flex flex-col items-center w-full max-w-md">
              <span className="text-5xl mb-4">{icons[2]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">Robotic Arm Manipulator</h3>
              <p className="text-sky-100 mb-2">Lead, UCLA (Summer 2023)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Designed and developed robotic arms for a 100+ part manipulator</li>
                <li>Calculated torque and stress for safe, reliable movement</li>
                <li>Produced engineering drawings and CAD for manufacturing</li>
              </ul>
            </div>
          </div>
          {/* SWAPPED: RC Submersible now in bottom row */}
          <div className="flex-1 flex justify-start mt-10 md:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-sky-400/20 hover:scale-105 transition-transform duration-300 flex flex-col items-center w-full max-w-md">
              <span className="text-5xl mb-4">{icons[1]}</span>
              <h3 className="text-2xl font-semibold mb-2 text-white">Custom Built RC Submersible</h3>
              <p className="text-sky-100 mb-2">Personal Project (2025 – Present)</p>
              <ul className="text-sky-200 text-sm mb-2 list-disc list-inside text-left">
                <li>Designing and fabricating a remotely operated underwater vehicle (ROV)</li>
                <li>Arduino-based electronics, IR remote, custom propulsion, buoyancy control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <p className="text-sky-200 mb-2">Thousand Oaks, CA</p>
      <p className="mt-4">
        <a
          href="https://instagram.com/christian.millar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-lg underline"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="currentColor" opacity="0.1"/><path d="M16.75 3H7.25C5.17893 3 3.5 4.67893 3.5 6.75V17.25C3.5 19.3211 5.17893 21 7.25 21H16.75C18.8211 21 20.5 19.3211 20.5 17.25V6.75C20.5 4.67893 18.8211 3 16.75 3Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.25" cy="6.75" r="0.75" fill="currentColor"/></svg>
          @christian.millar
        </a>
      </p>
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
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-black/80 via-blue-900/80 to-sky-900/80 backdrop-blur-md shadow-lg flex justify-center py-4">
      <ul className="flex gap-8 text-lg font-semibold text-sky-100">
        {navLinks.map((link) => (
          <li key={link.to}>
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
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
