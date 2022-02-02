import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
