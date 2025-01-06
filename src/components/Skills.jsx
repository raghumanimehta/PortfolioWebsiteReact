import React from "react";

export default function Skills() {
    return (
        <section id="skills">
            <h3>Technical Skills</h3>
            <p className="section-description">
                Technical skills that I have gained during my Computer Science degree at UBC. 
                Some of these learned in my own time, while others were part of course work.
            </p>
            
            <div className="skills-container">
                <div className="skill-category">
                    <h4>Programming Languages</h4>
                    <ul>
                        <li>Java</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h4>Tools & Frameworks</h4>
                    <ul>
                        <li>Git</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Nodemailer</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>WebSocket</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h4>Testing</h4>
                    <ul>
                        <li>JUnit</li>
                        <li>Mocha (with Chai for assertions)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}