import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./BlogPages.css";

/** @typedef {import("../../blog/types").BlogMetadata} BlogMetadata */

/**
 * @param {{ posts?: BlogMetadata[] }} props
 */
function BlogListPage({ posts = [] }) {
    const hasPosts = posts.length > 0;
    let page = Math.trunc(posts.length / 5);

    return (
        <div className="blog-shell">
            <Navbar />
            <main className="blog-page blog-page--list">
                <section className="blog-pagination" aria-label="Blog pagination">
                    <div className="blog-pagination__controls">
                        <button type="button" className="blog-pagination__button">Previous</button>
                        <span className="blog-pagination__status">Page X of Y</span>
                        <button type="button" className="blog-pagination__button">Next</button>
                    </div>
                </section>
            </main>
        </div>
    )

    ///return (
    ///    <div className="blog-shell">
    ///        <Navbar />
    ///        <main className="blog-page blog-page--list">
    ///            <section className="blog-hero">
    ///                <p className="blog-kicker">Writing</p>
    ///                <h1>Notes on systems, robotics, backend, and what I am learning along the way.</h1>
    ///                <p className="blog-hero__summary">
    ///                    This page is scaffolded to accept lightweight blog metadata now, while leaving pagination
    ///                    and data loading for the next pass.
    ///                </p>
    ///            </section>

    ///            {hasPosts ? (
    ///                <section className="blog-list" aria-label="Blog posts">
    ///                    {posts.map((post) => (
    ///                        <article className="blog-card" key={post.slug}>
    ///                            {post.coverImage ? (
    ///                                <div className="blog-card__cover-wrapper">
    ///                                    <img
    ///                                        className="blog-card__cover"
    ///                                        src={post.coverImage}
    ///                                        alt={`${post.title} cover`}
    ///                                    />
    ///                                </div>
    ///                            ) : (
    ///                                <div className="blog-card__cover-placeholder" aria-hidden="true" />
    ///                            )}
    ///                            <div className="blog-card__body">
    ///                                <div className="blog-card__meta">
    ///                                    <span>{post.publishedAt}</span>
    ///                                    {post.readingTime ? <span>{post.readingTime}</span> : null}
    ///                                    {post.featured ? <span>Featured</span> : null}
    ///                                </div>
    ///                                <h2>{post.title}</h2>
    ///                                <p>{post.excerpt}</p>
    ///                                {post.tags.length > 0 ? (
    ///                                    <ul className="blog-tag-list" aria-label={`${post.title} tags`}>
    ///                                        {post.tags.map((tag) => (
    ///                                            <li key={tag}>{tag}</li>
    ///                                        ))}
    ///                                    </ul>
    ///                                ) : null}
    ///                                <Link className="blog-card__link" to={`/blog/${post.slug}`}>
    ///                                    Open post
    ///                                </Link>
    ///                            </div>
    ///                        </article>
    ///                    ))}
    ///                </section>
    ///            ) : (
    ///                <section className="blog-empty-state" aria-live="polite">
    ///                    <p className="blog-empty-state__eyebrow">No posts wired in yet</p>
    ///                    <h2>Your blog list scaffold is ready.</h2>
    ///                    <p>
    ///                        Pass a <code>BlogMetadata[]</code> into <code>BlogListPage</code> when you are ready to
    ///                        add pagination and real post summaries.
    ///                    </p>
    ///                </section>
    ///            )}

    ///            <section className="blog-pagination-scaffold" aria-label="Pagination scaffold">
    ///                <div>
    ///                    <p className="blog-pagination-scaffold__label">Pagination Scaffold</p>
    ///                    <p>Add your page controls, cursor controls, or “load more” behavior here.</p>
    ///                </div>
    ///                <div className="blog-pagination-scaffold__controls" aria-hidden="true">
    ///                    <span>Previous</span>
    ///                    <span>Page X of Y</span>
    ///                    <span>Next</span>
    ///                </div>
    ///            </section>
    ///        </main>
    ///    </div>
    ///);
}

export default BlogListPage;
