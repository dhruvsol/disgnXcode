import React, { useRef, useEffect, useState } from "react";
import "./Navbar.scss";
import gsap from "gsap";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const burgerRef = useRef();
  useEffect(() => {
    gsap.from(burgerRef.current, {
      y: -100,
      opacity: 0,
    });
  });
  return (
    <>
      <div className="navbar">
        <div className="Navbar-logo">
          <img src="/img/logo.svg" alt="logo" />
        </div>

        <div className="burger" onClick={() => setNavbar(true)}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
      {navbar && (
        <div className="menu-main" ref={burgerRef}>
          {/* <div className="menu-close">X</div> */}
          <div className="menu">
            <div className="menu-pages menu-inner">
              <h2>Pages</h2>
              <a href="/aboutus">About us</a>
              <a href="/blogs">Blogs</a>
            </div>
            <div className="menu-kitchens menu-inner">
              <h2>Kitchens</h2>
              <a href="/interwood">Interwood</a>
              <a href="/interwoodplus">Interwood Plus</a>
            </div>
            <div className="menu-bedroom menu-inner">
              <h2>Bedroom</h2>
              <a href="/interwood">Interwood</a>
              <a href="/wodrobs">wardrobs</a>
              <a href="/interwoodplus">Interwood Plus wardrobe</a>
              <a href="/tvunits">TV Units</a>
              <a href="/Variables">Variables</a>
            </div>
            <div className="menu-brands menu-inner">
              <h2>Brands</h2>
              <a href="/interwood">Interwood</a>
              <a href="/interwoodplus">Interwood Plus</a>
            </div>
            <div className="menu-image menu-inner">
              image
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
