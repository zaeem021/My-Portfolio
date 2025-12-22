import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        Muhammad Zaeem Rehman
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About Me
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => scrollToSection('experience')}>
            Experience
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>
            Testimonials
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            Contact
            <span className="underline"></span>
          </a>
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <div
            className={`dark-mode-toggle ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-ball">
              <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
            </div>
          </div>
        </li>
      </ul>

      <div
        className={`burger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
