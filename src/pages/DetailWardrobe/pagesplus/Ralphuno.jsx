import React from "react";
import { DetailWardrobe } from "../DetailWardrobe";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
export const Ralphuno = () => {
  return (
    <>
      <div className="ralphuno">
        <Navbar1 />
        <HeroSection heading="Ralph Uno" />
      </div>
      <div>
        <DetailWardrobe
          abouth1="About Ralph Uno"
          aboutp="Getting dressed is a pleasure with RALPH UNO walk through wardrobe. With easy access to all your apparels, footwear and accessories, our bespoke design expertise is seen at its best."
          url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Uno/MBR-1_Xw7uyVlmo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645683565409"
          url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Uno/MBR-2_3a3S_Pa7W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645683564773"
          url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Uno/MBR-3_Z34RwEADh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645683564567"
          formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Uno/UNO_iXR8G1O54.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645683567169"
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="ANTI CARCINOGENIC"
          proofHead="Why you’ll love Ralph Uno"
        />
      </div>
    </>
  );
};
