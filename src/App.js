import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import Alexia from "./pages/Interwood/Alexia";
import Cecilia from "./pages/Interwood/Cecilia";
import Andera from "./pages/Interwood/Andera";
import Erika from "./pages/Interwood/Erika";
import Montana from "./pages/Interwood/Montana";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/details" element={<DetailPage />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bedroom/wardrobe" element={<BedroomWardrobe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/value/partner" element={<ValuePartner />} />
        <Route path="/value/retailer" element={<ValueRetailer />} />
        <Route path="/brands" element={<Brands />} />

        {/*************** interwood ************/}
        <Route path="/kitchen/interwood/alexia" element={<Alexia />} />
        <Route path="/kitchen/interwood/andera" element={<Andera />} />
        <Route path="/kitchen/interwood/cecilia" element={<Cecilia />} />
        <Route path="/kitchen/interwood/erika" element={<Erika />} />
        <Route path="/kitchen/interwood/montana" element={<Montana />} />
        {/***************InterwoodPlus *************/}
        <Route path="/kitchen/interwoodplus" element={<InterwoodPlus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
