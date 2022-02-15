import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Routing";
import { BedroomWardrobe } from "./pages/BedroomInterwood/Wardrobe/BedroomWardrobe";
import { WardrobeInterwoodplus } from "./pages/BedroomInterwoodplus/Wardrobeplus/WardrobeInterwoodplus";
// import VanitiesInterwood from "./pages/BedroomInterwood/Vanities/VanitiesInterwood";
// import VanitiesInterwoodplus from "./pages/BedroomInterwoodplus/Vanitiesplus/VanitiesInterwoodplus";

// import TvunitsInterwood from "./pages/BedroomInterwood/TvUnits/TvunitsInterwood";
// import TvunitsInterwoodplus from "./pages/BedroomInterwoodplus/Wardrobeplus/WardrobeInterwoodplus";

const BedroomRoute = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/bedroom/wardrobe/interwood"
              element={<BedroomWardrobe />}
            />
            <Route
              path="/bedroom/wardrobe/interwoodplus"
              element={<WardrobeInterwoodplus />}
            />
            {/***************wardrobe*************/}
            {/* <Route
              path="/bedroom/vanities/interwood"
              element={<VanitiesInterwood />}
            />
            <Route
              path="/bedroom/vanities/interwoodplus"
              element={<VanitiesInterwoodplus />}
            />

            {/***************vanities*************/}
            {/* <Route
              path="/bedroom/tvunits/interwood"
              element={<TvunitsInterwood />}
            />
            <Route
              path="/bedroom/tvunits/interwoodplus"
              element={<TvunitsInterwoodplus />}
            /> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default BedroomRoute;
