import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import "./Brands.scss";

export const Brands = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection />
        <div className="brands">
          <h1>WE DON'T MAKE HOUSES</h1>
          <h1>WE MAKE HOMES</h1>
          <div className="brands-bar">
            <div className="line1"></div>
            <h2>OUR STORY</h2>
            <div className="line1"></div>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <img src="" alt=".." />
          <img src="" alt=".." />
        </div>
        <Footer />
      </div>
    </>
  );
};
