import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/OurFounder.css";

const OurFounder = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);

    return (
        <div className="founder-section" data-aos="fade-right">
            <div className="founder-container">
                <div className="founder-content">
                    {/* Left Side: Founder Text */}
                    <div className="founder-text">
                        <h1 className="founder-heading">Behind LearnMizer</h1>
                        <h1 className="founder-heading-bold">Meet Our Founder</h1>
                        <h2 className="founder-subheading">Empowering Through Knowledge</h2>
                        <p className="founder-description">
                            Aryan Tripathi, the visionary behind LearnMizer, is also the founder of Adymize and Myzer.
                            Driven by a passion for education and innovation, he has empowered 45,000+ individuals with
                            practical skills, opening doors to new opportunities.
                            <br /><br />
                            LearnMizer was created to bridge the gap between traditional education and real-world success.
                            While conventional institutions produce employees, LearnMizer has nurtured 5,000+ entrepreneurs,
                            shaping the future of learning in India.
                        </p>

                    </div>

                    {/* Right Side: Founder Image */}
                    <div className="founder-image-wrapper">
                        <img
                            src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min.webp"
                            alt="Aryan Tripathi"
                            className="founder-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFounder;
