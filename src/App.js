import React from 'react'
import "./App.css"
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurCourses from './components/OurCourses'
import WhoWeAre from './components/WhoWeAre'
import LearnmizerVsOthers from './components/LearnmizerVsOthers'
import OurFounder from './components/OurFounder'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import ScrollToTop from './hooks/useScrollToTop'

export default function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Learnmizer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link
        href="https://cdn.prod.website-files.com/6383abdde6636137533253d4/css/Learnmizer.webflow.de2411024.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdn.prod.website-files.com/6383abdde6636137533253d4/63b20ac6abde4cf39fab2159_Untitled%20design%20(13)%20(1).png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://cdn.prod.website-files.com/6383abdde6636137533253d4/63b20ae0224d1f10dc301662_Untitled%20design%20(13)%20(2).png"
        rel="apple-touch-icon"
      />

      {/* Header Section */}

      <Header />

      {/* Hero Section */}

      <HeroSection />

      {/* About us Section */}

      <AboutUs />

      {/* Our Courses Section  */}

      <OurCourses />

      {/* Who We Are Section */}

      <WhoWeAre />

      {/* Why Us Section */}

      <LearnmizerVsOthers />

      {/* Student Testimonials */}

      <Testimonials />

      {/* Our Founder Section */}

      <OurFounder />

      {/* Footer Section */}

      <Footer /> 

      <ScrollToTop />
      
    </>

  )
}
