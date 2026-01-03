import React from 'react';
import "./styles/Intro.css"
import "../../style.css"

function Intro() {
    return (
        <div className="intro">
            <h1>Hi, I'm <span className="highlight">Raghumani Mehta</span>.</h1> 
            <h3>
                <span>Systems Developer</span> | 
                <span>Pathfinding Lead</span> @ <a href="https://ubcsailbot.org/" target="_blank" rel="noopener noreferrer">UBC Sailbot</a> |
                4th Year CS + Physics @ <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>
            </h3> 
            <p className="social-links">
                <a href="https://github.com/raghumanimehta" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.99 3.22 9.22 7.69 10.72.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.87-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.66 1.23 3.31.94.1-.74.39-1.23.71-1.51-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.42.11-2.97 0 0 .95-.3 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.69.11 2.97.72.79 1.16 1.8 1.16 3.03 0 4.32-2.62 5.27-5.12 5.55.4.34.76 1.01.76 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.77.53 4.47-1.5 7.68-5.73 7.68-10.72C23.25 5.48 18.27.5 12 .5z"/></svg>
                </a>
                <a href="" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86v5.49H9.5V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.75zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
                </a>
                <a href="/ResumeDecember25_C_.pdf" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 3.5L18.5 9H13V3.5zM8 13h8v2H8v-2zm0-4h8v2H8V9z"/></svg>
                </a>
            </p>

            <p>
                I specialize in <strong>systems programming and networking</strong>, architecting autonomous navigation systems 
                at Sailbot using Python and ROS. From building reliable transport protocols in C++ to designing custom file systems 
                in Rust, I thrive on solving complex problems at the intersection of hardware and software.
            </p>

            <p>
                As a <strong>Teaching Assistant</strong> for networking and software engineering courses, I help students bridge 
                theory and practice—mentoring them through everything from socket programming to full-stack architecture.
            </p>
        </div>
    );
}

export default Intro;