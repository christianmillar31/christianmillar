import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white relative overflow-hidden">
      {/* Spacey background effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-800/40 via-purple-800/30 to-black/80 blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-700 opacity-20 rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400 opacity-10 rounded-full blur-2xl" />
      </div>
      {/* Main content */}
      <main className="z-10 flex flex-col items-center px-6 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-6 animate-fade-in">
          Christian Millar
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-indigo-200 animate-fade-in delay-200">
          Mechanical Engineering Student @ UCLA<br />
          Passionate about Robotics, Product Design, and Innovation
        </h2>
        <Link
          to="/projects"
          className="mt-4 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 animate-fade-in delay-400"
        >
          View My Work
        </Link>
      </main>
      {/* Subtle stars effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 animate-twinkle"
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
    </div>
  );
}

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl text-lg text-indigo-100 mb-4 text-center">
        I am a Mechanical Engineering student at UCLA, passionate about robotics, product management, and design. I love building things that move, solve real-world problems, and inspire others. My technical skills include SIMULINK, SOLIDWORKS, MATLAB, Python, C++, and more. I thrive in collaborative, innovative environments and am always eager to learn and grow.
      </p>
      <ul className="text-indigo-200 text-center">
        <li>Robotic Controls • Autonomous Systems • Fluid Mechanics • Circuit Design</li>
        <li>Product Management • CAD • Data Modeling • Materials Science</li>
        <li>UCLA Sigma Eta Pi • Eagle Scout • Sports & Film Enthusiast</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-6 py-16" id="projects">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Project 1 */}
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold mb-2">Autonomous Food Delivery Robot</h3>
          <p className="text-indigo-100 mb-2">Team Lead, UCLA (2024 – Present)</p>
          <ul className="text-indigo-200 text-sm mb-2 list-disc list-inside">
            <li>Designed and developed the entire autonomous system using SIMULINK and State Flow</li>
            <li>Integrated hardware: IR sensors, servo motors, PID controllers, ultrasonic sensing</li>
            <li>Electronics design: wiring, soldering, software integration</li>
            <li>Robot detects objects, follows routes, delivers food, and returns home</li>
          </ul>
        </div>
        {/* Project 2 */}
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold mb-2">Robotic Arm Manipulator</h3>
          <p className="text-indigo-100 mb-2">Lead, UCLA (Summer 2023)</p>
          <ul className="text-indigo-200 text-sm mb-2 list-disc list-inside">
            <li>Designed and developed robotic arms for a 100+ part manipulator</li>
            <li>Calculated torque and stress for safe, reliable movement</li>
            <li>Produced engineering drawings and CAD for manufacturing</li>
          </ul>
        </div>
        {/* Project 3 */}
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold mb-2">Custom Built RC Submersible</h3>
          <p className="text-indigo-100 mb-2">Personal Project (2025 – Present)</p>
          <ul className="text-indigo-200 text-sm mb-2 list-disc list-inside">
            <li>Designing and fabricating a remotely operated underwater vehicle (ROV)</li>
            <li>Arduino-based electronics, IR remote, custom propulsion, buoyancy control</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-4">Resume</h2>
      <a href="/resume.pdf" className="mb-4 underline text-indigo-300 hover:text-indigo-100" download>Download PDF</a>
      <div className="max-w-2xl text-indigo-100 text-left space-y-2">
        <p><span className="font-semibold">Education:</span> UCLA, B.S. Mechanical Engineering (3.48 GPA, Dec 2024)</p>
        <p><span className="font-semibold">Skills:</span> SIMULINK, SOLIDWORKS, MATLAB, Python, C++, Product Management, CAD, Data Modeling</p>
        <p><span className="font-semibold">Experience:</span> Team Lead - Autonomous Food Delivery Robot, Robotic Arm Lead, Law Office Assistant</p>
        <p><span className="font-semibold">Extracurriculars:</span> Eagle Scout, Sigma Eta Pi, Sports & Film Enthusiast</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="text-indigo-100 mb-2">Email: <a href="mailto:christianmillar31@gmail.com" className="underline hover:text-indigo-300">christianmillar31@gmail.com</a></p>
      <p className="text-indigo-100 mb-2">Phone: <a href="tel:8058077790" className="underline hover:text-indigo-300">(805) 807-7790</a></p>
      <p className="text-indigo-200">Thousand Oaks, CA</p>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-black/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-md shadow-lg flex justify-center py-4">
      <ul className="flex gap-8 text-lg font-semibold text-indigo-100">
        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-white transition">About</Link></li>
        <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
        <li><Link to="/resume" className="hover:text-white transition">Resume</Link></li>
        <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
