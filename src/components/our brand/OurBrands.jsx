import React from "react";
import "./OurBrand.scss";
export const OurBrands = () => {
  return (
    <>
      <div className="ourbrand">
        <div className="ourbrand-title">
          <h1>OUR BRANDS</h1>
        </div>
        <div className="ourbrand-images">
          <div className="ourbrand-grid">
            <div className="brand1 brand">
              <img src="/img/ourbrands/ourbrand1.png" alt=".." />
            </div>
            <div className="brand2 brand">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand3 brand">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand4 brand">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand5 brand">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
          </div>

          <img
            className="ourband-arrow"
            src="/img/ourbrands/ourbrandarrow.svg"
            alt="..."
          />
        </div>
        <div className="brandyoutube">
          <iframe
            src="https://www.youtube.com/embed/YMopu-z7T54"
            title="YouTube video player"
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};
