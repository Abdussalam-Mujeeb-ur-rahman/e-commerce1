import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import {
  AiOutlineInstagram,
  AiOutlinePinterest,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>BUYME!</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <AiOutlineInstagram className="social" />
        </div>
        <div className="footer-icons-container">
          <AiOutlinePinterest className="social" />
        </div>
        <div className="footer-icons-container">
          <AiOutlineWhatsApp className="social" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
