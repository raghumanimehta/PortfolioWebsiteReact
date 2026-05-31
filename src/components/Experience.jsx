import React from 'react';
import "./styles/Experience.css";
import { TechTag } from "./commonComponnents.jsx";

const experiences = [
  {
    labels: ["Research", "Co-op"],
    title: "Undergraduate Research Assistant",
    organization: "Systopia Lab, UBC",
    duration: "May 2026 - Present",
    tags: ["Systems Research", "User-Level Paging", "Cloud Security"],
    bullets: [
      "Contributing to systems research on protecting confidential cloud applications from memory access pattern leakage.",
      "Exploring user-level paging as a practical way to hide memory access patterns without requiring major application rewrites.",
      "Preparing to prototype paging-based obfuscation techniques and evaluate their overhead on representative cloud workloads."
    ]
  },
  {
    labels: ["Work"],
    title: "Software Lead",
    organization: "UBC Sailbot",
    organizationLink: "https://ubcsailbot.org/",
    duration: "Feb 2025 - Present",
    tags: ["Leadership", "Python", "Navigation Algorithms", "Testing"],
    bullets: [
      "Lead a 30-member software team across 5 subteams, coordinating development, code reviews, and integration planning for an autonomous sailboat.",
      "Design autonomy software architecture and align software interfaces with electrical and mechanical subsystem constraints.",
      "Guide development of route-planning algorithms for autonomous sailing under uncertain wind and marine conditions.",
      "Built mock testing and simulation workflows to validate navigation logic before hardware integration."
    ]
  },
  {
    labels: ["Teaching"],
    title: "Undergraduate Teaching Assistant",
    roleDetail: "CPSC 317: Computer Networking",
    organization: "UBC Department of Computer Science",
    organizationLink: "https://www.cs.ubc.ca/",
    duration: "Jan 2026 - Apr 2026",
    tags: ["Networking", "C", "Socket Programming", "Network Protocols"],
    bullets: [
      "Led tutorials and supported students on IP forwarding, UDP, TCP, sockets, encryption, client-server programming, and debugging C/Java networking assignments.",
      "Guided implementations of DNS resolvers, HTTP clients, and packet analysis tools.",
      "Held office hours to debug low-level network applications in C."
    ]
  },
  {
    labels: ["Teaching"],
    title: "Undergraduate Teaching Assistant",
    roleDetail: "CPSC 310: Software Engineering",
    organization: "UBC Department of Computer Science",
    organizationLink: "https://www.cs.ubc.ca/",
    duration: "Sept 2024 - Dec 2025",
    tags: ["Full-Stack", "Node.js", "TypeScript", "REST API", "CI/CD"],
    bullets: [
      "Mentored 50+ students on TypeScript, Node.js, testing, and CI workflows across a large software engineering project.",
      "Troubleshot complex CI/CD pipeline issues and async debugging challenges.",
      "Facilitated code reviews and taught testing and clean-architecture practices."
    ]
  },
  {
    labels: ["Work"],
    title: "Jump Start Orientation Leader",
    organization: "UBC CSDL",
    duration: "Aug 2024 - Sept 2024",
    tags: ["Leadership", "Mentorship", "Time Management"],
    bullets: [
      "Mentored 25 first-year students and led a time-management seminar for 100+ attendees."
    ]
  }
];

function Experience() {
  return (
    <section className="experience content-section">
      <h2><span className="highlight">Experience</span></h2>
      <div className="experience-list content-list">
        {experiences.map((experience) => (
          <article key={`${experience.title}-${experience.duration}`} className="experience-item experience-card">
            <div className="experience-card-header">
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{experience.title}</h3>
                  {experience.roleDetail && <p className="role-detail">{experience.roleDetail}</p>}
                  <p className="company">
                    {experience.organizationLink ? (
                      <a href={experience.organizationLink} target="_blank" rel="noopener noreferrer">{experience.organization}</a>
                    ) : (
                      experience.organization
                    )}
                  </p>
                </div>
                <div className="experience-labels">
                  {experience.labels.map((label) => (
                    <span
                      key={label}
                      className={`experience-label${label === "Co-op" ? " experience-label-accent" : ""}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="experience-meta">
                <p className="date">{experience.duration}</p>
                <div className="tech-tags">
                  {experience.tags.map((tech) => (
                    <TechTag key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
            <ul className="experience-bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
