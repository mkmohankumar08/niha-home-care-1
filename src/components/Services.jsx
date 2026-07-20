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
} from "lucide-react";

const SERVICES = [
  {
    name: "Pain relief",
    category: "Pain & recovery",
    detail: "Back, neck, joint and muscle pain",
    tone: "from-band via-band-light to-navy",
    icon: Activity,
  },
  {
    name: "Post-surgical rehabilitation",
    category: "Pain & recovery",
    detail: "Joint and spine recovery",
    tone: "from-band via-navy to-recovery",
    icon: Stethoscope,
  },
  {
    name: "Sports injury rehab",
    category: "Pain & recovery",
    detail: "Sprains, strains, muscle injuries",
    tone: "from-band via-clay to-navy",
    icon: Dumbbell,
  },
  {
    name: "Mobility & strength training",
    category: "Pain & recovery",
    detail: "Improve balance, build strength",
    tone: "from-band via-recovery to-clay",
    icon: Footprints,
  },
  {
    name: "Geriatric care",
    category: "Every stage of life",
    detail: "Mobility, strength, fall prevention",
    tone: "from-clay via-clay-light to-navy",
    icon: Users,
  },
  {
    name: "Women’s health",
    category: "Every stage of life",
    detail: "Pre & postnatal care",
    tone: "from-clay via-band to-recovery",
    icon: HeartHandshake,
  },
  {
    name: "Pediatric physiotherapy",
    category: "Every stage of life",
    detail: "Developmental delay, cerebral palsy",
    tone: "from-clay via-navy to-band",
    icon: Baby,
  },
  {
    name: "Neuro rehabilitation",
    category: "Specialised technique",
    detail: "Stroke, Parkinson's, balance & gait",
    tone: "from-recovery via-recovery-light to-navy",
    icon: Brain,
  },
  {
    name: "Manual therapy & exercise",
    category: "Specialised technique",
    detail: "Personalised, hands-on treatment plans",
    tone: "from-recovery via-clay to-navy",
    icon: Hand,
  },
  {
    name: "Electrotherapy",
    category: "Specialised technique",
    detail: "TENS, IFT, ultrasound",
    tone: "from-recovery via-band to-clay",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-mist py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-[32px] border border-navy/10 bg-white p-8 shadow-[0_24px_80px_rgba(20,41,79,0.08)]">
          <p className="font-body text-sm text-navy/55 max-w-lg">
            Every plan is built around the patient, not a diagnosis code — and delivered where healing is easiest: at home.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-navy/10 bg-navy/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-navy/40">Your home, your schedule</p>
              <p className="mt-3 text-lg font-semibold text-navy">One-to-one visits, tailored plans</p>
            </div>
            <div className="rounded-3xl border border-navy/10 bg-navy/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-navy/40">Trusted care</p>
              <p className="mt-3 text-lg font-semibold text-navy">Experienced physiotherapists at every appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className="group overflow-hidden rounded-[32px] border border-navy/10 bg-white shadow-2xl shadow-navy/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`relative h-64 bg-gradient-to-br ${service.tone} p-6 text-white`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.12),transparent_28%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/15 text-white shadow-lg shadow-black/10">
                    <service.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/70">{service.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold leading-snug">{service.name}</h3>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6">
                <p className="font-body text-sm text-navy/70 leading-relaxed">{service.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
