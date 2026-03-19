export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image collage */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5 opacity-30">
        {["img01", "img06", "img09", "img15", "img16", "img17"].map((img) => (
          <div key={img} className="overflow-hidden">
            <img src={`/images/${img}.jpg`} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/80 via-primary-600/70 to-warm-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <span className="inline-block bg-accent-400/90 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Assisted Living · Clairemont &amp; UTC, San Diego
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          A Home Where Your<br />
          <span className="text-accent-400">Loved One Truly Belongs</span>
        </h1>

        <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
          Kind care, a clean home, healthy food, and daily activities — all at a
          very reasonable price. We treat every resident like family.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent-400 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            Talk to Us Today
          </a>
          <a
            href="#promise"
            className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          {["24/7 Caregiver Support", "Daily Home-Cooked Meals", "Affordable Pricing", "Clairemont / UTC Area"].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
