import React from "react";

export const Cardl = () => {
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
        <div className="bg-[#C5372F] w-[17rem] rounded-md">
          <h1 className="text-center text-white text-2xl py-3">
            Livespace experience
          </h1>
          {arr.map(() => {
            return (
              <div className="">
                <hr className="bg-white" />
                <div className="w-full flex py-3  px-2 text-white justify-center items-center">
                  <img
                    className="w-5 h-5 "
                    src="https://ik.imagekit.io/grfidbs4suq/icons/Group_1774_Y6w7z1UTa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645510649849"
                    alt="..."
                  />
                  <h1 className="px-2">No hidden costs Price Match Gurantee</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
