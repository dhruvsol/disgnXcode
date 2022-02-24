import React from "react";
import { DetailPage } from "../Details/DetailPage";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import "./Style.scss";

const Amaze = () => {
  return (
    <>
      <div>
        <div className="amaze">
          <Navbar1 />
          <HeroSection heading="Amaze" />
        </div>
        <DetailPage
          url1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_2_TFEoOm9BC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306738"
          url2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_3__1__T_B5scG6M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306551"
          url3="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_02__1__gERh_e90c.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306235"
          url4="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_3__1__T_B5scG6M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306551"
          url5="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_02__1__gERh_e90c.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306235"
          url6="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/AMAZE_4__1__s9QaPJ1Qc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837308650"
          proofHead="Why you’ll love Amaze"
          key1="Luxurious Sinks & Faucets"
          key2="Integrated Appliances"
          key3="Storage Detailed In Wood & Anthracite"
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="ANTI CARCINOGENIC"
          main1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/AMAZE_2__1__KMHxc8LbM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837307705"
          main2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_3_-JQKGPUzZ_cc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837307716"
          formimg="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_6_zqMo6Y6c7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837733905"
        />
      </div>
    </>
  );
};

export default Amaze;
