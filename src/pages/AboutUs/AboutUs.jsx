import React, { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Signature } from "../../components/Signature/Signature";
import { AboutHero } from "../../components/aboutsection/aboutHero/AboutHero";
import "./AboutUs.scss";
import { Partner } from "../../components/aboutsection/PartnerWithUs/Partner";

import { Leadership } from "../../components/aboutsection/LeadershipTeam/Leadership";
import gsap from "gsap";
export const AboutUs = () => {
  const [preloader, setPreloader] = useState(true);
  const [page, setPage] = useState(false);
  const preRef = useRef(null);
  const handlePreloader = () => {
    let el = preRef.current;
    setTimeout(() => {
      setPreloader(false);
      setPage(true);
    }, 2200);
    setTimeout(() => {
      gsap.to(el, {
        duration: 2,
        opacity: 0,
        y: "-200%",
        ease: "power",
      });
    }, 1800);
  };
  useEffect(() => {
    handlePreloader();
  }, []);
  return (
    <>
      {preloader && (
        <div ref={preRef} className="bg-[#151715] h-screen flex justify-center">
          <video autoPlay muted>
            <source src="/img/preloader1.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {page && (
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
          <Partner />
          <Footer />
        </div>
      )}
    </>
  );
};
