import React from "react";
import { Footer } from "../../components/footer/Footer";
import "./Detailswardrobe.scss";
import { SliderSlide } from "../../components/Slider/Slider";
export const DetailWardrobe = ({
  proof1,
  proof2,
  proofHead,
  proof3,
  proof4,
  formimg,
  url1,
  url2,
  url3,
  abouth1,
  aboutp,
}) => {
  return (
    <>
      <div className="bg-[#171717]">
        {/* <div>
          <Navbar1 />
          <HeroSection heading="Wardrobe Andrea" />
        </div> */}
        <div className="flex justify-evenly items-center wardrobedetails">
          <h1 className="">{abouth1}</h1>
          <p>{aboutp}</p>
        </div>
        <div>
          <SliderSlide url1={url1} url2={url2} url3={url3} />
        </div>
        <div className=" details-proof ">
          <div className="details-proof-main">
            <h1>{proofHead}</h1>
          </div>
          <div className="details-proof-content">
            <div>{proof1}</div>
            <div>{proof2}</div>
            <div>{proof3}</div>
            <div>{proof4}</div>
          </div>
        </div>
        <div className="enquire-form">
          <img src={formimg} alt=".." />
          <div>
            <form action="">
              <h1>ENQUIRE</h1>
              <div>
                <input type="text" placeholder="NAME" />
                <input type="tel" placeholder="PHONE NUMBER" />
              </div>
              <div>
                <input type="text" placeholder="EMAIL ID" />
                <input type="text" placeholder="CITY" />
              </div>
              <textarea
                className="form-area"
                name="Message"
                placeholder="Enquiry About "
                cols="30"
                rows="10"
              ></textarea>
              <button type="summit">SUMMIT</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
