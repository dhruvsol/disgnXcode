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
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
        proofHead="Why you’ll love Montana"
        aboutp="Montana’s perfect glossy finishes completely transform the look of your home. They dramatically enliven the entire space, while internal storage layouts and materials used, suit your lifestyle and meet your specifications perfectly."
      />
    </>
  );
};

export default Montana1;
