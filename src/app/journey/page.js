import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServicesPageHero from "@/components/ServicesPageHero";

export const metadata = {
  title: "All Services — NIHA Home Care",
  description:
    "The complete NIHA Home Care physiotherapy menu: pain relief, neuro and geriatric rehab, post-surgical, sports injury, women's health, pediatric care and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageHero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
