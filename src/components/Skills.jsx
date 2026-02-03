import React from "react";
import "./styles/Skills.css";
import { TechTag } from "./commonComponnents";

export default function Skills() {
    return (
        <section className="skills-section">
            <h2><span className="highlight">Technical Skills</span></h2>

            <div className="skills-container">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skills-list">
                        <TechTag tech="Python" />
                        <TechTag tech="C++" />
                        <TechTag tech="C" />
                        <TechTag tech="Rust" />
                        <TechTag tech="Java" />
                        <TechTag tech="TypeScript" />
                        <TechTag tech="JavaScript" />
                        <TechTag tech="SQL" />
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Frameworks & Tools</h3>
                    <div className="skills-list">
                        <TechTag tech="Node.js" />
                        <TechTag tech="Express" />
                        <TechTag tech="Spring Boot" />
                        <TechTag tech="Git" />
                        <TechTag tech="Docker" />
                        <TechTag tech="ROS" />
                        <TechTag tech="GitHub Actions" />
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Cloud & DevOps</h3>
                    <div className="skills-list">
                        <TechTag tech="AWS Textract" />
                        <TechTag tech="AWS Lambda" />
                        <TechTag tech="AWS S3" />
                        <TechTag tech="AWS SQS, SNS" />
                        <TechTag tech="AWS RDS" />
                        <TechTag tech="Linux/Unix, POSIX" />
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Testing & Debugging</h3>
                    <div className="skills-list">
                        <TechTag tech="JUnit" />
                        <TechTag tech="Mocha/Chai" />
                        <TechTag tech="Pytest" />
                        <TechTag tech="GDB, Valgrind" />
                    </div>
                </div>
            </div>
        </section>
    );
}