import React from 'react';
import "./styles/Experience.css";

function Experience() {
    return (
        <section className="experience">
            <h2><span className="highlight">Teaching Experience</span></h2>
            <div className="experience-item">
                <div className="experience-header">
                    <h3>Undergraduate Teaching Assistant</h3>
                    <p className="company">
                        <a href="https://www.cs.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Computer Science Department</a>
                    </p>
                </div>

                <div className="experience-details">
                    <div className="course">
                        <div className="course-header">
                            <h4>CPSC 317: Internet Computing</h4>
                            <span className="course-tag">Networking</span>
                        </div>
                        <ul>
                            <li>Selected to mentor students on <strong>socket programming</strong> and <strong>network protocols</strong>.</li>
                            <li>Guided implementations of DNS resolvers, HTTP clients, and packet analysis tools.</li>
                            <li>Held office hours to debug low-level network applications in C.</li>
                        </ul>
                    </div>

                    <div className="course">
                        <div className="course-header">
                            <h4>CPSC 310: Introduction to Software Engineering</h4>
                            <span className="course-tag">Full-Stack</span>
                        </div>
                        <ul>
                            <li>Mentored <strong>50+ students</strong> on Node.js/TypeScript architecture and REST API design.</li>
                            <li>Troubleshot and resolved complex <strong>CI/CD</strong> pipeline issues and async debugging challenges.</li>
                            <li>Facilitated code reviews and taught testing and clean-architecture practices.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
