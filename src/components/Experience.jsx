import React from 'react';
import "./styles/Experience.css";
import { TechTag } from "./commonComponnents.jsx";

const experiences = [
  {
    labels: ["Research", "Co-op"],
    title: "Undergraduate Research Assistant",
    organization: "Systopia Lab, UBC",
    organizationLink: "https://systopia.cs.ubc.ca/",
    duration: "May 2026 - Present",
    tags: ["Systems Research", "Linux", "userfaultfd", "Cloud Security"],
    bullets: [
      "Paid Undergraduate Research Assistant working on confidential computing and memory access pattern leakage.",
      "Prototyping Linux userfaultfd and user-level paging techniques for memory access pattern protection.",
      "Evaluating security and overhead tradeoffs on representative cloud software workloads."
    ]
  },
  {
    labels: ["Work"],
    title: "Software Lead",
    organization: "UBC Sailbot",
    organizationLink: "https://ubcsailbot.org/",
    duration: "Feb 2025 - Present",
    tags: ["Leadership", "Python", "ROS", "Navigation Algorithms"],
    bullets: [
      "Managing 35 developers across software subteams building autonomy for a 3m robotic sailboat.",
      "Coordinating architecture, reviews, testing, and integration across navigation, controls, simulation, and infrastructure work.",
      "Aligning software delivery with electrical, mechanical, and competition-readiness constraints."
    ]
  },
  {
    labels: ["Teaching"],
    title: "Undergraduate Teaching Assistant",
    roleDetail: "CPSC 317: Computer Networking / CPSC 310: Software Engineering",
    organization: "UBC Department of Computer Science",
    organizationLink: "https://www.cs.ubc.ca/",
    duration: "Sept 2024 - Apr 2026",
    tags: ["Networking", "C", "TypeScript", "CI/CD"],
    bullets: [
      "Supported CPSC 317 students on UDP/TCP, sockets, IP forwarding, DNS, HTTP clients, packet analysis, and C networking assignments.",
      "Mentored CPSC 310 students on TypeScript, Node.js, REST APIs, testing, CI/CD, and project architecture.",
      "Held office hours and code reviews focused on debugging, correctness, and maintainable engineering practice."
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
