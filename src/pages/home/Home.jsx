import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
import { HomeSlider } from "../../components/Home/HomeSlider/HomeSlider";
import { Signature } from "../../components/Signature/Signature";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [page, setPage] = useState(false);
  const preRef = useRef("");
  const our1Ref = useRef("");
  const our2Ref = useRef("");
  const our3Ref = useRef("");
  const our4Ref = useRef("");
  const handlePreloader = () => {
    let el = preRef.current;
    setTimeout(() => {
      setPreloader(false);
      setPage(true);
    }, 2000);
    setTimeout(() => {
      gsap.to(el, {
        duration: 1.5,
        opacity: 0,
        y: "-200%",
        ease: "power1",
      });
    }, 1500);
  };
  const OurStory = () => {
    let el1 = our1Ref.current;
    let el2 = our2Ref.current;
    let el3 = our3Ref.current;
    let el4 = our4Ref.current;

    gsap.from(el1, {
      duration: 1,
      y: "200%",
      scrollTrigger: {
        trigger: el1,
      },
    });
    gsap.from(el2, {
      duration: 1.2,
      y: "250%",
      scrollTrigger: {
        trigger: el2,
      },
    });
    gsap.from(el3, {
      duration: 1.4,
      y: "300%",
      scrollTrigger: {
        trigger: el2,
      },
    });
    gsap.from(el4, {
      duration: 1.6,
      y: "350%",
      scrollTrigger: {
        trigger: el2,
      },
    });
  };
  useEffect(() => {
    handlePreloader();
    OurStory();
  }, []);
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
        <div className="Home-page">
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
          <Signature
            heading="Core Team Comitted towards our legacy"
            signature="Signature"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac a rutrum interdum facilisi donec phasellus. Velit purus varius eu consectetur blandit placerat viverra tellus. Volutpat, maecenas tellus et turpis. A dictum ipsum sit volutpat. In nunc sed urna, suspendisse dui donec rhoncus scelerisque. Molestie volutpat augue habitant purus diam suscipit dignissim. Massa pharetra metus feugiat lectus. Et luctus morbi id congue ornare et in aenean enim. Scelerisque morbi justo, faucibus turpis vitae, ornare amet. Vestibulum ut est, lectus pellentesque nunc ac quis id. Placerat massa id m"
          />
          <div className="home-story">
            <h1 ref={our1Ref}>Don't compromise,</h1>
            <h1 ref={our2Ref}>Make your living space exceptional!</h1>
            <p ref={our3Ref}>
              Choose the latest in kitchen trends, high-tech appliances &
              gorgeous finishes.
            </p>

            <div ref={our4Ref} className="home-story-line">
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
      )}
    </>
  );
};

export default Home;
