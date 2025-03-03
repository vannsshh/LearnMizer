import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaBookOpen } from "react-icons/fa";
import courseData from "../data/CourseData";
import "../styles/OurCourses.css";

const OurCourses = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const popularCourses = [...courseData].sort((a, b) => b.rating - a.rating).slice(0, 3);


    return (
        <div className="courses-section" data-aos="fade-up">
            <div className="container">
                <h2 className="section-title">Learn From Us!</h2>
                <h3 className="section-subtitle">Our Courses</h3>
                <h3 className="section-tagline">Loved By Thousands</h3>

                <div className="courses-grid">
                    {popularCourses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <p className="course-title">{course.title}</p>
                            <div className="course-info">
                                <div className="info-item">
                                    <FaBookOpen className="info-icon" />
                                    <span>{course.lessons} Lessons</span>
                                </div>
                                <div className="info-item">
                                    <FaClock className="info-icon" />
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                            <Link to={'/'} className="enroll-button">Enroll Now</Link>
                        </div>
                    ))}
                </div>

                <Link to="/all-courses" className="view-all-button">
                    View All Courses
                </Link>
            </div>
        </div>
    );
};

export default OurCourses;
