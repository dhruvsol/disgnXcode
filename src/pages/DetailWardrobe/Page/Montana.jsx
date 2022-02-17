import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Montana1 = () => {
  return (
    <>
      <div className="montanaplus">
        <Navbar1 />
        <HeroSection heading="WARDROBE MONTANA" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/Montana/bedroom_2_JCHQyLvyzUVo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089435813"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/Montana/bedroom_21.Denoiser_525-FB1AY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089435381"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/Montana/WARDROBE_16_XC2TU4MRd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089437717"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/Montana/WARDROBE_14_FVD-xjjKr2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089446778"
        abouth1="ABOUT MONTANA"
      />
    </>
  );
};

export default Montana1;
