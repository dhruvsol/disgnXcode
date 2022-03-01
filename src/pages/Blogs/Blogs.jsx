import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import Slider from "react-slick";
import "./Blogs.scss";
import { BlogCard } from "./Card/BlogCard";
import axios from "axios";
import { data } from "autoprefixer";
export const Blogs = () => {
  const blog = axios.get("/api/fetch");
  console.log(blog);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      <div className="bg-[#171717]">
        <Navbar1 />
        <div className="blogs-main">
          <div className="blogs-heading">
            <h1>CATCHY HEADLINES</h1>
            <p>THE ULTIMATE LIST OF BLOG POST IDEAS</p>
          </div>
          <div>
            <Slider {...settings}>
              {data.map(({ _id, heading, subheading, image }) => {
                return (
                  <div key={_id}>
                    <BlogCard heading={heading} des={subheading} url={image} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
