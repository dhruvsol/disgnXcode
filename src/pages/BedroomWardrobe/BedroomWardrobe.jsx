import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Card1 } from "../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../components/SpecialCard/Card2/Card2";
import { SliderSlide } from "../../components/Slider/Slider";
import "./BedroomWardrobe.scss";
export const BedroomWardrobe = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <div className="">
          <Navbar1 />
          <HeroSection heading="WARDROBES" />
        </div>
        <div>
          <div className="interwood-about">
            <div className="about-name1 ">
              <div className="about-line"></div>
              <h1 className="text1">INTERWOOD</h1>
              <div className="about-line"></div>
            </div>
            <div className="about-name1">
              <div className="about-line"></div>
              <h1 className="text2">INTERWOOD PLUS</h1>
              <div className="about-line"></div>
            </div>
          </div>
          <div className="wardrobe-about">
            <h1>WARDROBE DESIGN IDEAS FOR YOUR BEDROOM</h1>
            <p>
              Interwood values your private space and applies its best design to
              your bedroom. Spacious wardrobes and coordinated bedroom sets will
              suit your style, and a wide range of colour options are available
              to harmonise with your interiors. Ample space is provided for your
              apparels and accessories. We, at Interwood, make sure your room
              looks glamorous with our range of stylish wardrobes.
            </p>
          </div>
        </div>
        <SliderSlide />
        <div className="wardrobe-card">
          <div>
            <Card1 name="ANDREA" />
            <Card2 name="MONTANA" />
          </div>
          <div>
            <Card1 name="CECILIA" />
            <Card2 name="ALEXIA" />
          </div>
          <div>
            <Card1 name="Profilo Sliding Wardrobe" />
            <Card2 name="SUBLIME SLIDING WARDROBE" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
