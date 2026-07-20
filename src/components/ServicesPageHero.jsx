import { Activity, ArrowLeft, ArrowRight, Brain, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";

export default function ServicesPageHero() {
  return (
    <section className="bg-navy pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,rgba(46,125,91,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(45,108,207,0.16),transparent_32%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="relative z-10">
        
          <p className="font-mono text-xs tracking-[0.32em] uppercase text-band-light font-semibold mt-8 mb-4">
            Full service menu
          </p>
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
              className="focus-ring inline-flex items-center justify-center rounded-full bg-recovery px-6 py-3 text-sm font-semibold text-mist shadow-lg shadow-recovery/20 hover:bg-recovery-light transition-colors"
            >
              Call +91 99402 77264
            </a>
            <a
              href="https://wa.me/919940277264"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-mist/20 bg-white/10 px-6 py-3 text-sm font-semibold text-mist hover:border-mist hover:bg-white/15 transition-colors"
            >
              WhatsApp us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Activity,
              label: "Pain relief",
              detail: "Back, neck, joint and muscle pain",
              tone: "from-band via-band-light to-navy",
            },
            {
              icon: Brain,
              label: "Neuro rehabilitation",
              detail: "Stroke, Parkinson's, balance & gait",
              tone: "from-recovery via-recovery-light to-navy",
            },
            {
              icon: Users,
              label: "Geriatric care",
              detail: "Mobility, strength, fall prevention",
              tone: "from-clay via-clay-light to-navy",
            },
            {
              icon: HeartHandshake,
              label: "Women’s health",
              detail: "Pre & postnatal care",
              tone: "from-band via-recovery to-clay",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${item.tone} p-6 text-white shadow-2xl shadow-navy/20 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%)] opacity-70" />
              <div className="relative flex h-full flex-col justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18 text-white">
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-mist/80">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-mist/90">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
