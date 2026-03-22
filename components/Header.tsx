import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { company, navLinks } from '@/content/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Logo size={44} />
          <span className="brand-text">
            <strong>{company.shortName}</strong>
            <small>{company.tagline}</small>
          </span>
        </Link>
        <nav className="nav-desktop" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="nav-mobile">
          <summary className="nav-mobile-trigger">Menu</summary>
          <nav className="nav-mobile-panel" aria-label="Primary navigation mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
