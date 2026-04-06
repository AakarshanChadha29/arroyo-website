import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';
import { company, contactPage, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description
};

export default function ContactPage() {
  return (
    <div className="container section">
      <div className="split-section">
        <div className="card card--pad">
          <span className="eyebrow">Contact</span>
          <h1>{contactPage.title}</h1>
          <p className="lead">{contactPage.intro}</p>
          <p>
            <span className="contact-label">Email</span>
            <a
              href={`mailto:${company.email}`}
              className="text-link"
              data-track-event="email_click"
              data-track-label="Contact Email"
              data-track-location="contact_page"
            >
              {company.email}
            </a>
          </p>
          {company.phones.map((phone) => (
            <p key={phone}>
              <span className="contact-label">Phone</span>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-link"
                data-track-event="call_click"
                data-track-label={`Contact ${phone}`}
                data-track-location="contact_page"
              >
                {phone}
              </a>
            </p>
          ))}
        </div>
        <LeadForm />
      </div>
    </div>
  );
}
