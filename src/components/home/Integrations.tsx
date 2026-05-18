import Link from 'next/link';
import { integrations } from '@/lib/data';
import styles from './Integrations.module.css';

const codeExample = `// PayCaps Payment API — Quick Start
POST /api/v1/transactions/initiate
Authorization: Bearer {YOUR_API_KEY}
Content-Type: application/json

{
  "amount": 150.00,
  "currency": "AED",
  "reference": "ORDER-1234",
  "customer": {
    "name": "Ahmed Al Rashidi",
    "email": "ahmed@example.com"
  },
  "redirect_url": "https://yourstore.com/success",
  "webhook_url": "https://yourstore.com/webhook"
}

// Response
{
  "status": "success",
  "transaction_id": "TXN-9A3F2B",
  "payment_url": "https://pay.paycaps.com/TXN-9A3F2B",
  "expires_at": "2024-12-31T23:59:59Z"
}`;

export default function Integrations() {
  return (
    <section className="section section-white" id="integrations">
      <div className="container">
        <div className="section-header centered reveal">
          <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>Integrations</p>
          <h2>Connect PayCaps to Your Platform in Days</h2>
          <div className="divider centered" />
          <p>10+ integrations. 2-day setup. Dedicated integration support team.</p>
        </div>

        <div className={styles.inner}>
          {/* Left — Integration Types */}
          <div className={styles.left}>
            <h3 className={styles.leftTitle}>Choose your integration</h3>
            <div className={styles.chips}>
              {integrations.map((item) => (
                <div key={item.name} className={styles.chip}>
                  <span className={styles.chipIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.chipName}>{item.name}</span>
                    <span className={styles.chipType}>{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.subInfo}>
              {['10+ integrations', '2-day setup', 'Dedicated support'].map((s) => (
                <span key={s} className={styles.infoPill}>✓ {s}</span>
              ))}
            </div>
            <div className={styles.chipCTAs}>
              <Link href="/integrations?utm_source=integrations&utm_medium=cta" className="btn btn-primary" id="cta-view-docs">
                View developer docs
              </Link>
              <Link href="/integrations#plugins?utm_source=integrations&utm_medium=cta" className="btn btn-secondary">
                Download plugin →
              </Link>
            </div>
          </div>

          {/* Right — Code Preview */}
          <div className={styles.right}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} style={{ background: '#FF5F57' }} />
              <span className={styles.codeDot} style={{ background: '#FEBC2E' }} />
              <span className={styles.codeDot} style={{ background: '#28C840' }} />
              <span className={styles.codeTitle}>PayCaps REST API</span>
              <span className={styles.codeLang}>JSON</span>
            </div>
            <pre className={styles.codeBlock}>
              <code>
                {codeExample.split('\n').map((line, i) => {
                  if (line.startsWith('//')) return <span key={i} className={styles.comment}>{line}{'\n'}</span>;
                  if (line.includes('"') && line.includes(':')) {
                    const parts = line.split(':');
                    return (
                      <span key={i}>
                        <span className={styles.str}>{parts[0]}</span>
                        <span className={styles.kw}>:</span>
                        <span className={styles.val}>{parts.slice(1).join(':')}</span>{'\n'}
                      </span>
                    );
                  }
                  return <span key={i}>{line}{'\n'}</span>;
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
