'use client';

import { useState } from 'react';
import Link from 'next/link';

import { industries as defaultIndustries } from '@/lib/data';
import type { HomeIndustry } from '@/lib/strapi/homepage';

import styles from './Industries.module.css';

type IndustriesProps = {
  industries?: HomeIndustry[];
};

export default function Industries({ industries = defaultIndustries }: IndustriesProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section section-light" id="industries">
      <div className="container">
        <div className="section-header centered reveal">
          <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>Industries</p>
          <h2>Solutions Built for Your Industry</h2>
          <div className="divider centered" />
          <p>PayCaps is purpose-built for businesses across the UAE — click your industry to learn more.</p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div
              key={ind.id}
              className={`${styles.chip} ${active === ind.id ? styles.active : ''} reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setActive(active === ind.id ? null : ind.id)}
            >
              <span className={styles.chipIcon}>{ind.icon}</span>
              <span className={styles.chipLabel}>{ind.label}</span>
              <span className={styles.arrow}>{active === ind.id ? '▲' : '▼'}</span>

              {active === ind.id && (
                <div className={styles.expanded}>
                  <p className={styles.value}>{ind.value}</p>
                  <Link
                    href={`${ind.href}?utm_source=industries&utm_medium=cta`}
                    className="btn btn-primary btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    See {ind.label} solution →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
