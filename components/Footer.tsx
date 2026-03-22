import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { company, footerTagline, navLinks } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Logo size={36} />
            <span className="footer-name">{company.shortName}</span>
          </div>
          <p className="footer-tagline">{footerTagline}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          {company.phones.map((phone) => (
            <p key={phone}>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </p>
          ))}
        </div>
        <div>
          <h4>Site</h4>
          <div className="footer-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
