import React from "react";
import Slider from "react-slick";
import { LeaderCard } from "./LeaderCard/LeaderCard";
import "./Leadership.scss";
export const Leadership = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="leadership">
        <div className="leadership-team">
          <h1>LEADERSHIP TEAM</h1>
        </div>
        <div className="leadership-change">
          <div className="leadership-bar"></div>
          <div className="leadership-button">
            <img src="/img/prev.svg" alt="previous" />
            <img src="/img/next.svg" alt="next" />
          </div>
        </div>
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
    </>
  );
};
