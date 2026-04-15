'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { heroSlides } from '@/content/site';

type HeroImmersiveProps = {
  children: React.ReactNode;
};

/**
 * Rotating hero showcase with per-slide image fallback.
 */
export function HeroImmersive({ children }: HeroImmersiveProps) {
  const slides = useMemo(() => heroSlides, []);
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-light" aria-labelledby="hero-heading">
      <div className="hero-light__wrap container">
        <div className="hero-light__copy">{children}</div>
        <div className="hero-light__visual">
          <div className="hero-light__halo" aria-hidden />
          <div className="hero-light__technical" aria-hidden />
          <div className="hero-light__media-card">
            <div className="hero-light__media-grid" aria-hidden />
            <div className="hero-light__media-glow" aria-hidden />
            {slides.map((slide, index) => {
              const src = broken[index] ? slide.fallback : slide.src;
              return (
                <div
                  key={slide.label}
                  className={`hero-slide ${active === index ? 'is-active' : ''}`}
                  aria-hidden={active !== index}
                >
                  <Image
                    src={src}
                    alt={`${slide.label} application environment`}
                    width={920}
                    height={700}
                    priority={index === 0}
                    className="hero-light__image"
                    sizes="(max-width: 960px) 100vw, 46vw"
                    onError={() => setBroken((prev) => ({ ...prev, [index]: true }))}
                  />
                  <span className="hero-slide__label">{slide.label}</span>
                </div>
              );
            })}
          </div>
          <div className="hero-dots" role="tablist" aria-label="Hero showcase slides">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                className={`hero-dot ${active === index ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.label}`}
                aria-selected={active === index}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
