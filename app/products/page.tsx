import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { products, seo } from '@/content/site';

export const metadata: Metadata = {
  title: seo.productsIndex.title,
  description: seo.productsIndex.description
};

export default function ProductsIndexPage() {
  const poolProduct = products.find((item) => item.slug === 'swimming-pool-ionization-system');
  const ionEdgeProduct = products.find((item) => item.slug === 'ionedge-portable-water-cleaning-device');
  const supportingProducts = products.filter(
    (product) => product.slug !== poolProduct?.slug && product.slug !== ionEdgeProduct?.slug
  );

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

      {poolProduct && ionEdgeProduct ? (
        <section className="split-section products-featured products-featured--editorial">
          <article className="product-feature-shell product-feature-card">
            <div className="product-feature-card__media">
              <Image src={poolProduct.image} alt={poolProduct.imageAlt} width={1400} height={900} className="product-image" />
            </div>
            <div className="card--pad">
              <span className="eyebrow">Swimming pool focus</span>
              <h2>{poolProduct.name}</h2>
              <p className="lead">Crystal-clear water presentation, reduced chlorine dependency, and easier daily pool routines.</p>
              <div className="cta-row">
                <Button asChild>
                  <Link href={`/products/${poolProduct.slug}`}>View pool system details</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contact">Request consultation</Link>
                </Button>
              </div>
            </div>
          </article>
          <article className="product-feature-shell product-feature-card">
            <div className="product-feature-card__media">
              <Image src={ionEdgeProduct.image} alt={ionEdgeProduct.imageAlt} width={1400} height={900} className="product-image" />
            </div>
            <div className="card--pad">
              <span className="eyebrow">Portable clarity</span>
              <h2>{ionEdgeProduct.name}</h2>
              <p className="lead">A cleaner, better-framed portable solution with clear filtration steps and practical daily usability.</p>
              <div className="cta-row">
                <Button asChild>
                  <Link href={`/products/${ionEdgeProduct.slug}`}>Explore IonEdge</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contact">Speak to an expert</Link>
                </Button>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {supportingProducts.length ? (
        <div className="product-grid product-grid--supporting">
          {supportingProducts.map((product) => (
            <Card as="article" key={product.slug} className="product-card product-card--supporting">
              <div className="product-card__media">
                <Image src={product.image} alt={product.imageAlt} width={640} height={480} className="product-image" />
              </div>
              <div className="product-card__body">
                <h2>{product.name}</h2>
                <p>{product.short}</p>
                <Link href={`/products/${product.slug}`} className="text-link">
                  Full detail →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  );
}
