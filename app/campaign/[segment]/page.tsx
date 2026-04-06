import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CampaignHeroImage } from '@/components/CampaignHeroImage';
import { LeadForm } from '@/components/LeadForm';
import { audienceSegments, campaignContent, campaignSeo, company, heroSlides, quickActions } from '@/content/site';

type SegmentKey = keyof typeof campaignSeo;

export function generateStaticParams() {
  return audienceSegments.map((segment) => ({ segment: segment.slug }));
}

export function generateMetadata({ params }: { params: { segment: string } }): Metadata {
  const key = params.segment as SegmentKey;
  const seo = campaignSeo[key];
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description
  };
}

export default function CampaignSegmentPage({ params }: { params: { segment: string } }) {
  const segment = audienceSegments.find((item) => item.slug === params.segment);
  if (!segment) {
    notFound();
  }
  const messaging = campaignContent[segment.slug as keyof typeof campaignContent];

  const hero = heroSlides[audienceSegments.findIndex((item) => item.slug === segment.slug) % heroSlides.length];
  const phone = company.phones[0]?.replace(/\s/g, '') ?? '';
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <section className="container section">
      <div className="split-section">
        <div className="card card--pad">
          <span className="eyebrow">{segment.title}</span>
          <h1>{messaging.headline}</h1>
          <p className="lead">{messaging.subheadline}</p>
          <div className="proof-card" style={{ marginTop: '1rem' }}>
            <CampaignHeroImage src={hero.src} fallback={hero.fallback} alt={`${segment.title} showcase`} />
          </div>
          <ul className="list-muted" style={{ marginTop: '1rem' }}>
            {messaging.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cta-row">
            <Link
              href="/contact"
              className="button"
              data-track-event="campaign_cta_click"
              data-track-label={`Campaign ${segment.slug} Primary`}
              data-track-location="campaign_page"
            >
              {messaging.primaryCta}
            </Link>
            <a
              href={`tel:${phone}`}
              className="button button--ghost"
              data-track-event="call_click"
              data-track-label={`Campaign ${segment.slug} Call`}
              data-track-location="campaign_page"
            >
              {quickActions.phoneLabel}
            </a>
            <a
              href={whatsappHref}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
              data-track-event="whatsapp_click"
              data-track-label={`Campaign ${segment.slug} WhatsApp`}
              data-track-location="campaign_page"
            >
              {quickActions.whatsappLabel}
            </a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
