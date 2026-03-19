import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import CareSection from "@/components/CareSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
