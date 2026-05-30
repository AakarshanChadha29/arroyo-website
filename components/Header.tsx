'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui';
import { company } from '@/content/site';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Documentation' },
  { href: '/contact', label: 'Contact' }
];

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`site-header premium-nav ${isScrolled ? 'premium-nav--scrolled' : 'premium-nav--top'} ${
        menuOpen ? 'is-menu-open' : ''
      }`}
    >
      <div className="container nav-wrap premium-nav__inner">
        <Link href="/" className="brand premium-nav__brand" aria-label={`${company.shortName} home`}>
          <Logo size={44} />
          <span className="premium-nav__wordmark">Arroyo Technologies</span>
        </Link>

        <nav className="premium-nav__links" aria-label="Primary navigation">
          {primaryLinks.map((link) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`premium-nav__link ${active ? 'is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="premium-nav__actions">
          <Button asChild variant="muted" className="premium-nav__cta premium-nav__cta--muted">
            <Link href="/legal">Legal</Link>
          </Button>
          <Button asChild variant="ghost" className="premium-nav__cta">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <button
          type="button"
          className="nav-menu-trigger premium-nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-menu-trigger__icon" aria-hidden>
            <span className="nav-menu-trigger__bar" />
            <span className="nav-menu-trigger__bar" />
            <span className="nav-menu-trigger__bar" />
          </span>
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav__panel" aria-label="Mobile navigation">
          {primaryLinks.map((link, index) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav__link ${active ? 'is-active' : ''}`}
                style={{ transitionDelay: menuOpen ? `${index * 80}ms` : '0ms' }}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mobile-nav__secondary">
            <Link href="/legal" onClick={() => setMenuOpen(false)}>
              Legal
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
