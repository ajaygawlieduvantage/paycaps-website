import Link from 'next/link';

import type { HomeStat } from '@/lib/strapi/homepage';

import AnimatedStat from './AnimatedStat';
import styles from './StatsBar.module.css';

type StatsBarProps = {
  stats: HomeStat[];
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className={`${styles.statsBar} section-white`} id="stats">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {stats.map((stat) => (
              <div key={stat.label} className={`${styles.statItem} reveal`}>
                <div className={styles.number}>
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                </div>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.cta}>
            <Link href="#features" className="btn btn-secondary btn-sm">
              See all features →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
