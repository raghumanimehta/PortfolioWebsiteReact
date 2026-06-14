
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import TemplateProjects from './components/Projects/Template';
import Projects from './components/Projects/Projects'
import Experience from './components/Experience';


type
function Blog() {
    return (
        <>
            <Navbar />
            <div className="content">
                <section id="blogs">
                    <Projects />
                </section>
            </div>
        </>
    );

}
