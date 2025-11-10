import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Professional Summary</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Experienced Software Engineer with expertise in full-stack development using Laravel, Vue.js, and modern web technologies. Proven track record in building scalable web applications, API development, and third-party integrations. Skilled in both front-end and back-end development with strong experience in payment gateway integrations, server management, and database design. Passionate about creating efficient, user-centric solutions and continuously learning new technologies.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Core Stack</h3>
            <p className="mt-2 text-sm text-slate-600">Laravel, PHP, MySQL/SQL, Vue.js, JavaScript</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <p className="mt-2 text-sm text-slate-600">Stripe, PayPal, Route Fusion, Twilio, Google APIs</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">DevOps & Tools</h3>
            <p className="mt-2 text-sm text-slate-600">AWS, cPanel, GitHub, Navicat, FileZilla</p>
          </div>
        </div>
      </div>
    </section>
  );
}
