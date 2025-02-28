import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import OurCourses from "./OurCourses";
import Testimonials from "./Testimonials";
import LearnmizerVsOthers from "./LearnmizerVsOthers";
import WhoWeAre from "./WhoWeAre";
import OurFounder from "./OurFounder";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <OurCourses />
            <WhoWeAre />
            <LearnmizerVsOthers />
            <Testimonials />
            <OurFounder />
        </>
    );
}
