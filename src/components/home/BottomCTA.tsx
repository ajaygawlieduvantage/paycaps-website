import Link from 'next/link';
import styles from './BottomCTA.module.css';

export default function BottomCTA() {
  return (
    <section className={styles.banner} id="cta-bottom">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <h2 className={styles.heading}>Ready to accept online payments in UAE?</h2>
            <div className={styles.pills}>
              {['Fast 2-day onboarding', 'Best rates', 'No setup fee', 'CBUAE Licensed'].map((p) => (
                <span key={p} className={styles.pill}>✓ {p}</span>
              ))}
            </div>
          </div>
          <div className={styles.ctas}>
            <Link
              href="/sign-up?utm_source=bottom-cta&utm_medium=cta&utm_campaign=main"
              className="btn btn-white btn-lg"
              id="cta-signup-create-account"
            >
              Create Free Account
            </Link>
            <a
              href="tel:+97142833886"
              className="btn btn-outline-white btn-lg"
              id="cta-bottom-call"
            >
              📞 Call +971 4-283-3886
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
