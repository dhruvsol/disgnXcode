import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Card2 } from "../../../components/SpecialCard/Card2/Card2";
import { Card1 } from "../../../components/SpecialCard/Card1/Card1";
import "./Interwood.scss";
export const Interwood1 = () => {
  return (
    <>
      <div className="interwood">
        <div className="interwood-card">
          <div>
            <Card1 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
          <div>
            <Card2 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Card1 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
          <div>
            <Card2 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
        </div>
        <div className="interwood-card">
          <div>
            <Card1 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
          <div>
            <Card2 name="hello" url="/img/SpecialCard/Frame 14.png" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
