import type { Metadata } from 'next';

import BottomCTA from '@/components/home/BottomCTA';
import Hero from '@/components/home/Hero';
import Industries from '@/components/home/Industries';
import Integrations from '@/components/home/Integrations';
import PaymentMethods from '@/components/home/PaymentMethods';
import ProductsGrid from '@/components/home/ProductsGrid';
import StatsBar from '@/components/home/StatsBar';
import Testimonials from '@/components/home/Testimonials';
import TrustCompliance from '@/components/home/TrustCompliance';
import WhyPayCaps from '@/components/home/WhyPayCaps';
import {
  getHero,
  getStats,
  getProducts,
  getIndustries,
  getComplianceBadges,
  getTrustStatement,
  getTestimonials,
} from '@/lib/strapi/homepage';

/** Refetch CMS content frequently in dev; ISR in production */
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Payment Gateway UAE — CBUAE Regulated | PayCaps',
  description:
    "UAE's most trusted CBUAE-regulated payment gateway. Accept 80+ payment methods, 92+ currencies. PCI DSS Level 1. Go live in 2 days. Get started free →",
  keywords:
    'payment gateway UAE, CBUAE regulated payment gateway, PCI DSS payment UAE, pay by link UAE, online payment UAE, accept payments UAE',
  openGraph: {
    title: 'Payment Gateway UAE — CBUAE Regulated | PayCaps',
    description:
      "UAE's most trusted CBUAE-regulated payment gateway. Accept 80+ payment methods. Get started free →",
    url: 'https://www.paycaps.com',
    siteName: 'PayCaps',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function HomePage() {
  const hero = await getHero();
  const stats = await getStats();
  const products = await getProducts();
  const industries = await getIndustries();
  const complianceBadges = await getComplianceBadges();
  const trustStatement = await getTrustStatement();
  const testimonials = await getTestimonials();

  // console.log('hero', stats);


  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'PayCaps Technology LLC',
            url: 'https://www.paycaps.com',
            logo: 'https://www.paycaps.com/logo.png',
            description:
              "UAE's most trusted CBUAE-regulated payment gateway.",
            telephone: '+97142833886',
            email: 'info@paycaps.com',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'AE',
              addressRegion: 'Dubai',
            },
            sameAs: [
              'https://www.linkedin.com/company/paycaps',
              'https://twitter.com/paycaps',
            ],
          }),
        }}
      />
      <Hero {...hero} />
      <StatsBar stats={stats} />
      <ProductsGrid products={products} />
      <PaymentMethods />
      <WhyPayCaps />
      <Integrations />
      <Industries industries={industries} />
      <TrustCompliance
        complianceBadges={complianceBadges}
        trustStatement={trustStatement}
      />
      <Testimonials testimonials={testimonials} />
      <BottomCTA />
    </>
  );
}
