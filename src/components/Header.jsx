import React from "react";
import "../styles/Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container-3 w-container">
                <a href="#" className="link-block w-inline-block">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
                        loading="lazy"
                        alt=""
                        className="image-8"
                    />
                </a>
                <div className="div-block-16">
                    <a
                        href="https://app.Learnmizer.com"
                        target="_blank"
                        className="header-cta franchise-btn w-button"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
