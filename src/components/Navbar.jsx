import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import resume from "../assets/Mehta_Raghumani_resume_systems.pdf";

const navItems = [
    { label: "Home", section: "home" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["home", "experience", "projects", "contact"];
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const extraOffset = 8;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: Math.max(elementPosition - navbarHeight - extraOffset, 0),
            behavior: "smooth",
        });
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <button
                    onClick={() => scrollToSection("home")}
                    className="navbar-logo"
                >
                    <span>Raghumani</span>
                    <span className="logo-subtitle">Mehta</span>
                </button>
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.section}>
                            <button
                                onClick={() => scrollToSection(item.section)}
                                className={`nav-link ${activeSection === item.section ? "active" : ""}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item">
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link resume-link"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
                            className="theme-toggle"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? "Light" : "Dark"}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
