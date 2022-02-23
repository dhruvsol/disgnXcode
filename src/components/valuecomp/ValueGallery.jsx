import React, { useState } from "react";
import { ValueCard } from "./ValueCard";
export const ValueGallery = () => {
  const [change, setChange] = useState(true);
  const [hit, setHit] = useState(true);
  const [nod, setnod] = useState(0);
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
            {arr.map(({ id, img }) => {
              return <ValueCard key={id} />;
            })}
          </div>
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
