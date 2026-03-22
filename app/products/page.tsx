import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.productsIndex.title,
  description: seo.productsIndex.description
};

export default function ProductsIndexPage() {
  return (
    <div className="container section">
      <header className="section-header section-header--wide">
        <span className="eyebrow">Products</span>
        <h1>Product lines</h1>
        <p className="lead">
          Arroyo ships three engineered lanes—each with defined applications, installation context, and documentation
          paths. Select a line for specifications, how it works, and FAQs.
        </p>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.slug} className="card product-card">
            <div className="product-card__media">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={640}
                height={480}
                className="product-image"
              />
            </div>
            <div className="product-card__body">
              <h2>{product.name}</h2>
              <p>{product.short}</p>
              <Link href={`/products/${product.slug}`} className="text-link">
                Full detail →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
