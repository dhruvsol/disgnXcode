import React from "react";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Card1 } from "../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../components/SpecialCard/Card2/Card2";
import "./Bedroom.scss";
export const Bedroom = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection heading="BEDROOM" />
        <div className="bedroom-about pb-20">
          <div className="about-name1 ">
            <div className="about-line"></div>
            <h1 className="text1">WARDROBE</h1>
            <div className="about-line"></div>
          </div>
          <div className="about-name1">
            <div className="about-line"></div>
            <h1 className="text2">TV UNITS</h1>
            <div className="about-line"></div>
          </div>
          <div className="about-name1">
            <div className="about-line"></div>
            <h1 className="text2">VANITIES</h1>
            <div className="about-line"></div>
          </div>
        </div>
        <img src="/img/bedroom1.png" alt="..." />
        <div className="flex justify-evenly items-center pt-20">
          <div>
            <Card1 name="INTERWOOD" url="/img/Frame 14.png" />
          </div>
          <div>
            <Card2 name="INTERWOOD PLUS" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
