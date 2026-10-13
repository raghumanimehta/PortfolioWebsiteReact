import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./BlogPages.css";
import { blogPosts } from "./posts";
import { formatPublishedDate } from "./formatPublishedDate";

function BlogPostPage() {
    const { slug } = useParams();
    const post = blogPosts.find((blogPost) => blogPost.metadata.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!post) {
        return (
            <div className="blog-shell">
                <Navbar />
                <main className="blog-page blog-page--post">
                    <section className="blog-empty-state blog-empty-state--detail" aria-live="polite">
                        <p className="blog-empty-state__eyebrow">WIP</p>
                        <h1>WIP</h1>
                        <p>This blog post is still in progress.</p>
                    </section>
                </main>
            </div>
        );
    }

    const { metadata, content } = post;
    const sections = content.map((section, index) => ({
        ...section,
        id: `blog-section-${index}`,
    }));
    const contents = sections.filter((section) => section.heading);

    function jumpToSection(id) {
        const heading = document.getElementById(id);
        if (!heading) return;
        heading.focus({ preventScroll: true });
        heading.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
            block: "start",
        });
    }

    return (
        <div className="blog-shell">
            <Navbar />
            <main className="blog-page blog-page--post">
                <Link className="blog-back-link" to="/blog"><span aria-hidden="true">←</span> All writing</Link>
                <article className="blog-post">
                    <header className="blog-post__header">
                        <p className="blog-kicker">Article</p>
                        <h1>{metadata.title}</h1>
                        <p className="blog-post__lede">{metadata.excerpt}</p>
                        <div className="blog-post__meta">
                            <time dateTime={metadata.publishedAt}>{formatPublishedDate(metadata.publishedAt)}</time>
                            {metadata.readingTime ? <span>{metadata.readingTime}</span> : null}
                        </div>
                        {metadata.tags.length > 0 ? (
                            <ul className="blog-tag-list" aria-label={`${metadata.title} tags`}>
                                {metadata.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        ) : null}
                    </header>

                    {metadata.coverImage ? (
                        <img className="blog-post__cover" src={metadata.coverImage} alt={`${metadata.title} cover`} />
                    ) : null}

                    {contents.length > 0 && (
                        <nav className="blog-toc" aria-label="Table of contents">
                            <h2>In this article</h2>
                            <ol>
                                {contents.map((section) => (
                                    <li key={section.id}>
                                        <button type="button" onClick={() => jumpToSection(section.id)}>
                                            {section.heading}
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    <section className="blog-prose" aria-label="Blog content">
                        {sections.map((section, sectionIndex) => (
                            <div className="blog-prose-section" key={sectionIndex}>
                                {section.heading && <h2 id={section.id} tabIndex={-1}>{section.heading}</h2>}
                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                    <ReactMarkdown key={paragraphIndex}>{paragraph}</ReactMarkdown>
                                ))}
                            </div>
                        ))}
                    </section>
                </article>
            </main>
        </div>
    );
}

export default BlogPostPage;
