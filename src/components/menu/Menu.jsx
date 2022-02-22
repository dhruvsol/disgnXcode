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
      <div className="menu-main   bg-[#171717]">
        <div className="menu ">
          <div
            onMouseEnter={pages}
            onMouseLeave={unset}
            className="menu-pages menu-inner"
          >
            <h2>Pages</h2>
            <a className="ward1" href="/aboutus">
              About us
            </a>
            <a className="ward1" href="/blogs">
              Blogs
            </a>
            <a className="ward1" href="/partnerwithus">
              Partner With Us
            </a>
          </div>
          <div
            onMouseEnter={kitchen}
            onMouseLeave={unset}
            className="menu-kitchens menu-inner"
          >
            <h2>Kitchens</h2>
            <a className="ward1" href="/kitchen/interwood">
              Interwood
            </a>
            <a className="ward1" href="/kitchen/interwoodplus">
              Interwood Plus
            </a>
          </div>
          <div
            onMouseEnter={bedroom}
            onMouseLeave={unset}
            className="menu-bedroom menu-inner"
          >
            <h2>Bedroom</h2>
            <a className="ward1" href="/bedroom/wardrobe">
              wardrobs
            </a>
            <a className="text-sm py-2 te" href="/bedroom/wardrobe/interwood">
              Interwood
            </a>
            <a
              className="text-sm pb-2 te"
              href="/bedroom/wardrobe/interwoodplus"
            >
              Interwood Plus
            </a>
            <a className="ward1" href="/bedroom/tvunits">
              TV Units
            </a>
            <a className="ward1" href="/bedroom/vanities">
              Vanities
            </a>
          </div>
          <div
            onMouseEnter={brands}
            onMouseLeave={unset}
            className="menu-brands menu-inner"
          >
            <h2>Brands</h2>
            <a className="ward1" href="/brands">
              Interwood
            </a>
            <a className="ward1" href="/brands">
              Interwood Plus
            </a>
          </div>
        </div>
        <img
          className=" w-[27rem] h-[27rem] object-cover"
          src={imgsrc}
          alt="...."
        />
      </div>
    </>
  );
};
