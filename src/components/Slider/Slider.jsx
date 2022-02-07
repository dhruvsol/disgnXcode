import React from "react";

import "./Slider.scss";

export const SliderSlide = ({ url1, url2, url3 }) => {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <div class="carousel-indicators">
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
          </div> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={url1} class="d-block banner" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={url2} class="d-block banner" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={url3} class="d-block banner" alt="..." />
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
            <img src="/img/next.svg" alt="next" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
