import React from "react";
import "./menu.scss";
export const Menu = () => {
  return (
    <>
      <div className="menu-main">
        <div className="menu">
          <div className="menu-pages menu-inner">
            <h2>Pages</h2>
            <a href="/aboutus">About us</a>
            <a href="/blogs">Blogs</a>
            <a href="/partnerwithus">Partner With Us</a>
          </div>
          <div className="menu-kitchens menu-inner">
            <h2>Kitchens</h2>
            <a href="/kitchen/interwood">Interwood</a>
            <a href="/kitchen/interwoodplus">Interwood Plus</a>
          </div>
          <div className="menu-bedroom menu-inner">
            <h2>Bedroom</h2>
            <a href="/bedroom/interwood">Interwood</a>
            <a href="/bedroom/wardrobe">wardrobs</a>
            <a href="/bedroom/interwoodplus">Interwood Plus</a>
            <a href="/bedroom/tvunits">TV Units</a>
            <a href="/bedroom/Variables">Variables</a>
          </div>
          <div className="menu-brands menu-inner">
            <h2>Brands</h2>
            <a href="/interwood">Interwood</a>
            <a href="/interwoodplus">Interwood Plus</a>
          </div>
          <div className="menu-image menu-inner">
            image
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};
