"use client";

function WhatsAppGlyph(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.34 1.7 6.16L3 29l7.99-2.63a12.9 12.9 0 0 0 5.03 1.01h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3Zm0 21.9h-.01a10.3 10.3 0 0 1-5.26-1.44l-.38-.22-4.74 1.56 1.58-4.62-.25-.4a10.24 10.24 0 0 1-1.57-5.46c0-5.68 4.63-10.31 10.32-10.31 2.76 0 5.35 1.08 7.3 3.03a10.24 10.24 0 0 1 3.02 7.3c0 5.68-4.63 10.56-10.01 10.56Zm5.65-7.72c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.69.16-.2.31-.79 1-.97 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.53-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.55.15-.18.2-.31.31-.52.1-.2.05-.39-.02-.54-.08-.16-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53-.18-.01-.38-.01-.59-.01-.2 0-.53.08-.81.39-.28.31-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.21 2.14 3.27 5.19 4.58.73.31 1.29.5 1.74.64.73.23 1.39.2 1.92.12.58-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48-.07-.13-.28-.21-.59-.36Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919940277264"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with NIHA Home Care on WhatsApp"
      className="focus-ring group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-recovery text-mist shadow-lg shadow-navy/20 hover:bg-recovery-light hover:scale-105 transition-all duration-200"
    >
      <WhatsAppGlyph className="w-7 h-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-navy text-mist text-xs font-body font-semibold px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-recovery animate-ping opacity-20 motion-reduce:hidden" />
    </a>
  );
}
