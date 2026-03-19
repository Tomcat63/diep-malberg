"use client";
import { useState, useEffect, useRef } from "react";

const themes = [
  { id: "sage",     label: "Sage",     swatch: "#4A7C5F", accent: "#E8A87C" },
  { id: "ocean",    label: "Ocean",    swatch: "#1a6eb5", accent: "#2dd4bf" },
  { id: "sunset",   label: "Sunset",   swatch: "#d97706", accent: "#fb923c" },
  { id: "lavender", label: "Lavender", swatch: "#7c3aed", accent: "#f472b6" },
  { id: "rose",     label: "Rose",     swatch: "#e11d48", accent: "#fbbf24" },
  { id: "forest",   label: "Forest",   swatch: "#1a5c38", accent: "#f0a500" },
  { id: "coral",    label: "Coral",    swatch: "#dc6060", accent: "#2dd4bf" },
  { id: "midnight", label: "Midnight", swatch: "#1e3a5f", accent: "#fcd34d" },
  { id: "terra",    label: "Terra",    swatch: "#c2521c", accent: "#65a30d" },
  { id: "mint",     label: "Mint",     swatch: "#059669", accent: "#a78bfa" },
  { id: "plum",     label: "Plum",     swatch: "#9333ea", accent: "#fb7185" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("sage");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") ?? "sage";
    setActive(saved);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const apply = (id: string) => {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("theme", id);
    setActive(id);
    setOpen(false);
  };

  const current = themes.find((t) => t.id === active) ?? themes[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        title="Change color theme"
        className="flex items-center gap-2 border border-gray-200 hover:border-gray-300 rounded-full px-3 py-1.5 text-xs font-medium text-warm-900/70 hover:text-warm-900 transition-colors bg-white"
      >
        {/* Two-tone swatch */}
        <span className="flex rounded-full overflow-hidden w-4 h-4 flex-shrink-0 border border-black/10">
          <span className="flex-1" style={{ background: current.swatch }} />
          <span className="flex-1" style={{ background: current.accent }} />
        </span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 z-50">
          <p className="text-xs text-warm-900/40 font-medium px-1 pb-2 uppercase tracking-wider">Color theme</p>
          <div className="grid grid-cols-2 gap-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => apply(t.id)}
                title={t.label}
                className={`flex items-center gap-2 px-2 py-2 rounded-xl text-xs transition-colors w-full text-left ${active === t.id ? "bg-gray-100 font-semibold text-warm-900 ring-1 ring-gray-300" : "hover:bg-gray-50 text-warm-900/70"}`}
              >
                <span className="flex rounded-full overflow-hidden w-5 h-5 flex-shrink-0 border border-black/10">
                  <span className="flex-1" style={{ background: t.swatch }} />
                  <span className="flex-1" style={{ background: t.accent }} />
                </span>
                <span className="truncate">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
