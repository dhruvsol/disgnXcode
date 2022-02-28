import React from "react";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { DetailWardrobe } from "../DetailWardrobe/DetailWardrobe";
import { Link } from "react-router-dom";
import "../DetailPage/Details/Details.scss";
export const Tvunits = () => {
  return (
    <div className="bg-[#171717]">
      <div className="tvunits">
        <Navbar1 />
        <HeroSection heading="TV UNITS" />
      </div>
      <div className="bedroom-about pb-20 ">
        <Link to="/bedroom/wardrobe" className="about-name1 ">
          <div className="about-line"></div>
          <h1 className="text2">WARDROBE</h1>
          <div className="about-line"></div>
        </Link>
        <Link to="/bedroom/tvunits" className="about-name1">
          <div className="about-line"></div>
          <h1 className="text1">TV UNITS</h1>
          <div className="about-line"></div>
        </Link>
        <Link to="/bedroom/vanities" className="about-name1">
          <div className="about-line"></div>
          <h1 className="text2">VANITIES</h1>
          <div className="about-line"></div>
        </Link>
      </div>

      <DetailWardrobe
        abouth1="TV  UNITS"
        aboutp="A well-crafted TV unit is an elegant piece of furniture on its own. A focal point of the living room furniture , the TV cabinet enhances the viewing experience. Our multifunctional TV cabinets are good for storage, display and utilize spaces better."
        url1="https://ik.imagekit.io/grfidbs4suq/tv_units/LIVING_AREA_-_T.V_UNIT_3_nHHYwx-Ex3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645260172134"
        url2="https://ik.imagekit.io/grfidbs4suq/tv_units/FAMILY_AREA_dp_x_RkUw4eEV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645260172954"
        url3="https://ik.imagekit.io/grfidbs4suq/tv_units/LIVING_AREA_RalN8UgXrifK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645260172220"
        formimg="https://ik.imagekit.io/grfidbs4suq/tv_units/T.V_UNIT_Av1WJZsva.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645260171777"
      />
      <Footer />
    </div>
  );
};
