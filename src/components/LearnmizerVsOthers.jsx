import React from "react";
import "../styles/LearnmizerVsOthers.css";


const LearnmizerVsOthers = () => {
    return (
        <div className="section-2 why-us">
            <div
                data-w-id="ac44b63f-e791-bc30-1e7c-dea123cfe8c3"
                className="container w-container"
                style={{
                    opacity: 1,
                    transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            >
                <h1 className="heading-3">Learnmizer Vs Others</h1>
                <h1 className="heading-3 text-bold">Why Learnmizer?</h1>
                <h1 className="heading-3 small-heading">We Are Special!</h1>

                <div className="w-layout-grid grid-9">
                    <div
                        id="w-node-_4d43f068-c8b0-3ec7-965d-1ff428216a78-aa3253d5"
                        className="div-block-7"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, -100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <p
                            data-w-id="f294ca76-0c44-9236-d36d-50af9434b318"
                            className="paragraph-4 bouncing"
                            style={{
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1.37336, 1.37336, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                                willChange: "transform",
                            }}
                        >
                            😎 Learnmizer
                        </p>
                        {[
                            "We’re focused on practical based knowledge that develops your skills and helps in your career growth.",
                            "You learn from real-life experience holders and achievers. They know market trends & requirements and teach you accordingly.",
                            "We’ve more than 10,000 success stories. More than 5000 people from the Learnmizer community make more than 1 lakh per month.",
                            "We always find the latest methods of the niche that will work for you in the shortest period.",
                        ].map((text, index) => (
                            <div key={index}>
                                <div className="div-block-9">
                                    <img
                                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                                        loading="lazy"
                                        width="27"
                                        alt="Check icon"
                                        className="comp-icon"
                                    />
                                    <h5 className="heading-4 comp-heading">{text}</h5>
                                </div>
                                <div className="div-block-10"></div>
                            </div>
                        ))}
                    </div>
                    <div
                        id="w-node-c993adc6-eb1a-c040-95d3-ddde53af9674-aa3253d5"
                        className="div-block-7 no-bg"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, -100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <p
                            data-w-id="c993adc6-eb1a-c040-95d3-ddde53af9675"
                            className="paragraph-4 Shaking"
                            style={{
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6.95065deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d",
                                willChange: "transform",
                            }}
                        >
                            😬 Fake Gurus
                        </p>
                        {[
                            "They focus more on their lifestyle and other shiny objects rather than providing value.",
                            "They don’t have any real-life experience. They teach you from any book that you find in the market.",
                            "They don’t have any success stories. Most of them use paid actors for testimonials.",
                            "They teach the same methods used across decades. Some of them are too old to be applicable in today’s era.",
                        ].map((text, index) => (
                            <div key={index}>
                                <div className="div-block-9">
                                    <img
                                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638592f1d1cb2cc94a01d0a4_Group%2020.png"
                                        loading="lazy"
                                        width="27"
                                        alt="Cross icon"
                                        className="comp-icon"
                                    />
                                    <h5 className="comp-heading heading-4">{text}</h5>
                                </div>
                                <div className="div-block-10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnmizerVsOthers;
