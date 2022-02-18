import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import "./Contact.scss";
export const ContactUs = () => {
  const [map, setMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.266889930751!2d77.64065941527926!3d12.954766318751467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141017bce9f1%3A0x5a8470f74f7705e9!2sInterwood%20Kitchens%20Private%20Limited%20-%20Bangalore%20boutique!5e0!3m2!1sen!2sin!4v1644467043949!5m2!1sen!2sin"
  );

  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <div className="contactus-main h-max">
          <img
            className="w-1/2  object-cover"
            src="https://ik.imagekit.io/grfidbs4suq/Home/ADITYA_S_VIEW_2_P0IoOTkf5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645194534676"
            alt="contactus"
          />
          <div className="contactus">
            <h1>CONTACT US</h1>
            <div className="corporate-address">
              <h2>CORPORATE ADDRESS</h2>
              <p>
                INTERWOOD HOUSE #255, AMARJYOTHI LAYOUT, KORAMANGALA INNER RING
                ROAD, DOMLUR BANGALORE-560 071,KARNATAKA. support@interwood.in
                +91-91-0845 5966
              </p>
            </div>
            <div className="work-address">
              <h2>WORK ADDRESS</h2>
              <p>
                SY NO. 27/4/A3 YARANDAHALLI, JIGANI HOBLI ANEKAL
                TALUK,BOMMASANDRA, INDUSTRIAL AREA, PHASE IV, BANGALORE - 560
                099. support@interwood.in  +91 91-0845-5966
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-col py-20 h-max md:flex-row md:justify-between md:px-20">
          <div className="bg-[#151515] h-max md:w-1/2  px-10">
            <h1 className="flex justify-center text-center text-white text-3xl font-Ivy pt-3">
              OUR BOUTIQUES
            </h1>
            <div className="flex justify-evenly flex-wrap pt-8 h-max ">
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d437.74346558161!2d77.1376303!3d28.6313288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7630b295b48e18d!2zMjjCsDM3JzUyLjciTiA3N8KwMDgnMTUuNiJF!5e0!3m2!1sen!2sin!4v1645187151768!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                NEW DELHI
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.068641174417!2d77.6428084!3d12.954749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a8470f74f7705e9!2sInterwood%20Kitchens%20Private%20Limited%20-%20Bangalore%20boutique!5e0!3m2!1sen!2sin!4v1645187216828!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                BANGALORE - DOMLUR
              </button>

              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.59799302499!2d80.24943271482294!3d13.061241490797089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe02702408d7ce52!2sInterwood%20Kitchens%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1645187376517!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                CHENNAI - NUNGAMBAKKAM
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5741516863186!2d77.27630611508016!3d28.522457382461372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51259d94bc55f4b1!2sCloverleaf%20Experience%20Centre%20for%20Alno%20%26%20Interwood%20Kitchens%20%26%20Wardrobes!5e0!3m2!1sen!2sin!4v1645187451236!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                DELHI
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.04376660344448!2d77.5860913!3d12.9269761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150b46a92705%3A0x5fd7a687286d1bcf!2s11th%20Main%20Rd%2C%204th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645187253335!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                BANGALORE - JAYANAGAR
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4357222342687!2d76.62498205061645!3d12.28641683282273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf654d91d04e39%3A0xcaa7c867f55a6a9e!2sUdayaravi%20Rd%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645187497933!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                MYSORE
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1514382869577!2d78.14785791479355!3d9.921342992905082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5ae9a74c195%3A0x9c65a6baac7f89ea!2s578%2C%20Thasildar%20Nagar%20Main%20Rd%2C%20Anna%20Nagar%2C%20Sathamangalam%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1645189083876!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                MADURAI
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.127274899313!2d77.42849611478077!3d8.189931894105626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6a37997b8836a6f!2sD%20Kamak!5e0!3m2!1sen!2sin!4v1645189135825!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                NAGERCOIL
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4401076708223!2d77.71000531478461!3d8.744594293718471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cffa21a4b9eaf06!2sD%20Kamak!5e0!3m2!1sen!2sin!4v1645189184041!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                TIRUNELVELI
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15628.953469054471!2d78.1446794!3d11.6775119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1b1f69114eaeebe!2sPlanet%20Fashion!5e0!3m2!1sen!2sin!4v1645189232700!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                SALEM
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.569528153261!2d78.40448081487696!3d17.43243428805165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12284745b960643d!2s36%20Urban%20Center!5e0!3m2!1sen!2sin!4v1645189286069!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                HYDERABAD
              </button>
              <button
                onClick={() =>
                  setMap(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.142268817307!2d73.80995021485091!3d15.476777789249322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e1f2ec948cccddf!2zMTXCsDI4JzM2LjQiTiA3M8KwNDgnNDMuNyJF!5e0!3m2!1sen!2sin!4v1645189357867!5m2!1sen!2sin"
                  )
                }
                className="text-white text-l p-2 border-2 border-[#EF1B1C] rounded my-2"
              >
                GOA
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <iframe
              title="map"
              src={map}
              allowfullscreen="true"
              loading="lazy"
              width="500"
              height="400"
            ></iframe>
          </div>
        </div>
        <div className="getintouch">
          <div className="getintouch-data">
            <h1>GET IN TOUCH WITH US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non ipsum proin cursus ut sed turpis porta vitae. Natoque
              scelerisque urna risus imperdiet. Elementum.
            </p>
          </div>
          <div className="getintouch-form">
            <form action="">
              <input className="w-[29rem]" type="text" placeholder="NAME" />
              <div>
                <input type="tel" placeholder="NUMBER" />
                <input type="email" placeholder="EMAIL ID" />
              </div>
              <input className="w-[29rem]" type="text" placeholder="MESSAGE" />
            </form>
            <a href="/s">Summit</a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
