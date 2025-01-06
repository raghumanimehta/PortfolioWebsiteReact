import React from "react";

function Navbar() {
    return (
        <nav className="nav"> 
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/activities">Other Activities</a></li>
                <li><a href="/experience">Work Experience</a></li>
            </ul>
        </nav>
    );
}

export default Navbar