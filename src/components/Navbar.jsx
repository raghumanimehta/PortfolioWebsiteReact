import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="highlight">Raghumani</span>
                    <span className="logo-subtitle">Mehta</span>
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={`nav-link ${
                                location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/skills"
                            className={`nav-link ${
                                location.pathname === "/skills" ? "active" : ""
                            }`}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className={`nav-link ${
                                location.pathname === "/projects" ? "active" : ""
                            }`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/experience"
                            className={`nav-link ${
                                location.pathname === "/experience" ? "active" : ""
                            }`}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="mailto:your.email@example.com"
                            className="nav-link contact-btn"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;