import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import TemplateProjects from './components/Projects/Template';
import Projects from './components/Projects/Projects'
import Experience from './components/Experience';

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <section id="home">
                    <Intro />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
            </div>
        </>
    );
}

export default App;