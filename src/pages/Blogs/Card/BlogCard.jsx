import React from "react";
import "./BlogCard.scss";
export const BlogCard = ({ heading, des, url }) => {
  return (
    <>
      <div className="blogcard">
        <img src={url} alt="blogs" />
        <h1>{heading}</h1>
        <p>{des}</p>
      </div>
    </>
  );
};
