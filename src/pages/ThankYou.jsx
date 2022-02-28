import React from "react";
import { Navbar1 } from "../components/Navbar/Navbar";

const ThankYou = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <div className=" w-full  h-screen  text-4xl  flex justify-center items-center flex-col mt-[-4rem]">
          <h1 className="text-white font-Ivy md:text-7xl">Thank You</h1>
          <p className="text-white text-2xl">
            Our team will soon reach out to you
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
