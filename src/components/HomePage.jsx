import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import OurCourses from "./OurCourses";
import Testimonials from "./Testimonials";
import LearnmizerVsOthers from "./LearnmizerVsOthers";
import WhoWeAre from "./WhoWeAre";
import OurFounder from "./OurFounder";
import Header from "./Header";
import Footer from "./Footer";
export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutUs />
            <OurCourses />
            <WhoWeAre />
            <LearnmizerVsOthers />
            <Testimonials />
            <OurFounder />
            <Footer />
        </>
    );
}
