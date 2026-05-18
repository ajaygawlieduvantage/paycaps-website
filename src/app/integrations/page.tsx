import type { Metadata } from 'next';
import Link from 'next/link';
import { integrations } from '@/lib/data';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Payment Gateway Integrations UAE — Shopify, WooCommerce | PayCaps',
  description:
    'Integrate PayCaps with Shopify, WooCommerce, Magento, OpenCart or via REST API. 10+ integrations. 2-day setup. Get started free →',
};

export default function IntegrationsPage() {
  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="page-hero page-hero--center">
        <div className="container">
          <p className="page-hero-eyebrow">Integrations</p>
          <h1 className="page-hero-title">Connect PayCaps to Your Platform</h1>
          <p className="page-hero-lead page-hero-lead--center">
            REST API · Hosted Page · WooCommerce · Shopify · Magento · OpenCart · iOS/Android SDK
          </p>
          <div className="page-hero-actions">
            <Link href="/sign-up?utm_source=integrations&utm_medium=hero" className="btn btn-primary btn-lg" id="cta-integrations-hero">
              Start Accepting Payments
            </Link>
            <Link href="#api" className="btn btn-outline-white btn-lg">View developer docs</Link>
          </div>
        </div>
      </section>

      {/* Integration Cards */}
      <section className="section section-light" id="plugins">
        <div className="container">
          <div className="section-header centered reveal">
            <h2>10+ Ready-Made Integrations</h2>
            <div className="divider centered" />
            <p>From one-click plugins to full REST API — connect in days, not months.</p>
          </div>
          <div className="grid-4">
            {integrations.map((item) => (
              <div key={item.name} className="card reveal" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ color: 'var(--navy)', marginBottom: 6 }}>{item.name}</h3>
                <span style={{ fontSize: 12, background: 'var(--bg-light)', color: 'var(--muted)', padding: '3px 10px', borderRadius: 100, fontWeight: 600 }}>
                  {item.type}
                </span>
                <Link
                  href={`/sign-up?integration=${item.name.toLowerCase().replace(' ', '-')}&utm_source=integrations`}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: 16 }}
                  id={`cta-integration-${item.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="section section-white" id="api">
        <div className="container">
          <div className="integrations-split">
            <div className="reveal">
              <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>REST API</p>
              <h2 style={{ color: 'var(--navy)', marginBottom: 16 }}>Developer-First API</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20 }}>Full REST API with webhooks, idempotency keys, and sandbox environment. Comprehensive documentation with code examples in PHP, Node.js, Python and Ruby.</p>
              {['REST + Webhooks', 'Sandbox environment', 'SDKs: iOS, Android, Web', 'Idempotency keys', 'Rate limiting & retries', '99.9% uptime SLA'].map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 15 }}>
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span> {b}
                </div>
              ))}
              <div className="page-hero-actions" style={{ marginTop: 24, justifyContent: 'flex-start' }}>
                <Link href="/sign-up?utm_source=api&utm_medium=cta" className="btn btn-primary" id="cta-api-get-started">
                  Get API Access
                </Link>
                <Link href="#api" className="btn btn-secondary">View API reference</Link>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ background: 'var(--footer-bg)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 6, alignItems: 'center' }}>
                {['#FF5F57','#FEBC2E','#28C840'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block' }} />)}
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginLeft: 8 }}>PayCaps REST API</span>
              </div>
              <pre style={{ padding: 24, fontFamily: "'Courier New', monospace", fontSize: 13, lineHeight: 1.8, color: '#CBD5E1', overflow: 'auto', margin: 0 }}>
{`POST /api/v1/transactions/initiate
Authorization: Bearer {API_KEY}

{
  "amount": 500.00,
  "currency": "AED",
  "reference": "ORDER-5678",
  "redirect_url":
    "https://store.com/success"
}

// Response 200 OK
{
  "status": "success",
  "transaction_id": "TXN-A1B2C3",
  "payment_url":
    "https://pay.paycaps.com/TXN-A1B2C3"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      <BottomCTA />
    </div>
  );
}


