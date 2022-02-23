import React from "react";

export const Cardt = () => {
  const arr = [
    {
      id: 1,
      text: "",
    },
    {
      id: 2,
      text: "",
    },
    {
      id: 3,
      text: "",
    },
    {
      id: 4,
      text: "",
    },
    {
      id: 5,
      text: "",
    },
  ];
  return (
    <>
      <div className="flex justify-center py-10 ">
        <div className="bg-[#171717] w-[17rem] rounded-md border">
          <h1 className="text-center text-white text-2xl py-3">
            Typical experience
          </h1>
          {arr.map((value) => {
            const { id, text } = value;
            return (
              <div key={id}>
                <hr className="bg-white" />
                <div className="w-full flex py-3  px-2 text-white justify-center items-center">
                  <img
                    className="w-5 h-5 "
                    src="https://ik.imagekit.io/grfidbs4suq/icons/Group_1775_nGv_VUWU3bH3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645510650364"
                    alt="..."
                  />
                  <h1 className="px-2">{text}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
