import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import TemplateProjects from './components/Projects/Template';
import Experience from './components/Experience';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="navbar-content">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<TemplateProjects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;