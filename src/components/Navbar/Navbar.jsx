import React, { useRef, useEffect, useState } from "react";
import "./Navbar.scss";
import gsap from "gsap";
import { Menu } from "../menu/Menu";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const burgerRef = useRef();
  useEffect(() => {
    gsap.from(burgerRef.current, {
      y: -10,
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
      {navbar && <Menu ref={burgerRef} />}
    </>
  );
};
