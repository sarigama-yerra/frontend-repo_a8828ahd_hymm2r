import React from 'react';

const projects = [
  {
    name: 'Agnimble',
    description:
      'E-commerce marketplace with multi-vendor support, inventory management, secure payments, and real-time order tracking built on Laravel.',
    link: 'https://agnimble.com',
    tags: ['Laravel', 'Payments', 'Shipping', 'Scalable'],
  },
  {
    name: 'Mowing and Plowing',
    description:
      'Service marketplace for lawn care and snow removal with GPS matching, scheduling, reviews, and Stripe/PayPal integration.',
    link: 'https://mowingandplowing.com',
    tags: ['Scheduling', 'Maps', 'Stripe', 'PayPal'],
  },
  {
    name: 'Fragrance Finder',
    description:
      'Fragrance discovery with scraping pipelines, AI-powered scent matching, personalized profiles, and advanced search/filters.',
    link: 'https://fragrancefinder.com',
    tags: ['Data', 'AI', 'Search', 'Profiles'],
  },
  {
    name: 'AFI-USA',
    description:
      'B2B/B2C fragrance commerce with wholesale tiers, bulk order management, inventory sync, CRM integration, and multi-currency.',
    link: 'https://afi-usa.com',
    tags: ['B2B', 'Inventory', 'CRM', 'Multi-currency'],
  },
];

function ProjectCard({ name, description, link, tags }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <span className="text-xs text-slate-500">Visit ↗</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />)
          )}
        </div>
      </div>
    </section>
  );
}
