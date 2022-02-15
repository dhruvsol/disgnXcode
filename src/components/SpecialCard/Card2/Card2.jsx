import React from "react";
import "./Card2.scss";
export const Card2 = ({ name, url }) => {
  return (
    <>
      <div
        data-aos="flip-right"
        // data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="card2"
      >
        <h3>{name}</h3>
        <div className="dottedline"></div>
        <div className="card2-name"></div>
        <div className="card2-image">
          <img src={url} alt={name} />
        </div>
      </div>
    </>
  );
};
