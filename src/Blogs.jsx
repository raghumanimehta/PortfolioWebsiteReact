
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './pages/home/Intro';
import Skills from './pages/home/Skills';
import TemplateProjects from './pages/home/Projects/Template';
import Projects from './pages/home/Projects/Projects'
import Experience from './pages/home/Experience';


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
