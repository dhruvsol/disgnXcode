import React from "react";
import { DetailPage } from "./Details/DetailPage";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import "./style.scss";
const Cecilia = () => {
  return (
    <>
      <div className="cecilia">
        <Navbar1 />
        <HeroSection heading="Alexia" />
      </div>
      <DetailPage
        url1="/img/Gallery/Rectangle 6.png"
        url2="/img/Gallery/Rectangle 6.png"
        url3="/img/Gallery/Rectangle 6.png"
        url4="/img/Gallery/Rectangle 6.png"
        url5="/img/Gallery/Rectangle 6.png"
        url6="/img/Gallery/Rectangle 6.png"
        proofHead="Why you’ll love Andrea"
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="CARCINOGENIC"
        main1="/img/home.svg"
        main2="/img/home.svg"
        formimg="/img/enqireform/Rectangle 11.png"
      />
    </>
  );
};

export default Cecilia;
