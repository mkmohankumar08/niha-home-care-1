import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mist pt-32 pb-24 px-2">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-recovery/25 bg-recovery/10 px-4 py-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-recovery" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-recovery">
              NIHA Home Care
            </span>
            <span className="text-recovery/35">•</span>
            <span className="text-xs font-medium text-recovery/80">
              Physiotherapy at Home
            </span>
          </div>

          <h1 className="font-display text-[42px] lg:text-6xl font-bold leading-tight text-navy">
            Physiotherapy
            <br />
            <span className="text-recovery">Services at Home</span>
          </h1>

          <p className="mt-4 text-2xl italic text-recovery font-medium">
            Heal at Home. Get Stronger Every Day.
          </p>

          <p className="mt-7 text-lg leading-8 text-navy/60 max-w-xl">
            Expert physiotherapy at your doorstep. We provide personalized
            care for pain relief, rehabilitation, mobility, and
            recovery—all from the comfort of your home
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+919940277264"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-mist font-semibold hover:bg-navy/90 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="#services"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-recovery px-8 py-4 font-semibold text-recovery hover:bg-recovery hover:text-mist transition-colors"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Trust Items */}
          {/* <div className="mt-10 flex flex-wrap gap-8">

  <div className="flex items-center gap-2">
    <ShieldCheck size={20} className="text-recovery" />
    <span className="text-sm font-medium text-navy/70">
      Certified Therapists
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Award size={20} className="text-band" />
    <span className="text-sm font-medium text-navy/70">
      Home Visit Service
    </span>
  </div>

  <div className="flex items-center gap-2">
    <HeartHandshake size={20} className="text-clay" />
    <span className="text-sm font-medium text-navy/70">
      Personalized Care
    </span>
  </div>

</div> */}
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-navy/10">
            <img
              src="/images/hero-img-1.png"
              alt="NIHA Home Care Physiotherapy"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Appointment Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl border border-navy/10 p-5 w-72">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-recovery/10 flex items-center justify-center">
                <Phone className="text-recovery" size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-navy">
                  Book Home Visit
                </h3>
                <p className="text-sm text-navy/50">
                  Available 7 Days a Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}