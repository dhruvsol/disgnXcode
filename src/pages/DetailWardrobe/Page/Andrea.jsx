import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Andrea1 = () => {
  return (
    <>
      <div className="andreaplus">
        <Navbar1 />
        <HeroSection heading="WARDROBE ANDREA" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/andrea/WARDROBE_8_Zp5zZx6mI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088871626"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/andrea/WARDROBE_2.Denoiser_4skPrgaT0-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088870682"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/andrea/WARDROBE_6_gt80hYVBj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088870674"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/andrea/gbr_1_OuC-0lXHVwyb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088871143"
        abouth1="ABOUT ANDREA"
        aboutp="Very natural, sensuous and elegant, that’s the feel of Andrea wardrobe. The unique sensation is accompanied by a super matt texture, created by an innovative lacquer process, resulting in a high quality of anti-fingerprint surface ensuring a rich, well appointed finish."
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
        proofHead="Why you’ll love Andrea"
      />
    </>
  );
};

export default Andrea1;
