import React from 'react';
import "./styles/Intro.css"
import "../../style.css"

function Intro() {
    return (
        <div className="intro">
            <h1>Hi, I'm <span className="highlight">Raghumani Mehta</span>.</h1> 
            <h3>
                <span className="role-highlight">Systems Developer</span> | 
                <span className="role-highlight">Pathfinding Lead</span> @ <a href="https://ubcsailbot.org/" target="_blank" rel="noopener noreferrer">UBC Sailbot</a> |
                4th Year CS + Physics @ <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>
            </h3> 

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