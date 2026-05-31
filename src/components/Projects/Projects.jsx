import React from "react";
import { projects } from "./IProject.ts";
import "../styles/Prjoects.css";
// export interface Project {
//     title: string;
//     duration: string;
//     technologies: string[];
//     description: string[];
//     links: ProjectLinks;
//
// export interface ProjectLinks {
//     github: string;
//     demo: string;
// }/ }
export default function Projects() {
    const processProject = () => {
        return projects.map((project) => (
            <div key={project.title} className="experience-item experience-card project"> 
                <div className="project-card-body">
                    <div className="course-header">
                        <div className="experience-header">
                            <h3>{project.title}</h3>
                            <span className="project-focus-tag">{project.focus}</span>
                            <p className="company">
                                {project.duration}
                            </p>
                            <div className="project-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.99 3.22 9.22 7.69 10.72.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.87-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.66 1.23 3.31.94.1-.74.39-1.23.71-1.51-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.42.11-2.97 0 0 .95-.3 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.69.11 2.97.72.79 1.16 1.8 1.16 3.03 0 4.32-2.62 5.27-5.12 5.55.4.34.76 1.01.76 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.77.53 4.47-1.5 7.68-5.73 7.68-10.72C23.25 5.48 18.27.5 12 .5z"/></svg>
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                            <path d="M5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="tech-tags">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="course-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <ul> 
                        {project.description.map((desc, index) => (
                            <li key={index}>
                                {desc}
                                {index === project.description.length - 1 && project.collaborator && (
                                    <>
                                        {" "}
                                        (<a href={project.collaborator} target="_blank" rel="noopener noreferrer">LinkedIn</a>)
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
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
