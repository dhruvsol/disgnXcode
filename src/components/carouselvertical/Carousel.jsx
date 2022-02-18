import React from "react";
import { CaroselCard } from "./CaroselCard";
import Slider from "react-slick";
import "./Carosel.scss";
export const Carouselvertical = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <CaroselCard />
        </div>
        <div>
          <CaroselCard />
        </div>
        <div>
          <CaroselCard />
        </div>
      </Slider>
    </>
  );
};
