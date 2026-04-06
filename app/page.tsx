import Image from 'next/image';
import Link from 'next/link';
import { HeroImmersive } from '@/components/HeroImmersive';
import { ProductHelp } from '@/components/ProductHelp';
import { LeadForm } from '@/components/LeadForm';
import {
  company,
  quickActions,
  capabilityHighlights,
  salesBenefits,
  proofGallery,
  testimonials,
  anonymizedCaseSummaries,
  audienceSegments,
  products,
  productSection,
  technologyTeaser,
  applicationsTeaser,
  trustSection,
  homeFaqs,
  homeContactTeaser
} from '@/content/site';

export default function HomePage() {
  const primaryPhone = company.phones[0]?.replace(/\s/g, '') ?? '';
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <>
      <HeroImmersive>
        <span className="eyebrow">{company.heroEyebrow}</span>
        <h1 id="hero-heading">{company.heroTitle}</h1>
        <p className="lead">{company.heroText}</p>
        <div className="cta-row">
          <Link
            href="/contact"
            className="button"
            data-track-event="cta_click"
            data-track-label="Hero Primary"
            data-track-location="home_hero"
          >
            {company.primaryCta}
          </Link>
          <Link
            href="/contact"
            className="button button--ghost"
            data-track-event="cta_click"
            data-track-label="Hero Secondary"
            data-track-location="home_hero"
          >
            {company.secondaryCta}
          </Link>
          <a
            href={whatsappHref}
            className="button button--ghost"
            target="_blank"
            rel="noreferrer"
            data-track-event="whatsapp_click"
            data-track-label="Hero WhatsApp"
            data-track-location="home_hero"
          >
            {quickActions.whatsappLabel}
          </a>
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

      <section className="container section section--tight">
        <div className="cta-strip card card--pad">
          <p>Ready to replace chlorine-heavy treatment with a cleaner, lower-maintenance system?</p>
          <div className="cta-row">
            <Link
              href="/contact"
              className="button"
              data-track-event="cta_click"
              data-track-label="Mid Quote"
              data-track-location="home_mid_strip"
            >
              {quickActions.quoteLabel}
            </Link>
            <a
              href={`tel:${primaryPhone}`}
              className="button button--ghost"
              data-track-event="call_click"
              data-track-label="Mid Call"
              data-track-location="home_mid_strip"
            >
              {quickActions.phoneLabel}
            </a>
            <a
              href={whatsappHref}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
              data-track-event="whatsapp_click"
              data-track-label="Mid WhatsApp"
              data-track-location="home_mid_strip"
            >
              {quickActions.whatsappLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header section-header--wide">
          <span className="eyebrow">Problem to solution</span>
          <h2>Why Switch from Conventional Water Treatment?</h2>
          <p className="lead">
            Traditional chlorine-heavy programs can create harsh exposure, recurring manual correction, and unstable water quality.
            Arroyo combines mineral ionization and automated control to reduce chemical dependence and improve day-to-day consistency.
          </p>
        </div>
        <div className="challenge-grid">
          <article className="card card--pad challenge-card">
            <span className="eyebrow">Problem</span>
            <h3>Harsh chemical exposure</h3>
            <p>Over-reliance on chemical-heavy routines can affect comfort and daily pool experience.</p>
          </article>
          <article className="card card--pad challenge-card">
            <span className="eyebrow">Problem</span>
            <h3>Irritation and smell</h3>
            <p>Skin and eye irritation, chlorine odor, and inconsistent feel can hurt guest and resident perception.</p>
          </article>
          <article className="card card--pad challenge-card">
            <span className="eyebrow">Problem</span>
            <h3>Maintenance burden</h3>
            <p>Frequent manual interventions create recurring workload for engineering and operations teams.</p>
          </article>
          <article className="card card--pad challenge-card">
            <span className="eyebrow">Solution</span>
            <h3>Automated mineral ionization</h3>
            <p>Controlled ionization supports reduced chemical dependency and cleaner, more stable water conditions.</p>
          </article>
        </div>
        <div className="cta-row">
          <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Problem Solution CTA" data-track-location="home_problem_solution">
            Request Consultation
          </Link>
          <a href={whatsappHref} className="button button--ghost" target="_blank" rel="noreferrer" data-track-event="whatsapp_click" data-track-label="Problem Solution WhatsApp" data-track-location="home_problem_solution">
            {quickActions.whatsappLabel}
          </a>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Benefits</span>
          <h2>Outcome-focused benefits for real operating teams</h2>
        </div>
        <div className="benefit-grid">
          {salesBenefits.map((benefit) => (
            <article key={benefit.title} className="card card--pad">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
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
        <div className="section-header">
          <span className="eyebrow">Selected installations</span>
          <h2>Installed across residential, hospitality, and commercial environments</h2>
          <p className="lead">Project visuals from real deployment contexts designed for modern pools, villas, and managed water systems.</p>
        </div>
        <div className="proof-grid">
          {proofGallery.map((item) => (
            <article className="proof-card card" key={item.src}>
              <Image src={item.src} alt={item.alt} width={900} height={600} className="proof-image" />
              {'caption' in item ? <p className="proof-caption">{item.caption}</p> : null}
            </article>
          ))}
        </div>
        <p className="section-footer-link">
          <Link href="/projects" className="text-link" data-track-event="cta_click" data-track-label="Home Proof Projects" data-track-location="home_proof">
            View full projects and testimonial support
          </Link>
        </p>
      </section>

      <section className="container section section--tight">
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article className="card card--pad" key={t.name}>
              <p>"{t.quote}"</p>
              <p className="testimonial-author">{t.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section section--tight">
        <div className="section-header">
          <span className="eyebrow">Case summaries</span>
          <h2>Anonymized outcomes from deployed projects</h2>
        </div>
        <div className="testimonial-grid">
          {anonymizedCaseSummaries.map((item) => (
            <article className="card card--pad" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Audience paths</span>
          <h2>Pick your segment</h2>
          <p className="lead">Dedicated pages for schools, hotels, residential, and commercial campaign traffic.</p>
        </div>
        <div className="audience-grid">
          {audienceSegments.map((segment) => (
            <article key={segment.slug} className="card card--pad">
              <h3>{segment.title}</h3>
              <p>{segment.text}</p>
              <Link
                href={`/campaign/${segment.slug}`}
                className="text-link"
                data-track-event="campaign_cta_click"
                data-track-label={segment.slug}
                data-track-location="home_audience"
              >
                {segment.cta}
              </Link>
            </article>
          ))}
        </div>
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
          <div className="cta-row">
            <Link href={trustSection.ctaHref} className="button button--ghost" data-track-event="cta_click" data-track-label="Trust Docs" data-track-location="home_trust">
              {trustSection.ctaLabel}
            </Link>
            <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Trust Quote" data-track-location="home_trust">
              {quickActions.quoteLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="split-section">
          <div className="card card--pad">
            <span className="eyebrow">{homeContactTeaser.eyebrow}</span>
            <h2>{homeContactTeaser.title}</h2>
            <p>{homeContactTeaser.body}</p>
            <div className="cta-row">
              <Link href="/contact" className="text-link" data-track-event="cta_click" data-track-label="Contact Teaser" data-track-location="home_contact_teaser">
                Book a Project Discussion →
              </Link>
              <a href={`tel:${primaryPhone}`} className="text-link" data-track-event="call_click" data-track-label="Contact Teaser Call" data-track-location="home_contact_teaser">
                {quickActions.phoneLabel}
              </a>
              <a href={whatsappHref} className="text-link" target="_blank" rel="noreferrer" data-track-event="whatsapp_click" data-track-label="Contact Teaser WhatsApp" data-track-location="home_contact_teaser">
                {quickActions.whatsappLabel}
              </a>
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
