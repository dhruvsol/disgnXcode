import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerlogo">
          <img src="/img/logo.svg" alt="logo" />
          <div className="footer-socials">
            <img src="/img/facebook.svg" alt="facebook" />
            <img src="/img/linkedin.svg" alt="linkedin" />
            <img src="/img/twitter.svg" alt="twitter" />
            <img src="/img/insta.svg" alt="instagram" />
          </div>
        </div>
        <div className="footer-quicklinks">
          <h2>Quick links</h2>
          <a href="/kitchen">Kitchen</a>
          <a href="/wardrobes">Wardrobes</a>
          <a href="/brands">Brands</a>
          <a href="/aboutus">About Us</a>
          <a href="/contactus">Contact us</a>
          <a href="/partnerwithus">Partner With Us</a>
          <a href="/sitemap">Site map</a>
        </div>
        <div className="footer-address">
          <h2>Address</h2>
          <p>INTERWOOD HOUSE</p>
          <p> #255, AMARJYOTHI LAYOUT,</p>
          <p> KORAMANGALA INNER RING ROAD,</p>
          <p> DOMLUR </p>
          <p>BANGALORE-560 071,</p>
          <p> KARNATAKA.</p>
        </div>
        <div className="footer-contact">
          <h1>Get in touch with us</h1>
          <div className="footer-contact-input">
            <input type="text" />
            <button>
              <img src="/img/arrow.svg" alt="logo" />
            </button>
          </div>
          <p>support@interwood.in</p>
          <p>+91-91-0845 5966</p>
        </div>
      </div>
    </>
  );
};
