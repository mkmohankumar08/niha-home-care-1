"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/how" },
  { label: "Services", href: "/services" },
  { label: "Why NIHA", href: "/why" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only "Home" ever gets hidden, and only while you're actually on "/".
  // Every other link (Services, Contact, etc.) always stays visible.
  const visibleLinks = LINKS.filter((l) => l.href !== "/" || pathname !== "/");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-mist/95 backdrop-blur shadow-[0_1px_0_0_rgba(20,41,79,0.08)]" : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="focus-ring rounded-md">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-9 font-body text-sm font-semibold text-navy/80">
          {visibleLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-band transition-colors focus-ring rounded">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919940277264"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy text-mist px-5 py-2.5 text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            <Phone size={15} strokeWidth={2.5} />
            +91 99402 77264
          </a>
        </div>

        <button
          className="md:hidden focus-ring rounded-md p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-mist border-t border-navy/10 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-body font-semibold text-navy">
            {visibleLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-navy/5 focus-ring rounded"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919940277264"
            className="mt-4 focus-ring flex items-center justify-center gap-2 rounded-full bg-navy text-mist px-5 py-3 text-sm font-semibold"
          >
            <Phone size={16} /> Call +91 99402 77264
          </a>
        </div>
      )}
    </header>
  );
}