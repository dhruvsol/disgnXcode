import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Signature } from "../../components/Signature/Signature";
export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Signature
        heading="CHAIRMAN'S MESSAGE"
        description="With nearly three decades of spatial design expertise, Interwood has passionately curated choicest home interior solutions to enhance your lifestyles, partnered with European component manufacturers to give you international quality products and expand your realm of eminent choices."
        signature="Signature"
      />
      <Footer />
    </>
  );
};
