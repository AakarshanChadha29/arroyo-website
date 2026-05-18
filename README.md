# Arroyo Technologies Website

Marketing site for [Arroyo Technologies](https://www.arroyo-technologies.com) — pool ionization, IonEdge portable purification, and whole-property water treatment for hospitality, institutions, and premium residential projects.

Built with Next.js 14 (App Router), TypeScript, and a single CSS design system. Content is editable in TypeScript modules without a CMS.

## Stack

- **Next.js 14** — App Router, static generation, SEO metadata
- **React 18** + **TypeScript**
- **CSS** — design tokens in `app/globals.css` (no Tailwind)
- **Vercel Analytics** — optional via `@vercel/analytics`
- **Resend** — optional contact-form email delivery

## Local development

```bash
npm install
cp .env.example .env.local   # optional: analytics + contact email
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve production build locally
npm run lint     # ESLint (requires config on first run)
```

## Site routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/technology` | Technology overview |
| `/products` | Product index |
| `/products/[slug]` | Product detail (3 SKUs) |
| `/applications` | Application segments |
| `/campaign/[segment]` | Segment landing pages (`schools`, `hotels`, `residential`, `commercial`) |
| `/projects` | Installations & proof |
| `/about` | Company overview |
| `/compliance` | Documentation posture |
| `/contact` | Consultation & lead form |
| `/legal` | Legal Center hub |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms & conditions |
| `/cookie-policy` | Cookie policy |
| `/refund-and-cancellation-policy` | Refund & cancellation |
| `/warranty-and-replacement-policy` | Warranty & replacement |
| `/delivery-and-installation-policy` | Delivery & installation |
| `/product-disclaimer` | Product disclaimer |

## Project structure

```
app/                    # Pages and API routes
  api/contact/          # Lead form submission
  api/product-help/     # Guided product Q&A
  legal/                # Legal Center
  */page.tsx            # Policy and marketing pages
components/             # Header, Footer, forms, layouts
  PolicyLayout.tsx      # Shared legal/policy page shell
content/
  site.ts               # Products, nav, SEO, marketing copy
  legal.ts              # Policies, legal contact, footer legal links
lib/
  contact.ts            # Validation + Resend / JSON fallback
  knowledge.ts          # Product-help knowledge base
  tracking.ts           # Client event helpers
public/                 # Images, logo, testimonial videos
```

## Content editing

| File | What to change |
|------|----------------|
| `content/site.ts` | Company info, products, navigation, homepage copy, SEO defaults |
| `content/legal.ts` | Policy text, effective dates, legal contact, footer legal links |

Navigation and footer **Site** links follow `navLinks` in `content/site.ts`. **Legal** links use `footerLegalLinks` in `content/legal.ts`. The header menu includes a **Legal** column and a top-bar **Legal** link (desktop).

## Environment variables

Copy `.env.example` to `.env.local` (local) or set in your host (e.g. Vercel).

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag |
| `RESEND_API_KEY` | Send lead emails via Resend |
| `CONTACT_FROM_EMAIL` | From address for lead emails |
| `CONTACT_TO_EMAIL` | Inbox for lead emails |

If Resend vars are omitted, `/api/contact` appends submissions to `contact-submissions.json` in the project root (useful locally; not ideal for serverless production).

## Deployment

Recommended: **Vercel**, connected to this repository’s `main` branch.

1. Import the GitHub repo in Vercel.
2. Add environment variables from `.env.example`.
3. Attach custom domain `arroyo-technologies.com`.
4. Confirm `npm run build` succeeds (runs automatically on deploy).

## Compliance note

Keep certification, performance, and health claims conservative on the public site. Use `content/site.ts` and project proposals for numbers and regulatory language. See `AUDIT_AND_HANDOVER.md` for launch checklist and claim review guidance.

## Repository

- **GitHub:** [AakarshanChadha29/arroyo-website](https://github.com/AakarshanChadha29/arroyo-website)
- **Live:** [www.arroyo-technologies.com](https://www.arroyo-technologies.com)
