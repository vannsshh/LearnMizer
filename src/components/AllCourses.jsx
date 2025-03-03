import React, { useEffect, useState } from "react";
import "../styles/AllCourses.css";
import { FaBookOpen, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import courseData from "../data/CourseData";
import Header from "./Header";
import Footer from "./Footer";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCourses(courseData);
    }, []);

    return (
        <>
            <Header />
            <div className="all-courses-page">
                <div className="banner">
                    <div className="overlay">
                        <h1 className="fw-bold">Our Courses</h1>
                    </div>
                </div>

                <div className="all-courses-container">
                    {courses.map(course => (
                        <div className="all-courses-card" key={course.id}>
                            <img src={course.image} alt={course.title} className="all-course-image" />
                            <h2 className="all-course-title">{course.title}</h2>
                            <div className="all-course-info">
                                <p className="all-course-details"><FaBookOpen className="all-course-icon" />{course.lessons} Lessons</p>
                                <p className="all-course-details"><FaClock className="all-course-icon" />{course.duration}</p>
                            </div>
                            <div className="all-course-footer">
                                <button onClick={() => navigate(`/courses/${course.id}`)} className="join-button">Explore Course</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllCourses;
