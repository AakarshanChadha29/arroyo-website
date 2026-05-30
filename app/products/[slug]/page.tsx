import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button, Card } from '@/components/ui';
import {
  ionEdgeRefinement,
  poolBenefitsSourceNote,
  poolHealthBenefits,
  poolMarketingReferenceVisuals,
  poolProgramHighlights,
  products
} from '@/content/site';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription
    }
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const isPool = product.slug === 'swimming-pool-ionization-system';
  const isIonEdge = product.slug === 'ionedge-portable-water-cleaning-device';
  const stickyVisualSrc = isIonEdge
    ? '/images/updates/ionedge-portable-water-cleaning-device-2.png'
    : product.image;
  const stickyVisualAlt = isIonEdge
    ? 'IonEdge portable water cleaning device in product display setup'
    : product.imageAlt;

  return (
    <article className="container section">
      <div className="product-detail">
        <div>
          <span className="eyebrow">Product</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <div className="product-metadata-strip">
            <p>{product.audience.length} application contexts</p>
            <p>{product.features.length} core features</p>
            <p>{product.benefits.length} practical benefits</p>
          </div>

          <section className="product-info-grid">
            <Card as="article" className="card--pad product-info-block">
              <h2>Applications</h2>
              <ul className="list-muted">
                {product.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card as="article" className="card--pad product-info-block">
              <h2>Features</h2>
              <ul className="list-muted">
                {product.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card as="article" className="card--pad product-info-block">
              <h2>Benefits</h2>
              <ul className="list-muted">
                {product.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </section>

          {isPool ? (
            <section className="product-panel product-panel--highlight">
              <span className="eyebrow">Pool value</span>
              <h2>Swimming pool program highlights</h2>
              <ul className="list-muted">
                {poolProgramHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {isIonEdge ? (
            <section className="product-panel product-panel--highlight">
              <span className="eyebrow">Portable use clarity</span>
              <h2>{ionEdgeRefinement.title}</h2>
              <p>{ionEdgeRefinement.subtitle}</p>
              <ul className="list-muted">
                {ionEdgeRefinement.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="product-panel product-panel--process">
            <span className="eyebrow">How it works</span>
            <h2>Implementation flow</h2>
            <ol className="step-list">
              {product.howItWorks.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          {isPool ? (
            <section className="product-panel">
              <span className="eyebrow">Manual-derived informational section</span>
              <h2>19 copper-related informational points from the pool manual</h2>
              <p className="lead">
                Sourced from the client-provided instruction manual and shown here in a structured format for consultation context.
              </p>
              <div className="health-benefits-grid">
                {poolHealthBenefits.map((item, index) => (
                  <Card as="article" key={item} className="card--pad health-benefit-card">
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <p>{item}</p>
                  </Card>
                ))}
              </div>
              <p className="disclaimer-note">{poolBenefitsSourceNote}</p>
            </section>
          ) : null}

          {isPool ? (
            <section className="product-panel">
              <span className="eyebrow">Reference material</span>
              <h2>Pool presentation sheets shared for client review</h2>
              <div className="reference-grid">
                {poolMarketingReferenceVisuals.map((item) => (
                  <Card as="article" key={item.src} className="proof-card">
                    <Image src={item.src} alt={item.alt} width={940} height={1260} className="proof-image" />
                  </Card>
                ))}
              </div>
            </section>
          ) : null}

          <section className="product-panel product-panel--faq">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="product-faq-list">
              {product.faqs.map((faq) => (
                <Card key={faq.q} className="card--pad segment-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </Card>
              ))}
            </div>
          </section>

          <div className="cta-row page-cta">
            <Button asChild>
              <Link href="/contact">Request consultation</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/products">All products</Link>
            </Button>
          </div>
        </div>

        <div className="product-detail__sticky-visual">
          <Card className="card--pad product-detail__figure">
            <Image
              src={stickyVisualSrc}
              alt={stickyVisualAlt}
              width={1000}
              height={800}
              className="product-image"
            />
            <p className="proof-caption">Representative installation visual for this product line</p>
          </Card>
        </div>
      </div>
    </article>
  );
}
