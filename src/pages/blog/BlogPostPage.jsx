import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./BlogPages.css";

/** @typedef {import("../../blog/types").BlogPost} BlogPost */

/**
 * @param {{ post?: BlogPost | null }} props
 */
function BlogPostPage({ post = null }) {
    const { slug } = useParams();

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

    return (
        <div className="blog-shell">
            <Navbar />
            <main className="blog-page blog-page--post">
                <article className="blog-post">
                    <header className="blog-post__header">
                        <p className="blog-kicker">Article</p>
                        <h1>{metadata.title}</h1>
                        <p className="blog-post__lede">{metadata.excerpt}</p>
                        <div className="blog-post__meta">
                            <span>{metadata.publishedAt}</span>
                            {metadata.readingTime ? <span>{metadata.readingTime}</span> : null}
                            <span>{metadata.slug}</span>
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

                    <section className="blog-prose" aria-label="Blog content">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </section>
                </article>
            </main>
        </div>
    );
}

export default BlogPostPage;
