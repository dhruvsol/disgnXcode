import React from "react";
import { Signature } from "../Signature/Signature";
export const Signature2 = () => {
  return (
    <>
      <div className="signature2 h-screen overflow-scroll">
        <div className="signature2-page1">
          <Signature />
        </div>
        <div>
          <Signature />
        </div>
        <div>
          <Signature />
        </div>
      </div>
    </>
  );
};
