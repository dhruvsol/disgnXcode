import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Signature } from "../../components/Signature/Signature";
import { AboutHero } from "../../components/aboutsection/aboutHero/AboutHero";
import "./AboutUs.scss";
import { Partner } from "../../components/aboutsection/PartnerWithUs/Partner";
import { SliderSlide } from "../../components/Slider/Slider";
import { Leadership } from "../../components/aboutsection/LeadershipTeam/Leadership";

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <div>
          <Navbar />
          <AboutHero />
        </div>
        <Signature
          heading="CHAIRMAN'S MESSAGE"
          description="With nearly three decades of spatial design expertise, Interwood has passionately curated choicest home interior solutions to enhance your lifestyles, partnered with European component manufacturers to give you international quality products and expand your realm of eminent choices."
          signature="Signature"
        />
        <Leadership />
        <SliderSlide />
        <Partner />
        <Footer />
      </div>
    </>
  );
};
