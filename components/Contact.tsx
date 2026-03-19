export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mt-3">Let&apos;s Answer Your Questions</h2>
          <p className="mt-4 text-warm-900/60 text-lg max-w-xl mx-auto">If you are looking for a caring and affordable assisted living home in the Clairemont / UTC area, we would be happy to speak with you.</p>
        </div>

        {/* ── Info cards — one row ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-primary-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="bg-primary-50 rounded-xl p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-warm-900">Location</h3>
              <p className="text-warm-900/60 text-sm mt-1">Clairemont &amp; UTC Area<br />San Diego, California</p>
            </div>
          </div>

          <div className="bg-white border border-primary-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="bg-accent-100 rounded-xl p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-warm-900">Availability</h3>
              <p className="text-warm-900/60 text-sm mt-1">
                Happy to answer questions anytime.<br />
                <strong className="text-primary-500">Caregivers on-site 24/7.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white border border-primary-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="bg-blue-50 rounded-xl p-3 flex-shrink-0">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-warm-900">Pricing</h3>
              <p className="text-warm-900/60 text-sm mt-1">Very reasonable rates for the area.<br />Contact us for a personalized quote.</p>
            </div>
          </div>
        </div>

        {/* ── CTA — same style as CareSection quote block ──────── */}
        <div className="mt-10 bg-primary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to learn more?</h3>
          <p className="mt-3 text-white/75 text-lg max-w-xl mx-auto">
            Please feel free to message us anytime — we respond quickly and are happy to schedule a visit so you can see our home for yourself.
          </p>
          <a
            href="https://www.facebook.com/diep.malmberg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 bg-white text-primary-600 font-semibold py-3.5 px-8 rounded-full hover:bg-primary-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Message us on Facebook
          </a>
          <p className="mt-5 text-white/60 text-sm">
            We welcome families to visit and see the home before making any decisions. No pressure — just a friendly conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
