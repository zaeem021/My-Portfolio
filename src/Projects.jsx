import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <ProjectCard />
    </section>
  );
};

export default Projects;
