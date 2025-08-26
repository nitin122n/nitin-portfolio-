import React, { useState } from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! Your message has been received.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
          <div className="grid gap-4">
            <input className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700" placeholder="Name" name="name" required />
            <input className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700" placeholder="Email" type="email" name="email" required />
            <textarea className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 min-h-[120px]" placeholder="Message" name="message" required />
            <button className="justify-self-start px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700 transition-colors">Send</button>
            {status && <div className="text-sm text-green-500">{status}</div>}
          </div>
        </form>
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
          <div className="opacity-80">Connect</div>
          <ul className="mt-3 space-y-2">
            <li><a className="underline" href="https://www.linkedin.com/in/nitinkandpal07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="underline" href="https://github.com/nitin122n" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="underline" href="mailto:nitinkandpalco@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}



