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


export default function App() {
  return (
    <>
      {/* This site was created in Webflow. https://webflow.com */}
      {/* Last Published: Thu Feb 13 2025 14:48:55 GMT+0000 (Coordinated Universal Time) */}
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

      {/* <div className="header">
        <div className="container-3 w-container">
          <a href="#" className="link-block w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
              loading="lazy"
              alt=""
              className="image-8"
            />
          </a>
          <div className="div-block-16">
            <a
              href="https://app.Learnmizer.com"
              target="_blank"
              className="header-cta franchise-btn w-button"
            >
              Login
            </a>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}

      <HeroSection />

      {/* <div className="hero-section">
        <div className="container w-container">
          <h1 className="grad-tagline">
            <strong className="bold-text">Optimize and Learn Smartly</strong>
          </h1>
          <h2 className="main-heading">Learn Only What Matters</h2>
          <h1 className="heading">Smartest Way of Learning</h1>
          <p className="paragraph center-align-text">
            Learn only what matters and give you results. Choose the smartest way of
            learning.
          </p>
          <div className="w-layout-grid grid-2">
            <a
              href="#courses"
              id="w-node-_7b114e33-ea10-67fc-1987-a3e96a37d033-aa3253d5"
              className="header-cta w-button"
            >
              Our Courses
            </a>
          </div>
        </div>
        <div className="container-5 w-container" />
        <div
          data-w-id="879de7b5-7c35-361c-8d15-04ae19b9546c"
          className="div-block-13"
        >
          <div className="div-block-14">
            <img
              sizes="(max-width: 479px) 0px, 100vw"
              srcSet="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-2000.webp 2000w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-2600.webp 2600w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1)-p-3200.webp 3200w"
              src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c9dfc10a6ce29175fb069_MacBook%20Pro%2014_%20-%202%20(1).webp"
              alt=""
              className="image main-img"
            />
            <div className="div-block-12">
              <div className="div-block-11">
                <div
                  style={{ paddingTop: "56.17021276595745%" }}
                  className="w-embed-youtubevideo youtube"
                >
                  <iframe
                    src="https://www.youtube.com/embed/XwrTE7dlNzo?rel=0&controls=1&autoplay=0&mute=0&start=0"
                    frameBorder={0}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      pointerEvents: "auto"
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen=""
                    title="Entrepreneur's Luxury Villa Tour | Aryan Tripathi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-w-id="81ca22e7-6091-7bc6-5cb9-5ccd1d716a12"
          style={{ opacity: "0.06" }}
          className="container container-2 w-container"
        >
          <img
            src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f473b91e94a591b35f_Group-1.png"
            loading="lazy"
            alt=""
            className="image-2"
          />
          <img
            src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f483c0cd9ad66edae1_Mask%20group-1.png"
            loading="lazy"
            alt=""
            className="image-2"
          />
          <img
            src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f447c2d31464dbeea2_Group.png"
            loading="lazy"
            alt=""
            className="image-2"
          />
          <img
            src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383c4f4428da06ee5277a9e_Mask%20group.png"
            loading="lazy"
            alt=""
            className="image-2"
          />
        </div>
      </div> */}

      {/* About us Section */}

      <AboutUs />

        {/* <div data-w-id="0c4c9ce8-5a85-82a9-e51b-e7dfefe0cef4" class="section">
          <div class="container w-container">
            <h1 data-w-id="4fd32b8a-1c68-8036-1bd5-a2f938d9d209" class="text-sm">
              Teaching Practical Knowledge to Transform You
            </h1>
            <h2 data-w-id="0577cde8-cc74-de49-adcb-ffc54668c08a" class="text-sm text-bold">
              From Dreamer to Achiever
            </h2>
            <p data-w-id="972fc89e-03a9-dab3-50e2-87dbdfe0d80f" class="paragraph">
              Throughout our life, we learn many things, but only a few work for our careers. Learnmizer is dedicated to teaching and disclosing skills that help you to grow in your professional life.
            </p>
            <div data-w-id="6b8ba740-16f1-9d7d-596e-dbdf2c116cdf" class="w-layout-grid grid-7">
              <div class="grid-item">
                <h4 class="heading-2">10+</h4>
                <p class="counter-heading">Courses</p>
              </div>
              <div class="grid-item">
                <h4 class="heading-2">600+</h4>
                <p class="counter-heading">Lessons</p>
              </div>
              <div class="grid-item">
                <h4 class="heading-2">1500+</h4>
                <p class="counter-heading">Video Hours</p>
              </div>
            </div>
          </div>
        </div> */}

      {/* Our Courses Section  */}

      <OurCourses />

      {/* <div class="section-2 learn-from-us">
        <div class="container w-container">
          <h2 id="courses" class="heading-3">Learn From Us!</h2>
          <h3 class="heading-3 text-bold">Our Courses</h3>
          <h3 class="heading-3 small-heading">Loved By Thousands</h3>

          <div class="w-layout-grid grid-8">
            <div id="w-node-_62048b6a-fc93-5b80-d297-3ee1c778e25d-aa3253d5"
              data-w-id="62048b6a-fc93-5b80-d297-3ee1c778e25d"
              class="div-block">
              <img
                src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/639b4cc9a7aebfcc7dfe8842_facebook%20ads%20courseupdated.png"
                loading="lazy"
                id="w-node-ceeb142d-2f51-0753-584a-18f1d3324271-aa3253d5"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 94vw"
                alt="Screenshot of the updated Facebook Ads Course (2024)"
                srcset="https://cdn.prod.website-files.com/6383abdde6636137533253d4/639b4cc9a7aebfcc7dfe8842_facebook%20ads%20courseupdated-p-500.png 500w, 
                  https://cdn.prod.website-files.com/6383abdde6636137533253d4/639b4cc9a7aebfcc7dfe8842_facebook%20ads%20courseupdated-p-800.png 800w, 
                  https://cdn.prod.website-files.com/6383abdde6636137533253d4/639b4cc9a7aebfcc7dfe8842_facebook%20ads%20courseupdated-p-1080.png 1080w, 
                  https://cdn.prod.website-files.com/6383abdde6636137533253d4/639b4cc9a7aebfcc7dfe8842_facebook%20ads%20courseupdated.png 1280w"
                class="image-3"
              />
              <p id="w-node-a236983e-4d19-3f64-265a-9e4297eea3ec-aa3253d5" class="paragraph-2">
                Updated Facebook Ads Course (2024)
              </p>
              <div class="div-block-2">
                <img
                  src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383e6033b3c2ef89a16f7be_icon%20lessons.png"
                  loading="lazy"
                  width="24"
                  alt="Lessons Icon"
                />
                <p class="paragraph-3">
                  <span class="text-span">28</span> Lessons
                </p>
                <img
                  src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/6383e79d8111f53a23e872e1_time%20%20icon.png"
                  loading="lazy"
                  width="24"
                  alt="Time Icon"
                  class="image-4"
                />
                <p class="paragraph-3">
                  <span class="text-span">6</span> Hours
                </p>
              </div>
              <a href="https://www.Learnmizer.com/meta-ads-course" class="border-cta full-width w-button">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Who We Are Section */}

      <WhoWeAre />

      {/* <div className="section-2 who-we-are">
        <div className="container w-container">
          <h2 className="heading-3">Who We Are?</h2>
          <h3 className="heading-3 text-bold">Choose Better!</h3>
          <h3 className="heading-3 small-heading">45,000+ Students</h3>

          <div className="w-layout-grid grid-9">
            <img
              src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206.png"
              alt="MacBook Pro displaying our work"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 100vw"
              data-w-id="1887abb9-7346-efd8-30c3-87281b926596"
              id="w-node-_1887abb9-7346-efd8-30c3-87281b926596-aa3253d5"
              loading="lazy"
              srcSet="
              https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206-p-500.png 500w, 
              https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206-p-800.png 800w, 
              https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206-p-1080.png 1080w, 
              https://cdn.prod.website-files.com/6383abdde6636137533253d4/638b7a871f96abbf944b4ade_MacBook%20Pro%2014_%20-%206.png 1512w
            "
              style={{ opacity: 1 }}
            />

            <div
              id="w-node-dccc4722-2672-1d5b-cb14-af64e6439d85-aa3253d5"
              data-w-id="dccc4722-2672-1d5b-cb14-af64e6439d85"
              className="div-block-4"
              style={{
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="div-block-3">
                <img
                  src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                  loading="lazy"
                  width="32"
                  alt="Check icon"
                />
                <h4 className="heading-3 text-sm">The Extra Effort</h4>
              </div>
              <p className="paragraph full-width">
                We want to put forward the best content that works for you. Our additional effort can help change thousands of lives by opening a new door of opportunity for them.
              </p>

              <div className="div-block-5"></div>

              <div className="div-block-3">
                <img
                  src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                  loading="lazy"
                  width="32"
                  alt="Check icon"
                />
                <h4 className="heading-3 text-sm">We are Unique</h4>
              </div>
              <p className="paragraph full-width">
                We don’t just sell courses for you to learn. Along with the courses, we provide you with proper interactive live sessions with the mentors, and organize workshops, so you never have to have a doubt regarding your queries.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Why Us Section */}

      <LearnmizerVsOthers />

      {/* <div className="section-2 why-us">
        <div
          data-w-id="ac44b63f-e791-bc30-1e7c-dea123cfe8c3"
          className="container w-container"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <h1 className="heading-3">Learnmizer Vs Others</h1>
          <h1 className="heading-3 text-bold">Why Learnmizer?</h1>
          <h1 className="heading-3 small-heading">We Are Special!</h1>

          <div className="w-layout-grid grid-9">
            <div
              id="w-node-_4d43f068-c8b0-3ec7-965d-1ff428216a78-aa3253d5"
              className="div-block-7"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, -100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <p
                data-w-id="f294ca76-0c44-9236-d36d-50af9434b318"
                className="paragraph-4"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.37336, 1.37336, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                😎 Learnmizer
              </p>
              {[
                "We’re focused on practical based knowledge that develops your skills and helps in your career growth.",
                "You learn from real-life experience holders and achievers. They know market trends & requirements and teach you accordingly.",
                "We’ve more than 10,000 success stories. More than 5000 people from the Learnmizer community make more than 1 lakh per month.",
                "We always find the latest methods of the niche that will work for you in the shortest period.",
              ].map((text, index) => (
                <div key={index}>
                  <div className="div-block-9">
                    <img
                      src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638486a095e146a8a32a8dc6_checkckek.png"
                      loading="lazy"
                      width="27"
                      alt="Check icon"
                      className="comp-icon"
                    />
                    <h5 className="heading-4 comp-heading">{text}</h5>
                  </div>
                  <div className="div-block-10"></div>
                </div>
              ))}
            </div>
            <div
              id="w-node-c993adc6-eb1a-c040-95d3-ddde53af9674-aa3253d5"
              className="div-block-7 no-bg"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, -100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <p
                data-w-id="c993adc6-eb1a-c040-95d3-ddde53af9675"
                className="paragraph-4 outline"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6.95065deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                😬 Fake Gurus
              </p>
              {[
                "They focus more on their lifestyle and other shiny objects rather than providing value.",
                "They don’t have any real-life experience. They teach you from any book that you find in the market.",
                "They don’t have any success stories. Most of them use paid actors for testimonials.",
                "They teach the same methods used across decades. Some of them are too old to be applicable in today’s era.",
              ].map((text, index) => (
                <div key={index}>
                  <div className="div-block-9">
                    <img
                      src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638592f1d1cb2cc94a01d0a4_Group%2020.png"
                      loading="lazy"
                      width="27"
                      alt="Cross icon"
                      className="comp-icon"
                    />
                    <h5 className="comp-heading heading-4">{text}</h5>
                  </div>
                  <div className="div-block-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}


      {/* Student Testimonials */}

      <Testimonials />

      {/* <div className="section-3">
        <div className="container w-container">
          <div className="testimonials-flex">
            <div className="flex-content-col flex-heading-col">
              <h1 className="heading-3 left-text">What They Said!</h1>
              <h1 className="heading-3 text-bold left-text">
                Student Testimonials
              </h1>
              <h1 className="heading-3 small-heading left-text">We Add Value</h1>
            </div>
            <div className="flex-content-col content-container">
              <p className="paragraph full-width">
                Our Student made it possible. They Learnt then Implemented. Now they
                are enjoying Results.
              </p>
            </div>
          </div>
          <div className="div-block-28">
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMgAREjXQUyk&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMgAREjXQUyk&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FMgAREjXQUyk%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="YouTube"
                />
              </div>
            </div>
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fez7Jwrjts7c%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dez7Jwrjts7c&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fez7Jwrjts7c%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="Review 2"
                />
              </div>
            </div>
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FGiSRU_AL020%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGiSRU_AL020&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGiSRU_AL020%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="Review 3"
                />
              </div>
            </div>
          </div>
          <div className="div-block-28">
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOu-v6pEKunA%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOu-v6pEKunA&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOu-v6pEKunA%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="Review 4"
                />
              </div>
            </div>
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FH763ylB-Lko%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH763ylB-Lko&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FH763ylB-Lko%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="Review 5"
                />
              </div>
            </div>
            <div className="div-block-27">
              <div
                style={{ paddingTop: "56.17021276595745%" }}
                className="video-2 w-video w-embed"
              >
                <iframe
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F8MtrRfwsMes%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8MtrRfwsMes&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8MtrRfwsMes%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                  scrolling="no"
                  allowFullScreen=""
                  title="Review 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Our Founder Section */}

      <OurFounder />

      {/* <div className="section-3">
        <div className="container w-container">
          <div className="testimonials-flex">
            <div className="flex-content-col flex-heading-col">
              <div className="w-layout-grid grid-11">
                <div id="w-node-ba7186e5-b769-4060-e5cb-27681dcd2c55-aa3253d5">
                  <h1 className="heading-3 left-text">Behind Learnmizer</h1>
                  <h1 className="heading-3 text-bold left-text">Our Founder</h1>
                  <h1 className="heading-3 small-heading left-text">
                    From Best for Best
                  </h1>
                  <p className="paragraph full-width aryan-section">
                    Aryan Tripathi is not only Founded Learnmizer also the founder of
                    Adymize and Myzer. He has transformed life of more than 45,000
                    people with Learmizer and helped most influential brands with
                    Adymize. <br />‍<br />
                    He founded Learnmizer with the vision to help millions of people
                    in India to develop practical skills that will helps then in
                    their life. <br />
                    While conventional education institution are focused on making
                    employees, Learnmizer has successful produced more than 5000
                    entrepreneurs.
                  </p>
                </div>
                <div
                  id="w-node-f3260d42-ed4c-c892-42c0-8c9c62962bd0-aa3253d5"
                  className="div-block-18"
                >
                  <div
                    id="w-node-c9a6ad1d-91f7-628c-bc14-764f53ac0a98-aa3253d5"
                    style={{ paddingTop: "56.17021276595745%" }}
                    className="w-embed-youtubevideo youtube-2"
                  >
                    <iframe
                      src="https://www.youtube.com/embed/JttLz_ZafUo?rel=0&controls=1&autoplay=0&mute=0&start=0"
                      frameBorder={0}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "auto"
                      }}
                      allow="autoplay; encrypted-media"
                      allowFullScreen=""
                      title=""
                    />
                  </div>
                  <div className="div-block-17">
                    <h1 className="heading-5 meet-yellow">Meet</h1>
                    <h1 className="heading-5 white-text">Aryan Tripathi</h1>
                    <h1 className="heading-5 designation-txt">(Founder)</h1>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 300px"
                    srcSet="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-500.webp 500w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-800.webp 800w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-1080.webp 1080w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-1600.webp 1600w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-2000.webp 2000w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-2600.webp 2600w, https://cdn.prod.website-files.com/6383abdde6636137533253d4/638e47aeb588406ff53c0b54_IMG_6459-min-p-3200.webp 3200w"
                    alt=""
                    className="image-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer Section */}

      <Footer /> 

      {/* <div className="section-3 footer">
        <div className="container container-3 footer-container w-container">
          <div className="div-block-19">
            <img
              src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/656c5ff5b3d2dc2abd108c63_Asset%201%20(6).png"
              loading="lazy"
              alt=""
              className="image-9"
            />
            <a href="#courses" className="header-cta about-sxn w-button">
              Find a Perfect Course
            </a>
          </div>
          <div className="w-layout-grid grid-12">
            <div id="w-node-_64d46a19-064c-f4c8-88e5-38a3251657e7-251657e0">
              <h4
                id="w-node-_64d46a19-064c-f4c8-88e5-38a3251657e8-251657e0"
                className="heading-7"
              >
                Academy
              </h4>
              <a href="#courses" className="paragraph-5">
                Courses
              </a>
              <a href="/contact-us" className="paragraph-5 footer-item">
                Contact Us
              </a>
            </div>
            <div id="w-node-_64d46a19-064c-f4c8-88e5-38a3251657f5-251657e0">
              <h4
                id="w-node-_64d46a19-064c-f4c8-88e5-38a3251657f6-251657e0"
                className="heading-7"
              >
                Legal
              </h4>
              <a href="/privacy-policy" className="paragraph-5">
                Privacy Policy
              </a>
              <a href="/terms-and-service" className="paragraph-5">
                Terms and Service
              </a>
              <a href="/refund-policy" className="paragraph-5">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
        <div className="container copyright-cotaniner w-container">
          <div className="div-block-22">
            <p className="paragraph-7">
              All Rights Reserved 2022
              <a
                href="https://www.facebook.com/startupmastersacademy"
                target="_blank"
              >
                <br />
              </a>
            </p>
            <div className="div-block-23">
              <a
                href="https://www.instagram.com/Learnmizer/"
                className="w-inline-block"
              >
                <div className="div-block-24">
                  <img
                    src="https://cdn.prod.website-files.com/6383abdde6636137533253d4/638c84e9698caa0ae953e0e5_Vector.png"
                    loading="lazy"
                    alt=""
                    className="image-11"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>

  )
}
