import React from "react";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar1 } from "../../components/Navbar/Navbar";
import "./ValuePartner.scss";
export const ValuePartner = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <HeroSection />
        <div className="valuepartner">
          <div className="valuepartner-content">
            <h1>VALUE ADDED PARTNERSHIP MODEL</h1>
            <p>
              The Interwood’s Value addedpartnership [V.A.P.]is an alliance
              thatInterwood initiates with its select tradepartners on the basis
              of shared ideals Through this partnership, Interwood offers
              itspartner a system for mutual growth. This isdone by inducting
              the partner’s business intoits own community of more than
              10,000customers served over its last thirty years inexistence. In
              return the partner attainsintegrated access to Interwood’s
              innovativeproduct and service portfolio enabling them tointegrate
              the stack into their business asstrong and impactful
              differentiators.
            </p>
          </div>
          <div className="valuepartner-heading">
            <h1>HOW THIS WORKS?</h1>
            <p>
              The measure of value is brought forth by the following I.W [A]
              accelerators
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
