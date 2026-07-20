import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "Why NIHA Home Care",
  description: "Learn why NIHA Home Care is the best choice for home physiotherapy and how it supports recovery at every step.",
};

export default function WhyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="bg-white pt-28 pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-emerald-50 via-slate-50 to-sky-50 p-10 shadow-[0_24px_80px_rgba(20,41,79,0.08)]">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">
                  Why NIHA
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Why you need NIHA Home Care for physiotherapy.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Home physiotherapy brings expert rehabilitation to your living room, reducing travel strain, improving comfort and speeding recovery with personalized attention.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    title: "Convenience",
                    description: "Skip clinic travel and receive care in the comfort of home.",
                  },
                  {
                    title: "Personalized care",
                    description: "Each session is tailored to your condition, pace and living space.",
                  },
                  {
                    title: "Trusted therapists",
                    description: "Experienced physiotherapists deliver reliable, compassionate support.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
                    <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
          <WhyChoose />
        </section>
      </main>
      <Contact />
    </>
  );
}
