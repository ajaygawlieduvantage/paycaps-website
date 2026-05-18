import Link from 'next/link';
import { paymentMethods } from '@/lib/data';
import styles from './PaymentMethods.module.css';

export default function PaymentMethods() {
  return (
    <section className="section section-white" id="payment-methods">
      <div className="container">
        <div className="section-header centered reveal">
          <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>Payment Methods</p>
          <h2>Accept 80+ Payment Methods Worldwide</h2>
          <div className="divider centered" />
          <p>From global cards to local wallets — your customers pay the way they prefer.</p>
        </div>

        <div className={styles.logosGrid}>
          {paymentMethods.map((pm, i) => (
            <div key={pm.name} className={`${styles.logoCard} reveal reveal-delay-${(i % 4) + 1}`}>
              <span className={styles.logoEmoji}>
                {pm.name === 'Visa' ? '💳' :
                 pm.name === 'Mastercard' ? '🔴' :
                 pm.name === 'Apple Pay' ? '🍎' :
                 pm.name === 'Google Pay' ? 'G' :
                 pm.name === 'Samsung Pay' ? 'S' :
                 pm.name === 'Amex' ? 'AMEX' :
                 pm.name === 'UnionPay' ? 'UP' :
                 pm.name.slice(0, 2)}
              </span>
              <span className={styles.logoName}>{pm.name}</span>
            </div>
          ))}
          <div className={`${styles.logoCard} ${styles.more} reveal`}>
            <span className={styles.moreCount}>+68</span>
            <span className={styles.logoName}>More</span>
          </div>
        </div>

        <div className={styles.subInfo}>
          {['92+ currencies', 'Real-time FX conversion', 'Settle in AED', 'T+1 settlement'].map((item) => (
            <div key={item} className={styles.subPill}>
              <span className={styles.subCheck}>✓</span>
              {item}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/payment-methods?utm_source=pm-section&utm_medium=cta" className="btn btn-secondary">
            View all payment methods
          </Link>
        </div>
      </div>
    </section>
  );
}
