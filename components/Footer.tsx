export default function Footer() {
  return (
    <footer className="bg-warm-900 text-white/60 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>
          <span className="text-white font-semibold">My New Home – Lodi Gardens</span>
          <span className="mx-2">·</span>
          Clairemont &amp; UTC, San Diego, CA
        </div>
        <div className="flex gap-6">
          <a href="#promise" className="hover:text-white transition-colors">Our Promise</a>
          <a href="#care"    className="hover:text-white transition-colors">Our Care</a>
          <a href="#gallery" className="hover:text-white transition-colors">Meals</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-xs text-white/30">© {new Date().getFullYear()} My New Home – Lodi Gardens</div>
      </div>
    </footer>
  );
}
