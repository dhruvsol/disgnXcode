import React from "react";
import "./Signature.scss";

export const Signature = ({ heading, description, signature, img }) => {
  // let bodymovinOptions = {
  //   loop: true,
  //   autoplay: true,
  //   renderer: "svg",
  //   prerender: true,
  //   path: animation,
  // };
  return (
    <>
      <div className="signature">
        <h1>{heading}</h1>
        <div className="signature-image">
          <div className="flex justify-center flex-col items-center">
            <img src={img} alt="chairman" />
            <h2 className="signature-hide">{signature} </h2>
          </div>

          <div className="signataure-h2">
            {/* <div className="signature-sign"> */}
            {/* <h2 className="signature-sign">{signature}</h2> */}
            {/* </div> */}
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
