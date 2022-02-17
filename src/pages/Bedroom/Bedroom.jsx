import React from "react";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Card1 } from "../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../components/SpecialCard/Card2/Card2";
import "./Bedroom.scss";
import { Link } from "react-router-dom";
export const Bedroom = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection heading="WARDROBE" />
        <div className="bedroom-about pb-20">
          <Link to="/bedroom/wardrobe" className="about-name1">
            <div className="about-line"></div>
            <h1 className="text1">WARDROBE</h1>
            <div className="about-line"></div>
          </Link>

          <Link className="about-name1" to="/bedroom/tvunits">
            <div className="about-line"></div>
            <h1 className="text2">TV UNITS</h1>
            <div className="about-line"></div>
          </Link>

          <Link className="about-name1" to="/bedroom/vanities">
            <div className="about-line"></div>
            <h1 className="text2">VANITIES</h1>
            <div className="about-line"></div>
          </Link>
        </div>
        <img src="/img/bedroom1.png" alt="..." />
        <div className="mobile-bedroom">
          <Link to="/bedroom/wardrobe/interwood">
            <Card1 name="INTERWOOD" url="/img/SpecialCard/Frame 14.png" />
          </Link>
          <Link to="/bedroom/wardrobe/interwoodplus">
            <Card2 name="INTERWOOD PLUS" url="/img/SpecialCard/Frame 14.png" />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};
