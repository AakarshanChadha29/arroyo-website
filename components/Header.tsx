 'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const leadingLinks = navLinks.filter((link) => link.href === '/' || link.href === '/technology');
  const trailingLinks = navLinks.filter(
    (link) =>
      link.href !== '/' &&
      link.href !== '/technology' &&
      link.href !== '/products' &&
      link.href !== '/applications'
  );

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!mobilePanelRef.current) {
        return;
      }
      const target = event.target as Node;
      if (!mobilePanelRef.current.contains(target)) {
        setMobileOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onEscape);
    };
  }, [mobileOpen]);

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
        <div className={`nav-mobile ${mobileOpen ? 'is-open' : ''}`} ref={mobilePanelRef}>
          <button
            type="button"
            className="nav-mobile-trigger"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
          >
            <span className="nav-mobile-trigger__bar" />
            <span className="nav-mobile-trigger__bar" />
            <span className="nav-mobile-trigger__bar" />
          </button>
          <div className="nav-mobile-overlay" aria-hidden={!mobileOpen} onClick={() => setMobileOpen(false)} />
          <nav
            id="mobile-navigation-panel"
            className="nav-mobile-panel"
            aria-label="Primary navigation mobile"
            aria-hidden={!mobileOpen}
          >
            <div className="nav-mobile-group">
              <p className="nav-mobile-group__title">Main pages</p>
              {leadingLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <details className="nav-mobile-accordion" open>
              <summary className="nav-mobile-accordion__summary">Products</summary>
              <div className="nav-mobile-accordion__body">
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="nav-mobile-accordion" open>
              <summary className="nav-mobile-accordion__summary">Applications</summary>
              <div className="nav-mobile-accordion__body">
                {applicationLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <div className="nav-mobile-group">
              <p className="nav-mobile-group__title">More</p>
              {trailingLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
