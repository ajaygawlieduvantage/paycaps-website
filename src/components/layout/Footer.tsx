'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import logoImg from '@/assests/logo2.png';
const footerLinks = {
  Products: [
    { label: 'Payment Gateway', href: '/features#gateway' },
    { label: 'Pay by Link', href: '/features#pay-by-link' },
    { label: 'Hosted Payment Page', href: '/features#hosted' },
    { label: 'Recurring Payments', href: '/features#recurring' },
    { label: 'Invoice Payments', href: '/features#invoice' },
    { label: 'White Label', href: '/features#white-label' },
    { label: 'Merchant Mobile App', href: '/features#app' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'News & Blog', href: '/blog' },
    { label: 'Security Overview', href: '/security' },
    { label: 'Compliance Docs', href: '/security#compliance' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Developers: [
    { label: 'Developer Docs', href: '/integrations' },
    { label: 'API Reference', href: '/integrations#api' },
    { label: 'WooCommerce Plugin', href: '/solutions/woocommerce' },
    { label: 'Shopify Plugin', href: '/solutions/shopify' },
    { label: 'Magento Plugin', href: '/solutions/magento' },
    { label: 'iOS & Android SDK', href: '/integrations#sdk' },
  ],
  Support: [
    { label: '24/7 Support', href: '/contact' },
    { label: 'WhatsApp Us', href: 'https://wa.me/97142833886' },
    { label: 'Knowledge Base', href: '/support' },
    { label: 'System Status', href: '/status' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Payment Methods', href: '/payment-methods' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top Row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              {/* <span className={styles.logoIcon}>P</span>
              <span className={styles.logoText}>Pay<strong>Caps</strong></span> */}
               <Image
              src={logoImg}
              alt="PayCaps"
              className={styles.logoIcon}
              width={250}
              height={150}
              priority
            />
            </div>
            <p className={styles.tagline}>
              UAE&apos;s most trusted CBUAE-regulated payment gateway. Powering 500+ merchants across the Middle East.
            </p>
            <div className={styles.contact}>
              <a href="tel:+97142833886" className={styles.contactItem}>
                📞 +971 4-283-3886
              </a>
              <a href="mailto:info@paycaps.com" className={styles.contactItem}>
                ✉️ info@paycaps.com
              </a>
              <a href="https://wa.me/97142833886" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                <span>💬</span> WhatsApp Us
              </a>
            </div>
            {/* Email Subscribe */}
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Get updates — enter your email" aria-label="Email for updates" />
              <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className={styles.col}>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span>© 2024 PayCaps Technology LLC. All rights reserved.</span>
            <span className={styles.licence}>CBUAE Licence No. [LICENCE-NO]</span>
          </div>
          <div className={styles.bottomRight}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <Link href="/cookies" className={styles.legalLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
