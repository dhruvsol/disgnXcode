import React from "react";
import "./OurBrand.scss";
export const OurBrands = () => {
  return (
    <>
      <div className="ourbrand">
        <div className="py-20">
          <h1 className="text-3xl text-white flex justify-center font-Ivy lg:text-6xl lg:justify-start md:text-5xl ">
            Our Brands
          </h1>
          <div className="flex pt-20 justify-center items-center  ">
            <img
              className="w-1/2 h-2/3 hover:-scale-150 object-cover"
              src="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/PROFILO_SCROLL-2_VfLH2b6GL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907396614"
              alt="..."
            />
            <img
              className="w-1/2 h-2/3 hover:-scale-150 object-cover"
              src="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/1._ANDREA_-_MAIN_WARDROBE_2moYSu6Zv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644907398631"
              alt="..."
            />
          </div>
        </div>
        <div className="brandyoutube">
          <iframe
            src="https://www.youtube.com/embed/YMopu-z7T54"
            title="YouTube video player"
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};
