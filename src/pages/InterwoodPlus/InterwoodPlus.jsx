import React from "react";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Link } from "react-router-dom";
import { Card1 } from "../../components/SpecialCard/Card1/Card1";
import { Card2 } from "../../components/SpecialCard/Card2/Card2";
import "./InterwoodPlus.scss";
export const InterwoodPlus = ({
  amaze,
  amaze2,
  bliss,
  struct,
  glaze,
  lack7,
  form5,
  naturale,
}) => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection heading="KITCHEN" />
        <div className="interwood-about">
          <div className="about-name1 ">
            <div className="about-line"></div>
            <h1 className="text3">INTERWOOD</h1>
            <div className="about-line"></div>
          </div>
          <div className="about-name1">
            <div className="about-line"></div>
            <h1 className="text4">INTERWOOD PLUS</h1>
            <div className="about-line"></div>
          </div>
        </div>
        <div className="interwood-about-card">
          <div className="about-content">
            <h1>ABOUT INTERWOOD PLUS</h1>
            <p>
              Since 1989, Interwood has inspired fragments of your life stories
              with the finest kitchens, wardrobes, bedroom sets and living &
              dining systems, backed by state-of-the-art German technology, that
              have carried with them our promise of quality, creativity &
              innovation.
            </p>
          </div>
          <div className="about-card"></div>
        </div>
        <img src="/img/home.svg" alt="..." />
        <div className="interwood">
          <div className="interwood-card">
            <div>
              <Link to="/kitchen/interwoodplus/amaze">
                <Card1 name="AMAZE" url={amaze} />
              </Link>
            </div>
            <div>
              <Link to="/kitchen/interwoodplus/amaze2">
                <Card2 name="AMAZE 2.0" url={amaze2} />
              </Link>
            </div>
          </div>
          <div className="interwood-card">
            <div>
              <Link to="/kitchen/interwoodplus/bliss">
                <Card1 name="BLISS" url={bliss} />
              </Link>
            </div>
            <div>
              <Link to="/kitchen/interwoodplus/struct">
                <Card2 name="STRUCT" url={struct} />
              </Link>
            </div>
          </div>
          <div className="interwood-card">
            <div>
              <Link to="/kitchen/interwoodplus/glaze">
                <Card1 name="GLAZE" url={glaze} />
              </Link>
            </div>
            <div>
              <Link to="/kitchen/interwoodplus/lack7">
                <Card2 name="LACK 7" url={lack7} />
              </Link>
            </div>
          </div>
          <div className="interwood-card">
            <div>
              <Link to="/kitchen/interwoodplus/form5">
                <Card1 name="FORM 5" url={form5} />
              </Link>
            </div>
            <div>
              <Link to="/kitchen/interwoodplus/naturale">
                <Card2 name="NATURALE" url={naturale} />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
