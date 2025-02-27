import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../styles/LearnmizerVsOthers.css";

const LearnmizerVsOthers = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);

    const learnmizerPoints = [
        "We’re focused on practical-based knowledge that develops your skills and helps in your career growth.",
        "You learn from real-life experience holders and achievers. They know market trends & requirements and teach you accordingly.",
        "We’ve more than 10,000 success stories. More than 5000 people from the Learnmizer community make more than 1 lakh per month.",
        "We always find the latest methods of the niche that will work for you in the shortest period.",
    ];

    const fakeGurusPoints = [
        "They focus more on their lifestyle and other shiny objects rather than providing value.",
        "They don’t have any real-life experience. They teach you from any book that you find in the market.",
        "They don’t have any success stories. Most of them use paid actors for testimonials.",
        "They teach the same methods used across decades. Some of them are too old to be applicable in today’s era.",
    ];

    return (
        <div className="lm-section" data-aos="fade-left">
            <div className="lm-container">
                <h1 className="lm-heading">Learnmizer Vs Others</h1>
                <h1 className="lm-heading lm-bold">Why Learnmizer?</h1>
                <h1 className="lm-heading lm-small">We Are Special!</h1>

                <div className="lm-comparison-grid">
                    {/* Learnmizer Column */}
                    <div className="lm-comparison-block">
                        <p className="lm-left-title lm-bouncing">
                            😎 Learnmizer
                        </p>
                        {learnmizerPoints.map((text, index) => (
                            <div key={index} className="lm-point">
                                <FaCheckCircle className="lm-check-icon" />
                                <h5 className="lm-point-text">{text}</h5>
                            </div>
                        ))}
                    </div>

                    {/* Fake Gurus Column */}
                    <div className="lm-comparison-block lm-no-bg">
                        <p className="lm-right-title lm-shaking">
                            😬 Fake Gurus
                        </p>
                        {fakeGurusPoints.map((text, index) => (
                            <div key={index} className="lm-point">
                                <FaTimesCircle className="lm-cross-icon" />
                                <h5 className="lm-point-text">{text}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnmizerVsOthers;
