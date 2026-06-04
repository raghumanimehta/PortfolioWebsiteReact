import React from "react";
import "./styles/Skills.css";
import { TechTag } from "./commonComponnents";

const skillGroups = [
    {
        title: "Languages",
        items: ["C", "C++", "Python", "Rust", "TypeScript", "JavaScript", "Java", "SQL"]
    },
    {
        title: "Robotics & Tools",
        items: ["ROS", "OMPL", "RRT*", "Git", "Docker", "GitHub Actions", "GDB", "Valgrind"]
    },
    {
        title: "Systems",
        items: ["Linux", "POSIX", "Sockets", "userfaultfd", "Virtual Memory", "FreeRTOS", "Real-Time Scheduling"]
    },
    {
        title: "Cloud",
        items: ["AWS Textract", "AWS Lambda", "AWS S3", "AWS SQS/SNS", "PostgreSQL", "FastAPI"]
    },
    {
        title: "Backend",
        items: ["Node.js", "Express", "Spring Boot", "REST API", "CI/CD", "Pytest", "JUnit", "Mocha/Chai"]
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
