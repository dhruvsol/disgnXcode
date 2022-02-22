import React, { useState } from "react";
import { ValueCard } from "./ValueCard";
export const ValueGallery = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  const arr = [
    {
      id: 1,
      img: "",
    },
    {
      id: 2,
      img: "",
    },
  ];
  return (
    <>
      <div className="flex justify-between px-4">
        <div onClick={() => handleChange()}>
          <div className="border-t-2 border-b-2 px-3 border-[#C5372F]">
            <h1 className="text-white">Kitchen</h1>
          </div>
        </div>
        <div onClick={() => handleChange()}>
          <div className="border-t-2 px-3 border-b-2 border-[#C5372F]">
            <h1 className="text-white">Wardrobe</h1>
          </div>
        </div>
      </div>
      {change && (
        <div className="flex justify-center  ">
          {arr.map(() => {
            return <ValueCard />;
          })}
        </div>
      )}
      {!change && (
        <div>
          <h1>Bedroom</h1>
        </div>
      )}
    </>
  );
};
