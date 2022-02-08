import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import "./Details.scss";
import { HeroSection } from "../../../components/Home/HeroSection";
import Slider from "react-slick";
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
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
          slidesToShow: 2,
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
      <div className="bg-[#171717]">
        <div className="keyfeatures">
          <h1>KEY FEATURES</h1>
          <hr />
          <div className="keyfeaturescontent">
            <hr />
            <h2>Balanced Color Scheme</h2>
          </div>
          <hr />
          <div className="keyfeaturescontent">
            <hr />
            <h2>Contrasting Open Storages</h2>
          </div>
          <hr />
          <div className="keyfeaturescontent">
            <hr />
            <h2>Contemporary Design</h2>
          </div>
        </div>
        <img src={main1} alt="..." />
        <div className="gallery">
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
        <img src={main2} alt="..." />
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
