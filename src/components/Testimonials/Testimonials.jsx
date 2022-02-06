import React from "react";
import { Card } from "./card/Card";
import Slider from "react-slick";
import "./Testimonials.scss";

export const Testimonials = () => {
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
        breakpoint: 700,
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
    <div className="testimonials">
      <h1>TESTIMONIALS</h1>
      <Slider className="slider" {...settings}>
        <div>
          <Card
            Name="Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
          />
        </div>
        <div>
          <Card
            Name="Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
          />
        </div>
        <div>
          <Card
            Name="Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
          />
        </div>
        <div>
          <Card
            Name="Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
          />
        </div>
        <div>
          <Card
            Name="Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
          />
        </div>
      </Slider>
    </div>
  );
};
