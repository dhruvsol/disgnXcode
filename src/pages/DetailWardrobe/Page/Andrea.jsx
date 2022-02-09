import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Andrea1 = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <HeroSection heading="WARDROBE ANDREA" />
      </div>
      <DetailWardrobe />
    </>
  );
};

export default Andrea1;
