import React, { useState } from "react";
import { ValueCard } from "./ValueCard";
export const ValueGallery = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  const arr1 = [
    {
      id: 1,
      img: "https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/AMAZE_4__1__s9QaPJ1Qc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837308650",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/grfidbs4suq/kitchen/detailPlus/VIEW_3__1__T_B5scG6M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644837306551",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/struct/STRUCT_3_EpPBsFegObH1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644839274380",
    },
    {
      id: 4,
      img: "https://ik.imagekit.io/grfidbs4suq/kitchen/detailsInterwoodPLus/struct/VIEW_-2_qZeFF1_9M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644839273239",
    },
  ];
  const arr2 = [
    {
      id: 1,
      img: "https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_22_fEjXMmOzy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645087310794",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/Copy_of_VIEW_-_3_F.F_BR2_O0syiNBcE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087310512",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/RALPH_8000_f_Fha69Z6yBvBo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645087158095",
    },
    {
      id: 4,
      img: "https://ik.imagekit.io/grfidbs4suq/wardrobe/Interwood_Plus/GLAZE_WR_ED_KK5RYs4RMmW9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645086653545",
    },
  ];
  return (
    <>
      <div className="flex justify-evenly ">
        <div onClick={() => handleChange()}>
          <div className="border-t-2 border-b-2 px-3 border-[#C5372F] md:">
            <h1 className="text-white md:text-4xl">Kitchen</h1>
          </div>
        </div>
        <div onClick={() => handleChange()}>
          <div className="border-t-2 px-3 border-b-2 border-[#C5372F]">
            <h1 className="text-white md:text-4xl">Wardrobe</h1>
          </div>
        </div>
      </div>
      {change && (
        <div>
          <div className="flex justify-center flex-wrap gap-4 md:px-20  ">
            {arr1.map(({ id, img }) => {
              return <ValueCard key={id} img={img} />;
            })}
          </div>
        </div>
      )}
      {!change && (
        <div>
          <div className="flex justify-center flex-wrap gap-4 md:px-20  ">
            {arr2.map(({ id, img }) => {
              return <ValueCard key={id} img={img} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
