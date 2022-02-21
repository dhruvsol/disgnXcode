import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./font/stylesheet.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
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

  offset: 120,
  delay: 2,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "center-center",
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
