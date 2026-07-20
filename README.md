# NIHA Home Care — Next.js website

React + Next.js (App Router) + Tailwind CSS site for NIHA Home Care.

## Pages

- `/` — home page: hero, how-it-works journey, services teaser, why NIHA, contact
- `/services` — the full service menu, all 10 services grouped by category

## Sticky WhatsApp button

A floating WhatsApp icon sits bottom-right on every page (`src/components/WhatsAppButton.jsx`) and opens a chat at `+91 99402 77264`. Update the number by editing the `wa.me` link in that file (and in `Navbar.jsx` / `Hero.jsx` / `Contact.jsx`).

## Design notes

- **Palette:** Clinical Navy `#14294F`, Recovery Green `#2E7D5B`, Band Blue `#2D6CDF` (from the resistance band in the original poster), Clay Rose `#C86B72`, Mist White `#F1F4F1`.
- **Type:** Fraunces (headlines), Public Sans (body), IBM Plex Mono (labels). Loaded via Google Fonts in `layout.js`.
- **Theme tokens** live in `src/app/globals.css` under `@theme` (Tailwind v4 syntax).

## Structure

```
src/
  app/
    layout.js         — fonts, metadata, mounts the sticky WhatsApp button
    page.js            — home page
    services/page.js   — full services menu page
    globals.css
  components/
    Navbar.jsx
    Hero.jsx
    Journey.jsx
    ServicesTeaser.jsx — condensed preview shown on the home page
    Services.jsx       — full grouped grid, used on /services
    ServicesPageHero.jsx
    WhyChoose.jsx
    Contact.jsx         — contact block + footer
    WhatsAppButton.jsx  — sticky floating button
    Logo.jsx
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start    # serve the production build
```

Requires Node.js 18.18+.
