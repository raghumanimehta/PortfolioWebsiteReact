import React from "react";
import { projects } from "./IProject.ts";
import "../styles/Prjoects.css";

export default function Projects() {
    const processProject = () => {
        return projects.map((project) => (
            <article key={project.title} className="experience-item experience-card project">
                <div className="project-card-body">
                    <div className="course-header">
                        <div className="experience-header">
                            <h3>{project.title}</h3>
                            <span className="project-focus-tag">{project.focus}</span>
                            <p className="company">
                                {project.duration}
                            </p>
                        </div>
                    </div>
                    <p className="project-impact">{project.impact}</p>
                    <div className="project-detail-grid">
                        <div className="project-detail-block">
                            <h4>Problem:</h4>
                            <p>{project.problem}</p>
                        </div>
                        <div className="project-detail-block">
                            <h4>My work:</h4>
                            <ul>
                                {project.myWork.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="project-footer">
                        <div className="project-tech">
                            <h4>Tech:</h4>
                            <div className="tech-tags">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="course-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links" aria-label={`${project.title} links`}>
                            <h4>Links:</h4>
                            <div>
                                {project.links.map((link) => (
                                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        ))
    }
    return (
        <section className="projects content-section">
            <h2><span className="highlight">Projects</span></h2>
            <div className="ProjectsHolder content-list">
                {processProject()}
            </div>
        </section>
    )
}
