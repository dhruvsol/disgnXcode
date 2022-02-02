import React from "react";
import "./Signature.scss";
export const Signature = ({ heading, description, signature }) => {
  return (
    <>
      <div className="signature">
        <h1>{heading}</h1>
        <div className="signature-image">
          <img src="/img/chairman.png" alt="chairman" />
          <p>{description}</p>
        </div>
        <h2 className="signature-sign">{signature}</h2>
      </div>
    </>
  );
};
