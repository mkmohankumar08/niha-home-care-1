import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Contact — NIHA Home Care",
  description:
    "Get in touch with NIHA Home Care for expert home physiotherapy, booking, consultation and support.",
};

const CONTACT_DETAILS = [
  {
    icon: Phone,
    title: "Call now",
    value: "+91 99402 77264",
    caption: "Immediate booking and enquiries",
    href: "tel:+919940277264",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 99402 77264",
    caption: "Chat for fast appointment support",
    href: "https://wa.me/919940277264",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nihahomecare@gmail.com",
    caption: "Send details and we will follow up quickly",
    href: "mailto:nihahomecare@gmail.com",
  },
  {
    icon: MapPin,
    title: "Service area",
    value: "Your city",
    caption: "Home physiotherapy across your local area",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mist">
        {/* HERO */}
        <section className="bg-navy text-white pt-28 pb-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
            <span className="inline-flex rounded-full border border-recovery/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-recovery">
              Contact NIHA
            </span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Reach an expert physiotherapist at home.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-mist/70 sm:text-lg">
              Phone, WhatsApp, email or a home visit — we make it easy to book
              your first home physiotherapy session.
            </p>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-14">
          <div className="rounded-[24px] border border-navy/10 bg-white p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
              Talk to us directly
            </h2>
            <p className="mt-3 max-w-xl text-navy/60 leading-7">
              Our team is ready to answer your questions about home
              physiotherapy, service availability and booking. Choose the
              contact method that fits your schedule.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_DETAILS.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.title}
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith("http") ? "_blank" : undefined,
                          rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                        }
                      : {})}
                    className="focus-ring group rounded-2xl border border-navy/10 p-6 transition-colors duration-200 hover:border-navy/25"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-mist">
                      <item.icon size={20} strokeWidth={2.25} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-navy ">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy/60 leading-relaxed">
                      {item.caption}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-navy group-hover:text-band transition-colors">
                      {item.value}
                    </p>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>


        {/* MAP */}
        {/* <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-8 mb-20">
          <div className="rounded-[24px] border border-navy/10 bg-white p-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-navy whitespace-nowrap">
                Find us
              </h2>
              <span className="h-px flex-1 bg-navy/10" />
            </div>
            <p className="text-sm text-navy/60 leading-relaxed max-w-2xl mb-6">
              We provide physiotherapy at your doorstep across the service
              area shown below. Not sure if we cover your location? Call or
              WhatsApp us and we&rsquo;ll confirm right away.
            </p>

          
            <div className="overflow-hidden rounded-2xl border border-navy/10">
              <iframe
                title="NIHA Home Care service area"
                src="https://www.google.com/maps?q=India&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section> */}
          {/*
              Replace the src below with your exact clinic/service-area
              location. Easiest way: open Google Maps → search your
              address → Share → Embed a map → copy the src URL here.
            */}
      </main>
      <Contact />
    </>
  );
}