import React from 'react'

const skills = [
  'C',
  'C++',
  'Python',
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
          <span key={s} className="px-3 py-1 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-200/60 dark:border-brand-700/40 text-sm shadow-soft">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}



