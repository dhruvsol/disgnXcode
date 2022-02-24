import React, { useState } from "react";
import { ValueCard } from "./ValueCard";
export const ValueGallery = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  const arr1 = [
    {
      id: 1,
      img: "",
    },
    {
      id: 2,
      img: "",
    },
    {
      id: 3,
      img: "",
    },
    {
      id: 4,
      img: "",
    },
  ];
  const arr2 = [
    {
      id: 1,
      img: "",
    },
    {
      id: 2,
      img: "",
    },
    {
      id: 3,
      img: "",
    },
    {
      id: 4,
      img: "",
    },
  ];
  return (
    <>
      <div className="flex justify-evenly ">
        <div onClick={() => handleChange()}>
          <div className="border-t-2 border-b-2 px-3 border-[#C5372F] md:">
            <h1 className="text-white md:text-4xl">Kitchen</h1>
          </div>
        </div>
        <div onClick={() => handleChange()}>
          <div className="border-t-2 px-3 border-b-2 border-[#C5372F]">
            <h1 className="text-white md:text-4xl">Wardrobe</h1>
          </div>
        </div>
      </div>
      {change && (
        <div>
          <div className="flex justify-center flex-wrap gap-4 md:px-20  ">
            {arr1.map(({ id, img }) => {
              return <ValueCard key={id} img={img} />;
            })}
          </div>
        </div>
      )}
      {!change && (
        <div>
          <div className="flex justify-center flex-wrap gap-4 md:px-20  ">
            {arr2.map(({ id, img }) => {
              return <ValueCard key={id} img={img} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
