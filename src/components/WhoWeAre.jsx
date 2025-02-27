import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa"; // Importing a classy check icon
import "../styles/WhoWeAre.css";

const WhoWeAre = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);
    return (
        <section className="who-we-are-section" data-aos="fade-right">
            <div className="who-we-are-container">
                <h2 className="who-we-are-title">Who We Are?</h2>
                <h3 className="who-we-are-subtitle">Choose Better!</h3>
                <h3 className="who-we-are-highlight">45,000+ Students</h3>

                <div className="who-we-are-grid">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206.png"
                        alt="MacBook Pro displaying our work"
                        className="who-we-are-image"
                        loading="lazy"
                    />

                    <div className="who-we-are-content">
                        <div className="who-we-are-feature">
                            <FaCheckCircle className="who-we-are-icon" />
                            <h4 className="who-we-are-feature-title">The Extra Effort</h4>
                        </div>
                        <p className="who-we-are-text">
                            We want to put forward the best content that works for you. Our additional effort can help change thousands of lives by opening a new door of opportunity for them.
                        </p>

                        <div className="who-we-are-divider"></div>

                        <div className="who-we-are-feature">
                            <FaCheckCircle className="who-we-are-icon" />
                            <h4 className="who-we-are-feature-title">We are Unique</h4>
                        </div>
                        <p className="who-we-are-text">
                            We don’t just sell courses for you to learn. Along with the courses, we provide you with proper interactive live sessions with mentors and organize workshops, so you never have doubts regarding your queries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
