import Image from 'next/image';
import Link from 'next/link';
import { HeroImmersive } from '@/components/HeroImmersive';
import { ProductHelp } from '@/components/ProductHelp';
import { LeadForm } from '@/components/LeadForm';
import {
  company,
  capabilityHighlights,
  valueProposition,
  challenges,
  challengesEyebrow,
  products,
  productSection,
  technologyTeaser,
  applicationsTeaser,
  trustSection,
  homeFaqs,
  homeContactTeaser
} from '@/content/site';

export default function HomePage() {
  return (
    <>
      <HeroImmersive>
        <span className="eyebrow">{company.heroEyebrow}</span>
        <h1 id="hero-heading">{company.heroTitle}</h1>
        <p className="lead">{company.heroText}</p>
        <div className="cta-row">
          <Link href="/contact" className="button">
            {company.primaryCta}
          </Link>
          <Link href="/products" className="button button--ghost">
            {company.secondaryCta}
          </Link>
        </div>
        <div className="capability-grid">
          {capabilityHighlights.map((item) => (
            <div key={item.label} className="capability-card capability-card--hero">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </HeroImmersive>

      <section className="container section">
        <div className="section-header section-header--wide">
          <span className="eyebrow">{valueProposition.eyebrow}</span>
          <h2>{valueProposition.title}</h2>
          <p className="lead">{valueProposition.body}</p>
        </div>
      </section>

      <section className="container section section--tight">
        <div className="challenge-grid">
          {challenges.map((c) => (
            <article key={c.title} className="card card--pad challenge-card">
              <span className="eyebrow">{challengesEyebrow}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="container section">
        <div className="section-header">
          <span className="eyebrow">{productSection.eyebrow}</span>
          <h2>{productSection.title}</h2>
          <p className="lead">{productSection.intro}</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="card product-card">
              <div className="product-card__media">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={640}
                  height={480}
                  className="product-image"
                />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.short}</p>
                <ul>
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <Link href={`/products/${product.slug}`} className="text-link">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="section-footer-link">
          <Link href="/products" className="text-link">
            Browse all products
          </Link>
        </p>
      </section>

      <section className="container section">
        <div className="split-section">
          <div className="card card--pad teaser-block">
            <span className="eyebrow">{technologyTeaser.eyebrow}</span>
            <h2>{technologyTeaser.title}</h2>
            <p>{technologyTeaser.body}</p>
            <div className="cta-row">
              <Link href={technologyTeaser.ctaHref} className="button button--ghost">
                {technologyTeaser.ctaLabel}
              </Link>
            </div>
          </div>
          <div className="card card--pad teaser-block">
            <span className="eyebrow">{applicationsTeaser.eyebrow}</span>
            <h2>{applicationsTeaser.title}</h2>
            <p>{applicationsTeaser.body}</p>
            <div className="cta-row">
              <Link href={applicationsTeaser.ctaHref} className="button button--ghost">
                {applicationsTeaser.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="cta-band">
          <span className="eyebrow">{trustSection.eyebrow}</span>
          <h2>{trustSection.title}</h2>
          <p className="lead">{trustSection.body}</p>
          <ul className="list-muted">
            {trustSection.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Link href={trustSection.ctaHref} className="button button--ghost">
            {trustSection.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="container section">
        <div className="split-section">
          <div className="card card--pad">
            <span className="eyebrow">{homeContactTeaser.eyebrow}</span>
            <h2>{homeContactTeaser.title}</h2>
            <p>{homeContactTeaser.body}</p>
            <div className="cta-row">
              <Link href="/contact" className="text-link">
                {homeContactTeaser.linkLabel} →
              </Link>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="container section">
        <ProductHelp />
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>Questions we hear often</h2>
        </div>
        <div className="faq-grid">
          {homeFaqs.map((faq) => (
            <article key={faq.q} className="card card--pad">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
