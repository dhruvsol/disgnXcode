import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const SublimeSliding = () => {
  return (
    <>
      <div className="sublimeplus">
        <Navbar1 />
        <HeroSection heading="SUBLIME SLIDING" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/sublime/WARDROBE_SUBLIME_2B_KbDWGZydz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089999288"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/sublime/VIEW_02.effectsResult_CO2KtRkct.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089996312"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/sublime/VIEW_03.effectsResult_Aid2Cly_Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089996959"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/sublime/WARDROBE_SUBLIME_2A_jdJvg6FmXVRU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089998594"
        abouth1="ABOUT SUBLIME SLIDING"
      />
    </>
  );
};

export default SublimeSliding;
