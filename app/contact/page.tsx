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
            <a href={`mailto:${company.email}`} className="text-link">
              {company.email}
            </a>
          </p>
          {company.phones.map((phone) => (
            <p key={phone}>
              <span className="contact-label">Phone</span>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-link">
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
