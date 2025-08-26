import React from 'react'

const skills = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Algorithm Design & Optimization',
  'Backend Development',
  'Problem Solving'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span
            key={s}
            className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm shadow-soft"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
