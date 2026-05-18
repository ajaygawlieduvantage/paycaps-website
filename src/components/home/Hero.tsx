import Link from 'next/link';

import type { HomeHeroCMS } from '@/lib/strapi/homepage';
import { HOMEPAGE_HERO_FALLBACK } from '@/lib/strapi/homepage';

import styles from './Hero.module.css';

export const heroContentDefaults = HOMEPAGE_HERO_FALLBACK;

const paymentLogos = [
  { name: 'Visa', abbr: 'VISA' },
  { name: 'Mastercard', abbr: 'MC' },
  { name: 'UnionPay', abbr: 'UP' },
  { name: 'American Express', abbr: 'AMEX' },
  { name: 'Apple Pay', abbr: '🍎 Pay' },
  { name: 'Google Pay', abbr: 'G Pay' },
  { name: 'Samsung Pay', abbr: 'S Pay' },
  { name: 'Mada', abbr: 'mada' },
];

type HeroProps = Partial<HomeHeroCMS>;

export default function Hero(props: HeroProps) {
  const topBadgeLine = props.topBadgeLine ?? heroContentDefaults.topBadgeLine;
  const heroTitleLine1 = props.heroTitleLine1 ?? heroContentDefaults.heroTitleLine1;
  const heroTitleLine2 = props.heroTitleLine2 ?? heroContentDefaults.heroTitleLine2;
  const heroSubtext = props.heroSubtext ?? heroContentDefaults.heroSubtext;
  const trustPills = props.trustPills ?? heroContentDefaults.trustPills;
  const trustLineBadges = props.trustLineBadges ?? heroContentDefaults.trustLineBadges;

  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.inner}>
          {/* Left Content */}
          <div className={styles.content}>
            <div className={styles.topBadge}>
              <span className={styles.dot} />
              {topBadgeLine}
            </div>

            <h1 className={styles.headline}>
              {heroTitleLine1}
              <br />
              <span className={styles.highlight}>{heroTitleLine2}</span>
            </h1>

            <p className={styles.sub}>{heroSubtext}</p>

            <div className={styles.trustPills}>
              {trustPills.map((t) => (
                <span key={t} className={styles.pill}>{t}</span>
              ))}
            </div>

            <div className={styles.ctas}>
              <Link
                href="/sign-up?utm_source=hero&utm_medium=cta&utm_campaign=main"
                className="btn btn-primary btn-lg"
                id="cta-hero-start-payments"
              >
                Start Accepting Payments
              </Link>
              <Link
                href="/contact?utm_source=hero&utm_medium=cta"
                className="btn btn-outline-white btn-lg"
                id="cta-hero-talk-sales"
              >
                Talk to Sales
              </Link>
            </div>

            <div className={styles.trustLine}>
              {trustLineBadges.map((b) => (
                <span key={b} className={styles.trustItem}>
                  <span className={styles.checkIcon}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className={styles.mockupWrap}>
            <div className={styles.mockup}>
              <div className={styles.mockupBar}>
                <span /><span /><span />
                <span className={styles.mockupTitle}>PayCaps Dashboard</span>
              </div>
              <div className={styles.mockupContent}>
                {/* Stats Row */}
                <div className={styles.dashStats}>
                  {[
                    { label: "Today's Revenue", value: 'AED 48,290', up: true },
                    { label: 'Transactions', value: '1,284', up: true },
                    { label: 'Success Rate', value: '99.2%', up: true },
                  ].map((s) => (
                    <div key={s.label} className={styles.dashStat}>
                      <span className={styles.dashLabel}>{s.label}</span>
                      <span className={styles.dashValue}>{s.value}</span>
                      {s.up && <span className={styles.dashUp}>↑ 12%</span>}
                    </div>
                  ))}
                </div>
                {/* Fake Chart */}
                <div className={styles.chartArea}>
                  <div className={styles.chartTitle}>Revenue (30 days)</div>
                  <div className={styles.chartBars}>
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {/* Recent Transactions */}
                <div className={styles.txList}>
                  {[
                    { name: 'Visa •••• 4242', amount: 'AED 1,200', status: 'success' },
                    { name: 'Apple Pay', amount: 'AED 350', status: 'success' },
                    { name: 'Mastercard •••• 1234', amount: 'AED 5,750', status: 'success' },
                  ].map((tx) => (
                    <div key={tx.name} className={styles.tx}>
                      <span className={styles.txName}>{tx.name}</span>
                      <span className={styles.txAmt}>{tx.amount}</span>
                      <span className={styles.txBadge}>✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className={`${styles.floatBadge} ${styles.badge1}`}>🔒 PCI DSS Level 1</div>
            {/* <div className={`${styles.floatBadge} ${styles.badge2}`}>⚡ 2-day go-live</div> */}
          </div>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className={styles.ticker}>
        <span className={styles.tickerLabel}>Accepted payment methods:</span>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...paymentLogos, ...paymentLogos].map((logo, i) => (
              <span key={i} className={styles.tickerLogo}>{logo.abbr}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
