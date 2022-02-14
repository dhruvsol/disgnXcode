import React, { useRef, useEffect } from "react";
import "./HeroSection.scss";
import gsap from "gsap";
export const HeroSection = ({ heading, subheading }) => {
  const h1Ref = useRef();
  const h3Ref = useRef();
  useEffect(() => {
    gsap.from(h1Ref.current, {
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
      y: "200%",
    });
    gsap.from(h3Ref.current, {
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
      y: "200%",
    });
  }, []);
  return (
    <div className="herosection">
      <div className="herosection-heading ">
        <h1>
          <span ref={h1Ref}>{heading}</span>
        </h1>
        <h3>
          <span ref={h3Ref}>{subheading}</span>
        </h3>
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
