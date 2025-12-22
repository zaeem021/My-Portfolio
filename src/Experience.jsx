import React, { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        duration: "2022 - Present",
        description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
        techStack: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"]
    },
    {
        title: "Frontend Developer",
        company: "Digital Agency Co.",
        duration: "2020 - 2022",
        description: "Developed responsive and interactive user interfaces for various client projects. Collaborated with design teams to implement pixel-perfect designs.",
        techStack: ["React", "JavaScript", "CSS3", "Figma"]
    },
    {
        title: "Junior Web Developer",
        company: "StartUp Ventures",
        duration: "2019 - 2020",
        description: "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP"]
    }
];

const Experience = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section id="experience" className="experience-wrapper">
            <h2 className="experience-main-title">
                My <span className="highlight">Experience</span>
            </h2>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="mac-card experience-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        {/* Mac window buttons */}
                        <div className="mac-top">
                            <span className="mac-circle red"></span>
                            <span className="mac-circle yellow"></span>
                            <span className="mac-circle green"></span>
                        </div>

                        <h3 className="exp-title">{exp.title}</h3>
                        <p className="exp-company">{exp.company}</p>
                        <p className="exp-duration">{exp.duration}</p>
                        <p className="exp-description">{exp.description}</p>

                        {exp.techStack && (
                            <div className="tech-stack">
                                {exp.techStack.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
