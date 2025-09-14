import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <div className="footer-social-icons">
            <img
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/1Bf7EcCHDj/",
                  "_blank"
                )
              }
              src={assets.facebook_icon}
            />
            <img
              onClick={() =>
                window.open(
                  "https://x.com/Sarfaj32?t=TC1hsr1Q6Mf4NukikAmpbw&s=09",
                  "_blank"
                )
              }
              src={assets.twitter_icon}
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/md-sarfaraj-ahmed-73a529335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  "_blank"
                )
              }
              src={assets.linkedin_icon}
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-6009-753-546</li>
            <li>contact@developercodewithsk@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
