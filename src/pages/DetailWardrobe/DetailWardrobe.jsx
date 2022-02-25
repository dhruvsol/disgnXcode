import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import "./Detailswardrobe.scss";
import { SliderSlide } from "../../components/Slider/Slider";
import axios from "axios";
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
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const apiHit = ({ name, number, city, email, enquiry }) => {
    axios.post("/api/kitchenwardrobe", {
      name,
      number,
      city,
      email,
      enquiry,
    });
  };
  return (
    <>
      <div className="bg-[#171717] overflow-hidden">
        {/* <div>
          <Navbar1 />
          <HeroSection heading="Wardrobe Andrea" />
        </div> */}
        <div
          data-aos="fade-up"
          className="flex justify-evenly items-center wardrobedetails"
        >
          <h1 className="">{abouth1}</h1>
          <p>{aboutp}</p>
        </div>
        <div data-aos="zoom-in-down">
          <SliderSlide url1={url1} url2={url2} url3={url3} />
        </div>
        <div data-aos="flip-up" className=" details-proof ">
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
        <div data-aos="zoom-in-up" className="enquire-form">
          <img src={formimg} alt=".." />
          <div>
            <form action="">
              <h1>ENQUIRE</h1>
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="EMAIL ID"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CITY"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <textarea
                onChange={(e) => setEnquiry(e.target.value)}
                className="form-area"
                name="Message"
                placeholder="Enquiry About "
                cols="30"
                rows="10"
              ></textarea>
              <button
                onClick={() => apiHit({ name, number, city, email, enquiry })}
                type="summit"
              >
                SUMMIT
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
