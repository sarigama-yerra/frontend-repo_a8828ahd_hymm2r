import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-semibold text-white">HRM</a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
        <a href="mailto:raheeqahmad2@gmail.com" className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900">
          Contact
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}
