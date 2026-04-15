import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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

      <article className="card card--pad about-visual">
        <Image
          src="/images/projects/curated/project-installation-01.png"
          alt="Arroyo installation environment for premium residential project"
          width={1400}
          height={900}
          className="proof-image"
        />
      </article>

      <h2>{aboutPage.focusTitle}</h2>
      <ul className="list-muted">
        {aboutPage.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p>{aboutPage.closing}</p>

      <div className="cta-row page-cta">
        <Link href="/contact" className="button">
          Contact us
        </Link>
        <Link href="/compliance" className="button button--ghost">
          Documentation policy
        </Link>
      </div>
    </article>
  );
}
