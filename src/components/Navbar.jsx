import React from 'react'
import { profile } from '../data/profile'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200/40 dark:border-neutral-800/60">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide text-brand-600 dark:text-brand-300">{profile.name.split(' ')[0]}</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">
              {s.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  )
}



