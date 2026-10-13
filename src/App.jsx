import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogPostPage from "./pages/blog/BlogPostPage";
import { blogPosts } from "./pages/blog/posts";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage posts={blogPosts.map((post) => post.metadata)} />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
