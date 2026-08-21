# Swapnil Rahate — Portfolio

Premium single-page portfolio for **Swapnil Rahate**, Software Engineer (Frontend & Product Engineering).

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Motion.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build (all routes prerender static)
npm start       # serve the production build
npm run lint    # eslint
npx tsc --noEmit  # typecheck
```

---

## Environment variables

Only one, and it is optional in development:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, Open Graph, `robots.txt`, `sitemap.xml` | `https://swapnilrahate.com` |

Copy `.env.example` to `.env.local` and set it when the real domain is live.

---

## Two things to personalise

**1. Resume** — `public/resume.pdf` is wired to the "Download resume" buttons in
the hero and footer. It is the current A4 resume; replace the file to update it.

**2. Portrait** — `public/swapnil-hero.png` is the hero cut-out, wired via
`profile.portrait` in `lib/data/profile.ts`. It was produced from a photo with
macOS's Vision framework (`VNGenerateForegroundInstanceMaskRequest`) — the same
engine behind Preview's "Remove Background", run locally.

To swap in a different photo, cut it out to a transparent PNG and replace the
file. Remove the `portrait` line from `profile.ts` and the hero falls back to
the `SR` monogram automatically.

The stage lighting — beam, rim glow, floor grid, contact shadow — is all CSS, so
any cut-out drops into the same lighting. A **full-length** shot composes best;
the current image is cropped mid-thigh, so a CSS mask fades its lower edge into
the floor.

---

## Editing content

All copy lives in `lib/data/` — no content is hardcoded in components.

| File | Contains |
| --- | --- |
| `profile.ts` | Name, title, hero lockup, about copy, nav links, stats, core strengths, education, contact channels |
| `experience.ts` | Roles, dates, responsibilities, education entry |
| `triyara.ts` | TRIYARA V1–V4 versions, status, highlights, stack |
| `projects.ts` | Selected projects |
| `stack.ts` | Tech domains, system-design capabilities, marquee, tools |

Changing a headline means editing an array of strings — the two-tone
white/gold rendering and the masked reveal follow automatically.

---

## Architecture

```
app/
  layout.tsx          fonts, SEO metadata, JSON-LD Person schema
  page.tsx            section composition
  providers.tsx       MotionConfig (global reduced-motion handling)
  globals.css         design tokens + utilities (Tailwind v4 @theme)
  opengraph-image.tsx generated 1200×630 social card
  icon.tsx            generated favicon
  robots.ts / sitemap.ts
components/
  layout/             Navbar (+ mobile overlay), Footer
  sections/           Hero, About, Triyara, Projects, TechMatrix, Experience, Contact
  ui/                 MaskedHeading, Reveal, Button, Magnetic, Tag, Eyebrow,
                      Cursor, ScrollProgress, HeroVisual
lib/
  data/               all content
  hooks/              useMediaQuery (useSyncExternalStore, SSR-safe)
  motion.ts           shared easing, variants, viewport config
```

### Design system

Tokens are defined once in `app/globals.css` under `@theme` (Tailwind v4 is
CSS-first — there is no `tailwind.config.ts`).

| Token | Value | Role |
| --- | --- | --- |
| `--color-void` | `#060607` | Page background |
| `--color-gold` | `#e9b44c` | Primary accent |
| `--color-gold-bright` | `#f7dc9a` | Hover / highlight |
| `--color-bone` | `#f4f2ee` | Primary text |
| `--color-muted` | `#9a9793` | Body text |
| `--color-faint` | `#6a6764` | Labels |
| `--color-iris` | `#6366f1` | Secondary, used sparingly for status |

Type: **Anton** (display), **Inter** (body), **JetBrains Mono** (labels/tags),
**Mrs Saint Delafield** (signature). All self-hosted via `next/font`.

### Motion

- Shared easing (`[0.16, 1, 0.3, 1]`) and variants in `lib/motion.ts`.
- Headlines rise out of an `overflow-hidden` mask, line by line.
- TRIYARA cards stack with sticky positioning + scroll-linked scale on
  desktop; below `lg` they render as a plain list (CSS-driven, so there is no
  layout shift on load).
- **Reduced motion** is handled globally by `MotionConfig reducedMotion="user"`
  in `app/providers.tsx`, plus a `prefers-reduced-motion` block in
  `globals.css` for the CSS animations. Markup is identical either way, which
  is what keeps hydration clean.

---

## Contact form

The form has no backend. On submit it opens the visitor's mail client with the
message pre-filled, rather than faking a success state. To capture submissions
server-side, add a route handler at `app/api/contact/route.ts` and post to it
from `components/sections/Contact.tsx` (Resend is already used elsewhere in the
TRIYARA stack).

---

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — the framework
   is detected automatically, no build settings needed.
3. Add `NEXT_PUBLIC_SITE_URL` once the domain is attached.

Every route is static, so the whole site is served from the CDN.

---

## Accessibility

- Semantic landmarks, one `h1`, ordered heading levels.
- Skip link, visible focus rings, `aria-expanded`/`aria-controls` on the menu,
  Escape to close, scroll lock while open.
- Decorative layers are `aria-hidden`; the custom cursor never replaces the
  real one on touch or reduced-motion.


---

## Content source

Site copy is taken from the current resume
(`Swapnil_Rahate_A4_Final_4.5_3.5_Experience.pdf`). The performance figures in
the stats strip and the TRIYARA V1 card — Lighthouse 85 → 99 and LCP 4.2s →
1.0s — are the measured results recorded there. No metric on the site is
invented; if the resume changes, update `lib/data/` to match.

### A note on the phone number

`profile.phone` publishes a personal mobile number in the Contact section and
footer. It is live because it is on the resume. To remove it, delete the
`Phone` entry from the `channels` array in `lib/data/profile.ts` — both the
Contact list and the footer read from that one array.
