import { projects } from './IProject.ts'

export default function TemplateProjects() {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.title}>
                    <h1>{project.title}</h1>
                    <h2>{project.duration}</h2>
                    <p>{project.technologies}</p>
                    <p>{project.description}</p>
                    <div className="project-links">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        )}
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
