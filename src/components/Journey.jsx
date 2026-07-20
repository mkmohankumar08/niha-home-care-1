import {
  ClipboardCheck,
  House,
  Activity,
  HeartHandshake,
} from "lucide-react";

const STAGES = [
  {
    title: "Assessment",
    icon: ClipboardCheck,
    description:
      "Our physiotherapist visits your home, understands your condition, and creates a personalized treatment plan.",
  },
  {
    title: "Home Treatment",
    icon: House,
    description:
      "Receive one-to-one physiotherapy sessions in the comfort of your home using evidence-based techniques.",
  },
  {
    title: "Progress Tracking",
    icon: Activity,
    description:
      "We monitor your recovery and adjust your treatment plan to achieve the best possible results.",
  },
  {
    title: "Recovery",
    icon: HeartHandshake,
    description:
      "Regain strength, improve mobility, and continue with simple home exercises for lasting wellness.",
  },
];

export default function Journey() {
  return (
    <>
   <section id="journey" className="py-6 md:py-16 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        How It Works
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
        Your Recovery Journey
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        From your first consultation to complete recovery, we provide
        personalized physiotherapy at every step.
      </p>

    </div>

    <div className="relative mt-20">

      {/* Desktop Line */}

      <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-slate-200"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

        {STAGES.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">

                {index + 1}

              </div>

              {/* Icon */}

              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">

                <Icon className="text-emerald-600" size={30} />

              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-3 text-slate-600 leading-7">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </div>

  </div>

</section>

</>

  );
}
