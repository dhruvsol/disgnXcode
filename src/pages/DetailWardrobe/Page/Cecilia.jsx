import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Cecilia1 = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <HeroSection heading="WARDROBE CECLILA" />
      </div>
      <DetailWardrobe />
    </>
  );
};

export default Cecilia1;
