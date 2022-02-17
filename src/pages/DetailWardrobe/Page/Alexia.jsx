import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";

const Alexia1 = () => {
  return (
    <>
      <div className="alexiaplus">
        <Navbar1 />
        <HeroSection heading="WARDROBE ALEXIA" />
      </div>
      <DetailWardrobe
        abouth1="ABOUT ALEXIA"
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/BEDROOM_02.effectsResult_oeOErBjvV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088500524"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/WARDROBE_3.Denoiser_GESx8or1sHpS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088499656"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/CBR_kLomh_Ktk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088499940"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALexia/GBR_qX_I33OBM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645088603958"
      />
    </>
  );
};

export default Alexia1;
