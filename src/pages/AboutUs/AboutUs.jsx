import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Signature } from "../../components/Signature/Signature";
import { AboutHero } from "../../components/aboutsection/aboutHero/AboutHero";
import "./AboutUs.scss";
import { Partner } from "../../components/aboutsection/PartnerWithUs/Partner";

import { Leadership } from "../../components/aboutsection/LeadershipTeam/Leadership";
import { Certi } from "../../components/Certificate/Certi";

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <div>
          <Navbar1 />
          <AboutHero />
        </div>
        <Signature
          img="https://ik.imagekit.io/grfidbs4suq/founder/Screenshot_2022-01-31_at_5.53_1_JRkpwUCJu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645709622166"
          heading="CHAIRMAN'S MESSAGE"
          description="With nearly three decades of spatial design expertise, Interwood has passionately curated choicest home interior solutions to enhance your lifestyles, partnered with European component manufacturers to give you international quality products and expand your realm of eminent choices."
          signature="Hardeep Sawhey"
        />
        <Leadership />
        <Certi />
        <Partner />
        <Footer />
      </div>
    </>
  );
};
