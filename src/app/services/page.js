import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import {
  Activity,
  Baby,
  Brain,
  Dumbbell,
  Footprints,
  Hand,
  HeartHandshake,
  Stethoscope,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "All Services — NIHA Home Care",
  description:
    "The complete NIHA Home Care physiotherapy menu: pain relief, neuro and geriatric rehab, post-surgical, sports injury, women's health, pediatric care and more.",
};

// One accent per category — used for the icon, label, and card rule.
// Keeps 10 services legible instead of 10 unrelated gradient combinations.
const CATEGORY_STYLES = {
  "Pain & recovery": {
    accent: "band",
    bar: "bg-band",
    iconBg: "bg-band/10",
    iconText: "text-band",
    label: "text-band",
  },
  "Every stage of life": {
    accent: "recovery",
    bar: "bg-recovery",
    iconBg: "bg-recovery/10",
    iconText: "text-recovery",
    label: "text-recovery",
  },
  "Specialised technique": {
    accent: "clay",
    bar: "bg-clay",
    iconBg: "bg-clay/10",
    iconText: "text-clay",
    label: "text-clay",
  },
};

const SERVICES = [
  {
    name: "Pain relief",
    category: "Pain & recovery",
    detail: "Back, neck, joint and muscle pain",
    icon: Activity,
  },
  {
    name: "Post-surgical rehabilitation",
    category: "Pain & recovery",
    detail: "Joint and spine recovery",
    icon: Stethoscope,
  },
  {
    name: "Sports injury rehab",
    category: "Pain & recovery",
    detail: "Sprains, strains, muscle injuries",
    icon: Dumbbell,
  },
  {
    name: "Mobility & strength training",
    category: "Pain & recovery",
    detail: "Improve balance, build strength",
    icon: Footprints,
  },
  {
    name: "Geriatric care",
    category: "Every stage of life",
    detail: "Mobility, strength, fall prevention",
    icon: Users,
  },
  {
    name: "Women's health",
    category: "Every stage of life",
    detail: "Pre & postnatal care",
    icon: HeartHandshake,
  },
  {
    name: "Pediatric physiotherapy",
    category: "Every stage of life",
    detail: "Developmental delay, cerebral palsy",
    icon: Baby,
  },
  {
    name: "Neuro rehabilitation",
    category: "Specialised technique",
    detail: "Stroke, Parkinson's, balance & gait",
    icon: Brain,
  },
  {
    name: "Manual therapy & exercise",
    category: "Specialised technique",
    detail: "Personalised, hands-on treatment plans",
    icon: Hand,
  },
  {
    name: "Electrotherapy",
    category: "Specialised technique",
    detail: "TENS, IFT, ultrasound",
    icon: Zap,
  },
];

// Group services under their category so the page reads as an organised
// menu rather than a flat grid of ten unrelated cards.
const CATEGORIES = ["Pain & recovery", "Every stage of life", "Specialised technique"];

const HERO_PREVIEW = [
  { icon: Activity, label: "Pain relief", detail: "Back, neck, joint and muscle pain", style: CATEGORY_STYLES["Pain & recovery"] },
  { icon: Brain, label: "Neuro rehabilitation", detail: "Stroke, Parkinson's, balance & gait", style: CATEGORY_STYLES["Specialised technique"] },
  { icon: Users, label: "Geriatric care", detail: "Mobility, strength, fall prevention", style: CATEGORY_STYLES["Every stage of life"] },
  { icon: HeartHandshake, label: "Women's health", detail: "Pre & postnatal care", style: CATEGORY_STYLES["Every stage of life"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="bg-navy pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mt-8 mb-4">
                <span className="h-px w-8 bg-band-light" />
                <p className="font-mono text-xs tracking-[0.32em] uppercase text-band-light font-semibold">
                  Full service menu
                </p>
              </div>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-5xl text-mist leading-tight max-w-2xl">
                Physiotherapy services at home, organised by condition and care type.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-mist/70">
                Explore our complete menu of home physiotherapy: pain relief, neuro
                rehabilitation, geriatric care, post-surgical recovery, women&rsquo;s
                health, pediatric support and more — all delivered at your doorstep.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+919940277264"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-recovery px-6 py-3 text-sm font-semibold text-mist hover:bg-recovery-light transition-colors"
                >
                  Call +91 99402 77264
                </a>
                <a
                  href="https://wa.me/919940277264"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-mist/25 px-6 py-3 text-sm font-semibold text-mist hover:border-mist hover:bg-mist/5 transition-colors"
                >
                  WhatsApp us
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_PREVIEW.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-mist/12 bg-mist/[0.04] p-6 transition-colors duration-200 hover:bg-mist/[0.07] hover:border-mist/20"
                >
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.style.iconBg} ${item.style.iconText}`}
                  >
                    <item.icon size={20} strokeWidth={2.25} />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-mist">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-mist/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE MENU */}
        <section id="services" className="bg-mist py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="rounded-[24px] border border-navy/10 bg-white p-8">
              <p className="font-body text-sm text-navy/55 max-w-lg">
                Every plan is built around the patient, not a diagnosis code — and
                delivered where healing is easiest: at home.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-navy/40">
                    Your home, your schedule
                  </p>
                  <p className="mt-3 text-lg font-semibold text-navy">
                    One-to-one visits, tailored plans
                  </p>
                </div>
                <div className="rounded-2xl border border-navy/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-navy/40">
                    Trusted care
                  </p>
                  <p className="mt-3 text-lg font-semibold text-navy">
                    Experienced physiotherapists at every appointment
                  </p>
                </div>
              </div>
            </div>

            {CATEGORIES.map((category) => {
              const style = CATEGORY_STYLES[category];
              const items = SERVICES.filter((s) => s.category === category);
              return (
                <div key={category} className="mt-16">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy whitespace-nowrap">
                      {category}
                    </h2>
                    <span className="h-px flex-1 bg-navy/10" />
                    <span className={`text-xs font-mono uppercase tracking-[0.2em] ${style.label}`}>
                      {items.length} services
                    </span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((service) => (
                      <article
                        key={service.name}
                        className="group rounded-2xl border border-navy/10 bg-white overflow-hidden transition-colors duration-200 hover:border-navy/25"
                      >
                        <span className={`block h-[3px] w-full ${style.bar}`} />
                        <div className="p-6">
                          <div
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg} ${style.iconText}`}
                          >
                            <service.icon size={20} strokeWidth={2.25} />
                          </div>
                          <h3 className="mt-5 text-lg font-semibold text-navy leading-snug">
                            {service.name}
                          </h3>
                          <p className="mt-2 font-body text-sm text-navy/60 leading-relaxed">
                            {service.detail}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}