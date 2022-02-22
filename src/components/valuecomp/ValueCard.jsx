import React, { useState } from "react";

export const ValueCard = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      {click && (
        <div onClick={() => setClick(!click)}>
          <img
            className="w-28 h-28 rounded-sm object-cover md:w-[10rem] md:h-[10rem]"
            src="/img/blog2.png"
            alt=".."
          />
        </div>
      )}
      {click === false && (
        <div onClick={() => setClick(!click)}>
          <img
            className="w-28 h-28 scale-[3] rounded-sm object-cover md:w-[10rem] md:h-[10rem]"
            src="/img/blog2.png"
            alt=".."
          />
        </div>
      )}
    </>
  );
};
