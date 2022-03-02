import React from "react";

import "./Blog.scss";
import Slider from "react-slick";
export const Blog = () => {
  return (
    <>
      <div className="blogs">
        <div className="blog-heading">
          <h1>BLOGS</h1>
        </div>
        <div className="blogs-grid">
          <div className="blog1">
            <img
              className="object-cover rounded-md"
              src="https://ik.imagekit.io/grfidbs4suq/Blogs/VIEW_1__2__ONUNgmszLBce.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646203115768"
              alt="blog1"
            />
          </div>
          <div className="blog2">
            <img
              className="object-cover rounded-md"
              src="https://ik.imagekit.io/grfidbs4suq/Blogs/Copy_of_LIVE_KITCHEN_View_1_pNMjkfK8R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646203115462"
              alt="blog2"
            />
          </div>
          <div className="blog3">
            <img
              className="object-cover rounded-md"
              src="https://ik.imagekit.io/grfidbs4suq/Blogs/Copy_of_LIVE_KITCHEN_View_4_mnyuhJs8v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646203115010"
              alt="blog3"
            />
          </div>
          <div className="blog4">
            <img
              className="object-cover rounded-md"
              src="https://ik.imagekit.io/grfidbs4suq/Blogs/PRAJWAL_S_VIEW_3__1__GKsf4X6EZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646203114523"
              alt="blog4"
            />
          </div>
          <div className="blog5">
            <img
              className="object-cover rounded-md"
              src="https://ik.imagekit.io/grfidbs4suq/Blogs/PRAJWAL_S_VIEW_2__1__64q0K4_td.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646203114795"
              alt="blog5"
            />
          </div>
        </div>
      </div>
      <div className="moblie-blogs">
        <Slider></Slider>
      </div>
    </>
  );
};
