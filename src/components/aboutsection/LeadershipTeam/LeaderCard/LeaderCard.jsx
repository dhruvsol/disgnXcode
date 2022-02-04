import React from "react";
import "./LeaderCard.scss";
export const LeaderCard = ({ img, name, position }) => {
  return (
    <>
      <div className="leadercard">
        <img src={img} alt={name} />
        <div className="leader-details">
          <h2>{name}</h2>
          <p>{position}</p>
        </div>
      </div>
    </>
  );
};
