import React from 'react';
import Intro from './components/intro'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
// import Projects from './components/Projects/Projects';
import TemplateProjects from './components/Projects/Template';
function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Skills />
            <TemplateProjects />
        </div>
    )
}

export default App;