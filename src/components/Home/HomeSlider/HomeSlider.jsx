import React from "react";
import { HomeCards } from "../../HomeCards/HomeCards";
import "./HomeSlider.scss";

export const HomeSlider = () => {
  return (
    <>
      <div>
        <div
          className="homeslider-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          <div className="homeslider-heading">
            <h2>We don't make kitchen</h2>
            <h1>We MAKE CULINARY EXPERIENCE CENTERS</h1>
          </div>
          <div className="homeslider-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, est
              augue enim erat a porta dictumst. Nisl pretium, arcu elit commodo
              non. Et nisl elit nisl aliquam nunc et eget. Maecenas commodo,
              consectetur ullamcorper nullam ultricies. Nisi justo , consectetur
              id enim rhoncus, ut sit vel. Nisl pharetra consectetur ornare
              aliquet velit massa. Felis lacinia amet, metus, euismod placerat
              nulla eu. Mauris id mauris etiam amet, netus iaculis viverra. Diam
              tristique sit tincidunt diam dolor donec nisi. At hendrerit
              adipiscing egestas dui. Cras egestas.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="homeslider ">
          <div
            id="carouselExampleIndicators"
            class="carousel slide  "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://ik.imagekit.io/grfidbs4suq/Home/1/ADITYA_S_VIEW_4_xiGpbpybP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645876079890"
                  class="d-block banner"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://ik.imagekit.io/grfidbs4suq/Home/1/VIEW_1__1__-bADtkvgO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645876079450"
                  class="d-block banner"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://ik.imagekit.io/grfidbs4suq/Home/1/PRAJWAL_S_VIEW_3_NdZdV8xch.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645876079475"
                  class="d-block banner"
                  alt="..."
                />
              </div>
              <div class="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active  indicator-after "
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  class="indicator-after"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  class="indicator-after"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
            </div>
            {/* <button
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
          </button> */}
          </div>
        </div>
        <div>
          <HomeCards />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="1000"
        className="homeslider-legacy"
      >
        <p>
          Since 1989, Interwood has inspired fragments of your life stories with
          the finest kitchens, wardrobes, bedroom sets and living & dining
          systems, backed by state-of-the-art German technology, that have
          carried with them our promise of quality, creativity & innovation.
        </p>
        <h1>30 YEARS OF LEGACY</h1>
      </div>
    </>
  );
};
