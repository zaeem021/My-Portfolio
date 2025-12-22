import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import './animations.css';
import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Testimonials from './Testimonials';
import ScrollToTop from './ScrollToTop';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </>
  );
};

export default App;
