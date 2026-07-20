import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Home,
  Activity,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative hidden lg:block">

            <div className="absolute -inset-4 bg-emerald-100 rounded-[40px] blur-3xl opacity-40"></div>

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about-us-2.jpg"
                alt="NIHA Home Care"
                width={600}
                height={520}
                className="w-full h-[520px] object-cover"
              />
            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              About NIHA Home Care
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Bringing Professional
              <br />
              Physiotherapy
              <span className="text-emerald-600"> Home.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
  NIHA Home Care provides expert physiotherapy at your doorstep, helping
  patients relieve pain, restore mobility, and recover comfortably with
  personalized treatment.
</p>

<p className="mt-4 text-lg leading-8 text-slate-600">
  From post-surgery rehabilitation to elderly care and sports injuries,
  our experienced therapists are committed to your recovery.
</p>

            {/* Features */}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

  {[
    { icon: ShieldCheck, title: "Expert Therapists" },
    { icon: Home, title: "Home Visit Service" },
    { icon: Activity, title: "Personalized Treatment" },
    { icon: HeartHandshake, title: "Compassionate Care" },
  ].map(({ icon: Icon, title }) => (
    <div
      key={title}
      className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
        <Icon className="h-5 w-5 text-emerald-600" />
      </div>

      <h4 className="font-medium text-slate-800">
        {title}
      </h4>
    </div>
  ))}

</div>
          </div>

        </div>

      </div>
    </section>
  );
}