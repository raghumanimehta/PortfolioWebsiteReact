import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = ["home", "skills", "experience", "projects"];
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <button
                    onClick={() => scrollToSection("home")}
                    className="navbar-logo"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <span className="highlight">Raghumani</span>
                    <span className="logo-subtitle">Mehta</span>
                </button>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <button
                            onClick={() => scrollToSection("home")}
                            className={`nav-link ${
                                activeSection === "home" ? "active" : ""
                            }`}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => scrollToSection("skills")}
                            className={`nav-link ${
                                activeSection === "skills" ? "active" : ""
                            }`}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Skills
                        </button>
                    </li> 
                    <li className="nav-item">
                        <button
                            onClick={() => scrollToSection("experience")}
                            className={`nav-link ${
                                activeSection === "experience" ? "active" : ""
                            }`}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Experience
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className={`nav-link ${
                                activeSection === "projects" ? "active" : ""
                            }`}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Projects
                        </button>
                    </li>
                    <li className="nav-item">
                        <a
                            href="mailto:raghumani2003@outlook.com"
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