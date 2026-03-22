import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container section prose-page">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has moved.</p>
      <p>
        <Link href="/" className="text-link">
          Return to home
        </Link>
        {' · '}
        <Link href="/contact" className="text-link">
          Contact us
        </Link>
      </p>
    </section>
  );
}
