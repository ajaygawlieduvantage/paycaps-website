import type { Metadata } from 'next';
import Link from 'next/link';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'About PayCaps — CBUAE Regulated Payment Gateway UAE',
  description:
    'Learn about PayCaps — the UAE\'s most trusted CBUAE-regulated payment gateway. Our mission, team, and commitment to secure payments.',
};

const timeline = [
  { year: '2018', event: 'PayCaps founded in Dubai, UAE' },
  { year: '2019', event: 'CBUAE payment services licence granted' },
  { year: '2020', event: 'PCI DSS Level 1 certification achieved' },
  { year: '2021', event: 'Reached 100+ merchant milestone' },
  { year: '2022', event: 'NESA certification and 50+ payment methods launched' },
  { year: '2023', event: '500+ merchants · 92+ currencies · 10+ integrations' },
  { year: '2024', event: 'AI fraud detection and smart routing launched' },
];

const values = [
  { icon: '🏛️', title: 'Compliance First', body: 'Every product decision starts with regulatory compliance. CBUAE-licensed, PCI DSS Level 1 certified.' },
  { icon: '⚡', title: 'Speed & Reliability', body: '99.9% uptime, T+1 settlements, and the fastest onboarding in UAE payments.' },
  { icon: '🤝', title: 'Merchant Success', body: 'Your growth is our metric. Dedicated support, fair pricing, and a team that picks up the phone.' },
  { icon: '🔒', title: 'Security by Design', body: 'SHA-256 encryption, AI fraud detection, 3D Secure 2.0 — security built into every layer.' },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="page-hero">
        <div className="container split-2">
          <div>
            <p className="page-hero-eyebrow">About Us</p>
            <h1 className="page-hero-title">UAE&apos;s Most Trusted Payment Gateway</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
              PayCaps is a CBUAE-regulated payment technology company based in Dubai. We exist to make it simple for UAE businesses to accept digital payments — safely, quickly, and at the best rates.
            </p>
            <Link href="/contact?utm_source=about&utm_medium=hero" className="btn btn-primary btn-lg" id="cta-about-contact">
              Talk to Our Team
            </Link>
          </div>
          <div className="about-stats-grid">
            {[
              { num: '500+', label: 'UAE Merchants' },
              { num: '2018', label: 'Founded in Dubai' },
              { num: '99.9%', label: 'Platform Uptime' },
              { num: '24/7', label: 'Merchant Support' },
            ].map((s) => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font-head)' }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header centered reveal">
            <h2>Our Values</h2>
            <div className="divider centered" />
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ color: 'var(--navy)', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <h2>Our Journey</h2>
            <div className="divider centered" />
          </div>
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            {timeline.map((t, i) => (
              <div key={t.year} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ display: 'flex', gap: 24, marginBottom: 28, alignItems: 'flex-start' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: 'var(--font-head)', zIndex: 1 }}>
                  {t.year}
                </div>
                <div className="card" style={{ flex: 1, padding: '16px 20px' }}>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--text-dark)', fontWeight: 500 }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section" style={{ background: 'var(--footer-bg)' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Regulated, Certified, Trusted</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 600, margin: '0 auto 40px', fontSize: 16 }}>
            PayCaps operates under the full supervision of the Central Bank of UAE (CBUAE) and adheres to the strictest international payment security standards.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            {['🏛️ CBUAE Regulated', '🔒 PCI DSS Level 1', '🛡️ NESA Certified', '🔐 3D Secure 2.0', '🤖 AI Fraud Detection'].map((b) => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '10px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
                {b}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>CBUAE Licence No. [LICENCE-NO]</p>
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}


