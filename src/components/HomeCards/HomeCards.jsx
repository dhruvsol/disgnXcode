import React, { useEffect, useState } from "react";

export const HomeCards = () => {
  const [num, setNum] = useState(0);
  const ss = [
    {
      id: 1,
      head: "1",
      text: "1",
    },
    {
      id: 2,
      head: "2",
      text: "2",
    },
    {
      id: 3,
      head: "3",
      text: "3",
    },
    {
      id: 4,
      head: "4",
      text: "4",
    },
    {
      id: 5,
      head: "5",
      text: "5",
    },
  ];
  const PlusNum = () => {
    if (num > 3) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  const MinNum = () => {
    if (num < 1) {
      setNum(4);
    } else {
      setNum(num - 1);
    }
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center ">
        <div className=" flex justify-center flex-col items-center">
          <h1 className="text-5xl text-white font-Ivy py-4">{ss[num].head}</h1>
          <p className="text-xl px-40 text-white py-10 text-justify">
            {ss[num].text}
          </p>
        </div>
        <div className="flex justify-start w-3/4">
          <img
            onClick={() => MinNum()}
            className="md:w-20 md:h-20 object-cover mx-4 cursor-pointer"
            src="https://ik.imagekit.io/grfidbs4suq/icons/prev_nK1cW0lM9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644725560179"
            alt=".."
          />
          <img
            onClick={() => PlusNum()}
            className="md:w-20 md:h-20 object-cover mx-4 cursor-pointer "
            src="https://ik.imagekit.io/grfidbs4suq/icons/next_dIm8iWXfJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644725559177"
            alt=".."
          />
        </div>
      </div>
    </>
  );
};
