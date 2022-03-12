import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Project from './Project/Project';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Project />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;