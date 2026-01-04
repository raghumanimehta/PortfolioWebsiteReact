import React from 'react';
import "./styles/Experience.css";

function Experience() {
    return (
        <section className="experience">
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
                                <span className="course-tag">Leadership</span>
                                <span className="course-tag">Python</span>
                                <span className="course-tag">Navigation Algorithms</span>
                                <span className="course-tag">Testing</span>
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
                            <h4>CPSC 317: Internet Computing</h4>
                            <div className="tech-tags">
                                <span className="course-tag">Networking</span>
                                <span className="course-tag">C</span>
                                <span className="course-tag">Socket Programming</span>
                                <span className="course-tag">Network Protocols</span>
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
                                <span className="course-tag">Full-Stack</span>
                                <span className="course-tag">Node.js</span>
                                <span className="course-tag">TypeScript</span>
                                <span className="course-tag">REST API</span>
                                <span className="course-tag">CI/CD</span>
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
        </section>
    );
}

export default Experience;
