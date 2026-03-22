'use client';

import { useId } from 'react';

type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Geometric “A” + droplet arc — cool metallic / aqua palette.
 * Replace with client SVG when brand files are final.
 */
export function Logo({ size = 40, className = '' }: LogoProps) {
  const uid = useId().replace(/:/g, '');
  const strokeId = `arroyo-stroke-${uid}`;
  const fillId = `arroyo-fill-${uid}`;
  const glowId = `arroyo-glow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`logo-mark ${className}`.trim()}
      aria-hidden
    >
      <defs>
        <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8edfe8" />
          <stop offset="100%" stopColor="#4aaeb8" />
        </linearGradient>
        <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8f0f3" />
          <stop offset="100%" stopColor="#5ec8d4" />
        </linearGradient>
        <linearGradient id={glowId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(120, 220, 230, 0.45)" />
          <stop offset="100%" stopColor="rgba(120, 220, 230, 0)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="14" fill="#f5fbfd" stroke={`url(#${strokeId})`} strokeWidth="1" />
      <path
        d="M24 8c-2 4-8 12-8 18a8 8 0 0 0 16 0c0-6-6-14-8-18z"
        fill={`url(#${glowId})`}
        opacity="0.95"
      />
      <path d="M24 14 L31 34 H27.2 L25.8 29 H22.2 L20.8 34 H17 Z" fill={`url(#${fillId})`} />
      <path d="M22.5 26 H25.5" stroke="#0c1a24" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
