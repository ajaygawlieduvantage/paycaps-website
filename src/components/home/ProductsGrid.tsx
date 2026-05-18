import Link from 'next/link';

import { products as defaultProducts } from '@/lib/data';
import type { HomeProduct } from '@/lib/strapi/homepage';

import styles from './ProductsGrid.module.css';

type ProductsGridProps = {
  products?: HomeProduct[];
};

export default function ProductsGrid({ products = defaultProducts }: ProductsGridProps) {
  return (
    <section className={`section section-light`} id="features">
      <div className="container">
        <div className={`section-header centered reveal`}>
          <p className="text-green" style={{ fontWeight: 600, marginBottom: 8, color: 'var(--green)' }}>Our Products</p>
          <h2>Everything You Need to Accept Payments in UAE</h2>
          <div className="divider centered" />
          <p>One platform. Every payment method. Built for businesses of every size in the UAE.</p>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div key={product.id} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={styles.icon}>{product.icon}</div>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.desc}>{product.description}</p>
              <Link
                href={product.href}
                className={`btn btn-primary btn-sm ${styles.cta}`}
                id={`cta-product-${product.id}`}
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Not sure which product fits you?{' '}
            <Link href="/contact?utm_source=products-footer&utm_medium=cta" className={styles.footerLink}>
              Talk to our team →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
