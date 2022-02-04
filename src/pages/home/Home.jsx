import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
const Home = () => {
  return (
    <div className="Home-page">
      <div className="HeroSection">
        <Navbar />
        <HeroSection />
      </div>
      <OurBrands />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
