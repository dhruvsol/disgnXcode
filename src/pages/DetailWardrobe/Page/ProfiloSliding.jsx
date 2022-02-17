import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const ProfiloSliding = () => {
  return (
    <>
      <div className="profiloplus">
        <Navbar1 />
        <HeroSection heading="WARDROBE PROFILO SLIDING" />
      </div>
      <DetailWardrobe
        url1="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/pop/WARDROBE_PROFILO_4_JeRzqZu1jczA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089701210"
        url2="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/pop/MBR-VIEW-1_6qcC_dtpH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089698529"
        url3="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/pop/2_aaOCIpoGHF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089699815"
        formimg="https://ik.imagekit.io/grfidbs4suq/wardrobe/interwood/pop/mbr_new_iXz8j6k_k9umA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645089700152"
        abouth1="ABOUT PROFILO SLIDING"
      />
    </>
  );
};

export default ProfiloSliding;
