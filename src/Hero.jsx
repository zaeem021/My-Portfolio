import React, { useState, useEffect } from "react";
import "./Hero.css";
import profilePic from "./assets/profilepic.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const skillsText = "Full Stack Developer (React.js | Node.js | Express.js | WordPress) | Frontend & Backend Solutions | AI + Chatbot + API Integrations";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < skillsText.length) {
        setDisplayedText(skillsText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [skillsText]);

  return (
    <section className="section-bg" id="Hero">
      <section id="home" className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm</h1>
          <h1 className="hero-title">
            <span>Muhammad Zaeem Rehman</span>
          </h1>
          <p className="hero-subtitle">
            {displayedText}
            <span className="cursor">|</span>
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="hero-btn resume-btn">
              Download Resume
            </a>
            <a href="#projects" className="hero-btn portfolio-btn">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profilePic} alt="Zaeem" className="hero-image" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
