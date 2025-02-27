import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <a href="/" className="header-logo">
                    <img
                        src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
                        loading="lazy"
                        alt="LearnMizer Logo"
                    />
                </a>
                <div className="header-btn-container">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-btn" >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
