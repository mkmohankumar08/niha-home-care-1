import {
  Activity,
  ArrowRight,
  Brain,
  ChevronRight,
  Dumbbell,
  HeartHandshake,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { icon: Activity, name: "Pain Relief", detail: "Back, neck & joint pain" },
  { icon: Brain, name: "Neuro Rehabilitation", detail: "Stroke & Parkinson's recovery" },
  { icon: Stethoscope, name: "Post-Surgical Rehab", detail: "Joint & spine recovery" },
  { icon: Dumbbell, name: "Sports Injury Rehab", detail: "Sports injury treatment" },
  { icon: Users, name: "Geriatric Care", detail: "Balance & fall prevention" },
  { icon: HeartHandshake, name: "Women's Health", detail: "Pre & postnatal care" },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[530px_1fr] lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Our Services
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Expert Physiotherapy
              <span className="block text-emerald-600">
                At Your Home
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Personalized home physiotherapy designed for pain relief,
              rehabilitation and long-term recovery.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href="/services"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 lg:p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-50 group-hover:bg-emerald-100">
                      <Icon className="text-emerald-600" size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        {service.detail}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                    size={20}
                  />
                </Link>
              );
            })}

            <div className="rounded-3xl bg-emerald-600 p-6 text-white sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">
                Need Personalized Treatment?
              </h3>

              <p className="mt-3 text-sm leading-7 text-emerald-100 sm:text-base">
                Get a customized physiotherapy plan from experienced therapists
                in the comfort of your home.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
