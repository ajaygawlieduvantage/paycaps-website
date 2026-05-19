'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/data';
import logoImg from '@/assests/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="nav-can">
        <nav className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            {/* <span className={styles.logoIcon}>P</span>
            <span className={styles.logoText}>Pay<strong>Caps</strong></span> */}

            <Image
              src={logoImg}
              alt="PayCaps"
              className={styles.logoImg}
              width={450}
              height={350}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={styles.navItem}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.dropdown && <span className={styles.chevron}>▾</span>}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className={styles.dropdown}>
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className={styles.actions}>
            <Link href="/sign-up?utm_source=nav&utm_medium=login" className={styles.loginLink}>
              Login
            </Link>
            <Link
              href="/sign-up?utm_source=nav&utm_medium=cta"
              className="btn btn-primary btn-sm"
              id="cta-nav-get-started"
            >
              Get Started — Free
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileCTAs}>
          <Link href="/sign-up?utm_source=mobile-nav&utm_medium=login" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
            Login to Dashboard
          </Link>
          <Link href="/sign-up?utm_source=mobile-nav&utm_medium=cta" className="btn btn-primary" id="cta-mobile-get-started" onClick={() => setMenuOpen(false)}>
            Get Started — Free
          </Link>
        </div>
      </div>
    </header>
  );
}
