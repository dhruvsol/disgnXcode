import React, { useState } from "react";
import "./menu.scss";
export const Menu = () => {
  const [imgsrc, setImgsrc] = useState(
    "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/erika/ER.1_crop_2_-svfS-Cr8e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644835425050"
  );
  const pages = () => {
    setImgsrc(
      "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/andrea/AD.1_crop_3_VRbvtQhzM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836113559"
    );
  };
  const kitchen = () => {
    setImgsrc(
      "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/erika/ER.1_crop_4_yL-S1HUI36.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644835424814"
    );
  };
  const bedroom = () => {
    setImgsrc(
      "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Alexia/AL.1_crop_1_9nzMFCiXL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834965179"
    );
  };
  const brands = () => {
    setImgsrc(
      "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MO._4_crop_3_ZOtElyd33.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836332108"
    );
  };
  const unset = () => {
    setImgsrc(
      "https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/erika/ER.1_crop_2_-svfS-Cr8e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644835425050"
    );
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
          <div
            onMouseEnter={kitchen}
            onMouseLeave={unset}
            className="menu-kitchens menu-inner"
          >
            <h2>Kitchens</h2>
            <a href="/kitchen/interwood">Interwood</a>
            <a href="/kitchen/interwoodplus">Interwood Plus</a>
          </div>
          <div
            onMouseEnter={bedroom}
            onMouseLeave={unset}
            className="menu-bedroom menu-inner"
          >
            <h2>Bedroom</h2>
            <a href="/bedroom/wardrobe/interwood">Interwood</a>
            <a href="/bedroom/wardrobe">wardrobs</a>
            <a href="/bedroom/wardrobe/interwoodplus">Interwood Plus</a>
            <a href="/bedroom/tvunits">TV Units</a>
            <a href="/bedroom/vanties">Vanties</a>
          </div>
          <div
            onMouseEnter={brands}
            onMouseLeave={unset}
            className="menu-brands menu-inner"
          >
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
