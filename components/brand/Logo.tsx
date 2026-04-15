import Image from 'next/image';

type LogoProps = {
  size?: number;
  className?: string;
};

/** Client-provided official Arroyo Technologies logo. */
export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <Image
      src="/logo/arroyo-logo.png"
      alt="Arroyo Technologies logo"
      width={size * 3}
      height={size}
      className={`logo-mark ${className}`.trim()}
      priority
    />
  );
}
