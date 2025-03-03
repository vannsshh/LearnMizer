import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaBook, FaUserGraduate, FaClock } from "react-icons/fa";
import courseData from "../data/CourseData";
import "../styles/ExploreCourse.css";

const ExploreCourse = () => {
    const { id } = useParams();
    const course = courseData ? courseData.find((course) => course.id === parseInt(id)) : null;

    if (!course) {
        return <h2 className="explore-error">Course Not Found</h2>;
    }


    return (
        <div className="explore-course-detail-container">
            {/* Banner Section */}
            <div className="explore-banner">
                <div className="explore-overlay">
                    <img src={course.image} alt={course.title} className="explore-image" />
                    <div className="explore-content">
                        <div className="explore-title-container">
                            <h1 className="explore-title">{course.title}</h1>
                            <div className="vr"></div>
                            <p className="explore-category">( {course.category} )</p>
                        </div>
                        <span className="explore-subtitle">[ From Basic To Pro ]</span>
                        <p className="explore-tagline">{course.tagline}</p>

                        {/* Course Rating */}
                        <div className="explore-rating">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = Number(course.rating) || 0;
                                if (index + 1 <= ratingValue) {
                                    return <FaStar key={index} className="explore-star-icon filled" />;
                                } else if (index + 0.5 < ratingValue) {
                                    return <FaStarHalfAlt key={index} className="explore-star-icon filled" />;
                                } else {
                                    return <FaStar key={index} className="explore-star-icon empty" />;
                                }
                            })}

                            <div className="vr"></div>
                            <span> ({course.peopleRated} ratings)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="explore-main-content">
                <div className="explore-course-content container">
                    {/* Description */}
                    <section className="explore-course-description">
                        <h3>~ Description</h3>
                        <p>{course.description}</p>
                    </section>

                    {/* What You'll Learn */}
                    <section className="explore-course-details">
                        <h3>~ What You'll Learn</h3>
                        {course.whatYouLearn && course.whatYouLearn.length > 0 ? (
                            course.whatYouLearn.map((topic, index) => (
                                <div key={index} className="course-topic">
                                    <h4>{topic.title}</h4>
                                    <ul>
                                        {topic.steps && topic.steps.length > 0 ? (
                                            topic.steps.map((step, stepIndex) => <li key={stepIndex}>{step}</li>)
                                        ) : (
                                            <li>No steps available</li>
                                        )}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No topics available</p>
                        )}

                    </section>

                    {/* Course Stats */}
                    <div className="explore-course-stats">
                        <div className="explore-stat">
                            <FaUserGraduate className="explore-stat-icon" />
                            <p>{course.students} Students</p>
                        </div>
                        <div className="explore-stat">
                            <FaBook className="explore-stat-icon" />
                            <p>{course.lessons} Lessons</p>
                        </div>
                        <div className="explore-stat">
                            <FaClock className="explore-stat-icon" />
                            <p>{course.duration}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="explore-sidebar">
                    {/* Enrollment Box */}
                    <aside className="explore-enrollment-box">
                        <h3 className="explore-original-price">${course.price}</h3>
                        <div className="explore-apply d-flex">
                            <input className="explore-input" type="text" placeholder="Apply Promo Code" />
                            <button className="explore-apply-btn">APPLY</button>
                        </div>
                        <button className="explore-enroll-button">ENROLL NOW</button>
                    </aside>

                    {/* Instructor Box */}
                    <aside className="explore-instructor-box">
                        <img src={course.instructorImage} alt={course.instructor} className="explore-instructor-img" />
                        <h5>Instructed By : {course.instructor}</h5>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ExploreCourse;
