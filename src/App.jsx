import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Focus from './components/Focus';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects'
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
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

export default App;
