import React from 'react';

const experiences = [
  {
    company: 'TechLeadz',
    role: 'Software Engineer',
    period: 'Oct 2023 - Present',
    location: 'Lahore (On-site)',
    bullets: [
      'Developed large-scale apps with Laravel and Vue.js',
      'Advanced SQL database management and optimization',
      'Built and integrated APIs for complex business needs',
      'Collaborated with cross-functional enterprise teams',
    ],
    tech: ['Laravel', 'Vue.js', 'SQL', 'API Development'],
  },
  {
    company: 'Hybreathe',
    role: 'Back End Developer',
    period: 'May 2022 - Oct 2023',
    location: 'Gujranwala (On-site)',
    bullets: [
      'Back-end development in Laravel with JSON/AJAX',
      'Front-end with HTML, CSS, Bootstrap, jQuery',
      'Integrated Route-Fusion, PayPal, Stripe',
      'Server management using cPanel, FileZilla, AWS',
    ],
    tech: ['Laravel', 'AJAX', 'Stripe', 'PayPal', 'AWS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Work Experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-sm text-slate-600">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-xs font-medium text-slate-500 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
