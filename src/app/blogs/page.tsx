// src/app/blogs/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import '@/styles/blogs.css'

export const metadata: Metadata = {
    title: 'Payment Gateway Blogs UAE | PayCaps',
    description:
        'Explore PayCaps insights on payment gateways, fintech, PCI DSS compliance, UAE payment trends, integrations, and digital payments.',
}

const featuredPost = {
    title: 'How to Choose the Right Payment Gateway in UAE',
    description:
        'Everything merchants need to know about choosing a secure, scalable, and CBUAE-regulated payment gateway in UAE.',
    category: 'Payment Gateway',
    date: 'May 2026',
    readTime: '8 min read',
    slug: 'choose-right-payment-gateway-uae',
}

const blogPosts = [
    {
        title: 'PCI DSS Compliance Explained for UAE Businesses',
        description:
            'Understand PCI DSS Level 1 compliance and why it matters for online merchants.',
        category: 'Security',
        date: 'May 2026',
        readTime: '6 min read',
        slug: 'pci-dss-compliance-uae',
    },
    {
        title: 'Best Shopify Payment Gateway in UAE',
        description:
            'Compare integrations, settlements, and transaction fees for Shopify stores.',
        category: 'Integrations',
        date: 'April 2026',
        readTime: '5 min read',
        slug: 'shopify-payment-gateway-uae',
    },
    {
        title: 'Pay By Link for Restaurants & SMEs',
        description:
            'Learn how businesses collect payments instantly using secure payment links.',
        category: 'Pay By Link',
        date: 'April 2026',
        readTime: '4 min read',
        slug: 'pay-by-link-uae',
    },
    {
        title: 'Why Fast Settlements Matter in Ecommerce',
        description:
            'Settlement speed directly impacts cash flow and business growth.',
        category: 'Ecommerce',
        date: 'March 2026',
        readTime: '7 min read',
        slug: 'fast-settlements-ecommerce',
    },
    {
        title: 'Apple Pay & Google Pay Adoption in UAE',
        description:
            'Mobile wallet payments are rapidly growing across UAE merchants.',
        category: 'Digital Payments',
        date: 'March 2026',
        readTime: '5 min read',
        slug: 'apple-pay-google-pay-uae',
    },
    {
        title: 'Hosted Payment Pages vs API Integration',
        description:
            'Which integration model is best for your business?',
        category: 'Developers',
        date: 'February 2026',
        readTime: '6 min read',
        slug: 'hosted-vs-api-integration',
    },
]

export default function BlogsPage() {
    return (
        <div className="blogs-page">
            {/* HERO */}
            <section className="blogs-hero">
                <div className="container">
                    <div className="blogs-hero-content">
                        <span className="blogs-eyebrow">
                            PayCaps Insights
                        </span>

                        <h1 style={{ color: 'white' }}>
                            Payment Gateway & Fintech
                            <span> Insights for UAE Businesses</span>
                        </h1>

                        <p>
                            Explore expert articles on payment
                            gateways, compliance, integrations,
                            ecommerce growth, and digital payments
                            in UAE.
                        </p>

                        <div className="blogs-actions">
                            <Link
                                href="/sign-up"
                                className="btn btn-primary"
                            >
                                Start Accepting Payments
                            </Link>

                            <Link
                                href="/contact"
                                className="btn btn-secondary"
                            >
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED BLOG */}
            <section className="blogs-featured">
                <div className="container">
                    <div className="featured-card">
                        <div className="featured-content">
                            <span className="featured-badge">
                                Featured Article
                            </span>

                            <h2>{featuredPost.title}</h2>

                            <p>
                                {featuredPost.description}
                            </p>

                            <div className="featured-meta">
                                <span>{featuredPost.category}</span>
                                <span>•</span>
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span>
                                    {featuredPost.readTime}
                                </span>
                            </div>

                            <Link
                                href={`/blogs/${featuredPost.slug}`}
                                className="btn btn-primary"
                            >
                                Read Article
                            </Link>
                        </div>

                        <div className="featured-visual">
                            <div className="featured-gradient" />
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="blogs-grid-section">
                <div className="container">
                    <div className="section-header centered">
                        <h2>Latest Articles</h2>
                        <div className="divider centered" />
                        <p>
                            Stay updated with fintech, payments,
                            and ecommerce trends in UAE.
                        </p>
                    </div>

                    <div className="blogs-grid">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="blog-card"
                            >
                                <div className="blog-card-top">
                                    <span className="blog-category">
                                        {post.category}
                                    </span>
                                </div>

                                <h3>{post.title}</h3>

                                <p>{post.description}</p>

                                <div className="blog-meta">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="blog-link"
                                >
                                    Read More →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="blogs-cta">
                <div className="container">
                    <div className="blogs-cta-box">
                        <h2>
                            Ready to Accept Online Payments?
                        </h2>

                        <p>
                            Fast onboarding · PCI DSS Level 1 ·
                            CBUAE Regulated
                        </p>

                        <div className="blogs-actions">
                            <Link
                                href="/sign-up"
                                className="btn btn-white"
                            >
                                Create Free Account
                            </Link>

                            <a
                                href="tel:+97142833886"
                                className="btn btn-outline-light"
                            >
                                Call +971 4-283-3886
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}