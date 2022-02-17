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
              img="/img/Leadership.png"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="/img/Leadership.png"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="/img/Leadership.png"
            />
          </div>
        </div>
        <div className="mobile-leader">
          <Slider {...settings}>
            <div>
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
            <div>
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
            <div>
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
