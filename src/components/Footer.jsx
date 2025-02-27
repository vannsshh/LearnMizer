import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Footer.css";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  // Animation duration in milliseconds
            easing: "ease-in-out", // Smooth animation effect
            once: true, // Animation happens only once while scrolling
        });
    }, []);
    return (
        <footer className="custom-footer" data-aos="fade-down">
            <div className="container">
                <div className="footer-top">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
                        loading="lazy"
                        alt="Logo"
                        className="footer-logo"
                    />
                    <a href="#courses" className="footer-cta">
                        Find a Perfect Course
                    </a>
                </div>

                <div className="footer-grid">
                    <div className="footer-section">
                        <h4 className="footer-title">Academy</h4>
                        <a href="#courses" className="footer-link">Courses</a>
                        <a href="/contact-us" className="footer-link">Contact Us</a>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Legal</h4>
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms-and-service" className="footer-link">Terms and Service</a>
                        <a href="/refund-policy" className="footer-link">Refund Policy</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p className="copyright-text">© 2025 All Rights Reserved</p>
                </div>

                <div className="footer-social">
                    <a href="https://www.instagram.com/Learnmizer/" className="social-link">
                        <div className="social-icon">
                            <img
                                src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c84e9698caa0ae953e0e5_Vector.png"
                                loading="lazy"
                                alt="Instagram"
                                className="social-image"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
