import React from "react";
import { LeaderCard } from "./LeaderCard/LeaderCard";
import "./Leadership.scss";
export const Leadership = () => {
  return (
    <>
      <div className="leadership">
        <div className="leadership-team">
          <h1>LEADERSHIP TEAM</h1>
        </div>
        {/* <LeaderCard
        name="HARDEEP SAWHNEY"
        position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
        img="/img/Leadership.png"
      /> */}
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
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
            <div class="carousel-item">
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
            <div class="carousel-item">
              <LeaderCard
                name="HARDEEP SAWHNEY"
                position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
                img="/img/Leadership.png"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <img src="/img/prev.svg" alt="next" />
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
      </div>
    </>
  );
};
