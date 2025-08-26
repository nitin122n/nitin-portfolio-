import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
        <p className="leading-relaxed opacity-90">
          I am a passionate developer focused on building delightful, performant web experiences.
          I work in real life problem solving . I enjoy crafting clean UI,
          scalable architecture, and automations that speed up delivery.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
            <div className="text-sm opacity-70">Achievements</div>
            <ul className="mt-2 list-disc list-inside space-y-1 opacity-90 text-sm">
              <li>Developed an Algorithm Visualizer showcasing multiple sorting and searching algorithms with complexity analysis.</li>
              <li>Built a Real-Time Route Optimization System.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
            <div className="text-sm opacity-70">Core Skills</div>
            <p className="mt-2 opacity-90 text-sm">Data Structures & Algorithms

Object-Oriented Programming

Algorithm Design & Optimization

Backend Development

Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  )
}



