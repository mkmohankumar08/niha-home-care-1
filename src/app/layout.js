import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata = {
  title: "NIHA Home Care — Physiotherapy at Home",
  description:
    "Qualified physiotherapists at your doorstep. Pain relief, neuro rehab, geriatric, post-surgical, pediatric and sports injury care — delivered at home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-ink antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
