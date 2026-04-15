import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { seo } from '@/content/site';

const installationGroups = [
  {
    title: 'Residential',
    items: [
      {
        src: '/images/projects/clean/pool-installation-01.png',
        alt: 'Residential pool installation environment',
        caption: 'Residential pool installation'
      },
      {
        src: '/images/projects/clean/pool-installation-03.png',
        alt: 'Premium residential pool treatment environment',
        caption: 'Premium pool treatment environment'
      },
      {
        src: '/images/projects/clean/system-installation-01.png',
        alt: 'Residential site control and ionization equipment',
        caption: 'On-site system configuration'
      }
    ]
  },
  {
    title: 'Hotels / Hospitality',
    items: [
      {
        src: '/images/projects/clean/pool-installation-02.png',
        alt: 'Hospitality pool-side treatment deployment',
        caption: 'Hospitality pool installation'
      },
      {
        src: '/images/projects/clean/system-installation-01.png',
        alt: 'Hospitality water treatment equipment and filtration line',
        caption: 'Water treatment system integration'
      },
      {
        src: '/images/projects/clean/pool-installation-01.png',
        alt: 'Large-format hospitality treatment pipe network',
        caption: 'Commercial facility installation'
      }
    ]
  },
  {
    title: 'Schools / Institutions',
    items: [
      {
        src: '/images/projects/clean/pool-installation-02.png',
        alt: 'Indoor pool installation with treatment environment',
        caption: 'Institutional treatment environment'
      },
      {
        src: '/images/projects/clean/system-installation-01.png',
        alt: 'Indoor installation with managed water treatment conditions',
        caption: 'Managed indoor water system setup'
      }
    ]
  },
  {
    title: 'Commercial / Facility Installations',
    items: [
      {
        src: '/images/projects/clean/system-installation-01.png',
        alt: 'Facility filtration equipment and treatment assembly',
        caption: 'Facility-side filtration integration'
      },
      {
        src: '/images/projects/clean/pool-installation-01.png',
        alt: 'Commercial system room with treatment line components',
        caption: 'Commercial plant room setup'
      },
      {
        src: '/images/projects/clean/pool-installation-03.png',
        alt: 'Electrical control and treatment system panel integration',
        caption: 'Treatment and controls integration'
      }
    ]
  }
];

export const metadata: Metadata = {
  title: seo.projects.title,
  description: seo.projects.description
};

export default function ProjectsPage() {
  const leadInstallation = installationGroups[0]?.items[0];

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
            <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Projects Hero Consultation" data-track-location="projects_hero">
              Request Consultation
            </Link>
            <Link href="/products" className="button button--ghost" data-track-event="cta_click" data-track-label="Projects Hero Products" data-track-location="projects_hero">
              View products
            </Link>
          </div>
        </div>
      </section>

      <section className="container section section--tight">
        <div className="card card--pad projects-doc-card">
          <span className="eyebrow">Featured document</span>
          <h2>Testimonial & Project Overview</h2>
          <p>
            Review a concise testimonial and project overview document for a more detailed look at Arroyo Technologies&apos;
            installation credibility and presentation.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Projects Document Contact" data-track-location="projects_document">
              Request project pack
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <span className="eyebrow">Selected installations</span>
          <h2>Curated installation visuals</h2>
          <p className="lead">A focused selection of project environments to support technical and commercial confidence.</p>
        </div>
        {leadInstallation ? (
          <article className="proof-card card projects-lead-proof">
            <Image src={leadInstallation.src} alt={leadInstallation.alt} width={1400} height={900} className="proof-image" />
            <div className="projects-lead-proof__meta">
              <span className="eyebrow">Featured installation</span>
              <h3>{leadInstallation.caption}</h3>
              <p>Representative deployment visual from a completed project environment.</p>
            </div>
          </article>
        ) : null}

        <div className="projects-groups">
          {installationGroups.map((group) => (
            <section key={group.title} className="projects-group">
              <h3 className="projects-group-title">{group.title}</h3>
              <p className="projects-group-meta">{group.items.length} curated visuals</p>
              <div className="projects-grid">
                {group.items.map((item, index) => (
                  <article
                    className={`proof-card card projects-proof-card ${index === 0 ? 'projects-proof-card--lead' : ''}`}
                    key={`${group.title}-${index}-${item.caption}`}
                  >
                    <Image src={item.src} alt={item.alt} width={1280} height={960} className="proof-image" />
                    <p className="proof-caption">{item.caption}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="container section section--tight">
        <div className="card card--pad">
          <span className="eyebrow">Visual proof</span>
          <h2>Visual Proof of Application</h2>
          <ul className="list-muted">
            <li>Installed across different property types and operating environments.</li>
            <li>Suitable for residential, hospitality, institutional, and commercial settings.</li>
            <li>Designed for modern pool and water treatment configurations.</li>
            <li>Supports stronger buyer confidence through visible project examples.</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="cta-band">
          <span className="eyebrow">Next step</span>
          <h2>Discuss Your Project Requirements</h2>
          <p className="lead">
            Whether the requirement is residential, hospitality, institutional, or commercial, Arroyo Technologies can
            help evaluate the right treatment approach.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="button" data-track-event="cta_click" data-track-label="Projects Final Consultation" data-track-location="projects_final_cta">
              Request Consultation
            </Link>
            <a
              href={`tel:+919417237607`}
              className="button button--ghost"
              data-track-event="call_click"
              data-track-label="Projects Final Expert"
              data-track-location="projects_final_cta"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
