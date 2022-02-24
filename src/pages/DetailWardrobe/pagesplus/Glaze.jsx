import React from "react";
import { DetailWardrobe } from "../DetailWardrobe";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
export const Glaze = () => {
  return (
    <>
      <div className="glazewardrobe">
        <Navbar1 />
        <HeroSection heading="GLAZE" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Glaze/GLAZE_WARDROBE_d-e4dxYk-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645101380849"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Glaze/GLAZE_qcFwP1mgg3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645101380899"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Glaze/PRAJWAL_S_VIEW_1_zqOknT4tUUQq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645101380520"
        forming="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Glaze/PRAJWAL_S_VIEW_2_edVKBFPCe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645101380431"
        abouth1="ABOUT GLAZE"
        aboutp="Glaze is a classically designed lacquered wardrobe which dissolves beautifully within your walls. The style remains consistent throughout to ensure a continuity of style within the entire master bedroom, opening to an impressive storage capability."
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
        proofHead="Why you’ll love Glaze"
      />
    </>
  );
};
