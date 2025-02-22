import React from "react";
import "../styles/WhoWeAre.css"; 

const WhoWeAre = () => {
    return (
        <div className="section-2 who-we-are">
            <div className="container w-container">
                <h2 className="heading-3">Who We Are?</h2>
                <h3 className="heading-3 text-bold">Choose Better!</h3>
                <h3 className="heading-3 small-heading">45,000+ Students</h3>

                <div className="w-layout-grid grid-9">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206.png"
                        alt="MacBook Pro displaying our work"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 100vw"
                        loading="lazy"
                        className="macbook-image"
                    />

                    <div className="div-block-4">
                        <div className="div-block-3">
                            <img
                                src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                                loading="lazy"
                                width="32"
                                alt="Check icon"
                            />
                            <h4 className="heading-3 text-sm">The Extra Effort</h4>
                        </div>
                        <p className="paragraph full-width">
                            We want to put forward the best content that works for you. Our additional effort can help change thousands of lives by opening a new door of opportunity for them.
                        </p>

                        <div className="div-block-5"></div>

                        <div className="div-block-3">
                            <img
                                src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                                loading="lazy"
                                width="32"
                                alt="Check icon"
                            />
                            <h4 className="heading-3 text-sm">We are Unique</h4>
                        </div>
                        <p className="paragraph full-width">
                            We don’t just sell courses for you to learn. Along with the courses, we provide you with proper interactive live sessions with the mentors, and organize workshops, so you never have to have a doubt regarding your queries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
