import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar1 } from "../../components/Navbar/Navbar";
import "./Contact.scss";
export const ContactUs = () => {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar1 />
        <div className="contactus-main">
          <img src="" alt="contactus" />
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
        <div className="flex justify-center pb-20">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.266889930751!2d77.64065941527926!3d12.954766318751467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141017bce9f1%3A0x5a8470f74f7705e9!2sInterwood%20Kitchens%20Private%20Limited%20-%20Bangalore%20boutique!5e0!3m2!1sen!2sin!4v1644467043949!5m2!1sen!2sin"
            allowfullscreen="true"
            loading="lazy"
            width="1080"
            height="800"
          ></iframe>
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
              <input type="text" placeholder="NAME" />
              <div>
                <input type="tel" placeholder="NUMBER" />
                <input type="email" placeholder="EMAIL ID" />
              </div>
              <input type="text" placeholder="MESSAGE" />
            </form>
            <a href="#">Summit</a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
