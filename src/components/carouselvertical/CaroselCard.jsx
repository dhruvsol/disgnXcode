import React from "react";

export const CaroselCard = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center flex-col md:justify-evenly md:flex-row-reverse md:py-14 md:w-3/4">
          <div className="flex justify-center w-full  py-10 flex-col px-5 ">
            <h1 className="text-white font-Ivy text-center pb-5 text-4xl md:text-5xl">
              Attain Visibility
            </h1>
            <p className="text-white text-xl md:text-2xl md:px-10 ">
              Get a voice andspace on Interwood’s newsletterthat enjoys a
              readership of morethan 5000 premium homeownersand High Net-Worth
              Individuals. www.
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <img
              className=" w-3/4  object-cover"
              src="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/ALEXIA_KITCHEN_NO_2__1__SXiTg7Thz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834090681"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};
