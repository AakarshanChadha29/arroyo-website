# Arroyo Technologies Website Audit and Handover Notes

## What was visible from the live site

The live domain returns a JavaScript-only shell and a visible “Made with Emergent” badge when opened without client-side rendering. That means the public-facing content is not reliably exposed in a crawlable server response, which weakens SEO, trust, and reviewability.

## What the new structure fixes

- Homepage tells a clean story
- Products are separated into three buyer-friendly tracks
- Contact capture exists as a real API route
- A small guided AI query feature is included
- Compliance messaging is separated from sales copy
- Content is editable in one main file for quick handover

## Recommended menu

- Home
- About
- Pool Ionization
- IonEdge Portable Device
- Whole-Home / Villa System
- Compliance
- Contact / Get Quote

## Strongest website messages

1. Lower chlorine dependence
2. Lower operating cost and lower manual burden
3. Better swimmer comfort and premium water experience
4. Premium commercial positioning for hotels, societies, villas, and institutions

## Claims to verify before going live

- Patent status
- NSF references
- Exact ISO certificate numbers
- Exact BIS / regulatory applicability by product
- Any medical or health claim that sounds diagnostic or therapeutic

## Content priority for launch

### Must have
- Homepage
- Three product pages
- Contact page
- About page
- Compliance page

### Should have
- Download center
- Gallery / installs
- Partner / distributor page
- Case studies

## Fast deployment path

- Deploy to Vercel
- Add custom domain
- Connect business email form delivery
- Upload certificate PDFs and brochures
- Connect GA4 + Search Console

## Sales assistant feature included

The included assistant is intentionally small and safe:
- answers simple product-fit questions
- routes visitors toward the right product
- can be upgraded later to OpenAI or a real RAG stack

