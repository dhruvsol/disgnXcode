import React from "react";
import "./Home.scss";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
import { HomeSlider } from "../../components/Home/HomeSlider/HomeSlider";
import { Signature } from "../../components/Signature/Signature";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home-page">
      <div className="HeroSection">
        <Navbar1 />
        <HeroSection
          heading="ECHOING CLASS"
          subheading="CLASSY AND PERFECT KITCHEN"
        />
      </div>
      <HomeSlider />
      <Signature
        heading="Core Team Comitted towards our legacy"
        signature="Signature"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac a rutrum interdum facilisi donec phasellus. Velit purus varius eu consectetur blandit placerat viverra tellus. Volutpat, maecenas tellus et turpis. A dictum ipsum sit volutpat. In nunc sed urna, suspendisse dui donec rhoncus scelerisque. Molestie volutpat augue habitant purus diam suscipit dignissim. Massa pharetra metus feugiat lectus. Et luctus morbi id congue ornare et in aenean enim. Scelerisque morbi justo, faucibus turpis vitae, ornare amet. Vestibulum ut est, lectus pellentesque nunc ac quis id. Placerat massa id m"
      />
      <div className="home-story">
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
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="acordian2">
          {/* <img src="/img/home.svg" alt="..." /> */}
          <div className="image">
            <a href="/bedroom">
              Bedroom
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <OurBrands />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
