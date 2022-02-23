import React, { useState } from "react";

export const ValueCard = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      {click && (
        <div onClick={() => setClick(!click)}>
          <img
            className="w-[10rem] h-[13rem] p-4 rounded-[1.8rem] object-cover md:w-[15rem] md:h-[17rem] xl:w-[18rem] xl:h-[20rem]"
            src="/img/blog2.png"
            alt=".."
          />
        </div>
      )}
      {click === false && (
        <div onClick={() => setClick(!click)}>
          <img
            className="w-[10rem] h-[13rem] scale-[2] rounded-lg object-cover md:w-[15rem] md:h-[17rem] xl:w-[18rem] xl:h-[20rem]"
            src="/img/blog2.png"
            alt=".."
          />
        </div>
      )}
    </>
  );
};
