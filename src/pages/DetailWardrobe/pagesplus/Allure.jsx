import React from "react";
import { DetailWardrobe } from "../DetailWardrobe";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
export const Allure = () => {
  return (
    <>
      <div className="allure">
        <Navbar1 />
        <HeroSection heading="ALLURE" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/allure/GBR_1_V95rAdD9l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645100628236"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/allure/BEDROOM_3_6dd1kwnwV.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1645100627769"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/allure/VIEW-01_Y9vDnsXIssVu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645100626958"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/allure/BEDROOM_2_VIEW_1_2idHRsYCJV8G.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1645100628205"
        abouth1="ABOUT ALLURE"
        aboutp="A marvelous addition to your well selected bedroom furniture, ALLURE wardrobe is crafted beautifully designed with your space needs in mind. Luxurious mirrored sliding doors makes a statement of its own."
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="ANTI CARCINOGENIC"
        proofHead="Why you’ll love Andrea"
      />
    </>
  );
};
