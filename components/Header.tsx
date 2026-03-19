"use client";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { label: "Our Promise", href: "#promise" },
  { label: "Our Care",    href: "#care" },
  { label: "Meals",       href: "#gallery" },
  { label: "Contact",     href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-primary-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex flex-col leading-tight flex-shrink-0">
          <span className="text-primary-500 font-semibold text-base">My New Home</span>
          <span className="text-warm-900/60 text-xs tracking-wide">Lodi Gardens · Clairemont / UTC</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-warm-900/70 hover:text-primary-500 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            Get in Touch
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-warm-900/60 hover:text-primary-500" aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-primary-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-warm-900/70 hover:text-primary-500 py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-primary-500 text-white text-sm font-medium text-center py-2 rounded-full mt-1">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
