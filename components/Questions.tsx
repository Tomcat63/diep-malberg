"use client";
import { useState } from "react";

const questions = [
  { q: "Is the home comfortable and welcoming?", a: "Our home may not look as fancy as some larger facilities, but cleanliness and comfort are extremely important to us. The house is swept and mopped daily, bathrooms are cleaned multiple times a day, and bedsheets are changed every week or immediately whenever needed.", icon: "🏡" },
  { q: "Will my parent be treated with love, patience, and respect?", a: "Our caregivers treat residents with kindness and respect from the heart. They listen to residents' needs, spend time talking with them, and always try to bring smiles and laughter into their day.", icon: "❤️" },
  { q: "Is the home clean and will my parent be kept well cared for?", a: "We help residents stay clean and fresh every day. Most residents receive daily showers unless they prefer fewer. We assist with toileting and incontinence care regularly throughout the day, and our caregivers are available 24/7 whenever help is needed.", icon: "🧼" },
  { q: "Will my parent have opportunities to stay active?", a: "Staying active is very important for seniors. We encourage residents to walk around the backyard or participate in light exercise at least twice a day. Movement helps maintain strength, health, and a better quality of life.", icon: "🚶" },
  { q: "What kind of food will be served every day?", a: "We proudly serve fresh, home-cooked meals every day using fresh vegetables and healthy ingredients. Our menu changes regularly and often includes comforting, easy-to-eat foods such as soups, stews, and sandwiches.", icon: "🍲" },
];

export default function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="promise" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mt-3">Questions Every Family Asks</h2>
          <p className="mt-4 text-warm-900/60 text-lg">We understand these concerns — and we do our best every day to provide the answers families are looking for.</p>
        </div>

        <div className="space-y-3">
          {questions.map((item, i) => (
            <div key={i} className="border border-primary-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-primary-50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="flex-1 font-semibold text-warm-900">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1 text-warm-900/70 leading-relaxed border-t border-primary-100 bg-primary-50/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
