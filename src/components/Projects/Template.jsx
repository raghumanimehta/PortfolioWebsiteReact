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
                    <p>{project.links}</p>
                </div>
            ))}
        </div>
    );
}
