import React, { useEffect, useRef } from "react";
import "./AboutMe.css";

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JS", percent: 85 },
  { name: "REACT", percent: 90 },
  { name: "PYTHON", percent: 80 },
  { name: "Node.js", percent: 75 },
  { name: "Tailwind CSS", percent: 85 },
];

const AboutMe = () => {
  const cardRef = useRef(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("active");
          progressRefs.current.forEach((bar, i) => {
            if (bar) bar.style.width = skills[i].percent + "%";
          });
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-wrapper">
      <div className="mac-card single-card" ref={cardRef}>
        {/* Mac window buttons */}
        <div className="mac-top">
          <span className="mac-circle red"></span>
          <span className="mac-circle yellow"></span>
          <span className="mac-circle green"></span>
        </div>

        {/* About Me Text */}
        <h2 className="title">
          About <span className="highlight">Me</span>
        </h2>

        <p className="about-para">
          Passionate developer with experience in frontend and backend
          technologies, building responsive and interactive web applications.
        </p>

        {/* Skills */}
        <h3 className="skills-title">Skills & Technologies</h3>

        {skills.map((s, i) => (
          <div className="skill-bar" key={s.name}>
            <p>
              {s.name} <span className="percent">{s.percent}%</span>
            </p>
            <div className="progress">
              <div
                className="progress-fill"
                ref={(el) => (progressRefs.current[i] = el)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
