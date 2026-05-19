import type { Metadata } from 'next'
import Link from 'next/link'

import '@/styles/developers.css'

export const metadata: Metadata = {
    title:
        'Developer Guide & API Documentation | PayCaps',

    description:
        'Integrate PayCaps payment gateway with REST APIs, SDKs, hosted payment pages, and plugins.',
}

const developerSections = [
    {
        title: 'REST API',
        description:
            'Powerful REST APIs for payments, refunds, settlements, and transaction management.',
        icon: '⚡',
    },

    {
        title: 'Hosted Checkout',
        description:
            'Secure hosted payment pages with minimal integration effort.',
        icon: '🌐',
    },

    {
        title: 'Webhooks',
        description:
            'Receive real-time payment and transaction notifications.',
        icon: '🔔',
    },

    {
        title: 'Mobile SDKs',
        description:
            'Native iOS and Android SDKs for seamless mobile checkout.',
        icon: '📱',
    },

    {
        title: 'Plugins',
        description:
            'Shopify, WooCommerce, Magento, and OpenCart integrations.',
        icon: '🛒',
    },

    {
        title: 'Sandbox Environment',
        description:
            'Test payment flows safely before going live.',
        icon: '🧪',
    },
]

export default function DevelopersPage() {
    return (
        <div className="developers-page">
            {/* HERO */}

            <section className="developers-hero">
                <div className="container">
                    <div className="developers-hero-content">
                        <span className="developers-eyebrow">
                            Developer Guide
                        </span>

                        <h2 style={{ color: 'white' }}>
                            Build Secure Payment Experiences
                            <span> with PayCaps APIs</span>
                        </h2>

                        <p>
                            Integrate payments using REST APIs,
                            hosted checkout, webhooks, mobile
                            SDKs, and ready-made ecommerce
                            plugins.
                        </p>

                        <div className="developers-actions">
                            <Link
                                href="/sign-up"
                                className="btn btn-primary"
                            >
                                Get API Access
                            </Link>

                            <Link
                                href="#api-reference"
                                className="btn btn-secondary"
                            >
                                View API Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}

            <section className="developers-features">
                <div className="container">
                    <div className="section-header centered">
                        <h2>Developer Tools</h2>

                        <div className="divider centered" />

                        <p>
                            Everything developers need to build
                            modern payment experiences.
                        </p>
                    </div>

                    <div className="developers-grid">
                        {developerSections.map((item) => (
                            <div
                                key={item.title}
                                className="developer-card"
                            >
                                <div className="developer-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API REFERENCE */}

            <section
                className="developers-api"
                id="api-reference"
            >
                <div className="container">
                    <div className="developers-api-layout">
                        <div>
                            <span className="developers-label">
                                REST API
                            </span>

                            <h2>
                                Developer-First Payment API
                            </h2>

                            <p>
                                Integrate secure online payments
                                using modern REST APIs with
                                webhooks, idempotency support,
                                sandbox testing, and advanced
                                transaction management.
                            </p>

                            <div className="developers-list">
                                {[
                                    'REST APIs + Webhooks',
                                    'Sandbox environment',
                                    'Secure API authentication',
                                    'Multi-currency support',
                                    'Refund APIs',
                                    'Transaction management',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="developers-list-item"
                                    >
                                        <span>✓</span>

                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="developers-actions">
                                <Link
                                    href="/sign-up"
                                    className="btn btn-primary"
                                >
                                    Get API Keys
                                </Link>

                                <Link
                                    href="/contact"
                                    className="btn btn-secondary"
                                >
                                    Talk to Developer Team
                                </Link>
                            </div>
                        </div>

                        {/* CODE BLOCK */}

                        <div className="developers-code-card">
                            <div className="developers-code-top">
                                <div className="developers-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <p>PayCaps REST API</p>
                            </div>

                            <pre>
                                {`POST /api/v1/transactions/initiate

Authorization: Bearer {API_KEY}

{
  "amount": 500.00,
  "currency": "AED",
  "reference": "ORDER-1001",
  "customer_email": "customer@email.com",
  "redirect_url":
    "https://store.com/success"
}

// Response

{
  "status": "success",
  "transaction_id": "TXN-123456",
  "payment_url":
    "https://pay.paycaps.com/checkout"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* SDK */}

            <section className="developers-sdk">
                <div className="container">
                    <div className="section-header centered">
                        <h2>SDKs & Integrations</h2>

                        <div className="divider centered" />

                        <p>
                            Build faster using ready-made SDKs
                            and ecommerce plugins.
                        </p>
                    </div>

                    <div className="sdk-grid">
                        {[
                            'Node.js SDK',
                            'PHP SDK',
                            'Python SDK',
                            'iOS SDK',
                            'Android SDK',
                            'WooCommerce Plugin',
                            'Shopify Integration',
                            'Magento Plugin',
                        ].map((sdk) => (
                            <div
                                key={sdk}
                                className="sdk-card"
                            >
                                {sdk}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="developers-cta">
                <div className="container">
                    <div className="developers-cta-box">
                        <h2>
                            Ready to Build with PayCaps?
                        </h2>

                        <p>
                            Modern APIs · Fast onboarding ·
                            Enterprise-grade infrastructure
                        </p>

                        <div className="developers-actions">
                            <Link
                                href="/sign-up"
                                className="btn btn-white"
                            >
                                Create Developer Account
                            </Link>

                            <Link
                                href="/contact"
                                className="btn btn-outline-light"
                            >
                                Contact Developer Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}