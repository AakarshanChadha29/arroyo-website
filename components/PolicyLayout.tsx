import Link from 'next/link';
import type { PolicyDocument } from '@/content/legal';
import { legalContact } from '@/content/legal';

type PolicyLayoutProps = {
  policy: PolicyDocument;
  showBreadcrumb?: boolean;
};

export function PolicyLayout({ policy, showBreadcrumb = true }: PolicyLayoutProps) {
  const phoneHref = `tel:${legalContact.phone.replace(/\s/g, '')}`;

  return (
    <>
      <header className="policy-hero" aria-labelledby="policy-title">
        <div className="container policy-hero__inner">
          {showBreadcrumb ? (
            <nav className="policy-breadcrumb" aria-label="Breadcrumb">
              <Link href="/legal">Legal Center</Link>
              <span aria-hidden="true">/</span>
              <span>{policy.title}</span>
            </nav>
          ) : null}
          <span className="eyebrow">Legal</span>
          <h1 id="policy-title">{policy.title}</h1>
          <p className="policy-meta">
            <time dateTime="2026-05-07">Effective {policy.effectiveDate}</time>
          </p>
          <p className="lead policy-hero__intro">{policy.intro}</p>
        </div>
      </header>

      <article className="container policy-layout">
        {policy.sections.map((section, index) => (
          <section key={section.title} className="policy-section" aria-labelledby={`policy-section-${index}`}>
            <h2 id={`policy-section-${index}`}>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.listItems?.length ? (
              <ul className="list-muted">
                {section.listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <aside className="card card--pad policy-contact-card" aria-labelledby="policy-contact-heading">
          <span className="eyebrow">Contact</span>
          <h2 id="policy-contact-heading">Policy inquiries</h2>
          <p>For questions about this policy, reach Arroyo Technologies using the details below.</p>
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
          <div className="cta-row page-cta">
            <Link href="/legal" className="button button--ghost">
              Back to Legal Center
            </Link>
            <Link href="/contact" className="button">
              Contact us
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}
