import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Card2 } from "../../components/SpecialCard/Card2/Card2";
import { Card1 } from "../../components/SpecialCard/Card1/Card1";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import "./Interwood1.scss";
export const Interwood1 = ({ url1, url2, url3, url4, url5, main }) => {
  return (
    <>
      <div className="kitinterwood">
        <Navbar1 />
        <HeroSection heading="KITCHEN" subheading="" />
      </div>
      <div className="interwood-about">
        <Link to="/kitchen/interwood" className="about-name1 ">
          <div className="about-line"></div>
          <h1 className="text1">INTERWOOD</h1>
          <div className="about-line"></div>
        </Link>
        <Link to="/kitchen/interwoodplus" className="about-name1 ">
          <div className="about-line"></div>
          <h1 className="text2">INTERWOOD PLUS</h1>
          <div className="about-line"></div>
        </Link>
      </div>
      <div className="interwood-about-card">
        <div
          data-aos="fade-up-right"
          data-aos-anchor=".about-name1"
          data-aos-duration="2500"
          className="about-content"
        >
          <h1>ABOUT INTERWOOD</h1>
          <p>
            Since 1989, Interwood has inspired fragments of your life stories
            with the finest kitchens, wardrobes, bedroom sets and living &
            dining systems, backed by state-of-the-art German technology, that
            have carried with them our promise of quality, creativity &
            innovation.
          </p>
        </div>

        <img
          data-aos="fade-up-left"
          data-aos-anchor=".about-name1"
          data-aos-duration="2500"
          className="about-card"
          src="https://ik.imagekit.io/grfidbs4suq/abo/VIEW_1_C9qAc7TPy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645678653697"
          alt=".."
        />
      </div>
      <div className="interwood-image">
        {/* <img src="/img/interwood/interwood1.svg" alt="...." /> */}
        <img src={main} alt="..." />
      </div>
      <div className="interwood overflow-hidden">
        <div className="interwood-card">
          <div>
            <Link to="/kitchen/interwood/andrea">
              <Card1 name="ANDREA" url={url1} />
            </Link>
          </div>
          <div>
            <Link to="/kitchen/interwood/erika">
              <Card2 name="ERIKA" url={url2} />
            </Link>
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Link to="/kitchen/interwood/cecilia">
              <Card1 name="CECILIA" url={url3} />
            </Link>
          </div>
          <div>
            <Link to="/kitchen/interwood/alexia">
              <Card2 name="ALEXIA" url={url4} />
            </Link>
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Link to="/kitchen/interwood/montana">
              <Card1 name="MONTANA" url={url5} />
            </Link>
          </div>
          {/* <div>
            <Card2 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};
