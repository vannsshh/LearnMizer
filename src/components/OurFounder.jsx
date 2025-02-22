import React from "react";

const OurFounder = () => {
    return (
        <div className="section-3">
            <div className="container w-container">
                <div className="testimonials-flex">
                    <div className="flex-content-col flex-heading-col">
                        <div className="w-layout-grid grid-11">
                            <div id="founder-info">
                                <h1 className="heading-3 left-text">Behind Learnmizer</h1>
                                <h1 className="heading-3 text-bold left-text">Our Founder</h1>
                                <h1 className="heading-3 small-heading left-text">From Best for Best</h1>
                                <p className="paragraph full-width aryan-section">
                                    Aryan Tripathi is not only the founder of Learnmizer but also the founder of
                                    Adymize and Myzer. He has transformed the lives of more than 45,000
                                    people with Learnmizer and helped the most influential brands with
                                    Adymize. <br /><br />
                                    He founded Learnmizer with the vision to help millions of people
                                    in India develop practical skills that will help them in
                                    their lives. <br />
                                    While conventional education institutions are focused on making
                                    employees, Learnmizer has successfully produced more than 5000
                                    entrepreneurs.
                                </p>
                            </div>
                            <div className="div-block-18">
                                <div
                                    className="w-embed-youtubevideo youtube-2"
                                    style={{ paddingTop: "56.17%", position: "relative" }}
                                >
                                    <iframe
                                        src="https://www.youtube.com/embed/JttLz_ZafUo?rel=0&controls=1&autoplay=0&mute=0&start=0"
                                        frameBorder={0}
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
                                        title="Founder Video"
                                    />
                                </div>
                                <div className="div-block-17">
                                    <h1 className="heading-5 meet-yellow">Meet</h1>
                                    <h1 className="heading-5 white-text">Aryan Tripathi</h1>
                                    <h1 className="heading-5 designation-txt">(Founder)</h1>
                                </div>
                                <img
                                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min.webp"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 100vw, 300px"
                                    srcSet="
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-500.webp 500w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-800.webp 800w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-1600.webp 1600w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-2000.webp 2000w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-2600.webp 2600w,
                    https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-3200.webp 3200w"
                                    alt="Aryan Tripathi"
                                    className="image-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFounder;
