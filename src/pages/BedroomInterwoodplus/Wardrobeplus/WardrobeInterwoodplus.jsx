import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { Card1 } from "../../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../../components/SpecialCard/Card2/Card2";
import { SliderSlide } from "../../../components/Slider/Slider";
import "../../BedroomInterwood/BedroomWardrobe.scss";
import { Link } from "react-router-dom";
export const WardrobeInterwoodplus = () => {
  return (
    <>
      <div className="bg-[#171717] overflow-hidden">
        <div className="">
          <Navbar1 />
          <HeroSection heading="WARDROBES" />
        </div>
        <div>
          <div className="interwood-about">
            <Link to="/bedroom/wardrobe/interwood" className="about-name1 ">
              <div className="about-line"></div>
              <h1 className="text2">INTERWOOD</h1>
              <div className="about-line"></div>
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus" className="about-name1">
              <div className="about-line"></div>
              <h1 className="text1">INTERWOOD PLUS</h1>
              <div className="about-line"></div>
            </Link>
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
            <Card1 name="ALLURE" />
            <Card2 name="RALPH 8000" />
          </div>
          <div>
            <Card1 name="RALPH 1500" />
            <Card2 name="RALPH 22" />
          </div>
          <div>
            <Card1 name="RALPH 29" />
            <Card2 name="RALPH UNO" />
          </div>
          <div>
            <Card1 name="GLAZE" />
            <Card2 name="LACK 7" />
          </div>
          <div>
            <Card1 name="STRUCT" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
