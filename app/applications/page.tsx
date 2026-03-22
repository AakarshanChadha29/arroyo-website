import type { Metadata } from 'next';
import Link from 'next/link';
import { applicationsPage, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.applications.title,
  description: seo.applications.description
};

export default function ApplicationsPage() {
  return (
    <article className="container section prose-page prose-wide">
      <span className="eyebrow">Applications</span>
      <h1>{applicationsPage.title}</h1>
      <p className="lead">{applicationsPage.intro}</p>

      <div className="tech-pillars">
        {applicationsPage.segments.map((seg) => (
          <section key={seg.title} className="card card--pad segment-card">
            <h2>{seg.title}</h2>
            <p>{seg.text}</p>
            <ul className="list-muted">
              {seg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="cta-row page-cta">
        <Link href="/products" className="button">
          Compare product lines
        </Link>
        <Link href="/contact" className="button button--ghost">
          Discuss your site
        </Link>
      </div>
    </article>
  );
}
