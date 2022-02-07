import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Card2 } from "../../../components/SpecialCard/Card2/Card2";
import { Card1 } from "../../../components/SpecialCard/Card1/Card1";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import "./Interwood1.scss";
export const Interwood1 = ({ url1, url2, url3, url4, url5, main }) => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection heading="KITCHEN" subheading="" />
      </div>
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
      <div className="interwood-about-card">
        <div className="about-content">
          <h1>ABOUT INTERWOOD</h1>
          <p>
            Since 1989, Interwood has inspired fragments of your life stories
            with the finest kitchens, wardrobes, bedroom sets and living &
            dining systems, backed by state-of-the-art German technology, that
            have carried with them our promise of quality, creativity &
            innovation.
          </p>
        </div>
        <div className="about-card"></div>
      </div>
      <div className="interwood-image">
        {/* <img src="/img/interwood/interwood1.svg" alt="...." /> */}
        <img src={main} alt="..." />
      </div>
      <div className="interwood">
        <div className="interwood-card">
          <div>
            <Card1 name="ANDREA" url={url1} />
          </div>
          <div>
            <Card2 name="MONTANA" url={url2} />
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Card1 name="CECILIA" url={url3} />
          </div>
          <div>
            <Card2 name="ALEXIA" url={url4} />
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Card1 name="CECILIA" url={url5} />
          </div>
          {/* <div>
            <Card2 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};
