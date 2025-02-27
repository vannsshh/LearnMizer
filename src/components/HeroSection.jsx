import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HeroSection.css";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);
    
    return (
        <>
            <div className="hero-container">
                <HeroAnimation />

                <div className="hero-content" data-aos="fade-up">
                    <h1 className="hero-tagline">
                        <strong className="hero-bold-text">Optimize and Learn Smartly</strong>
                    </h1>
                    <h2 className="hero-main-heading">Learn Only What Matters</h2>
                    <h1 className="hero-subheading">Smartest Way of Learning</h1>
                    <p className="hero-paragraph">
                        Learn only what matters and gives you results. Choose the smartest way of learning.
                    </p>
                    <div className="hero-cta-wrapper">
                        <a href="#courses" className="hero-cta-button">
                            Our Courses
                        </a>
                    </div>
                </div>
            </div>

            {/* Logo Part */}
            <div className="brand-slider-container">
                <div className="brand-slider-track">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f473b91e94a591b35f_Group-1.png"
                        alt="Brand 1"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f483c0cd9ad66edae1_Mask%20group-1.png"
                        alt="Brand 2"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f447c2d31464dbeea2_Group.png"
                        alt="Brand 3"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f4428da06ee5277a9e_Mask%20group.png"
                        alt="Brand 4"
                        className="brand-slider-logo"
                    />
                    {/* Duplicate images for smooth animation */}
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f473b91e94a591b35f_Group-1.png"
                        alt="Brand 1"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f483c0cd9ad66edae1_Mask%20group-1.png"
                        alt="Brand 2"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f447c2d31464dbeea2_Group.png"
                        alt="Brand 3"
                        className="brand-slider-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f4428da06ee5277a9e_Mask%20group.png"
                        alt="Brand 4"
                        className="brand-slider-logo"
                    />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
