'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';

const industries = ['eCommerce', 'Food & Restaurants', 'Education', 'Healthcare', 'Retail / SME', 'Travel & Tourism', 'Real Estate', 'Logistics', 'Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', industry: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to Odoo CRM webhook
    setSubmitted(true);
  };

  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="page-hero page-hero--center">
        <div className="container">
          <p className="page-hero-eyebrow">Contact Us</p>
          <h1 className="page-hero-title">Let&apos;s Get Your Business Accepting Payments</h1>
          <p className="page-hero-lead page-hero-lead--center" style={{ maxWidth: 500 }}>
            Our team responds within 2 hours. No sales pressure — just honest advice about the right solution for your business.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className="card reveal">
              <h2 style={{ color: 'var(--navy)', marginBottom: 8, fontSize: 24 }}>Send us a message</h2>
              <p style={{ marginBottom: 28 }}>Fill in the form and we&apos;ll be in touch within 2 hours.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: 'var(--navy)', marginBottom: 8 }}>Message received!</h3>
                  <p>Our team will be in touch within 2 hours.</p>
                  <Link href="/" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Ahmed Al Rashidi" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="ahmed@company.com" />
                    </div>
                  </div>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input id="company" name="company" required value={form.company} onChange={handleChange} placeholder="Desert Bloom LLC" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 123 4567" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <select id="industry" name="industry" value={form.industry} onChange={handleChange}>
                      <option value="">Select your industry</option>
                      {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">How can we help? *</label>
                    <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your payment needs, current volume, or any specific integrations you need..." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" id="cta-contact-submit" style={{ justifyContent: 'center' }}>
                    Send Message
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Contact Info */}
              <div className="card reveal">
                <h3 style={{ color: 'var(--navy)', marginBottom: 20 }}>Get in touch directly</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: '📞', label: 'Phone', value: '+971 4-283-3886', href: 'tel:+97142833886' },
                    { icon: '💬', label: 'WhatsApp', value: 'Chat with us now', href: 'https://wa.me/97142833886' },
                    { icon: '✉️', label: 'Email', value: 'info@paycaps.com', href: 'mailto:info@paycaps.com' },
                  ].map((c) => (
                    <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 16px', background: 'var(--bg-light)', borderRadius: 8, transition: 'background 0.2s' }}>
                      <span style={{ fontSize: 22 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="card reveal reveal-delay-2" style={{ background: 'var(--navy)', border: 'none' }}>
                <h4 style={{ color: '#fff', marginBottom: 16 }}>Why 500+ merchants chose us</h4>
                {['2-day onboarding guarantee', 'No setup fees, ever', 'CBUAE regulated & trusted', 'Competitive UAE rates', '24/7 dedicated support'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span> {t}
                  </div>
                ))}
                <Link href="/sign-up?utm_source=contact-sidebar&utm_medium=cta" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }} id="cta-contact-sidebar">
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


