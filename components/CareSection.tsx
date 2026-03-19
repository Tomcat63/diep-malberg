const pillars = [
  { icon: "🏡", title: "Clean & Comfortable Home", text: "Swept and mopped daily, bathrooms cleaned multiple times a day, and bedsheets changed every week or whenever needed.", accent: "bg-primary-50 border-primary-100" },
  { icon: "❤️", title: "Caregivers Who Truly Care", text: "We treat residents with kindness from the heart — listening, talking, and always trying to bring smiles and laughter into every day.", accent: "bg-rose-50 border-rose-100" },
  { icon: "🧼", title: "Personal Care & Hygiene", text: "Daily showers, toileting assistance, and incontinence care — with caregivers available 24/7 whenever help is needed.", accent: "bg-blue-50 border-blue-100" },
  { icon: "💊", title: "Medication Management", text: "We carefully prepare and assist residents with their medications to make sure they take them on time and never miss any prescribed doses.", accent: "bg-purple-50 border-purple-100" },
  { icon: "🚶", title: "Daily Movement & Activity", text: "We encourage walking in the backyard and light exercise at least twice a day to maintain strength, health, and quality of life.", accent: "bg-amber-50 border-amber-100" },
  { icon: "🍲", title: "Healthy Home-Cooked Meals", text: "Fresh, daily meals made with fresh vegetables — soups, stews, sandwiches, and more. The menu changes regularly.", accent: "bg-orange-50 border-orange-100" },
];

export default function CareSection() {
  return (
    <section id="care" className="py-20 px-4 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mt-3">Comprehensive Care, Every Day</h2>
          <p className="mt-4 text-warm-900/60 text-lg max-w-2xl mx-auto">Our focus is simple: kind care, a clean home, healthy food, and keeping residents active and comfortable.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className={`border rounded-2xl p-6 ${p.accent} flex flex-col gap-3`}>
              <span className="text-4xl">{p.icon}</span>
              <h3 className="font-bold text-warm-900 text-lg">{p.title}</h3>
              <p className="text-warm-900/65 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-primary-500 rounded-2xl p-8 text-white text-center">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            "There may be facilities that look more luxurious, but our focus is simple:{" "}
            <strong>kind care, a clean home, healthy food,</strong> and keeping our residents{" "}
            <strong>active and comfortable.</strong>"
          </p>
          <p className="mt-3 text-white/60 text-sm">— My New Home, Lodi Gardens</p>
        </div>
      </div>
    </section>
  );
}
