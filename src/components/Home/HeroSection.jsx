import React from "react";
import "./HeroSection.scss";
export const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection-heading">
        <h1>ECHOING CLASS</h1>
        <h3>CLASSY AND PERFECT KITCHEN</h3>
      </div>
      <div className="herosection-arrow">
        <img src="/img/Vector.png" alt="arrow" />
        <span>SCROLL</span>
      </div>
    </div>
  );
};
