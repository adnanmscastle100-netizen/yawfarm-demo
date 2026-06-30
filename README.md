# Yaw Farm Coffee Roaster — Homepage (Next.js + Tailwind)

A portfolio demo homepage for a fictional Las Vegas coffee roastery.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a custom coffee palette (espresso, char, bark, copper, ember, cream)
- Fraunces (display serif) + Inter (body) via `next/font/google`
- Scroll-reveal animations via a small `FadeIn` client component (IntersectionObserver)
- Images sourced from Unsplash (free to use under the Unsplash License)

## Structure
```
app/
  layout.tsx     – fonts + metadata
  page.tsx        – all homepage sections
  globals.css     – base styles, scrollbar, roast-gradient utility
components/
  FadeIn.tsx      – scroll-triggered fade/slide-up wrapper
```

## Notes
- Sections: Hero, About, Featured Coffee, Gallery, Customer Reviews, Contact, Footer.
- Fully responsive (mobile nav collapses; gallery/grids reflow).
- Respects `prefers-reduced-motion`.
- Swap the Unsplash URLs in `app/page.tsx` for your own photography before going live, and replace the placeholder address/contact details.
