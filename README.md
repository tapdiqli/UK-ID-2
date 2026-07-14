# BritCasinoChoice

An independent, multi-page **affiliate casino comparison website for the UK market**, built with the latest **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

Domain: **britcasinochoice.com** · Language: **English (en-GB)**

> ⚠️ 18+ only. Gambling can be addictive — please play responsibly. For free, confidential support visit [BeGambleAware.org](https://www.begambleaware.org).

---

## Features

- **Multi-page architecture** with distinct layouts per page
- **Brands above the fold** — top-rated casinos are visible on landing pages without scrolling
- **Single source of truth** — all brand & site content lives in [`src/data/data.json`](src/data/data.json)
- **Google Ads / UK compliance built in**
  - Persistent 18+ / BeGambleAware compliance strip on every page
  - Cookie consent banner (accept / reject)
  - Affiliate disclosure on comparison pages
  - Dedicated **Responsible Gambling**, **Privacy Policy**, **Terms & Conditions** and **Cookie Policy** pages
  - Links to UKGC, BeGambleAware, GamCare, GAMSTOP & Gamblers Anonymous
- **SEO ready** — per-page metadata, Open Graph, JSON-LD, `sitemap.xml` and `robots.txt`
- **Accessible & responsive** — semantic HTML, keyboard-friendly, `prefers-reduced-motion` support

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero with top casinos above the fold, rankings, bonuses, FAQ |
| `/casinos` | Full casino comparison (table + detailed cards) |
| `/casinos/[slug]` | Individual casino review (SSG) |
| `/bonuses` | Bonus offers grouped by type |
| `/guides` + `/guides/[slug]` | Player guides (SSG) |
| `/how-we-rate` | Review methodology & scorecard |
| `/about` | About the site & values |
| `/contact` | Contact form & support links |
| `/responsible-gambling` | Safer-gambling tools & help |
| `/privacy-policy`, `/terms`, `/cookie-policy` | Legal pages |

## Colour palette (Forest Green)

| Token | Hex |
| --- | --- |
| `forest-800` | `#1B5E20` |
| `forest-600` | `#2E7D32` |
| `forest-400` | `#66BB6A` |
| `ink` (dark) | `#263238` |
| white | `#FFFFFF` |

Defined in [`src/app/globals.css`](src/app/globals.css) via Tailwind v4 `@theme`.

## Project structure

```
src/
├── app/                # App Router pages, sitemap, robots, layout
├── components/
│   ├── layout/         # Header, Footer, ComplianceStrip, PageHero
│   ├── brands/         # BrandRankCard, BrandMiniCard
│   ├── common/         # FaqAccordion, TrustBar, ContactForm, CookieConsent, LegalDoc
│   └── ui/             # Button, Badge, Icon, StarRating, BrandLogo, SectionHeading
├── data/
│   └── data.json       # ← all brand & site content
└── lib/
    ├── data.ts         # typed data-access helpers
    ├── types.ts        # TypeScript interfaces
    └── nav.ts          # navigation config
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Editing content

All showcased brands and site copy are in **`src/data/data.json`**. Add a brand object to the `brands` array (matching the `Brand` interface in `src/lib/types.ts`) and it automatically appears in the rankings, comparison table, bonuses page, and gets its own review page.

## Disclaimer

This is a demonstration affiliate template. Brand names, licences and offers are fictional and for illustration only. Replace with your own verified, UKGC-licensed partner data and affiliate links before going live. Always ensure compliance with the UK Gambling Commission, ASA/CAP codes and Google Ads gambling policies for your target market.
