import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App'
import { blogPosts } from "./pages/blog/posts";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogPostPage from "./pages/blog/BlogPostPage";
import "../style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/blog" element={<BlogListPage posts={blogPosts.map((blogPost) => blogPost.metadata)} />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
