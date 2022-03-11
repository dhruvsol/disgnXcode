import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
gsap.registerPlugin(ScrollTrigger);
const Pre = () => {
  const [preloader, setPreloader] = useState(true);
  const [page, setPage] = useState(false);
  const preRef = useRef(null);

  const handlePreloader = () => {
    let el = preRef.current;
    setTimeout(() => {
      setPreloader(false);
      setPage(true);
    }, 8000);
    setTimeout(() => {
      gsap.to(el, {
        duration: 3,
        opacity: 0,
        y: "-200%",
        ease: "power",
      });
    }, 7500);
  };

  useEffect(() => {
    handlePreloader();
  });
  return (
    <>
      {preloader && (
        <div className="bg-[#151715] h-screen flex justify-center">
          <video ref={preRef} autoPlay>
            <source src="/img/LogoV1.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {page && <App />}
    </>
  );
};

export default Pre;
