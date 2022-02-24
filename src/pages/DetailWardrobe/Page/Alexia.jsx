import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";

const Alexia1 = () => {
  return (
    <>
      <div className="alexiaplus">
        <Navbar1 />
        <HeroSection heading="ALEXIA" />
      </div>
      <DetailWardrobe
        abouth1="ABOUT ALEXIA"
        aboutp="Start your day feeling organised by opening the doors of your aesthetically designed Alexia wardrobe. It considers everything from function to form. Alexia wardrobes don’t just look beautiful in keeping with the style of your home, they are also extremely practical."
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/BEDROOM_02.effectsResult_oeOErBjvV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088500524"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/WARDROBE_3.Denoiser_GESx8or1sHpS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088499656"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/CBR_kLomh_Ktk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088499940"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/GBR_qX_I33OBM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088603958"
        proofHead="Why you’ll love Alexia"
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
      />
    </>
  );
};

export default Alexia1;
