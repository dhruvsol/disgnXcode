import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { InterwoodPlus } from "./pages/InterwoodPlus/InterwoodPlus";
import { DetailPage } from "./pages/DetailPage/Details/DetailPage";
import { Bedroom } from "./pages/Bedroom/Bedroom";
import { BedroomWardrobe } from "./pages/BedroomWardrobe/BedroomWardrobe";
import { Blogs } from "./pages/Blogs/Blogs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Partner } from "./pages/Partner/Partner";
import { ValuePartner } from "./pages/ValuePartner/ValuePartner";
import { ValueRetailer } from "./pages/ValueRetailer/ValueRetailer";
import { Brands } from "./pages/Brands/Brands";
import Alexia from "./pages/DetailPage/Alexia";
import Cecilia from "./pages/DetailPage/Cecilia";
import Andera from "./pages/DetailPage/Andera";
import Erika from "./pages/DetailPage/Erika";
import Montana from "./pages/DetailPage/Montana";
import { Interwood1 } from "./pages/Interwood/interwood1/Interwood1";
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
        <Route
          path="/kitchen/interwood"
          element={
            <Interwood1
              main="/img/home.svg"
              url1="/img/interwood/andrea.png"
              url2="/img/interwood/erika.png"
              url3="/img/interwood/cecilia.png"
              url4="/img/interwood/alexia.png"
              url5="/img/interwood/montana.png"
            />
          }
        />
        <Route path="/kitchen/interwood/alexia" element={<Alexia />} />
        <Route path="/kitchen/interwood/andrea" element={<Andera />} />
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
