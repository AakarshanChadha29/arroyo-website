import Image from 'next/image';
import Link from 'next/link';
import { HeroImmersive } from '@/components/HeroImmersive';
import { ProductHelp } from '@/components/ProductHelp';
import { LeadForm } from '@/components/LeadForm';
import {
  company,
  quickActions,
  capabilityHighlights,
  ionEdgeRefinement,
  poolProgramHighlights,
  salesBenefits,
  proofGallery,
  testimonials,
  anonymizedCaseSummaries,
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
  const featuredProduct = products[0];
  const secondaryProducts = products.slice(1);
  const leadProof = proofGallery[0];
  const supportingProof = proofGallery.slice(1);
  const testimonialVideos = [
    '/videos/testimonials/testimonial-homeland-1.mp4',
    '/videos/testimonials/testimonial-homeland-2.mp4'
  ];

  return (
    <>
      <HeroImmersive>
        <span className="eyebrow">{company.heroEyebrow}</span>
        <h1 id="hero-heading">{company.heroTitle}</h1>
        <p className="lead">{company.heroText}</p>
        <div className="cta-row">
          <Link
            href="/contact"
            className="button button--hero-primary"
            data-track-event="cta_click"
            data-track-label="Hero Primary"
            data-track-location="home_hero"
          >
            {company.primaryCta}
          </Link>
          <Link
            href="/contact"
            className="text-link"
            data-track-event="cta_click"
            data-track-label="Hero Secondary"
            data-track-location="home_hero"
          >
            {company.secondaryCta}
          </Link>
          <a
            href={whatsappHref}
            className="text-link"
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

      <section className="container section section--contrast section--tone-strong">
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
          <a href={`tel:${primaryPhone}`} className="text-link" data-track-event="call_click" data-track-label="Problem Solution Call" data-track-location="home_problem_solution">
            {quickActions.phoneLabel}
          </a>
        </div>
      </section>

      <section className="container section section--tone-soft">
        <div className="section-header">
          <span className="eyebrow">Benefits</span>
          <h2>Outcome-focused benefits for real operating teams</h2>
        </div>
        <div className="benefits-editorial">
          <article className="proof-card card benefits-editorial__media home-media-card">
            <Image
              src="/images/projects/clean/pool-installation-03.png"
              alt="Residential pool installation highlighting water clarity and premium finish"
              width={1000}
              height={1400}
              className="proof-image"
            />
            <p className="proof-caption">Residential pool installation with clear water presentation</p>
          </article>
          <div className="benefits-editorial__content">
            <ul className="benefit-list">
              {salesBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Benefits CTA" data-track-location="home_benefits">
                {quickActions.quoteLabel}
              </Link>
              <a href={whatsappHref} className="text-link" target="_blank" rel="noreferrer" data-track-event="whatsapp_click" data-track-label="Benefits WhatsApp" data-track-location="home_benefits">
                {quickActions.whatsappLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container section section--tone-elevated">
        <div className="split-section split-section--feature">
          <div className="card card--pad">
            <span className="eyebrow">Swimming pool spotlight</span>
            <h2>Built for cleaner pool water and premium swimmer comfort</h2>
            <p className="lead">
              A stronger chlorine-reduction strategy with controlled ionization, better clarity presentation, and easier routine handling.
            </p>
            <ul className="list-muted">
              {poolProgramHighlights.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link href="/products/swimming-pool-ionization-system" className="button" data-track-event="cta_click" data-track-label="Pool Spotlight Details" data-track-location="home_pool_spotlight">
                Explore pool system
              </Link>
              <Link href="/contact" className="text-link" data-track-event="cta_click" data-track-label="Pool Spotlight Consultation" data-track-location="home_pool_spotlight">
                Request Consultation
              </Link>
            </div>
          </div>
          <article className="proof-card card">
            <Image
              src="/images/projects/clean/system-installation-01.png"
              alt="Installed pool controller and system hardware in a real project environment"
              width={1000}
              height={1400}
              className="proof-image"
            />
            <p className="proof-caption">Installed system hardware from a completed pool installation</p>
          </article>
        </div>
      </section>

      <section id="products" className="container section section--contrast-soft section--tone-soft">
        <div className="section-header">
          <span className="eyebrow">{productSection.eyebrow}</span>
          <h2>{productSection.title}</h2>
          <p className="lead">{productSection.intro}</p>
        </div>
        {featuredProduct ? (
          <article className="product-spotlight home-product-spotlight">
            <div className="product-spotlight__media">
              <Image src={featuredProduct.image} alt={featuredProduct.imageAlt} width={1200} height={850} className="product-image" />
            </div>
            <div className="product-spotlight__content">
              <span className="eyebrow">Featured line</span>
              <h3>{featuredProduct.name}</h3>
              <p className="lead">{featuredProduct.short}</p>
              <ul className="list-muted">
                {featuredProduct.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <div className="cta-row">
                <Link href={`/products/${featuredProduct.slug}`} className="button">
                  View featured details
                </Link>
                <Link href="/contact" className="text-link">
                  Request consultation
                </Link>
              </div>
            </div>
          </article>
        ) : null}
        <div className="product-grid product-grid--compact">
          {secondaryProducts.map((product) => (
            <article key={product.slug} className="card product-card">
              <div className="product-card__media">
                <Image src={product.image} alt={product.imageAlt} width={640} height={480} className="product-image" />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.short}</p>
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

      <section className="container section section--contrast-deep section--tone-strong">
        <div className="section-header">
          <span className="eyebrow">Selected installations</span>
          <h2>Installed across residential, hospitality, and commercial environments</h2>
          <p className="lead">Project visuals from real deployment contexts designed for modern pools, villas, and managed water systems.</p>
        </div>
        {leadProof ? (
          <div className="proof-showcase">
            <article className="proof-card card proof-showcase__lead home-proof-card">
              <Image src={leadProof.src} alt={leadProof.alt} width={1100} height={760} className="proof-image" />
              {'caption' in leadProof ? <p className="proof-caption">{leadProof.caption}</p> : null}
            </article>
            <div className="proof-showcase__stack">
              {supportingProof.map((item) => (
                <article className="proof-card card home-proof-card" key={item.src}>
                  <Image src={item.src} alt={item.alt} width={900} height={600} className="proof-image" />
                  {'caption' in item ? <p className="proof-caption">{item.caption}</p> : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}
        <p className="section-footer-link">
          <Link href="/projects" className="text-link" data-track-event="cta_click" data-track-label="Home Proof Projects" data-track-location="home_proof">
            View full projects and client testimonials
          </Link>
        </p>
      </section>

      <section className="container section section--tight section--tone-elevated">
        <div className="card card--pad ionedge-strip">
          <div>
            <span className="eyebrow">IonEdge refinement</span>
            <h2>{ionEdgeRefinement.title}</h2>
            <p>{ionEdgeRefinement.subtitle}</p>
          </div>
          <ul className="list-muted">
            {ionEdgeRefinement.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cta-row">
            <Link href="/products/ionedge-portable-water-cleaning-device" className="button" data-track-event="cta_click" data-track-label="IonEdge Strip Details" data-track-location="home_ionedge_strip">
              View IonEdge details
            </Link>
            <Link href="/contact" className="text-link" data-track-event="cta_click" data-track-label="IonEdge Strip Contact" data-track-location="home_ionedge_strip">
              Request consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container section section--tight section--dense section--tone-soft">
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article className="card card--pad" key={t.name}>
              <p>"{t.quote}"</p>
              <p className="testimonial-author">{t.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section section--tight section--dense section--tone-elevated">
        <div className="section-header section-header--wide">
          <span className="eyebrow">Client experiences</span>
          <h2>Client Experiences</h2>
          <p className="lead">Real feedback from residential installations and water quality improvements.</p>
        </div>
        <div className="video-testimonial-grid">
          {testimonialVideos.map((videoSrc) => (
            <article className="video-testimonial-card" key={videoSrc}>
              <video className="video-testimonial-player" controls preload="metadata">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-testimonial-meta">
                <p className="video-testimonial-site">Homeland Society, Mohali</p>
                <p className="video-testimonial-type">Residential Water Quality Testimonial</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section section--tight section--dense section--tone-elevated">
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

      <section className="container section section--tone-soft">
        <div className="section-header">
          <span className="eyebrow">Applications</span>
          <h2>Choose the right deployment context</h2>
          <p className="lead">Explore hospitality, institutional, residential, and commercial use cases in one structured view.</p>
        </div>
        <div className="card card--pad">
          <p className="lead">Dedicated sector landing pages remain available for direct campaign traffic while the main site stays focused on core product and project information.</p>
          <div className="cta-row">
            <Link href="/applications" className="button">
              View applications
            </Link>
            <Link href="/contact" className="text-link">
              Discuss your site
            </Link>
          </div>
        </div>
      </section>

      <section className="container section section--tone-elevated">
        <div className="split-section">
          <div className="card card--pad teaser-block">
            <span className="eyebrow">{technologyTeaser.eyebrow}</span>
            <h2>{technologyTeaser.title}</h2>
            <p>{technologyTeaser.body}</p>
            <div className="cta-row">
              <Link href={technologyTeaser.ctaHref} className="text-link">
                {technologyTeaser.ctaLabel}
              </Link>
            </div>
          </div>
          <div className="card card--pad teaser-block">
            <span className="eyebrow">{applicationsTeaser.eyebrow}</span>
            <h2>{applicationsTeaser.title}</h2>
            <p>{applicationsTeaser.body}</p>
            <div className="cta-row">
              <Link href={applicationsTeaser.ctaHref} className="text-link">
                {applicationsTeaser.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section section--tone-soft">
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
            <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Trust Quote" data-track-location="home_trust">
              Request consultation
            </Link>
            <Link href={trustSection.ctaHref} className="text-link" data-track-event="cta_click" data-track-label="Trust Docs" data-track-location="home_trust">
              {trustSection.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="container section section--tone-elevated">
        <div className="split-section">
          <div className="card card--pad">
            <span className="eyebrow">{homeContactTeaser.eyebrow}</span>
            <h2>{homeContactTeaser.title}</h2>
            <p>{homeContactTeaser.body}</p>
            <div className="cta-row">
              <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Contact Teaser" data-track-location="home_contact_teaser">
                Book project discussion
              </Link>
              <a href={whatsappHref} className="text-link" target="_blank" rel="noreferrer" data-track-event="whatsapp_click" data-track-label="Contact Teaser WhatsApp" data-track-location="home_contact_teaser">
                {quickActions.whatsappLabel}
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="container section section--tone-soft">
        <ProductHelp />
      </section>

      <section className="container section section--dense">
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
