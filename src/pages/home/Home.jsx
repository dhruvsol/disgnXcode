import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
const Home = () => {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
