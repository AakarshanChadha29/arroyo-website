import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/content/site';

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

  return (
    <article className="container section">
      <div className="product-detail">
        <div>
          <span className="eyebrow">Product</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>

          <h2>Applications</h2>
          <ul className="list-muted">
            {product.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Features</h2>
          <ul className="list-muted">
            {product.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Benefits</h2>
          <ul className="list-muted">
            {product.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>How it works</h2>
          <ol className="step-list">
            {product.howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h2>FAQs</h2>
          {product.faqs.map((faq) => (
            <div key={faq.q} className="card card--pad segment-card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}

          <div className="cta-row page-cta">
            <Link href="/contact" className="button">
              Request consultation
            </Link>
            <Link href="/products" className="button button--ghost">
              All products
            </Link>
          </div>
        </div>

        <div className="product-detail__sticky-visual">
          <div className="card card--pad product-detail__figure">
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={1000}
              height={800}
              className="product-image"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
