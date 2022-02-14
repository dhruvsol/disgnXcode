import React, { useState } from "react";
import "./menu.scss";
export const Menu = () => {
  // const [page,setPage]=useState ('');
  // const [kitchen,setKitchen]=useState ('');
  // const [bedroom,setBedroom]=useState ('');
  // const [brand,setBrand]=useState ('');
  const [imgsrc, setImgsrc] = useState("/img/blog2.png");
  const pages = () => {
    setImgsrc("");
  };
  const unset = () => {
    setImgsrc("/img/blog2.png");
  };
  return (
    <>
      <div className="menu-main bg-[#171717]">
        <div className="menu">
          <div
            onMouseEnter={pages}
            onMouseLeave={unset}
            className="menu-pages menu-inner"
          >
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
            {/* <a href="/bedroom/interwood">Interwood</a> */}
            <a href="/bedroom/wardrobe">wardrobs</a>
            {/* <a href="/bedroom/interwoodplus">Interwood Plus</a> */}
            <a href="/bedroom/tvunits">TV Units</a>
            <a href="/bedroom/vanties">Vanties</a>
          </div>
          <div className="menu-brands menu-inner">
            <h2>Brands</h2>
            <a href="/brands">Interwood</a>
            <a href="/brands">Interwood Plus</a>
          </div>
          <div className="menu-image menu-inner">
            <img src={imgsrc} alt="...." />
          </div>
        </div>
      </div>
    </>
  );
};
