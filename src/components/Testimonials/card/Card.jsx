import React from "react";
import "./Card.scss";
export const Card = ({ Name, description }) => {
  return (
    <>
      <div className="testimonial-card">
        <h2>{Name}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};
