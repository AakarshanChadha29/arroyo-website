'use client';

import Image from 'next/image';
import { useState } from 'react';

type CampaignHeroImageProps = {
  src: string;
  fallback: string;
  alt: string;
};

export function CampaignHeroImage({ src, fallback, alt }: CampaignHeroImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? fallback : src}
      alt={alt}
      width={960}
      height={680}
      className="proof-image"
      onError={() => setFailed(true)}
    />
  );
}
