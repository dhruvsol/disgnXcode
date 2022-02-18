import React from "react";

import { LeaderCard } from "./LeaderCard/LeaderCard";
import "./Leadership.scss";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const Leadership = () => {
  return (
    <>
      <div className="leadership overflow-hidden">
        <div className="leadership-team">
          <h1>LEADERSHIP TEAM</h1>
        </div>

        <div className="flex justify-evenly leadership-card">
          <div data-aos="fade-right" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="https://ik.imagekit.io/grfidbs4suq/founder/9208d6170c7bec8080f1c43e1f8dd863_b6oqTA9IA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161222853"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <LeaderCard
              name="KASTURI SAWHNEY"
              position="EXECUTIVE DIRECTOR"
              img="https://ik.imagekit.io/grfidbs4suq/founder/848d5fc5b159179935772e6f01e4b9e1_Xjvil89p6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161222853"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="2500">
            <LeaderCard
              name="TIMOTHY EDWIN"
              position="DIRECTOR"
              img="https://ik.imagekit.io/grfidbs4suq/founder/0a7d36c3eea1a644af2f01bfc3d92b64_8AJSy0_B3u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161223025"
            />
          </div>
        </div>
        <div className="mobile-leader">
          <Slider {...settings}>
            <div>
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="https://ik.imagekit.io/grfidbs4suq/founder/9208d6170c7bec8080f1c43e1f8dd863_b6oqTA9IA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161222853"
              />
            </div>
            <div>
              <LeaderCard
                name="KASTURI SAWHNEY"
                position="EXECUTIVE DIRECTOR"
                img="https://ik.imagekit.io/grfidbs4suq/founder/848d5fc5b159179935772e6f01e4b9e1_Xjvil89p6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161222853"
              />
            </div>
            <div>
              <LeaderCard
                name="TIMOTHY EDWIN"
                position="DIRECTOR"
                img="https://ik.imagekit.io/grfidbs4suq/founder/0a7d36c3eea1a644af2f01bfc3d92b64_8AJSy0_B3u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645161223025"
              />
            </div>
          </Slider>
        </div>
      </div>

      <iframe
        className="w-full h-[30rem] py-20 md:h-screen "
        src="https://www.youtube.com/embed/YMopu-z7T54"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  );
};
