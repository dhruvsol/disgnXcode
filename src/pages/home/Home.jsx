import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
import { HomeSlider } from "../../components/Home/HomeSlider/HomeSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Signature2 } from "../../components/signature2/Signature2";
import { HomeCards } from "../../components/HomeCards/HomeCards";
import { Cardl } from "../../components/homeCardss/Cardl";
import { Cardt } from "../../components/homeCardss/Cardt";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [page, setPage] = useState(false);
  const preRef = useRef(null);

  const handlePreloader = () => {
    let el = preRef.current;
    setTimeout(() => {
      setPreloader(false);
      setPage(true);
    }, 2200);
    setTimeout(() => {
      gsap.to(el, {
        duration: 2,
        opacity: 0,
        y: "-200%",
        ease: "power",
      });
    }, 1800);
  };

  useEffect(() => {
    handlePreloader();
  });
  return (
    <>
      {preloader && (
        <div className="bg-[#151715] h-screen flex justify-center">
          <video ref={preRef} autoPlay muted>
            <source src="/img/preloader1.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {page && (
        <div className="Home-page overflow-hidden ">
          <div className="HeroSection">
            <Navbar1 />
            <HeroSection
              heading="ECHOING CLASS"
              subheading="CLASSY AND PERFECT KITCHEN"
            />
          </div>
          <div className="">
            <video className="w-full pt-20" autoPlay muted loop>
              <source src="/img/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <HomeSlider />

          {/* <Signature2 /> */}
          <div
            data-aos="zoom-out-up"
            data-aos-duration="3000"
            data-aos-delay="800"
            data-aos-anchor=".home-story"
            className="home-story "
          >
            <h1>Don't compromise,</h1>
            <h1>Make your living space exceptional!</h1>
            <p>
              Choose the latest in kitchen trends, high-tech appliances &
              gorgeous finishes.
            </p>

            <div className="home-story-line">
              <div className="home-story-bar"></div>
              <h2>Our Story</h2>
              <div className="home-story-bar"></div>
            </div>
          </div>
          <div className="acordian-home">
            <div className="acordian1">
              {/* <img src="/img/home.svg" alt="..." /> */}

              <div className="image">
                <a href="/kitchen/interwood">
                  Kitchen
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="acordian2">
              {/* <img src="/img/home.svg" alt="..." /> */}
              <div className="imageacc">
                <a href="/bedroom/wardrobe">
                  Bedroom
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex py-16 justify-center flex-col md:flex-row md:justify-evenly">
            <Cardl />
            <Cardt />
          </div>

          <OurBrands />
          <Testimonials />
          <Blog />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
