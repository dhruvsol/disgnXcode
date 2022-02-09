import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Montana1 = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <HeroSection heading="WARDROBE MONTANA" />
      </div>
      <DetailWardrobe />
    </>
  );
};

export default Montana1;
