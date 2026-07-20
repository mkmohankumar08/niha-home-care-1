import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import ServicesTeaser from "@/components/ServicesTeaser";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Journey />
        <ServicesTeaser />
        <WhyChoose />
        <Contact />
      </main>
    </>
  );
}
