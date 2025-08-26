import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 opacity-90 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tech.map(t => (
                <span key={t} className="px-2 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-200/40 dark:border-brand-700/40">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <a className="text-brand-600 dark:text-brand-300 underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="text-brand-600 dark:text-brand-300 underline" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



