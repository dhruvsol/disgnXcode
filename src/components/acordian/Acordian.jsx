import React from "react";
import "./Acordian.scss";
export const Acordian = () => {
  return (
    <>
      <div className="acordian">
        <div className="acordian1">
          {/* <img src="/img/home.svg" alt="..." /> */}
          <div className="img">
            <h1>
              Value Added With Retailer
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
        </div>
        <div className="acordian2">
          {/* <img src="/img/home.svg" alt="..." /> */}
          <div className="img">
            <h1>
              Value Added With Partner
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
