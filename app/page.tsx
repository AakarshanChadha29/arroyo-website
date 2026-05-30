import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { company, proofGallery, quickActions, testimonials, trustSection, products } from '@/content/site';

const privateCommission = {
  title: 'Private water systems for villas, resorts, and estates that cannot feel ordinary.',
  text:
    'A discreet Arroyo commission brings pool ionization, staged filtration, site-specific documentation, and handover into one carefully managed project.'
};

const standards = ['Site survey', 'System design', 'Commissioning', 'Operator handover'];

const heroProof = [
  { value: 'Private', label: 'proposal-led scope' },
  { value: 'Villa', label: 'pool and property fit' },
  { value: 'Global', label: 'presentation standard' }
];

const curatedProofGallery = [
  {
    src: '/images/projects/enhanced/estate-pool-01.jpg',
    alt: 'Premium private estate pool with manicured garden environment',
    caption: 'Private estate commission'
  },
  {
    src: '/images/projects/enhanced/residential-pool-01.jpg',
    alt: 'Residential pool installation with clear water and garden edge',
    caption: 'Residential pool treatment'
  },
  {
    src: '/images/projects/enhanced/villa-pool-01.jpg',
    alt: 'Premium villa pool environment with clean water presentation',
    caption: 'Premium villa pool'
  },
  {
    src: '/images/projects/enhanced/system-installation-01.jpg',
    alt: 'Installed water treatment control and equipment environment',
    caption: 'Installed control system'
  }
];

export default function HomePage() {
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;
  const primaryProduct = products.find((product) => product.slug === 'swimming-pool-ionization-system') ?? products[0];
  const villaSystem = products.find((product) => product.slug === 'whole-home-villa-mineral-water-system') ?? products[2] ?? primaryProduct;
  const leadProof = curatedProofGallery[0] ?? proofGallery[0];
  const supportingProof = curatedProofGallery.slice(1, 4);

  return (
    <main className="luxury-home">
      <section className="luxury-hero" aria-labelledby="hero-heading">
        <Image
          src="/images/projects/enhanced/estate-pool-01.jpg"
          alt="Private villa pool commissioned for premium water treatment"
          fill
          priority
          className="luxury-hero__image"
          sizes="100vw"
        />
        <div className="luxury-hero__shade" aria-hidden />
        <div className="luxury-hero__inner container">
          <div className="luxury-hero__copy">
            <span className="luxury-kicker">Arroyo Technologies</span>
            <h1 id="hero-heading">
              Private Water <span>Commissioning</span>
            </h1>
            <p>
              Mineral ionization and whole-property treatment systems for high-value pools, hospitality estates, and
              private residences.
            </p>
            <div className="luxury-hero__actions">
              <Link
                href="/contact"
                className="luxury-button"
                data-track-event="cta_click"
                data-track-label="Luxury Hero Consultation"
                data-track-location="home_hero"
              >
                Request private consultation
              </Link>
              <a
                href={whatsappHref}
                className="luxury-button--ghost"
                target="_blank"
                rel="noreferrer"
                data-track-event="whatsapp_click"
                data-track-label="Luxury Hero WhatsApp"
                data-track-location="home_hero"
              >
                WhatsApp the project desk
              </a>
            </div>
          </div>
          <div className="luxury-hero__proof" aria-label="Arroyo commissioning summary">
            {heroProof.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-intro container">
        <div>
          <span className="luxury-kicker">Signature commission</span>
          <h2>{privateCommission.title}</h2>
        </div>
        <div className="luxury-intro__copy">
          <p>{privateCommission.text}</p>
          <p className="luxury-note">Scope and investment are confirmed privately, after a site review.</p>
        </div>
      </section>

      <section className="luxury-product">
        <div className="container luxury-product__grid">
          <div className="luxury-product__media">
            <Image
              src="/images/products/whole-home-villa-system-premium.png"
              alt={villaSystem?.imageAlt ?? 'Whole-home villa water treatment system'}
              width={900}
              height={1200}
              className="luxury-product__image"
            />
          </div>
          <div className="luxury-product__copy">
            <span className="luxury-kicker">The object</span>
            <h2>{villaSystem?.name ?? 'Whole-home villa water system'}</h2>
            <p>
              Built for owners who expect the equipment room to be as considered as the pool terrace: specified,
              documented, installed, and handed over with a quiet standard of care.
            </p>
            <ul className="luxury-checklist">
              {standards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/products" className="luxury-link luxury-link--dark">
              View product lines
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-proof container">
        <div className="luxury-section-heading">
          <span className="luxury-kicker">Installed proof</span>
          <h2>Real project environments, selected with restraint.</h2>
        </div>
        <div className="luxury-proof__grid">
          {leadProof ? (
            <article className="luxury-proof__lead">
              <Image src={leadProof.src} alt={leadProof.alt} width={1280} height={860} className="luxury-proof__image" />
              <p>{leadProof.caption}</p>
            </article>
          ) : null}
          <div className="luxury-proof__stack">
            {supportingProof.map((item) => (
              <article key={item.src}>
                <Image src={item.src} alt={item.alt} width={760} height={540} className="luxury-proof__image" />
                <p>{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-assurance">
        <div className="container luxury-assurance__inner">
          <div>
            <span className="luxury-kicker">Why Arroyo</span>
            <h2>{primaryProduct?.short ?? 'Premium ionization treatment for cleaner pool water.'}</h2>
          </div>
          <div className="luxury-assurance__points">
            {trustSection.bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-quote container">
        <blockquote>
          <p>"{testimonials[0]?.quote}"</p>
          <footer>{testimonials[0]?.name}</footer>
        </blockquote>
      </section>

      <section className="luxury-contact container" id="private-consultation">
        <div className="luxury-contact__copy">
          <span className="luxury-kicker">Private brief</span>
          <h2>Start with the property, not the catalogue.</h2>
          <p>
            Share the pool, villa, hotel, or estate context. Arroyo will respond with the right technical path,
            documentation requirements, and commercial next step.
          </p>
          <Link href="/projects" className="luxury-link luxury-link--dark">
            Review selected installations
          </Link>
        </div>
        <div className="luxury-contact__form">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
