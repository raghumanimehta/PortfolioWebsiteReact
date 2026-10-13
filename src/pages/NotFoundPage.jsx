import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./blog/BlogPages.css";

export default function NotFoundPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="blog-shell">
            <Navbar />
            <main className="blog-page">
                <section className="blog-empty-state">
                    <p className="blog-kicker">404</p>
                    <h1>Page not found</h1>
                    <p>This address doesn’t match a page on the site.</p>
                    <Link className="primary-link" to="/">Back to home</Link>
                </section>
            </main>
        </div>
    );
}
