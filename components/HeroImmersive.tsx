'use client';

import Image from 'next/image';
import { useState } from 'react';
import { heroMedia } from '@/content/site';

type HeroImmersiveProps = {
  children: React.ReactNode;
};

function heroImageSources(primary: string) {
  const pool = ['/images/ionedge-framed.jpg', '/images/ionedge.jpg', '/images/pool-core-kit-open.jpg'];
  return [...new Set([primary, ...pool])];
}

/**
 * Light, split hero: copy + a clear product image. Defaults to real files under /public/images.
 * Set `heroMedia.imageSrc` to `/hero/hero-pool-luxury.jpg` when that asset exists in public/hero/.
 */
export function HeroImmersive({ children }: HeroImmersiveProps) {
  const sources = heroImageSources(heroMedia.imageSrc);
  const [srcIndex, setSrcIndex] = useState(0);
  const src = sources[Math.min(srcIndex, sources.length - 1)];

  return (
    <section className="hero-light" aria-labelledby="hero-heading">
      <div className="hero-light__wrap container">
        <div className="hero-light__copy">{children}</div>
        <div className="hero-light__visual">
          <div className="hero-light__media-card">
            <Image
              key={src}
              src={src}
              alt={heroMedia.imageAlt}
              width={920}
              height={700}
              priority
              className="hero-light__image"
              sizes="(max-width: 960px) 100vw, 46vw"
              onError={() => setSrcIndex((i) => (i < sources.length - 1 ? i + 1 : i))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
