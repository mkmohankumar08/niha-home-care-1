import { Check, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const REASONS = [
  "Qualified & experienced physiotherapists",
  "Personalized one-to-one care",
  "Home visits at your convenience",
  "Faster recovery, better results",
  "Safe, reliable & compassionate care",
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-mist ">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center pt-10">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-recovery font-medium mb-4">
            Why NIHA
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy leading-tight">
            The clinic came to us. So we built the reverse.
          </h2>
          <ul className="mt-9 space-y-4">
            {REASONS.map((r) => (
              <li key={r} className="flex items-start gap-3.5 font-body text-navy/75">
                <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-recovery/15 text-recovery shrink-0">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>

          <div className="bg-navy rounded-3xl p-10 sm:p-12 relative overflow-hidden">
          <svg
            className="absolute -bottom-10 -right-10 opacity-20"
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 110 C 60 60, 90 160, 130 110 C 160 70, 175 90, 210 60"
              stroke="#2D6CDF"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
          <p className="font-display italic text-2xl sm:text-3xl text-mist leading-snug relative">
              &ldquo;We bring physiotherapy to you, so you can heal where you feel at home.&rdquo;
          </p>
          <div className="mt-9 flex items-center gap-3 relative">
            <div className="w-11 h-11 rounded-full bg-recovery/20 flex items-center justify-center font-display font-semibold text-recovery-light">
              N
            </div>
            <div>
              <p className="font-body font-semibold text-mist text-sm">The NIHA promise</p>
              <p className="font-body text-mist/50 text-xs">Your health. Our priority.</p>
            </div>
          </div>
        </div>
      </div>
       <div className="px-6 text-white"> <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 to-emerald-500 p-8  mt-20 mx-auto max-w-6xl ">
      
                <div className="mx-auto max-w-3xl text-center">
      
                  <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                    Let's Get Started
                  </span>
      
                  <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                    Ready To Start Your Recovery?
                  </h2>
      
                  <p className="mt-6 text-lg leading-8 text-emerald-50">
                    Experience professional home physiotherapy with
                    personalized treatment plans designed for faster recovery,
                    pain relief and improved mobility.
                  </p>
      
                  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      
                    <Link
                      href="tel:+919940277264"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-emerald-600 transition hover:scale-105"
                    >
                      <Phone size={18} />
                      Call Now
                    </Link>
      
                    <Link
                      href="https://wa.me/919940277264"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold hover:bg-white/10"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </Link>
      
                  </div>
      
                </div>
      
              </div></div>

    </section>
  );
}
