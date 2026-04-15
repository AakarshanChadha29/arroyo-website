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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const desktopNavRef = useRef<HTMLElement | null>(null);
  const leadingLinks = navLinks.filter((link) => link.href === '/' || link.href === '/technology');
  const trailingLinks = navLinks.filter(
    (link) =>
      link.href !== '/' &&
      link.href !== '/technology' &&
      link.href !== '/products' &&
      link.href !== '/applications'
  );
  const closeDesktopMenus = () => {
    setProductsOpen(false);
    setApplicationsOpen(false);
  };

  useEffect(() => {
    setMobileOpen(false);
    closeDesktopMenus();
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen && !applicationsOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current) {
        return;
      }
      const target = event.target as Node;
      if (!desktopNavRef.current.contains(target)) {
        closeDesktopMenus();
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDesktopMenus();
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onEscape);
    };
  }, [applicationsOpen, productsOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
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
        <nav
          className="nav-desktop"
          aria-label="Primary navigation"
          ref={desktopNavRef}
          onBlurCapture={(event) => {
            if (!desktopNavRef.current?.contains(event.relatedTarget as Node | null)) {
              closeDesktopMenus();
            }
          }}
        >
          {leadingLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-desktop__link">
              {link.label}
            </Link>
          ))}
          <div className={`nav-dropdown ${productsOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown__trigger nav-desktop__link"
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              aria-controls="desktop-products-panel"
              onClick={() => {
                setProductsOpen((open) => !open);
                setApplicationsOpen(false);
              }}
            >
              Products
            </button>
            <div id="desktop-products-panel" className="nav-dropdown-panel" aria-hidden={!productsOpen}>
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setProductsOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={`nav-dropdown ${applicationsOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown__trigger nav-desktop__link"
              aria-haspopup="menu"
              aria-expanded={applicationsOpen}
              aria-controls="desktop-applications-panel"
              onClick={() => {
                setApplicationsOpen((open) => !open);
                setProductsOpen(false);
              }}
            >
              Applications
            </button>
            <div id="desktop-applications-panel" className="nav-dropdown-panel" aria-hidden={!applicationsOpen}>
              {applicationLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setApplicationsOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {trailingLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-desktop__link">
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

            <div className={`nav-mobile-accordion ${mobileProductsOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="nav-mobile-accordion__summary"
                aria-expanded={mobileProductsOpen}
                onClick={() => {
                  setMobileProductsOpen((open) => !open);
                  setMobileApplicationsOpen(false);
                }}
              >
                Products
              </button>
              <div className="nav-mobile-accordion__body" aria-hidden={!mobileProductsOpen}>
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={`nav-mobile-accordion ${mobileApplicationsOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="nav-mobile-accordion__summary"
                aria-expanded={mobileApplicationsOpen}
                onClick={() => {
                  setMobileApplicationsOpen((open) => !open);
                  setMobileProductsOpen(false);
                }}
              >
                Applications
              </button>
              <div className="nav-mobile-accordion__body" aria-hidden={!mobileApplicationsOpen}>
                {applicationLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

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
