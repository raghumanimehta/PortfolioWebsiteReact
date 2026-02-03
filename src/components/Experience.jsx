import React from 'react';
import "./styles/Experience.css";
import { techIcons, TechTag } from "./commonComponnents.jsx"

function Experience() {
  return (
    <section className="experience">
      <div className='work-experience'>
        <h2><span className='highlight'>Work Experience</span></h2>
        <div className="experience-item">
          <div className="course">
            <div className="course-header">
              <div className="experience-header">
                <h3>Pathfinding Team Lead</h3>
                <p className="company">
                  <a href="https://ubcsailbot.org/" target="_blank" rel="noopener noreferrer">UBC Sailbot</a>
                </p>
              </div>
              <div className="tech-tags">
                <TechTag tech="Leadership" />
                <TechTag tech="Python" />
                <TechTag tech="Navigation Algorithms" />
                <TechTag tech="Testing" />
              </div>
            </div>
            <ul>
              <li>Lead 4 developers in weekly scrums; own pathfinding architecture, code reviews, and CI pipelines.</li>
              <li>Optimize route-planning algorithms under uncertain conditions to improve simulated sail-time efficiency.</li>
              <li>Build mock testing frameworks to validate autonomous navigation logic prior to hardware deployment.</li>
              <li>Coordinate autonomy design decisions with electrical and mechanical engineering leads.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="course">
            <div className="course-header">
              <div className="experience-header">
                <h3>Jump Start Orientation Leader</h3>
                <p className="company">
                  UBC CSDL
                </p>
                <p className="date">Aug 2024 – Sept 2024</p>
              </div>
              <div className="tech-tags">
                <TechTag tech="Leadership" />
                <TechTag tech="Mentorship" />
                <TechTag tech="Time Management" />
              </div>
            </div>
            <ul>
              <li>Mentored 25 first-year students and led a time-management seminar for 100+ attendees.</li>
            </ul>
          </div>
        </div>

      </div>
      <div className='teaching-experience'>
        <h2><span className="highlight">Teaching Experience</span></h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Undergraduate Teaching Assistant</h3>
            <p className="company">
              <a href="https://www.cs.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Computer Science Department</a>
            </p>
          </div>

          <div className="experience-details">
            <div className="course">
              <div className="course-header">
                <h4>CPSC 317: Computer Networking</h4>
                <div className="tech-tags">
                  <TechTag tech="Networking" />
                  <TechTag tech="C" />
                  <TechTag tech="Socket Programming" />
                  <TechTag tech="Network Protocols" />
                </div>
              </div>
              <ul>
                <li>Selected to mentor students on <strong>socket programming</strong> and <strong>network protocols</strong>.</li>
                <li>Guided implementations of DNS resolvers, HTTP clients, and packet analysis tools.</li>
                <li>Held office hours to debug low-level network applications in C.</li>
              </ul>
            </div>

            <div className="course">
              <div className="course-header">
                <h4>CPSC 310: Introduction to Software Engineering</h4>
                <div className="tech-tags">
                  <TechTag tech="Full-Stack" />
                  <TechTag tech="Node.js" />
                  <TechTag tech="TypeScript" />
                  <TechTag tech="REST API" />
                  <TechTag tech="CI/CD" />
                </div>
              </div>
              <ul>
                <li>Mentored <strong>50+ students</strong> on Node.js/TypeScript architecture and REST API design.</li>
                <li>Troubleshot and resolved complex <strong>CI/CD</strong> pipeline issues and async debugging challenges.</li>
                <li>Facilitated code reviews and taught testing and clean-architecture practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
