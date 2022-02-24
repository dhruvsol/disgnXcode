import React from "react";
import { DetailWardrobe } from "../DetailWardrobe";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
export const Struct = () => {
  return (
    <>
      <div className="structpp">
        <Navbar1 />
        <HeroSection heading="STRUCT" />
      </div>
      <div>
        <DetailWardrobe
          abouth1="About Struct"
          aboutp="Struct offers a neat design using quality materials and plain veneers. Fitted elegantly in your bedroom, it is built with maximum space utilisation within. "
          url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/struct/CBR_2_2Q2hULzGg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645688366782"
          url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/struct/STRUCT_WARDROBE1__1__PE5OXbL6X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645688365886"
          url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/struct/Bedroom-2_467gVCQV8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645688367177"
          formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/struct/br-1_Jz8596iDKQBn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645688367108"
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="ANTI CARCINOGENIC"
          proofHead="Why you’ll love Struct"
        />
      </div>
    </>
  );
};
