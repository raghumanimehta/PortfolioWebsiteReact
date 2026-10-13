import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./styles/Intro.css"
import profilePic from '../../assets/profile-picture.jpg';
import resume from '../../assets/Mehta_Raghumani_resume_systems.pdf';


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
        <p className="intro-eyebrow">Systems / Robotics / Networking</p>
        <h1 className="hero-name">Raghumani Mehta</h1>
        <h2 className="hero-positioning">Building software that connects code to the physical world.</h2>
        <p className="intro-summary">
          Computer Science student at UBC, with a minor in Physics. Robotics Software Engineering Intern at <a href="https://www.redrabbitrobotics.ai/" target="_blank" rel="noopener noreferrer">Red Rabbit Robotics</a> and Software Lead at <a href="https://ubcsailbot.org/" target="_blank" rel="noopener noreferrer">UBC Sailbot</a>.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a href={resume} className="primary-link" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="#/?section=projects" className="secondary-link" onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            document.getElementById('projects')?.scrollIntoView({
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
            });
          }}>View Projects</a>
          <a href="https://github.com/raghumanimehta" className="secondary-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mehta-raghu" className="secondary-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
