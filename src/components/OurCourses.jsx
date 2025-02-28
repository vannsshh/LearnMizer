import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaBookOpen } from "react-icons/fa";
import "../styles/OurCourses.css";

const courses = [
    {
        id: 1,
        title: "Facebook Ads Mastery (2024)",
        image: "https://i.pinimg.com/736x/07/63/6e/07636ea25c8ecd38760227d7f006115c.jpg",
        lessons: 28,
        duration: "6",
    },
    {
        id: 2,
        title: "SEO & Content Marketing",
        image: "https://i.pinimg.com/736x/dd/14/e1/dd14e1661bfa53851cb375e1d62f5a54.jpg",
        lessons: 35,
        duration: "8",
    },
    {
        id: 3,
        title: "Complete Web Development",
        image: "https://i.pinimg.com/736x/91/e7/c4/91e7c42f616b594e41556c19e54906d8.jpg",
        lessons: 45,
        duration: "10",
    },
    {
        id: 4,
        title: "Graphic Design for Beginners",
        image: "https://i.pinimg.com/736x/b0/df/87/b0df87bbfeda5c9d0b62ca03e3417f84.jpg",
        lessons: 20,
        duration: "5",
    },
    {
        id: 5,
        title: "Social Media Marketing Pro",
        image: "https://i.pinimg.com/736x/1b/c1/02/1bc102a437b041a1fc71cc1d76ddfa1a.jpg",
        lessons: 30,
        duration: "7",
    },
];

const OurCourses = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,  
            easing: "ease-in-out", 
            once: true,
        });
    }, []);
    return (
        <div className="courses-section" data-aos="fade-left">
            <div className="container">
                <h2 className="section-title">Learn From Us!</h2>
                <h3 className="section-subtitle">Our Courses</h3>
                <h3 className="section-tagline">Loved By Thousands</h3>

                <div className="courses-slider-container">
                    <div className="courses-slider-track">
                        {[...courses, ...courses].map((course, index) => ( // Duplicate courses for infinite loop
                            <div key={index} className="course-card">
                                <img src={course.image} alt={course.title} className="course-image" />
                                <p className="course-title">{course.title}</p>
                                <div className="course-info">
                                    <div className="info-item">
                                        <FaBookOpen className="info-icon" />
                                        <span>{course.lessons} Lessons</span>
                                    </div>
                                    <div className="info-item">
                                        <FaClock className="info-icon" />
                                        <span>{course.duration} Hours</span>
                                    </div>
                                </div>
                                <a href="/" className="enroll-button">Enroll Now</a>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="/all-courses" className="view-all-button">
                    View All Courses
                </a>
            </div>
        </div>
    );
};

export default OurCourses;
