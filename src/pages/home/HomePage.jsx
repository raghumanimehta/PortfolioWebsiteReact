import React from 'react';
import Navbar from '../../components/Navbar';
import Intro from './Intro';
import Focus from './Focus';
import Skills from './Skills';
import Projects from './Projects/Projects'
import Experience from './Experience';
import Contact from './Contact';
import Achievements from './Achievements';

function HomePage() {
    return (
        <>
            <Navbar />
            <div className="content">
                <section id="home">
                    <Intro />
                </section>
                <section id="focus">
                    <Focus />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="achievements">
                    <Achievements />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </>
    );
}

export default HomePage;
