import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Routing";
import { BedroomWardrobe } from "./pages/BedroomInterwood/Wardrobe/BedroomWardrobe";
import { WardrobeInterwoodplus } from "./pages/BedroomInterwoodplus/Wardrobeplus/WardrobeInterwoodplus";

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
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default BedroomRoute;
