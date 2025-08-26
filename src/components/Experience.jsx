import React from 'react'

const education = [
  { time: '2023 — 2027', title: 'B.Tech in CSE', org: 'Graphic Era Hill University', details: 'Focus on software engineering.' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
      <div className="grid md:grid-cols-1 gap-8">
        <Timeline title="Education" items={education} />
      </div>
    </section>
  )
}

function Timeline({ title, items }) {
  return (
    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800 ms-3">
        {items.map((it) => (
          <li key={it.time} className="mb-6 ms-6">
            <span className="absolute -start-3.5 mt-1 h-3.5 w-3.5 rounded-full bg-brand-500 shadow" />
            <div className="text-sm opacity-70">{it.time}</div>
            <div className="font-medium">{it.title} – {it.org}</div>
            <div className="text-sm opacity-90">{it.details}</div>
          </li>
        ))}
      </ol>
    </div>
  )
}



