import React from "react";
import "./styles/Skills.css";

export default function Skills() {
    return (
        <section className="skills-section">
            <h2><span className="highlight">Technical Skills</span></h2>

            <div className="skills-container">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <ul className="skills-list">
                        <li>Python</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Rust</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Frameworks & Tools</h3>
                    <ul className="skills-list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Spring Boot</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>ROS</li>
                        <li>GitHub Actions</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Cloud & DevOps</h3>
                    <ul className="skills-list">
                        <li>AWS (Textract, Lambda, S3, SQS, SNS, RDS)</li>
                        <li>Linux/Unix, POSIX</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Testing & Debugging</h3>
                    <ul className="skills-list">
                        <li>JUnit</li>
                        <li>Mocha/Chai</li>
                        <li>Pytest</li>
                        <li>GDB, Valgrind</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}