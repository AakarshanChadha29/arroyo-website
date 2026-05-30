import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { company, seo } from '@/content/site';

const installationGroups = [
  {
    title: 'Residential',
    items: [
      {
        src: '/images/projects/enhanced/residential-pool-01.jpg',
        alt: 'Residential pool installation environment',
        caption: 'Residential pool installation'
      },
      {
        src: '/images/projects/enhanced/villa-pool-01.jpg',
        alt: 'Premium residential pool treatment environment',
        caption: 'Premium pool treatment environment'
      }
    ]
  },
  {
    title: 'Hotels / Hospitality',
    items: [
      {
        src: '/images/projects/enhanced/hospitality-pool-01.jpg',
        alt: 'Hospitality pool-side treatment deployment',
        caption: 'Hospitality pool installation'
      },
      {
        src: '/images/projects/enhanced/hospitality-pool-02.jpg',
        alt: 'Large-format hospitality treatment pipe network',
        caption: 'Commercial facility installation'
      }
    ]
  },
  {
    title: 'System integration',
    items: [
      {
        src: '/images/projects/enhanced/system-installation-01.jpg',
        alt: 'Indoor installation with managed water treatment conditions',
        caption: 'Managed indoor water system setup'
      },
      {
        src: '/images/projects/enhanced/estate-pool-01.jpg',
        alt: 'Commercial system room with treatment line components',
        caption: 'Private estate commissioning context'
      }
    ]
  }
];

const testimonialVideos = [
  {
    src: '/videos/testimonials/testimonial-homeland-1.mp4',
    poster: '/videos/testimonials/posters/testimonial-homeland-1.jpg',
    title: 'Homeland group project feedback',
    meta: 'Client testimonial film'
  },
  {
    src: '/videos/testimonials/testimonial-homeland-2.mp4',
    poster: '/videos/testimonials/posters/testimonial-homeland-2.jpg',
    title: 'Installed environment walkthrough',
    meta: 'Project proof film'
  }
];

export const metadata: Metadata = {
  title: seo.projects.title,
  description: seo.projects.description
};

export default function ProjectsPage() {
  const leadInstallation = installationGroups[0]?.items[0];
  const primaryPhone = company.phones[0]?.replace(/\s/g, '') ?? '';

  return (
    <>
      <section className="container section">
        <div className="section-header section-header--wide">
          <span className="eyebrow">Projects</span>
          <h1>Projects, Installations & Client Feedback</h1>
          <p className="lead">
            Showcase Arroyo Technologies&apos; installation environments, project visuals, and testimonial-backed proof in a
            clean, premium format.
          </p>
          <div className="cta-row">
            <Button asChild>
              <Link href="/contact" data-track-event="cta_click" data-track-label="Projects Hero Consultation" data-track-location="projects_hero">
                Request Consultation
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/products" data-track-event="cta_click" data-track-label="Projects Hero Products" data-track-location="projects_hero">
                View products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container section section--tight">
        <Card className="card--pad projects-doc-card">
          <span className="eyebrow">Featured document</span>
          <h2>Testimonial & Project Overview</h2>
          <p>
            Review a concise testimonial and project overview document for a more detailed look at Arroyo Technologies&apos;
            installation credibility and presentation.
          </p>
          <div className="cta-row">
            <Button asChild>
              <Link href="/contact" data-track-event="cta_click" data-track-label="Projects Document Contact" data-track-location="projects_document">
                Request project pack
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <section className="container section section--tight">
        <div className="section-header section-header--wide">
          <span className="eyebrow">Motion proof</span>
          <h2>Client proof, presented like a private project file</h2>
          <p className="lead">
            Short testimonial films sit beside the installation gallery so buyers can see movement, context, and real
            environments before requesting the full project pack.
          </p>
        </div>
        <div className="video-testimonial-grid video-testimonial-grid--premium">
          {testimonialVideos.map((video) => (
            <article className="video-testimonial-card video-testimonial-card--premium" key={video.src}>
              <video className="video-testimonial-player" controls preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="video-testimonial-meta">
                <p className="video-testimonial-site">{video.title}</p>
                <p className="video-testimonial-type">{video.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Selected installations</span>
          <h2>Curated installation visuals</h2>
          <p className="lead">A focused selection of project environments to support technical and commercial confidence.</p>
        </div>
        {leadInstallation ? (
          <Card as="article" className="proof-card projects-lead-proof">
            <Image src={leadInstallation.src} alt={leadInstallation.alt} width={1400} height={900} className="proof-image" />
            <div className="projects-lead-proof__meta">
              <span className="eyebrow">Featured installation</span>
              <h3>{leadInstallation.caption}</h3>
              <p>Representative deployment visual from a completed project environment.</p>
            </div>
          </Card>
        ) : null}

        <div className="projects-groups">
          {installationGroups.map((group) => (
            <section key={group.title} className="projects-group">
              <h3 className="projects-group-title">{group.title}</h3>
              <p className="projects-group-meta">{group.items.length} curated visuals</p>
              <div className="projects-grid">
                {group.items.map((item, index) => (
                  <Card
                    as="article"
                    className={`proof-card projects-proof-card ${index === 0 ? 'projects-proof-card--lead' : ''}`}
                    key={`${group.title}-${index}-${item.caption}`}
                  >
                    <Image src={item.src} alt={item.alt} width={1280} height={960} className="proof-image" />
                    <p className="proof-caption">{item.caption}</p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="container section section--tight">
        <Card className="card--pad">
          <span className="eyebrow">Visual proof</span>
          <h2>Visual Proof of Application</h2>
          <ul className="list-muted">
            <li>Installed across different property types and operating environments.</li>
            <li>Suitable for residential, hospitality, institutional, and commercial settings.</li>
            <li>Designed for modern pool and water treatment configurations.</li>
            <li>Supports stronger buyer confidence through visible project examples.</li>
          </ul>
        </Card>
      </section>

      <section className="container section">
        <div className="cta-band cta-band--projects-final">
          <h2>Discuss Your Project Requirements</h2>
          <p className="lead">
            Whether the requirement is residential, hospitality, institutional, or commercial, Arroyo Technologies can
            help evaluate the right treatment approach.
          </p>
          <div className="cta-row">
            <Button asChild>
              <Link href="/contact" data-track-event="cta_click" data-track-label="Projects Final Consultation" data-track-location="projects_final_cta">
                Request Consultation
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={`tel:${primaryPhone}`}
                data-track-event="call_click"
                data-track-label="Projects Final Expert"
                data-track-location="projects_final_cta"
              >
                Speak to an Expert
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
