import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerlogo">
          <img
            src="https://ik.imagekit.io/grfidbs4suq/icons/logo_k20mAzVFy.svg"
            alt="logo"
          />
          <div className="footer-socials">
            <a href="https://www.facebook.com/Interwood.In/">
              <img
                src="https://ik.imagekit.io/grfidbs4suq/icons/facebook_kgLFwflAm.svg"
                alt="facebook"
              />
            </a>
            <a href=""></a>
            <img
              src="https://ik.imagekit.io/grfidbs4suq/icons/linkedin_nknWUQbOV.svg?"
              alt="linkedin"
            />
            <a href="https://twitter.com/Interwood4">
              <img
                src="https://ik.imagekit.io/grfidbs4suq/icons/twitter_CvIlSg-9P3C.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.instagram.com/interwoodindia/">
              <img
                src="https://ik.imagekit.io/grfidbs4suq/icons/insta_3Y0oPbbk5.svg"
                alt="instagram"
              />
            </a>
            <a href="https://wa.me/9108455966">
              <img
                src="https://ik.imagekit.io/grfidbs4suq/icons/cib_whatsapp_Ky_M8ti2T.png"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
        <div className="footer-quicklinks">
          <h2>Quick links</h2>
          <a href="/kitchen/interwood">Kitchen</a>
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
              <svg
                viewBox="0 0 76 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="76" height="66" rx="7" fill="#424242" />
                <path
                  d="M28.9065 45.24L41.1198 33L28.9065 20.76L32.6665 17L48.6665 33L32.6665 49L28.9065 45.24Z"
                  fill="#292929"
                />
              </svg>
            </button>
          </div>
          <p>support@interwood.in</p>
          <p>+91-91-0845 5966</p>
        </div>
      </div>
    </>
  );
};
