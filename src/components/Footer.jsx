import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="section-3 footer">
            <div className="container container-3 footer-container w-container">
                <div className="div-block-19">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
                        loading="lazy"
                        alt="Logo"
                        className="image-9"
                    />
                    <a href="#courses" className="header-cta about-sxn w-button">
                        Find a Perfect Course
                    </a>
                </div>

                <div className="w-layout-grid grid-12">
                    <div id="academy">
                        <h4 className="heading-7">Academy</h4>
                        <a href="#courses" className="paragraph-5">Courses</a>
                        <a href="/contact-us" className="paragraph-5">Contact Us</a>
                    </div>

                    <div id="legal">
                        <h4 className="heading-7">Legal</h4>
                        <a href="/privacy-policy" className="paragraph-5">Privacy Policy</a>
                        <a href="/terms-and-service" className="paragraph-5">Terms and Service</a>
                        <a href="/refund-policy" className="paragraph-5">Refund Policy</a>
                    </div>
                </div>
            </div>

            <div className="container copyright-container w-container">
                <div className="div-block-22">
                    <p className="paragraph-7">
                        All Rights Reserved 2025
                    </p>
                    <div className="div-block-23">
                        <a href="https://www.instagram.com/Learnmizer/" className="w-inline-block">
                            <div className="div-block-24">
                                <img
                                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c84e9698caa0ae953e0e5_Vector.png"
                                    loading="lazy"
                                    alt="Instagram"
                                    className="image-11"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
