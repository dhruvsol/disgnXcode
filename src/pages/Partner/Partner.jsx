import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { Acordian } from "../../components/acordian/Acordian";
export const Partner = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <Acordian />
        <Footer />
      </div>
    </>
  );
};
