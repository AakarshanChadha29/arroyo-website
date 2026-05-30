import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';
import { Card } from '@/components/ui';
import { company, contactPage, quickActions, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${quickActions.whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <div className="container section contact-page">
      <div className="split-section split-section--contact-page">
        <Card className="card--pad contact-info-card">
          <span className="eyebrow">Contact</span>
          <h1>{contactPage.title}</h1>
          <p className="lead">{contactPage.intro}</p>
          <div className="contact-trust-strip">
            <p>Consultation-first response</p>
            <p>Technical and commercial routing</p>
            <p>Business-day turnaround target</p>
          </div>
          <div className="contact-channel-list">
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
            <p>
              <span className="contact-label">WhatsApp</span>
              <a
                href={whatsappHref}
                className="text-link"
                target="_blank"
                rel="noreferrer"
                data-track-event="whatsapp_click"
                data-track-label="Contact WhatsApp"
                data-track-location="contact_page"
              >
                {quickActions.whatsappLabel}
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
          <p className="contact-note">
            Share project type, location, rough capacity, and timeline to help our team respond with the right next step.
          </p>
        </Card>
        <div className="contact-form-shell">
          <p className="lead-form-shell__eyebrow">Project enquiry form</p>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
