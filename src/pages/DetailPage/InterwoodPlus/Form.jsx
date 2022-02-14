import React from "react";
import { DetailPage } from "../Details/DetailPage";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import "./Style.scss";
const Form = () => {
  return (
    <>
      <div>
        <div className="form">
          <Navbar1 />
          <HeroSection heading="FORM 5" />
        </div>
        <DetailPage
          url1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/2_ULRTsZVK8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644838095099"
          url2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/BLISS_AnAQkQuST.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644838095254"
          url3="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/VIEW_4ED_fOjchlPJ_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644838093471"
          url4="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/BLISS_1_iZ1rv2Hm9WJt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644838094456"
          url5="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/VIEW-04_NLAvZIUNJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644838093719"
          url6="https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/AMAZE_4__1__s9QaPJ1Qc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837308650"
          proofHead="Why you’ll love Bliss"
          proof1="TERMITE PROOF"
          proof2="FIRE RETARDENT UPTO 45 MIN"
          proof3="SUPERIOR SCREW HOLDING ABILITY"
          proof4="CARCINOGENIC"
          main1="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/BLISS_1_iZ1rv2Hm9WJt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644838094456"
          main2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/2_ULRTsZVK8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644838095099"
          formimg="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/Bliss/VIEW-03_bVMj0cOJclQ0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644838092713"
        />
      </div>
    </>
  );
};

export default Form;
