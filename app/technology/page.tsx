import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
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
          <Card as="section" key={pillar.title} className="card--pad segment-card">
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </Card>
        ))}
      </div>

      <h2>{technologyPage.processTitle}</h2>
      <ol className="step-list">
        {technologyPage.processSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <div className="cta-row page-cta">
        <Button asChild>
          <Link href="/products">View products</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">Book a consultation</Link>
        </Button>
      </div>
    </article>
  );
}
