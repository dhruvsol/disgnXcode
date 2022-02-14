import React, { useRef, useEffect } from "react";
import "./HomeSlider.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const HomeSlider = () => {
  const centerRef = useRef("");
  const legacyRef = useRef("");
  useEffect(() => {
    let el = centerRef.current;
    gsap.from(el, {
      y: "50%",
      duration: 1.2,
      ease: "slow",
      delay: 0.3,
      scrollTrigger: {
        trigger: el,
      },
    });
    let el2 = legacyRef.current;
    gsap.from(el2, {
      y: "100%",
      duration: 1.2,
      ease: "slow",
      delay: 0.3,
      scrollTrigger: {
        trigger: el2,
      },
    });
  }, []);
  return (
    <>
      <div ref={centerRef}>
        <div className="homeslider-center">
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

      <div className="homeslider">
        <div
          id="carouselExampleIndicators"
          class="carousel slide  "
          data-bs-ride="carousel"
        >
          {/* <div class="carousel-indicators change">
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
      <div ref={legacyRef} className="homeslider-legacy">
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
