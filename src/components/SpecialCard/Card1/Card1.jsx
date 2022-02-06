import React from "react";
import "./Card1.scss";
export const Card1 = ({ url, name }) => {
  return (
    <>
      <div className="card1">
        <div className="card1-image">
          <img src={url} alt={name} />
        </div>
        <div className="dottedline"></div>
        <div className="card1-name">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};
