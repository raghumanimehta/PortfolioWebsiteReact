import React, { useCallback, useRef, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import resume from "../assets/Mehta_Raghumani_resume_systems.pdf";

const HOME_SCROLL_TARGET_KEY = "portfolio-home-scroll-target";

const navItems = [
    { label: "Home", section: "home" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
];

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [menuOpen, setMenuOpen] = useState(false);
    const activeLockRef = useRef({ section: null, until: 0 });
    const activeSectionRef = useRef("home");
    const isHomePage = location.pathname === "/";

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        activeLockRef.current = {
            section: sectionId,
            until: Date.now() + 1200,
        };
        setActiveSection(sectionId);

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const extraOffset = 8;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: Math.max(elementPosition - navbarHeight - extraOffset, 0),
            behavior: "smooth",
        });
        setMenuOpen(false);
        return true;
    }, []);

    const goToSection = (sectionId) => {
        if (!isHomePage) {
            sessionStorage.setItem(HOME_SCROLL_TARGET_KEY, sectionId);
            setMenuOpen(false);
            navigate("/");
            return;
        }

        scrollToSection(sectionId);
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        activeSectionRef.current = activeSection;
    }, [activeSection]);

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection("");
        }
    }, [isHomePage]);

    useEffect(() => {
        if (!isHomePage) return;

        const storedTarget = sessionStorage.getItem(HOME_SCROLL_TARGET_KEY);
        if (!storedTarget) return;

        sessionStorage.removeItem(HOME_SCROLL_TARGET_KEY);
        window.requestAnimationFrame(() => scrollToSection(storedTarget));
    }, [isHomePage, scrollToSection]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            if (!isHomePage) return;

            if (activeLockRef.current.section && Date.now() < activeLockRef.current.until) {
                setActiveSection(activeLockRef.current.section);
                return;
            }

            const sections = ["home", "experience", "projects", "contact"];
            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
            const activationLine = navbarHeight + Math.min(window.innerHeight * 0.28, 180);
            let nextActive = activeSectionRef.current;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= activationLine && rect.bottom > navbarHeight + 24) {
                        nextActive = section;
                    }
                }
            }

            setActiveSection(nextActive);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-top-row">
                    <button
                        onClick={() => goToSection("home")}
                        className="navbar-logo"
                    >
                        <span className="navbar-logo-name">Raghumani Mehta</span>
                        <span className="logo-subtitle">Portfolio</span>
                    </button>
                    <div className="mobile-nav-controls">
                        <button
                            type="button"
                            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
                            className="theme-toggle mobile-theme-toggle"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? "Light" : "Dark"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            className="menu-toggle"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        >
                            {menuOpen ? "Close" : "Menu"}
                        </button>
                    </div>
                </div>
                <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.section}>
                            <button
                                onClick={() => goToSection(item.section)}
                                className={`nav-link ${isHomePage && activeSection === item.section ? "active" : ""}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item resume-nav-item">
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link resume-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
                            className="theme-toggle desktop-theme-toggle"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? "Light" : "Dark"}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => goToSection("contact")}
                            className={`nav-link ${isHomePage && activeSection === "contact" ? "active" : ""}`}
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
