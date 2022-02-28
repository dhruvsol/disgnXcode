import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Routing";
import Home from "./pages/home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DetailPage } from "./pages/DetailPage/Details/DetailPage";
import { Bedroom } from "./pages/Bedroom/Bedroom";
import { Blogs } from "./pages/Blogs/Blogs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Partner } from "./pages/Partner/Partner";
import { ValuePartner } from "./pages/ValuePartner/ValuePartner";
import { ValueRetailer } from "./pages/ValueRetailer/ValueRetailer";
import { Brands } from "./pages/Brands/Brands";
import Alexia1 from "./pages/DetailWardrobe/Page/Alexia";
import Andrea1 from "./pages/DetailWardrobe/Page/Andrea";
import Montana1 from "./pages/DetailWardrobe/Page/Montana";
import Cecilia1 from "./pages/DetailWardrobe/Page/Montana";
import ProfiloSliding from "./pages/DetailWardrobe/Page/ProfiloSliding";
import SublimeSliding from "./pages/DetailWardrobe/Page/SublimeSliding";
import { Tvunits } from "./pages/Bedroom/Tvunits";
import { Vanties } from "./pages/Bedroom/Vanties";

import KitchenRoutes from "./KitchenRoutes";
import { BedroomWardrobe } from "./pages/BedroomInterwood/Wardrobe/BedroomWardrobe";
import { WardrobeInterwoodplus } from "./pages/BedroomInterwoodplus/Wardrobeplus/WardrobeInterwoodplus";
import { Allure } from "./pages/DetailWardrobe/pagesplus/Allure";
import { Glaze } from "./pages/DetailWardrobe/pagesplus/Glaze";
import { Lack7 } from "./pages/DetailWardrobe/pagesplus/Lack7";
import { Ralph22 } from "./pages/DetailWardrobe/pagesplus/Ralph22";
import { Ralph29 } from "./pages/DetailWardrobe/pagesplus/Ralph29";
import { Ralphuno } from "./pages/DetailWardrobe/pagesplus/Ralphuno";
import { Struct } from "./pages/DetailWardrobe/pagesplus/Struct";
import { Ralph8000 } from "./pages/DetailWardrobe/pagesplus/Ralph8000";
import { Ralph1500 } from "./pages/DetailWardrobe/pagesplus/Ralph1500";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <>
      <KitchenRoutes />

      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/s" element={<ThankYou />} />
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

            {/***************Bedroom *************/}
            <Route path="/bedroom/wardrobe" element={<Bedroom />} />
            <Route path="/bedroom/tvunits" element={<Tvunits />} />
            <Route path="/bedroom/vanities" element={<Vanties />} />

            {/***************wardrobe*************/}
            <Route
              path="/bedroom/wardrobe/interwood"
              element={<BedroomWardrobe />}
            />

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
            {/***************wardrobeplus*************/}
            <Route
              path="/bedroom/wardrobe/interwoodplus"
              element={<WardrobeInterwoodplus />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/allure"
              element={<Allure />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/glaze"
              element={<Glaze />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/lack7"
              element={<Lack7 />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/ralph22"
              element={<Ralph22 />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/ralph29"
              element={<Ralph29 />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/ralphuno"
              element={<Ralphuno />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/struct"
              element={<Struct />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/ralph8000"
              element={<Ralph8000 />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus/ralph1500"
              element={<Ralph1500 />}
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
