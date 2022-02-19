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
    arrows: false,
    verticalSwiping: true,
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
