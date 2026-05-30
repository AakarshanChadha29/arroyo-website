import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Mono, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import { AmbientBackdrop } from '@/components/AmbientBackdrop';
import { FloatingActions } from '@/components/FloatingActions';
import { TrackingBridge } from '@/components/TrackingBridge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { company, seo } from '@/content/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        {metaPixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
          </Script>
        ) : null}
        {linkedinId ? (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`_linkedin_partner_id = "${linkedinId}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript"; b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
          </Script>
        ) : null}
        <TrackingBridge />
        <AmbientBackdrop />
        <Header />
        <main className="site-main">{children}</main>
        <FloatingActions />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
