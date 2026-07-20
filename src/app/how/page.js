import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Home,
  Activity,
  Users,
  Award,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "About Us — NIHA Home Care",
  description:
    "Learn about NIHA Home Care's mission, values, and the therapists behind our home physiotherapy service.",
};

const stats = [
  { value: "500+", label: "Patients treated" },
  { value: "12+", label: "Cities covered" },
  { value: "98%", label: "Recovery satisfaction" },
  { value: "24/7", label: "Support availability" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Clinical rigor",
    detail:
      "Every plan is built on assessment, not guesswork. Our therapists are licensed and trained across orthopedic, neuro, and post-surgical care.",
  },
  {
    icon: Home,
    title: "Comfort of home",
    detail:
      "Recovery happens faster in familiar surroundings. We bring the equipment and expertise to you, on your schedule.",
  },
  {
    icon: Activity,
    title: "Progress you can see",
    detail:
      "Every session is logged and measured, so you and your therapist always know what's working and what's next.",
  },
  {
    icon: HeartHandshake,
    title: "Care that listens",
    detail:
      "Treatment plans adapt to how you're actually feeling, not a fixed script. Your therapist is a partner in recovery, not just a provider.",
  },
];

const story = [
  {
    year: "2019",
    title: "Started with one therapist, one city",
    detail:
      "NIHA began as a small home-visit practice for post-surgical patients who struggled to travel to clinics for rehab.",
  },
  {
    year: "2021",
    title: "Built a full clinical team",
    detail:
      "As demand grew, we brought on specialists in geriatric care, sports injury, and neuro-rehabilitation to cover more conditions.",
  },
  {
    year: "2024",
    title: "Expanded across cities",
    detail:
      "Today NIHA serves patients in over a dozen cities, with a structured process for assessment, treatment, and progress tracking.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        {/* Hero */}
        <section className="bg-mist pt-28 pb-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <span className="inline-flex rounded-full bg-band/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-band">
              About NIHA Home Care
            </span>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Physiotherapy that meets you where you recover.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              NIHA Home Care brings licensed physiotherapists to your doorstep,
              replacing clinic waiting rooms with a treatment plan built around
              your home, your pace, and your progress.
            </p>
          </div>
        </section>

        {/* Story + Image */}
     <section className="py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-band/10 rounded-[40px] blur-3xl opacity-40" />
                <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                  <Image
                    src="/images/about-us-2.jpg"
                    alt="NIHA Home Care therapist with patient"
                    width={600}
                    height={560}
                    className="w-full h-[420px] sm:h-[520px] object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-band/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-band">
                  Why we started NIHA
                </span>

                <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Recovery shouldn't depend on getting to a clinic.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Too many patients delay or abandon physiotherapy because
                  getting to a clinic is harder than the recovery itself.
                  We built NIHA to remove that barrier entirely — bringing
                  the same clinical standard of care into the home.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Every therapist on our team is licensed, background-checked,
                  and trained to treat independently outside a clinical
                  setting, with full access to your assessment history and
                  treatment plan on every visit.
                </p>

                <ul className="mt-8 space-y-4 border-t border-slate-200 pt-8">
                  {[
                    "Licensed physiotherapists, verified before every placement",
                    "Assessment-led treatment plans, not generic routines",
                    "Full visit history shared with you after every session",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-band/10 text-band">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-band/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-band">
                What we stand for
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
                The principles behind every visit.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-md"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-band/10 text-band">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story timeline */}
        {/* <section className="py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-band/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-band">
                Our story
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
                From one therapist to a full home-care team.
              </h2>
            </div>

            <div className="mt-16 space-y-10 border-l border-slate-200 pl-8">
              {story.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-band text-[10px] font-semibold text-white">
                    •
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-band">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-slate-600 leading-7">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Trust bar */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Licensed therapists",
                  detail: "Every therapist is verified and clinically trained.",
                },
                {
                  icon: Award,
                  title: "Structured protocols",
                  detail: "Assessment-led plans, not one-size-fits-all sessions.",
                },
                {
                  icon: Clock,
                  title: "Flexible scheduling",
                  detail: "Visits that fit your day, including evenings and weekends.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-band/10">
                    <item.icon className="h-5 w-5 text-band" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 leading-6">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}