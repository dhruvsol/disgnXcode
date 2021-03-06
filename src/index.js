import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./font/stylesheet.css";
// import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import Pre from "./Pre";
AOS.init();

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  anchorPlacement: "top-bottom",
  offset: 120,
  delay: 500,
  duration: 2500,
  easing: "ease",
  once: false,
  mirror: false,
});

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Pre />
  </React.StrictMode>,
  document.getElementById("root")
);
