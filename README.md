# Arroyo Technologies Website Starter

This is a fast full-stack Next.js starter for rebuilding Arroyo Technologies with:

- Search-friendly marketing pages
- Product pages for the three main offers
- Contact/lead form API
- Small AI-like sales assistant API
- Editable content in a single file
- Basic compliance page

## Stack

- Next.js 14
- React 18
- TypeScript
- Simple CSS, no theme gymnastics, because the clock is not your friend

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm install
npm run build
npm run start
```

## Key files

- `content/site.ts` -> main content and product data
- `app/page.tsx` -> homepage
- `app/products/[slug]/page.tsx` -> product detail pages
- `app/contact/page.tsx` -> contact page
- `app/api/contact/route.ts` -> saves inquiries to a JSON file
- `app/api/ai-query/route.ts` -> simple guided product assistant
- `lib/knowledge.ts` -> assistant knowledge base

## Make it client-ready fast

1. Replace placeholder copy in `content/site.ts` with final approved wording.
2. Verify all certification and compliance claims before publishing.
3. Wire `app/api/contact/route.ts` to one of these:
   - Resend
   - SMTP/Nodemailer
   - HubSpot form/CRM
   - Zoho CRM
   - Google Sheets webhook
4. Add final certificates, brochures, manuals, and partner documents as downloadable assets.
5. Set up analytics:
   - Google Analytics 4
   - Google Search Console
   - Meta Pixel, only if actually needed
6. Deploy on Vercel for the fastest path.

## Recommended next upgrades

- Add CMS only after the client approves page structure
- Add case studies and project galleries
- Add distributor enquiry workflow
- Add downloadable technical spec sheets per product
- Add WhatsApp CTA and quote scheduling

