import Link from 'next/link';

import { complianceBadges as defaultCompliance } from '@/lib/data';
import type { HomeComplianceBadge } from '@/lib/strapi/homepage';

import styles from './TrustCompliance.module.css';

type TrustComplianceProps = {
  complianceBadges?: HomeComplianceBadge[];
  trustStatement?: string;
};

const DEFAULT_TRUST_STATEMENT =
  'PayCaps is licensed and regulated by the Central Bank of the UAE (CBUAE), certified to PCI DSS Level 1 — the highest standard in payment security — and compliant with UAE NESA information security requirements. Every transaction is protected by SHA-256 encryption, AI-powered fraud detection and enterprise-grade DDoS protection, ensuring 99.9% uptime for your business.';

export default function TrustCompliance({
  complianceBadges = defaultCompliance.map((c) => ({ ...c })),
  trustStatement = DEFAULT_TRUST_STATEMENT,
}: TrustComplianceProps) {
  return (
    <section className={`section ${styles.trust}`} id="trust">
      <div className="container">
        <div className={`section-header centered reveal ${styles.header}`}>
          <p className={styles.overline}>Security & Compliance</p>
          <h2 className={styles.heading}>Payments You Can Trust.<br />Compliance You Can Count On.</h2>
          <div className="divider centered" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </div>

        <div className={styles.badgeGrid}>
          {complianceBadges.map((badge, i) => (
            <div key={badge.title} className={`${styles.badge} reveal reveal-delay-${(i % 4) + 1}`}>
              <span className={styles.badgeIcon}>{badge.icon}</span>
              <span className={styles.badgeTitle}>{badge.title}</span>
              <span className={styles.badgeDesc}>{badge.description}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.statement} reveal`}>
          <p>{trustStatement}</p>
        </div>

        <div className={`${styles.ctas} reveal`}>
          <Link href="/security?utm_source=trust&utm_medium=cta" className="btn btn-outline-white btn-lg">
            Read our security overview
          </Link>
          <Link href="/security#compliance?utm_source=trust&utm_medium=cta" className="btn btn-white btn-lg">
            Download compliance docs
          </Link>
        </div>
      </div>
    </section>
  );
}
