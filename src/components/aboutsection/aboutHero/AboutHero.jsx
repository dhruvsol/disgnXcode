import React from "react";
import "./AboutHero.scss";

export const AboutHero = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1800"
          className="abouthero"
        ></div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="abouthero-card1"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="abouthero-card2"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="abouthero-ourstory"
        >
          <h1>OUR STORY</h1>
          <p>
            Established nearly three decades ago, Interwood has specialized in
            creating a wide range of furniture that accentuates the living
            ambience in today’s homes. Backed by state-of-the-art German
            technology, our offering includes kitchens, wardrobes, bedroom sets
            and living & dining systems incorporating the most modern of
            materials and manufacturing techniques while reflecting contemporary
            design. Utmost care and commitment to quality across the product
            lifecycle ensures each unit is a carefully designed work of art
            crafted with an in-built assurance of durability and aesthetics.
            Discover our history...
          </p>
        </div>
        <div className="abouthero-video">
          <iframe
            src="https://www.youtube.com/embed/YMopu-z7T54"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="abouthero-aboutinterwood"
        >
          <span>ABOUT INTERWOOD</span>
          <p>
            Since 1989, Interwood has inspired fragments of your life stories
            with the finest kitchens, wardrobes, bedroom sets and living &
            dining systems, backed by state-of-the-art German technology, that
            have carried with them our promise of quality, creativity &
            innovation.
          </p>
        </div>
      </div>
    </>
  );
};
