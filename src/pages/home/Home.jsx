import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/Home/HeroSection";
import { Footer } from "../../components/footer/Footer";
import { Blog } from "../../components/Blogs/Blog";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { OurBrands } from "../../components/our brand/OurBrands";
import { HomeSlider } from "../../components/Home/HomeSlider/HomeSlider";
import { Signature } from "../../components/Signature/Signature";

const Home = () => {
  return (
    <div className="Home-page">
      <div className="HeroSection">
        <Navbar />
        <HeroSection
          heading="ECHOING CLASS"
          subheading="CLASSY AND PERFECT KITCHEN"
        />
      </div>
      <HomeSlider />
      <Signature
        heading="Core Team Comitted towards our legacy"
        signature="Signature"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac a rutrum interdum facilisi donec phasellus. Velit purus varius eu consectetur blandit placerat viverra tellus. Volutpat, maecenas tellus et turpis. A dictum ipsum sit volutpat. In nunc sed urna, suspendisse dui donec rhoncus scelerisque. Molestie volutpat augue habitant purus diam suscipit dignissim. Massa pharetra metus feugiat lectus. Et luctus morbi id congue ornare et in aenean enim. Scelerisque morbi justo, faucibus turpis vitae, ornare amet. Vestibulum ut est, lectus pellentesque nunc ac quis id. Placerat massa id m"
      />
      <OurBrands />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
