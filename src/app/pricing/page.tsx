import type { Metadata } from 'next';
import Link from 'next/link';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Payment Gateway Pricing UAE | PayCaps',
  description:
    'Transparent, competitive payment gateway pricing for UAE businesses. No setup fees. CBUAE regulated. Compare plans and get started free →',
};

const plans = [
  {
    name: 'Starter',
    badge: null,
    price: 'Quote-based',
    sub: 'Perfect for new businesses',
    color: 'var(--navy)',
    features: [
      'Payment Gateway',
      'Hosted Payment Page',
      'Pay by Link',
      'Up to 500 transactions/month',
      'AED settlements',
      'Email support',
      '2-day onboarding',
    ],
    cta: 'Get a Quote',
    href: '/contact?plan=starter&utm_source=pricing',
    primary: false,
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    price: 'Quote-based',
    sub: 'For scaling businesses',
    color: 'var(--green)',
    features: [
      'Everything in Starter',
      'Recurring Payments',
      'Invoice Payments',
      'Merchant Mobile App',
      'Up to 5,000 transactions/month',
      'Priority support',
      'Dedicated account manager',
      'Custom checkout branding',
    ],
    cta: 'Get a Quote',
    href: '/contact?plan=growth&utm_source=pricing',
    primary: true,
  },
  {
    name: 'Enterprise',
    badge: null,
    price: 'Custom',
    sub: 'For high-volume merchants',
    color: 'var(--navy)',
    features: [
      'Everything in Growth',
      'White Label option',
      'Unlimited transactions',
      'Custom MDR rates',
      'Dedicated infrastructure',
      '24/7 phone support',
      'SLA guarantee',
      'On-site integration support',
    ],
    cta: 'Talk to Sales',
    href: '/contact?plan=enterprise&utm_source=pricing',
    primary: false,
  },
];

const faqs = [
  { q: 'Is there a setup fee?', a: 'No. PayCaps has zero setup fees. You only pay based on your transaction volume and the plan you choose.' },
  { q: 'How long does onboarding take?', a: 'Most merchants go live within 2 business days. Our dedicated team handles all the technical setup for you.' },
  { q: 'What currencies do you support?', a: 'PayCaps supports 92+ currencies with real-time FX conversion. Settlement is available in AED.' },
  { q: 'Do you support recurring payments?', a: 'Yes. Recurring payments, subscription billing, and installment plans are available on Growth and Enterprise plans.' },
  { q: 'Are you CBUAE regulated?', a: 'Yes. PayCaps is fully licensed and regulated by the Central Bank of UAE (CBUAE) — the highest regulatory authority for payment services in the UAE.' },
  { q: 'What is PCI DSS Level 1?', a: 'PCI DSS Level 1 is the highest level of security certification for payment processors. It means your customer card data is protected to the strictest global standards.' },
];

export default function PricingPage() {
  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="page-hero page-hero--center">
        <div className="container">
          <p className="page-hero-eyebrow">Pricing</p>
          <h1 className="page-hero-title">Transparent Pricing. No Hidden Fees.</h1>
          <p className="page-hero-lead page-hero-lead--narrow">
            Competitive MDR rates tailored for every UAE business size. No setup fee. No monthly minimums.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-3-equal">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="card reveal"
                style={{
                  border: plan.primary ? `2px solid var(--green)` : `1px solid var(--border)`,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {plan.badge && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', color: '#fff', padding: '4px 16px', borderRadius: 100, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {plan.badge}
                  </span>
                )}
                <h3 style={{ color: plan.color, marginBottom: 6 }}>{plan.name}</h3>
                <p style={{ fontSize: 13, marginBottom: 20 }}>{plan.sub}</p>
                <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-head)', marginBottom: 4 }}>{plan.price}</div>
                <p style={{ fontSize: 12, marginBottom: 24 }}>Contact us for your custom rate</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, marginBottom: 28 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-dark)' }}>
                      <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`btn ${plan.primary ? 'btn-primary' : 'btn-secondary'}`}
                  id={`cta-pricing-${plan.name.toLowerCase()}`}
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--muted)' }}>
            All plans include: CBUAE regulated gateway · PCI DSS Level 1 · 80+ payment methods · 92+ currencies · 24/7 support
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white" id="faq">
        <div className="container">
          <div className="section-header centered reveal">
            <h2>Frequently Asked Questions</h2>
            <div className="divider centered" />
          </div>
          <div className="faq-stack">
            {faqs.map((faq) => (
              <div key={faq.q} className="card reveal" style={{ padding: '20px 24px' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: 8 }}>{faq.q}</h4>
                <p style={{ fontSize: 15, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <BottomCTA />
    </div>
  );
}


