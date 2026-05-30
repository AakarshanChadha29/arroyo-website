import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { documentationGuidance, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.compliance.title,
  description: seo.compliance.description
};

export default function CompliancePage() {
  return (
    <article className="container section prose-page prose-wide">
      <span className="eyebrow">Documentation</span>
      <h1>Documentation &amp; compliance posture</h1>
      <p className="lead">
        This site uses conservative public language. Product-specific technical and compliance documentation is available on
        request once we understand your application. We do not use the marketing site to assert certifications, patents, or
        regulatory outcomes without client-approved references.
      </p>

      <h2>Checklist before publishing new claims</h2>
      <ul className="list-muted">
        {documentationGuidance.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>What to request from us</h2>
      <p>
        For tenders, imports, or facility sign-off, ask for the document pack relevant to the SKU and region. We will confirm
        what exists, what is in progress, and what cannot be stated publicly.
      </p>

      <div className="cta-row page-cta">
        <Button asChild>
          <Link href="/contact">Request documentation</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/products">View products</Link>
        </Button>
      </div>
    </article>
  );
}
