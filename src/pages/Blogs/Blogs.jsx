import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import Slider from "react-slick";
import "./Blogs.scss";
import { BlogCard } from "./Card/BlogCard";
export const Blogs = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
              <div>
                <BlogCard
                  heading="first blog"
                  des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo aliquet suspendisse."
                  url="/img/blog2.png"
                />
              </div>
              <div>
                <BlogCard
                  heading="first blog"
                  des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo aliquet suspendisse."
                  url="/img/blog2.png"
                />
              </div>
              <div>
                <BlogCard
                  heading="first blog"
                  des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo aliquet suspendisse."
                  url="/img/blog2.png"
                />
              </div>
              <div>
                <BlogCard
                  heading="first blog"
                  des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo aliquet suspendisse."
                  url="/img/blog2.png"
                />
              </div>
              <div>
                <BlogCard
                  heading="first blog"
                  des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo aliquet suspendisse."
                  url="/img/blog2.png"
                />
              </div>
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
