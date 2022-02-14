import React, { useRef, useEffect } from "react";
import "./Signature.scss";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export const Signature = ({ heading, description, signature }) => {
  const signRef = useRef(null);
  useEffect(() => {
    let el = signRef.current;
    gsap.to(
      el,
      {
        duration: 4,
        delay: 2,
        text: "Signature",
        scrollTrigger: {
          trigger: el,
        },
      },
      []
    );
  });
  return (
    <>
      <div className="signature">
        <h1>{heading}</h1>
        <div className="signature-image">
          <div className="flex">
            <img src="/img/chairman.png" alt="chairman" />
            <h2 className="signature-hide"> </h2>
          </div>

          <div className="signataure-h2">
            <h2 ref={signRef} className="signature-sign">
              {" "}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
