import type { Metadata } from 'next';
import Link from 'next/link';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Payment Gateway Features — UAE | PayCaps',
  description:
    'Explore all PayCaps payment gateway features: hosted checkout, pay by link, recurring billing, API integration. CBUAE regulated. Get started free →',
};

const features = [
  {
    id: 'gateway',
    icon: '💳',
    title: 'Payment Gateway',
    description:
      'Our core API-first gateway supports 80+ payment methods, smart routing, and real-time settlement. Built for high-volume merchants in the UAE and the wider Middle East.',
    bullets: ['REST API + webhooks', 'Smart routing for higher approval rates', '3D Secure 2.0', 'Real-time dashboard', 'Multi-currency support'],
  },
  {
    id: 'pay-by-link',
    icon: '🔗',
    title: 'Pay by Link',
    description:
      'Generate a payment link in seconds — share via WhatsApp, SMS, email or social media. No website required. Perfect for SMEs and field sales teams.',
    bullets: ['Instant link generation', 'Customisable amount & description', 'Expiry date control', 'Mobile-first checkout', 'Real-time payment notifications'],
  },
  {
    id: 'hosted',
    icon: '🖥️',
    title: 'Hosted Payment Page',
    description:
      'A fully branded, PCI DSS Level 1 compliant checkout page hosted by PayCaps. Zero integration burden — redirect your customers and we handle the rest.',
    bullets: ['Fully branded with your logo', 'PCI DSS Level 1 compliant', 'Mobile responsive', 'Arabic & English UI', 'Tokenization for repeat buyers'],
  },
  {
    id: 'recurring',
    icon: '🔄',
    title: 'Recurring Payments',
    description:
      'Automate subscription billing with smart retry logic, dunning management, and prorated billing — all from a single dashboard.',
    bullets: ['Flexible billing cycles', 'Smart failed payment retry', 'Dunning management', 'Proration support', 'Customer self-service portal'],
  },
  {
    id: 'invoice',
    icon: '📄',
    title: 'Invoice Payments',
    description:
      'Send professional branded invoices and collect payments digitally. Track outstanding invoices and get notified the instant a customer pays.',
    bullets: ['Branded PDF invoices', 'Payment via link in invoice', 'Automatic reminders', 'Partial payment support', 'Reconciliation reports'],
  },
  {
    id: 'white-label',
    icon: '🏷️',
    title: 'White Label',
    description:
      'Launch your own branded payment gateway powered by PayCaps infrastructure. Ideal for banks, fintechs, and large enterprises.',
    bullets: ['Full brand customisation', 'Dedicated infrastructure', 'Your own merchant portal', 'Revenue sharing model', 'CBUAE sub-licensing support'],
  },
];

export default function FeaturesPage() {
  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="page-hero page-hero--center">
        <div className="container">
          <p className="page-hero-eyebrow">Products & Features</p>
          <h1 className="page-hero-title">Everything to Accept Payments in UAE</h1>
          <p className="page-hero-lead page-hero-lead--center">
            One platform. Every payment method. Built for businesses of every size in the UAE.
          </p>
          <Link href="/sign-up?utm_source=features&utm_medium=hero-cta" className="btn btn-primary btn-lg" id="cta-features-hero">
            Start Accepting Payments
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="stack-lg">
            {features.map((f, i) => (
              <div
                key={f.id}
                id={f.id}
                className={`card reveal feature-row${i % 2 === 1 ? ' feature-row--reverse' : ''}`}
              >
                <div className="feature-content">
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{f.icon}</div>
                  <h2 style={{ color: 'var(--navy)', marginBottom: 12, fontSize: 28 }}>{f.title}</h2>
                  <p style={{ marginBottom: 20 }}>{f.description}</p>
                  <Link
                    href={`/sign-up?product=${f.id}&utm_source=features&utm_medium=cta`}
                    className="btn btn-primary"
                    id={`cta-feature-${f.id}`}
                  >
                    Get Started with {f.title}
                  </Link>
                </div>
                <div className="feature-aside" style={{ background: 'var(--bg-light)', borderRadius: 12, padding: 28 }}>
                  <h4 style={{ color: 'var(--navy)', marginBottom: 16 }}>Key Features</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {f.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-dark)' }}>
                        <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </div>
  );
}

