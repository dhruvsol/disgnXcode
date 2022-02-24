import React from "react";
import { HeroSection } from "../../../components/Home/HeroSection";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { DetailWardrobe } from "../DetailWardrobe";
export const Ralph1500 = () => {
  return (
    <>
      <div className="ralph1500">
        <Navbar1 />
        <HeroSection heading="RALPH 1500" />
      </div>
      <div>
        <DetailWardrobe
          url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r1500/S_1500__1__BecuE-NLI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689940528"
          url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r1500/CHIRAGJI_S_BR_VIEW_1_PnvnbKAov.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689940258"
          url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r1500/GBR_-_2_LJzOvDTRZge4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689939087"
          formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r1500/MBR_12_IElhI4GGs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689939620"
          abouth1="About Ralph 1500"
          aboutp="Thoughtfully tailored RALPH 1500 wardrobes accentuate your bedroom space with practical storage plans and beautiful mirror finishes. Superior quality materials used ensure that it graces your home for years to come.  "
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="ANTI CARCINOGENIC"
          proofHead="Why you’ll love Ralph 1500"
        />
      </div>
    </>
  );
};
