import React from "react";
import "./Partner.scss";
import Slider from "react-slick";
export const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="partnerwithus overflow-hidden">
        <div className="partner-heading">
          <h1>PARTNER WITH US</h1>
        </div>
        <div className="partner-value1">
          <div data-aos="zoom-out-right" data-aos-duration="2500">
            <img src="/img/partner.png" alt="Partner" />
          </div>
          <div
            data-aos="zoom-out-left"
            data-aos-duration="3000"
            className="partner-content"
          >
            <h2>VALUE ADDED REATAILER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, est
              augue enim erat a porta dictumst. Nisl pretium, arcu elit commodo
              non. Et nisl elit nisl aliquam nunc et eget. Maecenas commodo,
              consectetur ullamcorper nullam ultricies. Nisi justo
            </p>
          </div>
        </div>
        <div className="partner-value2">
          <img
            data-aos="zoom-out-left"
            data-aos-duration="2500"
            src="/img/partner.png"
            alt="Partner"
          />
          <div
            data-aos="zoom-out-right"
            data-aos-duration="3000"
            className="partner-content"
          >
            <h2>VALUE ADDED REATAILER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, est
              augue enim erat a porta dictumst. Nisl pretium, arcu elit commodo
              non. Et nisl elit nisl aliquam nunc et eget. Maecenas commodo,
              consectetur ullamcorper nullam ultricies. Nisi justo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
