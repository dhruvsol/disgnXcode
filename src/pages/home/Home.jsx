import React from "react";
import "./Home.scss";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
import { HomeSlider } from "../../components/Home/HomeSlider/HomeSlider";

import { Signature2 } from "../../components/signature2/Signature2";

import { Cardl } from "../../components/homeCardss/Cardl";
import { Cardt } from "../../components/homeCardss/Cardt";

const Home = () => {
  return (
    <>
      <div className="Home-page overflow-hidden ">
        <div className="HeroSection">
          <Navbar1 />
          <HeroSection
            heading="ECHOING CLASS"
            subheading="CLASSY AND PERFECT KITCHEN"
          />
        </div>
        <div className=" hidden lg:block">
          <video className="w-full pt-20" autoPlay muted loop>
            <source src="/img/vidhome.mp4" type="video/mp4" />
          </video>
        </div>
        <HomeSlider />

        <Signature2 />
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
            Choose the latest in kitchen trends, high-tech appliances & gorgeous
            finishes.
          </p>

          <div className="home-story-line">
            <div className="home-story-bar"></div>
            <h2>Our Story</h2>
            <div className="home-story-bar"></div>
          </div>
        </div>
        <div data-aos="flip-up" className="acordian-home">
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
        <div
          data-aos="zoom-out"
          className="flex py-16 justify-center flex-col md:flex-row md:justify-evenly"
        >
          <Cardl />
          <Cardt />
        </div>

        <OurBrands />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
