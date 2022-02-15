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

        <div className="flex justify-evenly">
          <div data-aos="fade-right" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="/img/Leadership.png"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="/img/Leadership.png"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="2500">
            <LeaderCard
              name="HARDEEP SAWHNEY"
              position="CHAIRMAN AND MANAGING DIRECTOR FOUNDER"
              img="/img/Leadership.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};
