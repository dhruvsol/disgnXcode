import React from "react";
import "./Signature.scss";
export const Signature = ({ heading, description, signature }) => {
  return (
    <>
      <div className="signature">
        <h1>{heading}</h1>
        <div className="signature-image">
          <div className="flex">
            <img src="/img/chairman.png" alt="chairman" />
            <h2 className="signature-hide">{signature}</h2>
          </div>

          <div className="signataure-h2">
            <h2 className="signature-sign">{signature}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
