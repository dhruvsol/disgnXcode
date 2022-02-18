import React, { useState } from "react";

export const ValueGallery = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
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
        <div>
          <div></div>
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
