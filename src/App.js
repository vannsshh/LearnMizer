import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./hooks/useScrollToTop";
import HomePage from "./components/HomePage";
import AllCourses from "./components/AllCourses";
import ExploreCourse from "./components/ExploreCourse";

export default function App() {
  return (
    <Router>
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
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://cdn.prod.website-files.com/6383abdde6636137533253d4/63b20ac6abde4cf39fab2159_Untitled%20design%20(13)%20(1).png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/6383abdde6636137533253d4/63b20ae0224d1f10dc301662_Untitled%20design%20(13)%20(2).png"
          rel="apple-touch-icon"
        />


        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/courses/:id" element={<ExploreCourse />} />
        </Routes>

        <ScrollToTop />
      </>
    </Router>
  );
}
