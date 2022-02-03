import React from "react";
import { Card } from "./card/Card";
import "./Testimonials.scss";
export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>TESTIMONIALS</h1>
      <Card
        Name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam adipiscing pellentesque blandit condimentum sed lectus ut. Aliquam non, sit vel gravida aliquam felis augue non auctor. Nulla lobortis congue nulla fringilla nisl donec euismod. Leo donec nibh morbi"
      />
    </div>
  );
};
