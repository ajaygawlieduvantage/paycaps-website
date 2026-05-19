import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import '@/styles/blogs.css'


import { blogs } from '@/data/blog'

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const blog = blogs.find(
        (item) => item.slug === params.slug
    )

    if (!blog) {
        return {
            title: 'Blog Not Found | PayCaps',
        }
    }

    return {
        title: `${blog.title} | PayCaps`,
        description: blog.description,
    }
}

export default function BlogDetailPage({
    params,
}: Props) {
    const blog = blogs.find(
        (item) => item.slug === params.slug
    )

    if (!blog) {
        notFound()
    }

    return (
        <div className="blog-detail-page">
            {/* HERO */}

            <section className="blog-detail-hero">
                <div className="container">
                    <span className="blog-detail-category">
                        {blog.category}
                    </span>

                    <h1 style={{ color: 'white' }}>{blog.title}</h1>

                    <div className="blog-detail-meta">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                    </div>

                    <p>{blog.description}</p>
                </div>
            </section>

            {/* CONTENT */}

            <section className="blog-detail-content-section">
                <div className="container">
                    <div className="blog-detail-content">
                        {blog.content}
                    </div>
                </div>
            </section>
        </div>
    )
}