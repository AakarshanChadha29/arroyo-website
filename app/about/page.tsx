import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { aboutPage, company, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description
};

export default function AboutPage() {
  return (
    <article className="container section prose-page">
      <span className="eyebrow">About</span>
      <h1>{company.shortName}</h1>
      <p className="lead">{aboutPage.intro}</p>

      <Card as="article" className="card--pad about-visual">
        <Image
          src="/images/projects/enhanced/estate-pool-01.jpg"
          alt="Arroyo installation environment for premium residential project"
          width={1400}
          height={900}
          className="proof-image"
        />
      </Card>

      <h2>{aboutPage.focusTitle}</h2>
      <ul className="list-muted">
        {aboutPage.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p>{aboutPage.closing}</p>

      <div className="cta-row page-cta">
        <Button asChild>
          <Link href="/contact">Contact us</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/compliance">Documentation policy</Link>
        </Button>
      </div>
    </article>
  );
}
