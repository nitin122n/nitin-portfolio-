import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="avatar-ring w-48 h-48 md:w-56 md:h-56 rounded-full grid place-items-center">
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="relative z-10 w-44 h-44 md:w-52 md:h-52 object-cover rounded-full border-4 border-neutral-800 dark:border-neutral-100"
            />
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-600 dark:text-brand-300">
          NITIN KANDPAL
        </h1>
        <p className="mt-3 text-lg opacity-80">Full‑Stack Developer • React • Node.js</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 opacity-90">
          <a href="mailto:nitinkandpalco@gmail.com" className="underline">nitinkandpalco@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:7579445436" className="hover:text-brand-600 dark:hover:text-brand-300">+91‑7579445436</a>
          <span className="hidden sm:inline">|</span>
          <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-300">Projects</a>
        </div>
      </div>
    </section>
  )
}



