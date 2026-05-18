import type { Metadata } from 'next';
import './globals.css';
import './pages.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Payment Gateway UAE | PayCaps',
  description: 'Accept 80+ payment methods in UAE. CBUAE regulated, PCI DSS Level 1. Fast 2-day onboarding. Get started free →',
  keywords: 'payment gateway UAE, CBUAE regulated payment gateway, PCI DSS payment UAE, pay by link UAE, online payment UAE',
  openGraph: {
    title: 'Payment Gateway UAE | PayCaps',
    description: 'Accept 80+ payment methods in UAE. CBUAE regulated, PCI DSS Level 1.',
    url: 'https://www.paycaps.com',
    siteName: 'PayCaps',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.paycaps.com',
    languages: { 'en': 'https://www.paycaps.com' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1A3C6E" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
