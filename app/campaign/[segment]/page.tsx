import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CampaignHeroImage } from '@/components/CampaignHeroImage';
import { LeadForm } from '@/components/LeadForm';
import { Button, Card } from '@/components/ui';
import { audienceSegments, campaignContent, campaignSeo, company, quickActions } from '@/content/site';

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

  const phone = company.phones[0]?.replace(/\s/g, '') ?? '';
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <section className={`container section campaign-page campaign-page--${segment.slug}`}>
      <div className="split-section">
        <Card className="card--pad campaign-card">
          <span className="eyebrow campaign-eyebrow">{segment.title}</span>
          <h1>{messaging.headline}</h1>
          <p className="lead">{messaging.subheadline}</p>
          <div className="proof-card campaign-hero-media">
            <CampaignHeroImage
              src={messaging.visual.src}
              fallback={messaging.visual.fallback}
              alt={`${segment.title} campaign visual`}
            />
          </div>
          <p className="campaign-block-label">Key outcomes for this segment</p>
          <ul className="list-muted campaign-benefits">
            {messaging.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="campaign-block-label">Visual proof and implementation fit</p>
          <div className="campaign-proof-band">
            <div className="proof-card campaign-proof-band__media">
              <CampaignHeroImage src={messaging.visual.proofSrc} fallback={messaging.visual.fallback} alt={`${segment.title} proof visual`} />
            </div>
            <div className="campaign-proof-band__content">
              <p>{messaging.visual.proofCaption}</p>
              <ul className="list-muted">
                {messaging.trustPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cta-row">
            <Button asChild>
              <Link
                href="/contact"
                data-track-event="campaign_cta_click"
                data-track-label={`Campaign ${segment.slug} Primary`}
                data-track-location="campaign_page"
              >
                {messaging.primaryCta}
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={`tel:${phone}`}
                data-track-event="call_click"
                data-track-label={`Campaign ${segment.slug} Call`}
                data-track-location="campaign_page"
              >
                {quickActions.phoneLabel}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                data-track-event="whatsapp_click"
                data-track-label={`Campaign ${segment.slug} WhatsApp`}
                data-track-location="campaign_page"
              >
                {quickActions.whatsappLabel}
              </a>
            </Button>
          </div>
        </Card>
        <div className="campaign-form-wrap">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
