'use client';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Create your account', desc: 'Fill in your business details. Takes less than 5 minutes.' },
  { num: '02', title: 'Submit documents', desc: 'Upload your trade licence and banking details securely.' },
  { num: '03', title: 'Get reviewed', desc: 'Our compliance team reviews your application within 24 hours.' },
  { num: '04', title: 'Go live', desc: "You're approved! Integrate and start accepting payments in UAE." },
];

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', website: '', volume: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-shell">
      <section className="section section-light" style={{ padding: '72px 0', minHeight: '100vh' }}>
        <div className="container">
          <div className="split-form">
            {/* Form */}
            <div className="card">
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ color: 'var(--navy)', fontSize: 32, marginBottom: 8 }}>Create Your Free Account</h1>
                <p>Join 500+ UAE merchants. No setup fee. Go live in 2 days.</p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                  <h2 style={{ color: 'var(--navy)', marginBottom: 12 }}>Application Received!</h2>
                  <p style={{ marginBottom: 8 }}>Our team will review your application and be in touch within 24 hours.</p>
                  <p style={{ fontSize: 14, color: 'var(--muted)' }}>Check your email at <strong>{form.email}</strong> for next steps.</p>
                  <Link href="/" className="btn btn-primary" style={{ marginTop: 28 }}>Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="signup-name">Full Name *</label>
                      <input id="signup-name" name="name" required value={form.name} onChange={handleChange} placeholder="Ahmed Al Rashidi" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email">Work Email *</label>
                      <input id="signup-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="ahmed@company.com" />
                    </div>
                  </div>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="signup-company">Company Name *</label>
                      <input id="signup-company" name="company" required value={form.company} onChange={handleChange} placeholder="Desert Bloom LLC" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-phone">Phone Number *</label>
                      <input id="signup-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+971 50 123 4567" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-website">Business Website</label>
                    <input id="signup-website" name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://yourstore.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-volume">Expected Monthly Volume (AED)</label>
                    <select id="signup-volume" name="volume" value={form.volume} onChange={handleChange}>
                      <option value="">Select range</option>
                      <option value="0-50k">AED 0 – 50,000</option>
                      <option value="50k-200k">AED 50,000 – 200,000</option>
                      <option value="200k-1m">AED 200,000 – 1,000,000</option>
                      <option value="1m+">AED 1,000,000+</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" id="cta-signup-submit" style={{ justifyContent: 'center' }}>
                    Create Free Account →
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
                    By creating an account, you agree to our{' '}
                    <Link href="/terms" style={{ color: 'var(--navy)' }}>Terms of Service</Link> and{' '}
                    <Link href="/privacy" style={{ color: 'var(--navy)' }}>Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card" style={{ background: 'var(--navy)', border: 'none' }}>
                <h3 style={{ color: '#fff', marginBottom: 20 }}>How it works</h3>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                      {s.num}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{s.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 2 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--navy)', marginBottom: 16 }}>What you get</h4>
                {['No setup fee', 'Go live in 2 days', 'CBUAE regulated', '80+ payment methods', '92+ currencies', '24/7 support', 'T+1 settlement'].map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14 }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 13, color: 'var(--muted)' }}>
                    Questions? <a href="tel:+97142833886" style={{ color: 'var(--navy)', fontWeight: 600 }}>Call +971 4-283-3886</a> or{' '}
                    <a href="https://wa.me/97142833886" style={{ color: 'var(--green)', fontWeight: 600 }}>WhatsApp us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


