import React from "react";
import "./Blog.scss";
export const Blog = () => {
  return (
    <>
      <div className="blogs">
        <div className="blog-heading">
          <h1>BLOGS</h1>
        </div>
        <div className="blogs-grid">
          <div className="blog1">
            <img src="/img/blog1.png" alt="blog1" />
          </div>
          <div className="blog2">
            <img src="/img/blog2.png" alt="blog2" />
          </div>
          <div className="blog3">
            <img src="/img/blog3.png" alt="blog3" />
          </div>
          <div className="blog4">
            <img src="/img/blog4.png" alt="blog4" />
          </div>
          <div className="blog5">
            <img src="/img/blog5.png" alt="blog5" />
          </div>
        </div>
      </div>
    </>
  );
};
