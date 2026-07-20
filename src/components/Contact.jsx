import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Logo from "./Logo";



export default function Contact() {
  return (
    <section
      id="contact"
      className=" text-white"
    >
        
         
         
         
        <div className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-6">

        {/* CTA */}

    

       

        {/* Footer */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <Logo dark />

            <p className="text-sm text-slate-400">
              Providing professional home physiotherapy services with
              compassionate care and personalized treatment.
            </p>

          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">

            <p>
              © {new Date().getFullYear()} NIHA Home Care. All rights reserved.
            </p>

            <p>
              Better Movement • Better Health • Better Life
            </p>

          </div>

        </div>

      </div>
      </div>
    </section>
  );
}