import React from "react";
import { HeroSection } from "../../../components/Home/HeroSection";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { DetailWardrobe } from "../DetailWardrobe";

export const Ralph8000 = () => {
  return (
    <>
      <div className="ralph8000">
        <Navbar1 />
        <HeroSection heading="RALPH 8000" />
      </div>
      <div>
        <DetailWardrobe
          abouth1="About Ralph 8000"
          aboutp="A rich design imposing class, RALPH 8000 is characterised by distinctively smooth surface design with mirrored and lacquered panels. Well planned storage design and looks complement your beautiful bedroom."
          url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r_8000/RALPH_8000_gG3S5vEn4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645689296628"
          url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r_8000/S_8000__1__9DwIoRCLi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689297270"
          url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r_8000/S8000_FHdO_-XaVKEK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689297431"
          formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/r_8000/RALPH_8000_f__1__0lRe7IZ9tR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645689298066"
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="ANTI CARCINOGENIC"
          proofHead="Why you’ll love Ralph 8000"
        />
      </div>
    </>
  );
};
