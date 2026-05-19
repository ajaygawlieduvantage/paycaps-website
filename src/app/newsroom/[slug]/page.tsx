import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'


import '@/styles/newsroom.css'
import { newsroomArticles } from '@/data/newsroom'


type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return newsroomArticles.map((article) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const article = newsroomArticles.find(
        (item) => item.slug === params.slug
    )

    if (!article) {
        return {
            title: 'Newsroom Article | PayCaps',
        }
    }

    return {
        title: `${article.title} | PayCaps Newsroom`,
        description: article.description,
    }
}

export default function NewsroomDetailPage({
    params,
}: Props) {
    const article = newsroomArticles.find(
        (item) => item.slug === params.slug
    )

    if (!article) {
        notFound()
    }

    return (
        <div className="newsroom-detail-page">
            {/* HERO */}

            <section className="newsroom-detail-hero">
                <div className="container">
                    <div className="newsroom-detail-content-wrap">
                        <span className="newsroom-detail-category">
                            {article.category}
                        </span>

                        <h1 style={{ color: 'white' }}>{article.title}</h1>

                        <div className="newsroom-detail-meta">
                            <span>{article.date}</span>

                            <span>•</span>

                            <span>{article.readTime}</span>
                        </div>

                        <p>
                            {article.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}

            <section className="newsroom-detail-section">
                <div className="container">
                    <div className="newsroom-detail-layout">
                        <article className="newsroom-article">
                            <div className="newsroom-article-content">
                                {article.content}
                            </div>

                            <div className="newsroom-article-footer">
                                <Link
                                    href="/newsroom"
                                    className="btn btn-secondary"
                                >
                                    ← Back to Newsroom
                                </Link>
                            </div>
                        </article>

                        {/* SIDEBAR */}

                        <aside className="newsroom-sidebar">
                            <div className="newsroom-sidebar-card">
                                <h3>Need a Payment Gateway?</h3>

                                <p>
                                    Accept payments securely with
                                    PayCaps.
                                </p>

                                <Link
                                    href="/sign-up"
                                    className="btn btn-primary"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <div className="newsroom-sidebar-card">
                                <h4>Quick Highlights</h4>

                                <ul>
                                    <li>
                                        PCI DSS Level 1
                                    </li>

                                    <li>
                                        92+ currencies
                                    </li>

                                    <li>
                                        80+ payment methods
                                    </li>

                                    <li>
                                        Fast onboarding
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}