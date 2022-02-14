import React from "react";
import { DetailPage } from "./Details/DetailPage";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import "./style.scss";
const Montana = () => {
  return (
    <>
      <div className="montana">
        <Navbar1 />
        <HeroSection heading="Montana" />
      </div>
      <DetailPage
        url1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MO._4_crop_3_ZOtElyd33.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836332108"
        url2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MONTANA_KITCHEN_NO.3__2__ergurTHqPB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836331872"
        url3="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MO._4_crop_4_F1bw_95Fz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836331641"
        url4="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MONTANA_KITCHEN_NO.1_S35cDn0Ku.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644836330671"
        url5="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MO._4_crop_3_ZOtElyd33.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836332108"
        url6="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MO._4_crop_4_F1bw_95Fz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836331641"
        proofHead="Why you’ll love Montana"
        proof1="TERMITE PROOF"
        proof2="FIRE RETARDENT UPTO 45 MIN"
        proof3="SUPERIOR SCREW HOLDING ABILITY"
        proof4="CARCINOGENIC"
        main1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailInterwood/Montana/MONTANA_KITCHEN_NO.4_jWVs91_iS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644836332475"
        main2="/img/home.svg"
        formimg="/img/enqireform/Rectangle 11.png"
      />
    </>
  );
};

export default Montana;
