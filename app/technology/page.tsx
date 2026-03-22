import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, technologyPage } from '@/content/site';

export const metadata: Metadata = {
  title: seo.technology.title,
  description: seo.technology.description
};

export default function TechnologyPage() {
  return (
    <article className="container section prose-page prose-wide">
      <span className="eyebrow">Technology</span>
      <h1>{technologyPage.title}</h1>
      <p className="lead">{technologyPage.intro}</p>

      <div className="tech-pillars">
        {technologyPage.pillars.map((pillar) => (
          <section key={pillar.title} className="card card--pad segment-card">
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </section>
        ))}
      </div>

      <h2>{technologyPage.processTitle}</h2>
      <ol className="step-list">
        {technologyPage.processSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <div className="cta-row page-cta">
        <Link href="/products" className="button">
          View products
        </Link>
        <Link href="/contact" className="button button--ghost">
          Book a consultation
        </Link>
      </div>
    </article>
  );
}
