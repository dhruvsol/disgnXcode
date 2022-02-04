import React from "react";
import { Card } from "./card/Card";
import Slider from "react-slick";
import "./Testimonials.scss";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
