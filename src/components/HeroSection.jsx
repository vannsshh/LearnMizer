import React from "react";
import "../styles/HeroSection.css"

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container w-container">
                <h1 className="grad-tagline">
                    <strong className="bold-text">Optimize and Learn Smartly</strong>
                </h1>
                <h2 className="main-heading">Learn Only What Matters</h2>
                <h1 className="heading ">Smartest Way of Learning</h1>
                <p className="paragraph center-align-text">
                    Learn only what matters and give you results. Choose the smartest way of
                    learning.
                </p>
                <div className="w-layout-grid grid-2">
                    <a href="#courses" className="header-cta w-button">
                        Our Courses
                    </a>
                </div>
            </div>
            <div className="container-5 w-container" />
            <div className="div-block-13">
                <div className="div-block-14">
                    <img
                        sizes="(max-width: 479px) 0px, 100vw"
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1).webp"
                        alt=""
                        className="image main-img"
                    />
                    <div className="div-block-12">
                        <div className="div-block-11">
                            <div style={{ paddingTop: "56.17%" }} className="w-embed-youtubevideo youtube">
                                <iframe
                                    src="https://www.youtube.com/embed/XwrTE7dlNzo?rel=0&controls=1&autoplay=0&mute=0&start=0"
                                    frameBorder="0"
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        pointerEvents: "auto",
                                    }}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="Entrepreneur's Luxury Villa Tour | Aryan Tripathi"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Part */}
            <div style={{ opacity: "0.06" }} className="container container-2 w-container">
                <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f473b91e94a591b35f_Group-1.png"
                    loading="lazy"
                    alt=""
                    className="image-2"
                />
                <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f483c0cd9ad66edae1_Mask%20group-1.png"
                    loading="lazy"
                    alt=""
                    className="image-2"
                />
                <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f447c2d31464dbeea2_Group.png"
                    loading="lazy"
                    alt=""
                    className="image-2"
                />
                <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f4428da06ee5277a9e_Mask%20group.png"
                    loading="lazy"
                    alt=""
                    className="image-2"
                />
            </div>
        </div>
    );
};

export default HeroSection;
