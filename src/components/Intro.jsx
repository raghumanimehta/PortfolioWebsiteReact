import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./styles/Intro.css"
import "../../style.css"
import profilePic from '../assets/profile-picture.jpg';
import resume from '../assets/Mehta_Raghumani_resume_systems.pdf';


function Intro() {
  const introRef = useRef(null);
  const [profileHeight, setProfileHeight] = useState(null);

  const ensureConsistentHeight = useCallback(() => {
    if (!introRef.current) return;

    if (window.matchMedia("(max-width: 768px)").matches) {
      setProfileHeight(null);
      return;
    }

    setProfileHeight(introRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    ensureConsistentHeight();

    const resizeObserver = new ResizeObserver(() => {
      ensureConsistentHeight();
    });

    if (introRef.current) {
      resizeObserver.observe(introRef.current);
    }

    window.addEventListener("resize", ensureConsistentHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", ensureConsistentHeight);
    };
  }, [ensureConsistentHeight]);

  return (
    <div className='outer-container'>
      <div className='dp-container' style={profileHeight ? { height: `${profileHeight}px` } : undefined}>
        <img src={profilePic} alt="Raghumani Mehta" />
      </div>
      <div className="intro" ref={introRef}>
        <p className="intro-eyebrow">Systems / Robotics / Backend</p>
        <h1 className="hero-name">Raghumani Mehta</h1>
        <h2 className="hero-positioning">UBC Computer Science + Physics student building systems, robotics, networking, and secure cloud software.</h2>
        <p className="intro-summary">
          I work on low-level systems research at <a href="https://systopia.cs.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Systopia Lab</a>, autonomous navigation at <a href="https://ubcsailbot.org/" target="_blank" rel="noopener noreferrer">UBC Sailbot</a>, and backend/serverless software projects.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a href={resume} className="primary-link" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="#projects" className="secondary-link">View Projects</a>
          <a href="https://github.com/raghumanimehta" className="secondary-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mehta-raghu" className="secondary-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
