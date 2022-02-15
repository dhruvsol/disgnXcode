import React from "react";
import ScrollToTop from "./Routing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Interwood1 } from "./pages/Kitchen/Interwood1";
import { InterwoodPlus } from "./pages/KitchenPlus/InterwoodPlus";
import { Alexia } from "./pages/DetailPage/Alexia";
import Cecilia from "./pages/DetailPage/Cecilia";
import Andera from "./pages/DetailPage/Andera";
import Erika from "./pages/DetailPage/Erika";
import Montana from "./pages/DetailPage/Montana";
//////////////////////InterwoodPlus///////////////////////////////
import Amaze from "./pages/DetailPage/InterwoodPlus/Amaze";
import Amaze2 from "./pages/DetailPage/InterwoodPlus/Amaze2";
import Bliss from "./pages/DetailPage/InterwoodPlus/Bliss";
import Form from "./pages/DetailPage/InterwoodPlus/Form";
import Glaze from "./pages/DetailPage/InterwoodPlus/Glaze";
import Struct from "./pages/DetailPage/InterwoodPlus/Struct";
import Lack from "./pages/DetailPage/InterwoodPlus/Lack";
const KitchenRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/kitchen/interwood"
              element={
                <Interwood1
                  main="/img/home.svg"
                  url1="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/ANDREA_KITCHEN_NO_4_D06ZEOobi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834091790"
                  url2="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/ERIKA_KITCHEN_NO.1__2__M8SkY7XrP0yE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834090863"
                  url3="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/CECILIA_KITCHEN_NO_4_Ue7Bk4-Q-D.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834090838"
                  url4="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/ALEXIA_KITCHEN_NO_2__1__SXiTg7Thz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834090681"
                  url5="https://ik.imagekit.io/grfidbs4suq/kitchen/interwood/MONTANA_KITCHEN_NO.5_rbLsyIe5r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834093766"
                />
              }
            />

            <Route path="/kitchen/interwood/alexia" element={<Alexia />} />
            <Route path="/kitchen/interwood/andrea" element={<Andera />} />
            <Route path="/kitchen/interwood/cecilia" element={<Cecilia />} />
            <Route path="/kitchen/interwood/erika" element={<Erika />} />
            <Route path="/kitchen/interwood/montana" element={<Montana />} />

            {/*************Interwoodplus************/}
            <Route
              path="kitchen/interwoodplus"
              element={
                <InterwoodPlus
                  amaze2="https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/lack/KITCHEN_VIEW_2_9JhsZgtCZMQF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644839777536"
                  amaze="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/AMAZE__K5uMoRYx1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834706253"
                  bliss="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/BLISS_7_W1978H2uhW.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1644834705485"
                  struct="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/STRUCT_KITCHEN__1__HBFAIUIpv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834705472"
                  glaze="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/GLAZE_1__1__2yuPUSbi5fcR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834704715"
                  lack7="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/LACK7__1__xQhDzrxw6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834705068"
                  form5="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/view_1__1__IPXo9pxKd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834705186"
                  naturale="https://ik.imagekit.io/grfidbs4suq/kitchen/Interwoodplus/GLAZE_1__1__2yuPUSbi5fcR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644834704715"
                />
              }
            />
            <Route path="/kitchen/interwoodplus/amaze" element={<Amaze />} />
            <Route path="/kitchen/interwoodplus/amaze2" element={<Amaze2 />} />
            <Route path="/kitchen/interwoodplus/bliss" element={<Bliss />} />
            <Route path="/kitchen/interwoodplus/form5" element={<Form />} />
            <Route path="/kitchen/interwoodplus/glaze" element={<Glaze />} />

            <Route path="/kitchen/interwoodplus/struct" element={<Struct />} />
            <Route path="/kitchen/interwoodplus/lack7" element={<Lack />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default KitchenRoutes;
