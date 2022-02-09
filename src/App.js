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
import { DetailWardrobe } from "./pages/DetailWardrobe/DetailWardrobe";
import Alexia1 from "./pages/DetailWardrobe/Page/Alexia";
import Andrea1 from "./pages/DetailWardrobe/Page/Andrea";
import Montana1 from "./pages/DetailWardrobe/Page/Montana";
import Cecilia1 from "./pages/DetailWardrobe/Page/Montana";
import ProfiloSliding from "./pages/DetailWardrobe/Page/ProfiloSliding";
import SublimeSliding from "./pages/DetailWardrobe/Page/SublimeSliding";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/details" element={<DetailPage />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/partnerwithus" element={<Partner />} />
        {/*************** values ************/}
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
        <Route
          path="/kitchen/interwoodplus"
          element={
            <InterwoodPlus
              amaze="/img/interwoodplus/amaze.png"
              bliss="/img/interwoodplus/bliss.jpg"
              struct="/img/interwoodplus/struct.png"
              glaze="/img/interwoodplus/glaze.png"
              lack7="/img/interwoodplus/lack.png"
              form5="/img/interwoodplus/form5.png"
              naturale="/ima/interwoodplus/naturale.pngs"
            />
          }
        />
        {/***************Bedroom *************/}
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bedroom/wardrobe" element={<BedroomWardrobe />} />
        <Route path="/bedroom/wardrobe/andrea" element={<Andrea1 />} />
        <Route path="/bedroom/wardrobe/alexia" element={<Alexia1 />} />
        <Route path="/bedroom/wardrobe/montana" element={<Montana1 />} />
        <Route path="/bedroom/wardrobe/cecilia" element={<Cecilia1 />} />
        <Route
          path="/bedroom/wardrobe/profilosliding"
          element={<ProfiloSliding />}
        />
        <Route
          path="/bedroom/wardrobe/sublimesliding"
          element={<SublimeSliding />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
