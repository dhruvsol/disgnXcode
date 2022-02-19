import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { DetailWardrobe } from "../DetailWardrobe/DetailWardrobe";
export const Vanties = () => {
  return (
    <div className="bg-[#171717]">
      <Navbar1 />
      <HeroSection heading="VANITIES" />
      <div className="bedroom-about pb-20">
        <Link to="/bedroom/wardrobe" className="about-name1 ">
          <div className="about-line"></div>
          <h1 className="text2">WARDROBE</h1>
          <div className="about-line"></div>
        </Link>
        <Link to="/bedroom/tvunits" className="about-name1">
          <div className="about-line"></div>
          <h1 className="text2">TV UNITS</h1>
          <div className="about-line"></div>
        </Link>
        <Link to="/bedroom/vanities" className="about-name1">
          <div className="about-line"></div>
          <h1 className="text1">VANITIES</h1>
          <div className="about-line"></div>
        </Link>
      </div>

      <DetailWardrobe />
      <Footer />
    </div>
  );
};
