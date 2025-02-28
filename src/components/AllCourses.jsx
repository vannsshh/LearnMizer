import React, { useEffect, useState } from "react";
import "../styles/AllCourses.css";
import { FaBookOpen, FaClock } from "react-icons/fa";


const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const courseData = [
            {
                id: 1,
                title: "Facebook Ads Mastery (2024)",
                image: "https://i.pinimg.com/736x/07/63/6e/07636ea25c8ecd38760227d7f006115c.jpg",
                lessons: 28,
                duration: "6",
                price: 99,
            },
            {
                id: 2,
                title: "SEO & Content Marketing",
                image: "https://i.pinimg.com/736x/29/30/50/29305021eb1e5484a70383fc9b5a2496.jpg",
                lessons: 35,
                duration: "8",
                price: 129,
            },
            {
                id: 3,
                title: "Complete Web Development",
                image: "https://i.pinimg.com/736x/5e/bd/d4/5ebdd401ef9cea4d407049cf1aa8c96a.jpg",
                lessons: 45,
                duration: "10",
                price: 199,
            },
            {
                id: 4,
                title: "Graphic Design for Beginners",
                image: "https://i.pinimg.com/736x/2f/49/6c/2f496c29c6076d0e424faffebbf26147.jpg",
                lessons: 20,
                duration: "5",
                price: 79,
            },
            {
                id: 5,
                title: "Social Media Marketing Pro",
                image: "https://i.pinimg.com/736x/53/95/d2/5395d2f162fec62c17e3a629be0d477d.jpg",
                lessons: 30,
                duration: "7",
                price: 149,
            },
            {
                id: 6,
                title: "Python for Data Science",
                image: "https://i.pinimg.com/736x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg",
                lessons: 40,
                duration: "9",
                price: 179,
            },
            {
                id: 7,
                title: "UX/UI Design Essentials",
                image: "https://i.pinimg.com/736x/ec/2c/28/ec2c28c0338f104b7eecdf16dd9032fc.jpg",
                lessons: 25,
                duration: "6",
                price: 99,
            },
            {
                id: 8,
                title: "Cybersecurity Fundamentals",
                image: "https://i.pinimg.com/736x/08/d1/ac/08d1acd81a857d94395e4a8c44a1536b.jpg",
                lessons: 38,
                duration: "9",
                price: 199,
            }
        ];
        setCourses(courseData);
    }, []);

    return (
        <div className="all-courses-page">
            <div className="banner">
                <div className="overlay">
                    <h1 className="fw-bold">Our Courses</h1>
                </div>
            </div>

            <div className="courses-container">
                {courses.map(course => (
                    <div className="course-card" key={course.id}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h2 className="course-title">{course.title}</h2>
                        <div className="course-info">
                            <p className="course-details"><FaBookOpen className="icon" />{course.lessons} Lessons</p>
                            <p className="course-details"><FaClock className="icon" />{course.duration} Hours</p>
                        </div>
                        <div className="course-footer">
                            <button className="join-button">Join Our Class</button>
                            <p className="course-price">${course.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;