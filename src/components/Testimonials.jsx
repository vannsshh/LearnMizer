import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
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
            name: "Amit Patel",
            course: "UI/UX Design",
            review:
                "I loved the interactive sessions and the creative assignments that pushed my boundaries. The curriculum was comprehensive and practical, making the entire learning experience both fun and informative. The feedback and peer reviews helped me polish my skills, and I now feel confident to take on design challenges professionally.",
            rating: 4,
            image: "https://i.pinimg.com/736x/6b/be/47/6bbe47ef7d09cbd0b708cd8ae1e7c106.jpg"
        },
        {
            id: 4,
            name: "Sneha Gupta",
            course: "Digital Marketing",
            review:
                "The course offered an in-depth look at digital marketing strategies and hands-on campaigns. It was structured to build confidence through practical assignments, and the case studies provided real-world insights. I now have a better understanding of how to leverage digital platforms for effective marketing.",
            rating: 5,
            image: "https://i.pinimg.com/736x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg"
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

    const visibleCards = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const maxSlideIndex = reviews.length - visibleCards;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev < maxSlideIndex ? prev + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length, visibleCards]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="section-3 testimonials">
            <div className="container w-container">
                <div className="testimonials-flex">
                    <div className="flex-content-col flex-heading-col">
                        <h1 className="heading-3 left-text">What They Said!</h1>
                        <h1 className="heading-3 text-bold left-text">Student Testimonials</h1>
                        <h1 className="heading-3 small-heading left-text">We Add Value</h1>
                    </div>
                    <div className="flex-content-col content-container">
                        <p className="paragraph full-width">
                            Our students made it possible. They learned, then implemented.
                            Now they are enjoying results.
                        </p>
                    </div>
                </div>
                {/* Slider Container */}
                <div className="slider">
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div key={review.id} className="slide">
                                <div className="testimonial-card">
                                    <div className="card-image">
                                        <img
                                            src={review.image}
                                            alt={`${review.name} profile`}
                                            className="student-img"
                                        />
                                    </div>
                                    <div className="card-content">
                                        <div className="card-header">
                                            <h2 className="student-name">{review.name}</h2>
                                            <div className="star-rating">{renderStars(review.rating)}</div>
                                        </div>
                                        <h4 className="course-name">{review.course}</h4>
                                        <p className="student-review">{review.review}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
