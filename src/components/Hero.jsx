import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleContactClick = () => {
    const email = 'raheeqahmad2@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          Software Engineer · Laravel · Vue.js · APIs
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hafiz Raheeq Muhammad
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Full‑stack engineer crafting scalable web apps, robust APIs, and seamless integrations. Experienced with Laravel, Vue.js, SQL, and modern cloud tooling.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-200 transition"
          >
            View Projects
          </a>
          <button
            onClick={handleContactClick}
            className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition"
          >
            Contact Me
          </button>
          <a
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-6 text-sm text-white/70">
          Gujranwala, Pakistan · 03107379985 · raheeqahmad2@gmail.com
        </div>
      </div>
    </section>
  );
}
