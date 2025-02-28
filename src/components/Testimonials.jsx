import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Testimonials.css";

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const reviews = [
        {
            id: 1,
            name: "Rahul Sharma",
            course: "Full Stack Web Development",
            review:
                "The course was life-changing! I learned so much and the support was amazing. Highly recommended! I also appreciated the practical sessions and real-world projects that allowed me to implement what I learned. The instructors were always available to help and guide me through challenging concepts. This course truly exceeded my expectations and has opened up new career opportunities for me.",
            rating: 5,
            image: "https://i.pinimg.com/736x/6b/be/47/6bbe47ef7d09cbd0b708cd8ae1e7c106.jpg"
        },
        {
            id: 2,
            name: "Priya Singh",
            course: "Data Science Bootcamp",
            review:
                "I was impressed by the depth of knowledge and the hands-on approach. The projects were challenging yet rewarding, and I gained skills that I use in my daily work. The mentors provided valuable insights and guidance throughout the program. Overall, it was an enriching experience that has boosted my career in data science.",
            rating: 4,
            image: "https://i.pinimg.com/736x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg"
        },
        {
            id: 3,
            name: "Sneha Gupta",
            course: "Digital Marketing",
            review:
                "The course offered an in-depth look at digital marketing strategies and hands-on campaigns. It was structured to build confidence through practical assignments, and the case studies provided real-world insights. I now have a better understanding of how to leverage digital platforms for effective marketing.",
            rating: 5,
            image: "https://i.pinimg.com/736x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg"
        },
        {
            id: 4,
            name: "Amit Patel",
            course: "UI/UX Design",
            review:
                "I loved the interactive sessions and the creative assignments that pushed my boundaries. The curriculum was comprehensive and practical, making the entire learning experience both fun and informative. The feedback and peer reviews helped me polish my skills, and I now feel confident to take on design challenges professionally.",
            rating: 4,
            image: "https://i.pinimg.com/736x/6b/be/47/6bbe47ef7d09cbd0b708cd8ae1e7c106.jpg"
        },
        {
            id: 5,
            name: "Vikram Rao",
            course: "Machine Learning",
            review:
                "An insightful and engaging course that deepened my understanding of machine learning. The curriculum was challenging, but the step-by-step approach made complex topics accessible. I particularly appreciated the blend of theory and practical exercises, which have been immensely useful in my career.",
            rating: 4,
            image: "https://i.pinimg.com/736x/6b/be/47/6bbe47ef7d09cbd0b708cd8ae1e7c106.jpg"
        },
        {
            id: 6,
            name: "Anjali Mehta",
            course: "Graphic Design",
            review:
                "Creative, practical, and very inspiring. The course helped me unlock my creative potential with comprehensive lessons and hands-on projects. The guidance from the instructors was invaluable, and the feedback sessions truly helped me improve my skills. I now feel more prepared to face design challenges in a professional environment.",
            rating: 5,
            image: "https://i.pinimg.com/736x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = reviews.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % totalSlides);
        }, 4000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const renderStars = (rating) => {
        return (
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
                        &#9733;
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="testimonials-section" data-aos="fade-up">
            <div className="testimonials-header">
                <h2>What They Said!</h2>
                <h3>Student Testimonials</h3>
                <span>We Add Value</span>
            </div>
            <div className="testimonials-slider">
                {reviews.map((review, index) => {
                    // Only display reviews that fall into the current pair of indexes
                    if (index === currentIndex || index === (currentIndex + 1) % totalSlides) {
                        return (
                            <div
                                key={review.id}
                                className={`testimonial-card ${index === currentIndex || index === (currentIndex + 1) % totalSlides ? "active" : ""}`}
                            >
                                <img src={review.image} alt={review.name} className="testimonial-img" />
                                <h4 className="testimonial-name">{review.name}</h4>
                                <p className="testimonial-course">{review.course}</p>
                                {renderStars(review.rating)}
                                <p className="testimonial-review">{review.review}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Testimonials;
