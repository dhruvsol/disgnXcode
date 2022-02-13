import React from "react";
import "./HeroSection.scss";
export const HeroSection = ({ heading, subheading }) => {
  return (
    <div className="herosection">
      <div className="herosection-heading">
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
      </div>
      <div className="herosection-arrow">
        <img
          src="https://ik.imagekit.io/grfidbs4suq/icons/Vector_9OZVBfgtg2C.png"
          alt="arrow"
        />
        <span>SCROLL</span>
      </div>
    </div>
  );
};
