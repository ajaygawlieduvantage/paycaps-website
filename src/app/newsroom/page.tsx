import type { Metadata } from 'next'
import Link from 'next/link'

import '@/styles/newsroom.css'

export const metadata: Metadata = {
    title: 'PayCaps Newsroom | Fintech & Payment Updates UAE',

    description:
        'Latest PayCaps news, fintech updates, product launches, partnerships, and payment industry insights.',
}

const newsroomItems = [
    {
        title:
            'PayCaps Launches Faster Merchant Onboarding in UAE',

        category: 'Company News',

        date: 'May 2026',

        description:
            'Businesses can now start accepting payments with simplified onboarding and faster verification.',

        slug:
            'faster-merchant-onboarding-uae',
    },

    {
        title:
            'PayCaps Adds Apple Pay & Google Pay Support',

        category: 'Product Update',

        date: 'April 2026',

        description:
            'Merchants can now accept digital wallet payments with seamless checkout experiences.',

        slug:
            'apple-pay-google-pay-support',
    },

    {
        title:
            'PCI DSS Level 1 Compliance Successfully Renewed',

        category: 'Security',

        date: 'April 2026',

        description:
            'PayCaps continues to maintain enterprise-grade payment security standards.',

        slug:
            'pci-dss-compliance-renewed',
    },

    {
        title:
            'New WooCommerce Plugin Released',

        category: 'Integrations',

        date: 'March 2026',

        description:
            'Enhanced WooCommerce integration with improved performance and checkout UX.',

        slug:
            'woocommerce-plugin-release',
    },

    {
        title:
            'PayCaps Expands Multi-Currency Settlement Support',

        category: 'Payments',

        date: 'March 2026',

        description:
            'Businesses can now settle in multiple currencies with improved FX management.',

        slug:
            'multi-currency-settlement',
    },

    {
        title:
            'PayCaps Reaches 500+ UAE Merchants',

        category: 'Milestone',

        date: 'February 2026',

        description:
            'Growing adoption across ecommerce, retail, education, and hospitality sectors.',

        slug:
            '500-uae-merchants',
    },
]

export default function NewsroomPage() {
    return (
        <div className="newsroom-page">
            {/* HERO */}

            <section className="newsroom-hero">
                <div className="container">
                    <div className="newsroom-hero-content">
                        <span className="newsroom-eyebrow">
                            PayCaps Newsroom
                        </span>

                        <h1 style={{ color: 'white' }}>
                            Latest News &
                            <span> Payment Industry Updates</span>
                        </h1>

                        <p>
                            Stay updated with PayCaps product
                            launches, fintech innovations,
                            partnerships, compliance updates,
                            and payment industry insights across
                            UAE.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED */}

            <section className="newsroom-featured">
                <div className="container">
                    <div className="newsroom-featured-card">
                        <div>
                            <span className="featured-news-badge">
                                Featured Update
                            </span>

                            <h2>
                                PayCaps Launches Faster Merchant
                                Onboarding in UAE
                            </h2>

                            <p>
                                Businesses can now complete
                                onboarding and begin accepting
                                payments in as little as 2 days.
                            </p>

                            <div className="newsroom-meta">
                                <span>Company News</span>
                                <span>•</span>
                                <span>May 2026</span>
                            </div>

                            <Link
                                href="/newsroom/faster-merchant-onboarding-uae"
                                className="btn btn-primary"
                            >
                                Read Announcement
                            </Link>
                        </div>

                        <div className="newsroom-featured-visual">
                            <div className="newsroom-gradient" />
                        </div>
                    </div>
                </div>
            </section>

            {/* GRID */}

            <section className="newsroom-grid-section">
                <div className="container">
                    <div className="section-header centered">
                        <h2>Recent Updates</h2>

                        <div className="divider centered" />

                        <p>
                            Company announcements, payment
                            innovations, and fintech updates.
                        </p>
                    </div>

                    <div className="newsroom-grid">
                        {newsroomItems.map((item) => (
                            <article
                                key={item.slug}
                                className="newsroom-card"
                            >
                                <span className="newsroom-category">
                                    {item.category}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                                <div className="newsroom-card-footer">
                                    <span>{item.date}</span>

                                    <Link
                                        href={`/newsroom/${item.slug}`}
                                        className="newsroom-link"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="newsroom-cta">
                <div className="container">
                    <div className="newsroom-cta-box">
                        <h2 style={{ color: 'white' }}>
                            Ready to Accept Online Payments?
                        </h2>

                        <p>
                            PCI DSS Level 1 · Fast onboarding ·
                            92+ currencies
                        </p>

                        <div className="newsroom-actions">
                            <Link
                                href="/sign-up"
                                className="btn btn-white"
                            >
                                Create Free Account
                            </Link>

                            <Link
                                href="/contact"
                                className="btn btn-outline-light"
                            >
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}