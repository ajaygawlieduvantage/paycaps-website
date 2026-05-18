import Link from 'next/link';
import { whyPayCaps } from '@/lib/data';
import styles from './WhyPayCaps.module.css';

export default function WhyPayCaps() {
  return (
    <section className="section section-light" id="why-paycaps">
      <div className="container">
        <div className="section-header centered reveal">
          <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>Why PayCaps</p>
          <h2>Why 500+ UAE Merchants Choose PayCaps</h2>
          <div className="divider centered" />
          <p>Built for the UAE market with the compliance, speed and reliability your business demands.</p>
        </div>

        <div className={styles.grid}>
          {whyPayCaps.map((item, i) => (
            <div key={item.title} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctas}>
          <Link href="/sign-up?utm_source=why-paycaps&utm_medium=cta" className="btn btn-primary btn-lg" id="cta-why-onboarding">
            Start your free onboarding
          </Link>
          <Link href="/pricing?utm_source=why-paycaps&utm_medium=cta" className="btn btn-secondary btn-lg">
            Compare plans →
          </Link>
        </div>
      </div>
    </section>
  );
}
