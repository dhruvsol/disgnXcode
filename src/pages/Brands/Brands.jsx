import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import "./Brands.scss";
import { Link } from "react-router-dom";
export const Brands = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <div>
          <Navbar1 />
          <HeroSection heading="Brands" />
        </div>
        <div className="brands">
          <h1>WE DON'T MAKE HOUSES</h1>
          <h1>WE MAKE HOMES</h1>
          <Link to="/aboutus">
            <div className="brands-bar">
              <div className="line1"></div>
              <h2>OUR STORY</h2>
              <div className="line1"></div>
            </div>
          </Link>
        </div>
        <div className="flex pt-20 justify-center items-center  ">
          <img
            className="w-1/2 h-2/3 hover:-scale-150 object-cover"
            src="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/PROFILO_SCROLL-2_VfLH2b6GL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907396614"
            alt="..."
          />
          <img
            className="w-1/2 h-2/3 hover:-scale-150 object-cover"
            src="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/1._ANDREA_-_MAIN_WARDROBE_2moYSu6Zv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907398631"
            alt="..."
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
