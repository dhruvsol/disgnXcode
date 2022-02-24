import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const Cecilia1 = () => {
  return (
    <>
      <div className="ceciliaplus">
        <Navbar1 />
        <HeroSection heading="WARDROBE CECILIA" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ceclia/FF_CBR_WARDROBE.Denoiser.Denoiser_W0mu9au8WaAC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089084896"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ceclia/KID_S_BEDROOM.effectsResult_1c-9Z4_HI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089084965"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ceclia/COT_03.effectsResult_eL0_245f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089085586"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ceclia/COT_01.effectsResult_GzaqMS4Fx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089086079"
        abouth1="ABOUT CECILIA"
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
        proofHead="Why you’ll love Andrea"
        aboutp="Your choices are as variable as your possessions and it all depends on the space and style. Cecilia built-in wardrobe solutions, in your choice of glossy finishes, include designs befitting you. They can incorporate TV’s, dressing tables, desks and blend beautifully with your home decor."
      />
    </>
  );
};

export default Cecilia1;
