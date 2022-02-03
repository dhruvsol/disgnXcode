import React from "react";
import Slider from "react-slick";
import "./Slider.scss";

export const SliderSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
      {/* <Slider className="slider" {...settings}>
        <div>
          <img src="./Aboutpageslide.png" alt="slider" />
        </div>
        <div>
          <img src="./Aboutpageslide.png" alt="slider" />
        </div>
      </Slider> */}
      <div>
        <Slider className="slider" {...settings}>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
          <div>
            <img src="/img/Aboutpageslide.png" alt="slider" />
          </div>
        </Slider>
      </div>
    </>
  );
};
