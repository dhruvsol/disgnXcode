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
}) => {
  return (
    <>
      <div className="bg-[#171717]">
        {/* <div>
          <Navbar1 />
          <HeroSection heading="Wardrobe Andrea" />
        </div> */}
        <div className="flex justify-evenly items-center wardrobedetails">
          <h1 className="">About Andrea</h1>
          <p>
            Very natural, sensuous and elegant, that’s the feel of Andrea
            wardrobe. The unique sensation is accompanied by a super matt
            texture, created by an innovative lacquer process, resulting in a
            high quality of anti-fingerprint surface ensuring a rich, well
            appointed finish.
          </p>
        </div>
        <div>
          <SliderSlide />
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
                placeholder="MESSAGE"
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
