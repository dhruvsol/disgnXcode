import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { Card1 } from "../../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../../components/SpecialCard/Card2/Card2";
import { SliderSlide } from "../../../components/Slider/Slider";
import "../../BedroomInterwood/BedroomWardrobe.scss";
import { Link } from "react-router-dom";
export const WardrobeInterwoodplus = () => {
  return (
    <>
      <div className="bg-[#171717] overflow-hidden">
        <div className="wardrobe-m">
          <Navbar1 />
          <HeroSection heading="WARDROBES" />
        </div>
        <div>
          <div className="interwood-about">
            <Link to="/bedroom/wardrobe/interwood" className="about-name1 ">
              <div className="about-line"></div>
              <h1 className="text2">INTERWOOD</h1>
              <div className="about-line"></div>
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus" className="about-name1">
              <div className="about-line"></div>
              <h1 className="text1">INTERWOOD PLUS</h1>
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
            url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Copy_of_MBR_VIEW_1_eY7qESjf_8mP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087310944"
            url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/MBR_VIEW_1_GXx8wvqTx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645086652579"
            url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Copy_of_VIEW_-_3_F.F_BR2_O0syiNBcE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087310512"
          />
        </div>
        <div className="wardrobe-card overflow-hidden">
          <div>
            <Link to="/bedroom/wardrobe/interwoodplus/allure">
              <Card1
                name="ALLURE"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/ALURE_VIEW_-_NEW_GNidqpW_K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645086654583"
              />
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus/ralph8000">
              <Card2
                name="RALPH 8000"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_8000_f_Fha69Z6yBvBo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087158095"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/interwoodplus/ralph1500">
              <Card1
                name="RALPH 1500"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/S_1500_q2tgwOeos.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087158105"
              />
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus/ralph22">
              <Card2
                name="RALPH 22"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_22_fEjXMmOzy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645087310794"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/interwoodplus/ralph22">
              <Card1
                name="RALPH 29"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_29_M9IrQWNHW0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645087311301"
              />
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus/ralphuno">
              <Card2
                name="RALPH UNO"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_UNO_1_0z0tYJ0hD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645086651415"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/interwoodplus/glaze">
              <Card1
                name="GLAZE"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/GLAZE_WR_ED_KK5RYs4RMmW9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645086653545"
              />
            </Link>
            <Link to="/bedroom/wardrobe/interwoodplus/lack7">
              <Card2
                name="LACK 7"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/LACK7_rDshPRCDL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645086651610"
              />
            </Link>
          </div>
          <div>
            <Link to="/bedroom/wardrobe/interwoodplus/struct">
              <Card1
                name="STRUCT"
                url="https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/STRUCT_WARDROBE1_2QDjz7v5d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087158313"
              />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
