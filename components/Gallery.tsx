"use client";
import { useState } from "react";

const images = [
  { src: "/images/img03.jpg", alt: "Home-cooked meal" },
  { src: "/images/img04.jpg", alt: "Fresh daily food" },
  { src: "/images/img05.jpg", alt: "Healthy dinner" },
  { src: "/images/img06.jpg", alt: "Nutritious meal" },
  { src: "/images/img07.jpg", alt: "Home-style cooking" },
  { src: "/images/img08.jpg", alt: "Daily lunch" },
  { src: "/images/img09.jpg", alt: "Fresh vegetables and soup" },
  { src: "/images/img10.jpg", alt: "Comforting stew" },
  { src: "/images/img11.jpg", alt: "Breakfast plate" },
  { src: "/images/img12.jpg", alt: "Sandwich and sides" },
  { src: "/images/img13.jpg", alt: "Fresh salad" },
  { src: "/images/img14.jpg", alt: "Evening dinner" },
  { src: "/images/img15.jpg", alt: "Hearty soup" },
  { src: "/images/img16.jpg", alt: "Home meal" },
  { src: "/images/img17.jpg", alt: "Daily cooking" },
  { src: "/images/img18.jpg", alt: "Nutritious plate" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage-500 text-sm font-semibold tracking-widest uppercase">
            Our Kitchen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mt-3">
            Fresh, Home-Cooked Meals Every Day
          </h2>
          <p className="mt-4 text-warm-900/60 text-lg">
            See what we serve — fresh vegetables, healthy ingredients, and meals
            made with care.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="block w-full overflow-hidden rounded-xl break-inside-avoid cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-sage-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-full rounded-xl object-contain"
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 rounded-full p-2"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
