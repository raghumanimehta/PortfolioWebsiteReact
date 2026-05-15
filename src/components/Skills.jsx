import React from "react";
import "./styles/Skills.css";
import { TechTag } from "./commonComponnents";

const skillGroups = [
    {
        title: "Languages",
        items: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript", "SQL", "Rust"]
    },
    {
        title: "Frameworks & Tools",
        items: ["Node.js", "Express", "Spring Boot", "Git", "Docker", "ROS", "GitHub Actions", "FreeRTOS", "Pico SDK"]
    },
    {
        title: "Systems",
        items: ["Linux/Unix", "POSIX", "Sockets", "Real-Time Scheduling"]
    },
    {
        title: "Cloud",
        items: ["AWS Textract", "AWS Lambda", "AWS S3", "AWS SQS", "AWS SNS", "AWS RDS"]
    },
    {
        title: "Testing",
        items: ["JUnit", "Mocha/Chai", "Pytest", "GDB", "Valgrind", "Raspberry Pi Debug Probe"]
    }
];

export default function Skills() {
    return (
        <section className="skills-section">
            <h2><span className="highlight">Technical Skills</span></h2>

            <div className="skills-panel">
                {skillGroups.map((group) => (
                    <div key={group.title} className="skill-row">
                        <h3>{group.title}</h3>
                        <div className="skills-list">
                            {group.items.map((skill) => (
                                <TechTag key={skill} tech={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
