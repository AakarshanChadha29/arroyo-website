import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { company, navLinks, products } from '@/content/site';

const productLinks = [
  { href: '/products', label: 'All products' },
  ...products.map((product) => ({ href: `/products/${product.slug}`, label: product.name }))
];

const applicationLinks = [
  { href: '/applications', label: 'All applications' },
  { href: '/campaign/hotels', label: 'Hotels' },
  { href: '/campaign/residential', label: 'Residential' },
  { href: '/campaign/schools', label: 'Schools' },
  { href: '/campaign/commercial', label: 'Commercial' }
];

export function Header() {
  const leadingLinks = navLinks.filter((link) => link.href === '/' || link.href === '/technology');
  const trailingLinks = navLinks.filter(
    (link) =>
      link.href !== '/' &&
      link.href !== '/technology' &&
      link.href !== '/products' &&
      link.href !== '/applications'
  );

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
          {leadingLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <details className="nav-dropdown">
            <summary>Products</summary>
            <div className="nav-dropdown-panel">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
          <details className="nav-dropdown">
            <summary>Applications</summary>
            <div className="nav-dropdown-panel">
              {applicationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
          {trailingLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="nav-mobile">
          <summary className="nav-mobile-trigger">Menu</summary>
          <nav className="nav-mobile-panel" aria-label="Primary navigation mobile">
            {leadingLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <div className="nav-mobile-group">
              <p className="nav-mobile-group__title">Products</p>
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="nav-mobile-group">
              <p className="nav-mobile-group__title">Applications</p>
              {applicationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="nav-mobile-group">
              <p className="nav-mobile-group__title">More</p>
              {trailingLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
