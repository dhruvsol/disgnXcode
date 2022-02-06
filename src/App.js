import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Interwood } from "./pages/Interwood/Interwood";
import { InterwoodPlus } from "./pages/InterwoodPlus/InterwoodPlus";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { Bedroom } from "./pages/Bedroom/Bedroom";
import { BedroomWardrobe } from "./pages/BedroomWardrobe/BedroomWardrobe";
import { Blogs } from "./pages/Blogs/Blogs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Partner } from "./pages/Partner/Partner";
import { ValuePartner } from "./pages/ValuePartner/ValuePartner";
import { ValueRetailer } from "./pages/ValueRetailer/ValueRetailer";
import { Brands } from "./pages/Brands/Brands";
import { Card1 } from "./components/SpecialCard/Card1/Card1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/kitchen/interwoodplus" element={<InterwoodPlus />} />
        <Route path="/kitchen/interwood" element={<Interwood />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bedroom/wardrobe" element={<BedroomWardrobe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/value/partner" element={<ValuePartner />} />
        <Route path="/value/retailer" element={<ValueRetailer />} />
        <Route path="/brands" element={<Brands />} />
        <Route
          path="/test"
          element={<Card1 url="/img/SpecialCard/Frame 14.png" name="ANDREA" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
