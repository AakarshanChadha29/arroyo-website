 'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const coreLinks = navLinks.filter(
    (link) => link.href !== '/products' && link.href !== '/applications'
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current) {
        return;
      }
      const target = event.target as Node;
      if (!headerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => setMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`} ref={headerRef}>
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Logo size={44} />
          <span className="brand-text">
            <strong>{company.shortName}</strong>
            <small>{company.tagline}</small>
          </span>
        </Link>
        <div className="nav-actions">
          <Link href="/contact" className="nav-contact-link">
            Contact
          </Link>
          <button
            type="button"
            className="nav-menu-trigger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-menu-panel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>Menu</span>
            <span className="nav-menu-trigger__icon" aria-hidden>
              <span className="nav-menu-trigger__bar" />
              <span className="nav-menu-trigger__bar" />
              <span className="nav-menu-trigger__bar" />
            </span>
          </button>
        </div>
      </div>

      <div className={`nav-menu-overlay ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen} />
      <nav
        id="site-menu-panel"
        className={`nav-menu-panel ${menuOpen ? 'is-open' : ''}`}
        aria-label="Primary navigation menu"
        aria-hidden={!menuOpen}
      >
        <div className="container nav-menu-panel__inner">
          <div className="nav-menu-column">
            <p className="nav-menu-title">Navigation</p>
            {coreLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-menu-column">
            <p className="nav-menu-title">Products</p>
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-menu-column">
            <p className="nav-menu-title">Applications</p>
            {applicationLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
