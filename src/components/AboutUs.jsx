import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AboutUs.css";
import useCounter from "../hooks/useCounter";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);

    const courses = useCounter(0, 10, 100000);
    const lessons = useCounter(0, 600, 150000);
    const videoHours = useCounter(0, 1500, 200000);

    return (
        <section className="about-section" data-aos="fade-right">
            <div className="about-container">
                <h1 className="about-title">Teaching Practical Knowledge to Transform You</h1>
                <h2 className="about-subtitle">From Dreamer to Achiever</h2>
                <p className="about-description">
                    Throughout our life, we learn many things, but only a few work for our careers.
                    Learnmizer is dedicated to teaching and disclosing skills that help you to grow in your professional life.
                </p>
                <div className="about-grid">
                    <div className="about-item">
                        <h4 className="about-count" data-count="10">{courses}+</h4>
                        <p className="about-label">Courses</p>
                    </div>
                    <div className="about-item">
                        <h4 className="about-count" data-count="600">{lessons}+</h4>
                        <p className="about-label">Lessons</p>
                    </div>
                    <div className="about-item">
                        <h4 className="about-count" data-count="1500">{videoHours}+</h4>
                        <p className="about-label">Video Hours</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
