import React from "react";

export const Certi = () => {
  return (
    <>
      <div className="bg-[#171717] py-20 flex justify-center text-center">
        <div className="px-1">
          <span className="text-white text-3xl md:text-5xl font-Ivy">
            Certifications Obtained By
          </span>
          <span className="text-3xl text-[#c5372f] md:text-5xl">
            {" "}
            Interwood
          </span>
        </div>
      </div>
      <div className="flex justify-evenly flex-col items-center bg-white lg:flex-row py-3">
        <img
          className="w-40 py-4"
          src="https://ik.imagekit.io/grfidbs4suq/about/norme-iso-9001-version-2015-e1608294847720_0L-dlJdAl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646468994972"
          alt="9001"
        />
        <img
          className="w-40 py-4"
          src="https://ik.imagekit.io/grfidbs4suq/about/ISO-45001-2018_XUphuVOCJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646468899490"
          alt="45001"
        />
        <img
          className="w-40 py-4"
          src="https://ik.imagekit.io/grfidbs4suq/about/certifiate2_h-EEhYmJH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646468898938"
          alt="45001"
        />
      </div>
      <div className="hidden md:flex px-5 py-5 justify-evenly">
        <h1 className="text-white text-center text-2xl w-1/3">
          The International standard that specifies requirments for a quality
          management system (QMS)
        </h1>
        <h1 className="text-white text-center text-2xl w-1/3">
          The International standard that specifies requirments for an effective
          enviroment managment system
        </h1>
        <h1 className="text-white text-center text-2xl w-1/3">
          The International standard for health & safety at work devloped by
          national & international standards commitees independent of government
        </h1>
      </div>
    </>
  );
};
