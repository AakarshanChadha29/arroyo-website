import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { legalCenterMeta, legalContact, policyDocuments } from '@/content/legal';

export const metadata: Metadata = {
  title: legalCenterMeta.seo.title,
  description: legalCenterMeta.seo.description,
  openGraph: {
    title: legalCenterMeta.seo.title,
    description: legalCenterMeta.seo.description
  }
};

export default function LegalCenterPage() {
  const phoneHref = `tel:${legalContact.phone.replace(/\s/g, '')}`;

  return (
    <>
      <header className="policy-hero policy-hero--center" aria-labelledby="legal-center-title">
        <div className="container policy-hero__inner">
          <span className="eyebrow">Legal</span>
          <h1 id="legal-center-title">{legalCenterMeta.title}</h1>
          <p className="policy-meta">
            <time dateTime="2026-05-07">Last updated {legalCenterMeta.lastUpdated}</time>
          </p>
          <p className="lead policy-hero__intro">{legalCenterMeta.intro}</p>
        </div>
      </header>

      <section className="container section section--tight legal-center" aria-labelledby="legal-policies-heading">
        <div className="section-header section-header--wide">
          <h2 id="legal-policies-heading">Policies</h2>
          <p className="lead">Select a policy to read the full terms that apply to our website, products, and services.</p>
        </div>

        <ul className="legal-center-grid" role="list">
          {policyDocuments.map((policy) => (
            <li key={policy.slug}>
              <Card as="article" className="card--pad legal-policy-card">
                <h3>
                  <Link href={policy.href}>{policy.title}</Link>
                </h3>
                <p>{policy.cardDescription}</p>
                <Link href={policy.href} className="text-link" aria-label={`Read ${policy.title}`}>
                  Read policy
                </Link>
              </Card>
            </li>
          ))}
        </ul>

        <Card as="aside" className="card--pad policy-contact-card legal-center-contact" aria-labelledby="legal-contact-heading">
          <span className="eyebrow">Contact</span>
          <h2 id="legal-contact-heading">Policy-related queries</h2>
          <p>For any policy-related query, contact Arroyo Technologies using the details below.</p>
          <address className="policy-contact-card__address">
            <strong>{legalContact.company}</strong>
            {legalContact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span>
              Phone:{' '}
              <a href={phoneHref} className="text-link">
                {legalContact.phone}
              </a>
            </span>
            <span>
              Email:{' '}
              <a href={`mailto:${legalContact.email}`} className="text-link">
                {legalContact.email}
              </a>
            </span>
            <span>
              Website:{' '}
              <a href={legalContact.website} className="text-link" rel="noopener noreferrer">
                {legalContact.website.replace(/^https?:\/\//, '')}
              </a>
            </span>
          </address>
        </Card>
      </section>
    </>
  );
}
