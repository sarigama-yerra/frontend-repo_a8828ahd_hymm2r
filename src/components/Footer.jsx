import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Hafiz Raheeq Muhammad. All rights reserved.</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="#home" className="text-white/80 hover:text-white">Home</a>
          <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
          <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
          <a href="mailto:raheeqahmad2@gmail.com" className="rounded-md bg-white px-3 py-1.5 font-medium text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
