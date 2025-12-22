import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO",
        company: "Tech Innovations",
        photo: "https://i.pravatar.cc/150?img=1",
        text: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations. Highly recommended!"
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Digital Solutions",
        photo: "https://i.pravatar.cc/150?img=13",
        text: "Exceptional technical skills combined with great communication. The project was delivered on time and the code quality was outstanding. Would definitely work together again!"
    },
    {
        name: "Emily Rodriguez",
        role: "CTO",
        company: "StartUp Hub",
        photo: "https://i.pravatar.cc/150?img=5",
        text: "A true professional who understands both the technical and business aspects of development. The solutions provided were innovative and scalable."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="testimonials-wrapper">
            <h2 className="testimonials-main-title">
                Client <span className="highlight">Testimonials</span>
            </h2>

            <div className="testimonials-container">
                <button className="nav-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                    &#8249;
                </button>

                <div className="testimonial-display">
                    <div className="mac-card testimonial-card active">
                        <div className="mac-top">
                            <span className="mac-circle red"></span>
                            <span className="mac-circle yellow"></span>
                            <span className="mac-circle green"></span>
                        </div>

                        <div className="testimonial-content">
                            <img
                                src={testimonials[currentIndex].photo}
                                alt={testimonials[currentIndex].name}
                                className="testimonial-photo"
                            />
                            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                            <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
                            <p className="testimonial-role">
                                {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                            </p>
                        </div>
                    </div>
                </div>

                <button className="nav-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                    &#8250;
                </button>
            </div>

            {/* Dots indicator */}
            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToTestimonial(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
