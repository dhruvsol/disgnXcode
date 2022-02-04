import React from "react";
// import Slider from "react-slick";
import "./Slider.scss";

export const SliderSlide = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   autoplay: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  // };
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
      {/* <div>
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
      </div> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/img/Aboutpageslide.png"
              class="d-block banner"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/Aboutpageslide.png"
              class="d-block banner"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/Aboutpageslide.png"
              class="d-block banner"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <img src="/img/prev.svg" alt="mext" />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <img src="/img/next.svg" alt="mext" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
