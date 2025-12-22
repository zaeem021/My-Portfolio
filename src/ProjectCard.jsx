import React, { useState, useEffect } from "react";
import "./ProjectCard.css";

import portfolio from "./assets/portfolio.png";
import ecommerce from "./assets/ecommerce.png";
import chatbot from "./assets/chatbot.jpg";

const ProjectCard = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive and animated personal portfolio showcasing modern web development skills.",
      tech: "React, CSS Animations, Responsive Design",
      img: portfolio,
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "E-Commerce Store",
      description: "Complete shopping store with payment integration and user authentication.",
      tech: "React, Node.js, MongoDB, Stripe",
      img: ecommerce,
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Chatbot",
      description: "OpenAI powered chatbot with natural language processing and smart responses.",
      tech: "Node.js, Express, OpenAI API",
      img: chatbot,
      liveLink: "#",
      codeLink: "#"
    }
  ];

  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const current = projects[index];

  return (
    <div className="project-wrapper">
      <div className="project-card">
        <img src={current.img} alt={current.title} className="project-img" />

        <div className="project-content">
          <h3 className="project-title">{current.title}</h3>
          <p className="project-desc">{current.description}</p>
          <p className="project-tech">
            <strong>Tech Stack:</strong> {current.tech}
          </p>

          <div className="project-buttons">
            <a href={current.liveLink} className="project-btn primary-btn" target="_blank" rel="noopener noreferrer">
              View Live
            </a>
            <a href={current.codeLink} className="project-btn secondary-btn" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="project-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`project-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
