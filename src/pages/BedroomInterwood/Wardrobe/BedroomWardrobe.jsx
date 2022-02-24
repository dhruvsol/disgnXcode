import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { Card1 } from "../../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../../components/SpecialCard/Card2/Card2";
import { SliderSlide } from "../../../components/Slider/Slider";
import "../BedroomWardrobe.scss";
import { Link } from "react-router-dom";
export const BedroomWardrobe = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <div className="wardrobe-nav">
          <Navbar1 />
          <HeroSection heading="WARDROBES" />
        </div>
        <div>
          <div className="interwood-about">
            <Link to="/bedroom/wardrobe/interwood" className="about-name1 ">
              <div className="about-line"></div>
              <h1 className="text1">INTERWOOD</h1>
              <div className="about-line"></div>
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus" className="about-name1">
              <div className="about-line"></div>
              <h1 className="text2">INTERWOOD PLUS</h1>
              <div className="about-line"></div>
            </Link>
          </div>
          <div data-aos="fade-up" className="wardrobe-about">
            <h1>WARDROBE DESIGN IDEAS FOR YOUR BEDROOM</h1>
            <p>
              Interwood values your private space and applies its best design to
              your bedroom. Spacious wardrobes and coordinated bedroom sets will
              suit your style, and a wide range of colour options are available
              to harmonise with your interiors. Ample space is provided for your
              apparels and accessories. We, at Interwood, make sure your room
              looks glamorous with our range of stylish wardrobes.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in">
          <SliderSlide
            url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/1._ANDREA_-_MAIN_WARDROBE_2moYSu6Zv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907398631"
            url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALEXIA_SCROLL-1_oU-hwIc8k2Jt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907397864"
            url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/PROFILO_SCROLL-2_VfLH2b6GL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907396614"
          />
        </div>
        <div className="wardrobe-card overflow-hidden">
          <div>
            <Link to="/bedroom/wardrobe/andrea">
              <Card1
                name="ANDREA"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/1._ANDREA_-_MAIN_WARDROBE_2moYSu6Zv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907398631"
              />
            </Link>
            <Link to="/bedroom/wardrobe/montana">
              <Card2
                name="MONTANA"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/MONTANA_SCROLL-1_dPSYV2pjXV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907406028"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/cecilia">
              <Card1
                name="CECILIA"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/CECILIA_SCROLL-1_-wLd3f0l0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907398456"
              />
            </Link>
            <Link to="/bedroom/wardrobe/alexia">
              <Card2
                name="ALEXIA"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/ALEXIA_SCROLL-1_oU-hwIc8k2Jt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907397864"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/profilosliding">
              <Card1
                name="Profilo Sliding Wardrobe"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/PROFILO_SCROLL-2_VfLH2b6GL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907396614"
              />
            </Link>
            <Link to="/bedroom/wardrobe/sublimesliding">
              <Card2
                name="SUBLIME SLIDING WARDROBE"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/SUBLIME_SCROLL-1_i9hkE_Dg5C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907403368"
              />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
