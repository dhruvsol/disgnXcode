import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="HeroSection">
        <Navbar />
        <HeroSection />
      </div>
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
