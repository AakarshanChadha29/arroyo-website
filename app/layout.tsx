import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AmbientBackdrop } from '@/components/AmbientBackdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { company, seo } from '@/content/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: seo.defaultTitle,
    template: `%s | ${company.shortName}`
  },
  description: seo.defaultDescription,
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: `https://${company.domain}`,
    siteName: company.shortName,
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <AmbientBackdrop />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
