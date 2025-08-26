import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-6 text-sm flex flex-wrap items-center justify-between gap-4">
        <p className="opacity-80">© {new Date().getFullYear()} Nitin Kandpal</p>
        <div className="flex gap-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}



