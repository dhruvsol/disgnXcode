import React, { useState } from "react";
// import { Navbar1 } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import "./Details.scss";
// import { HeroSection } from "../../../components/Home/HeroSection";
import Slider from "react-slick";
import axios from "axios";
export const DetailPage = ({
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  proofHead,
  proof1,
  proof2,
  proof3,
  proof4,
  main1,
  main2,
  formimg,
  key1,
  key2,
  key3,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const apiHit = ({ name, number, email, city, enquiry }) => {
    axios.post("/api/kitchenwardrobe", {
      name,
      number,
      email,
      city,
      enquiry,
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#171717] overflow-hidden">
        <div className="keyfeatures">
          <h1 data-aos="zoom-in-right">KEY FEATURES</h1>
          <hr />
          <div data-aos="zoom-in-right" className="keyfeaturescontent">
            <hr />
            <h2>{key1}</h2>
          </div>
          <hr />
          <div data-aos="zoom-in-right" className="keyfeaturescontent">
            <hr />
            <h2>{key2}</h2>
          </div>
          <hr />
          <div data-aos="zoom-in-right" className="keyfeaturescontent">
            <hr />
            <h2>{key3}</h2>
          </div>
        </div>
        <img className="w-full" src={main1} alt="..." />
        <div
          data-aos="zoom-out"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="gallery"
        >
          <h1>GALLERY</h1>
          <Slider className="gallery-image" {...settings}>
            <div>
              <img src={url1} alt="..." />
            </div>
            <div>
              <img src={url2} alt="..." />
            </div>
            <div>
              <img src={url3} alt="..." />
            </div>
            <div>
              <img src={url4} alt="..." />
            </div>
            <div>
              <img src={url5} alt="..." />
            </div>
            <div>
              <img src={url6} alt="..." />
            </div>
          </Slider>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="2500"
          data-aos-delay="1500"
          className=" details-proof "
        >
          <div className="details-proof-main">
            <h1>{proofHead}</h1>
          </div>
          <div className="details-proof-content">
            <div className="flex justify-center flex-col items-center">
              <img
                className="md:w-32 w-10"
                src="https://ik.imagekit.io/grfidbs4suq/icons/Vector__6__ZjXiZAd3I.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645778670048"
                alt=".."
              />
              {proof1}
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="md:w-32 w-10"
                src="https://ik.imagekit.io/grfidbs4suq/icons/Group_32_JBBUCwDgPzMR.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645778670167"
                alt=".."
              />
              {proof2}
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="md:w-32 w-10"
                src="https://ik.imagekit.io/grfidbs4suq/icons/Group_30_8gHAqVOfuZuz.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645767623536"
                alt=".."
              />
              {proof3}
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="md:w-32 w-10"
                src="https://ik.imagekit.io/grfidbs4suq/icons/Group_31__1__GuPmrI6aG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645778505637"
                alt="..."
              />
              {proof4}
            </div>
          </div>
        </div>
        {/* <img className="w-full" src={main2} alt="..." /> */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2500"
          data-aos-delay="1000"
          className="enquire-form"
        >
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
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="PHONE NUMBER"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="EMAIL ID"
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
                placeholder="MESSAGE"
                cols="30"
                rows="10"
              ></textarea>
              <button
                onChange={() => apiHit({ name, number, email, city, enquiry })}
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
