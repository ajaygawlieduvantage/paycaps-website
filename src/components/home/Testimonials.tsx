import Link from 'next/link';

import { testimonials as defaultTestimonials } from '@/lib/data';
import type { HomeTestimonial } from '@/lib/strapi/homepage';

import styles from './Testimonials.module.css';

type TestimonialsProps = {
  testimonials?: HomeTestimonial[];
};

export default function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <section className="section section-white" id="testimonials">
      <div className="container">
        <div className="section-header centered reveal">
          <p style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 8 }}>Testimonials</p>
          <h2>Trusted by 500+ UAE Merchants</h2>
          <div className="divider centered" />
          <p>Real businesses. Real results. See what UAE merchants say about PayCaps.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={`${t.id}-${i}`} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}, {t.company}</span>
                  <span className={styles.industry}>{t.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Merchant Logo Strip */}
        <div className={styles.logoStrip}>
          {['Desert Bloom', 'Emirates Intl School', 'Souk Digital', 'HealthFirst', 'Al Futtaim', 'Noon', 'Landmark'].map((name) => (
            <span key={name} className={styles.merchantLogo}>{name}</span>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/sign-up?utm_source=testimonials&utm_medium=cta" className="btn btn-primary btn-lg" id="cta-join-merchants">
            Join 500+ UAE merchants
          </Link>
        </div>
      </div>
    </section>
  );
}
