import React from "react";

import "./Blog.scss";
import Slider from "react-slick";
import { Card } from "../Testimonials/card/Card";
export const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
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
      <div className="testimonials">
        <div className="flex justify-center md:justify-start md:px-32">
          <h1 className="text-3xl md:text-7xl text-white font-Ivy">BLOGS</h1>
        </div>

        <Slider className="slider" {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>
    </>
  );
};
