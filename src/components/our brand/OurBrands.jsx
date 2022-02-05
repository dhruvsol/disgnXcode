import React from "react";
import "./OurBrand.scss";
export const OurBrands = () => {
  return (
    <>
      <div className="ourbrand">
        <div className="ourbrand-title">
          <span>OUR BRANDS</span>
        </div>
        <div className="ourbrand-images">
          <div className="ourbrand-grid">
            <div className="brand1">
              <img src="/img/ourbrands/ourbrand1.png" alt=".." />
            </div>
            <div className="brand2">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand3">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand4">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
            <div className="brand5">
              <img src="/img/ourbrands/ourbrand2.png" alt=".." />
            </div>
          </div>
          <div>
            <img src="/img/ourbrands/ourbrandarrow.svg" alt="..." />
          </div>
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
