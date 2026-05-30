import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
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

      <section className="split-section split-section--feature">
        <Card as="article" className="card--pad">
          <span className="eyebrow">Deployment context</span>
          <h2>Built for real-world operating environments</h2>
          <p>
            Applications are planned around load, layout, and operator routine so recommendations stay practical for
            daily execution across residential and commercial settings.
          </p>
        </Card>
        <Card as="article" className="proof-card">
          <Image
            src="/images/projects/enhanced/hospitality-pool-01.jpg"
            alt="Hospitality pool installation environment"
            width={1200}
            height={900}
            className="proof-image"
          />
        </Card>
      </section>

      <div className="tech-pillars">
        {applicationsPage.segments.map((seg) => (
          <Card as="section" key={seg.title} className="card--pad segment-card">
            <h2>{seg.title}</h2>
            <p>{seg.text}</p>
            <ul className="list-muted">
              {seg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="cta-row page-cta">
        <Button asChild>
          <Link href="/products">Compare product lines</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">Discuss your site</Link>
        </Button>
      </div>
    </article>
  );
}
