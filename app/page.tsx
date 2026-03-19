import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import CareSection from "@/components/CareSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 86400; // re-generate at most once per day

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My New Home – Lodi Gardens",
  description:
    "Compassionate, affordable assisted living in the Clairemont and UTC area of San Diego.",
  url: "https://diep-malmberg.vercel.app",
  image: "https://diep-malmberg.vercel.app/images/img01.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-16">
        <Hero />
        <Questions />
        <CareSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
