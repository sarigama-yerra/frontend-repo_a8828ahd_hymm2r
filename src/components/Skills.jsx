import React from 'react';

const skills = {
  Backend: ['Laravel', 'PHP', 'MySQL', 'SQL', 'Python', 'Node.js', 'C++'],
  Frontend: ['Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
  Tools: ['GitHub', 'AWS', 'Navicat', 'FileZilla', 'VS Code', 'Beyond Compare'],
  Integrations: ['Stripe', 'PayPal', 'Route Fusion', 'Twilio', 'MessageBird', 'Google APIs', 'AI Image API'],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Technical Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
