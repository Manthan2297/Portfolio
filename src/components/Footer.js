import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Contact Information */}
        <div className="footer__section1">
          <div className="footer__item">
            <FaHome className="footer__icon" />
            <span className="footer_links">
              1223 W Flournoy St, Chicago, IL 60607.
            </span>
          </div>
          <div className="footer__item">
            <FaPhone className="footer__icon" />
            <span className="footer_links">872-275-6615</span>
          </div>
          <div className="footer__item">
            <FaMailBulk className="footer__icon" />
            <span className="footer_links">manthanmohile@gmail.com</span>
          </div>
          <div className="footer__item">
            <FaMailBulk className="footer__icon" />
            <span className="footer_links">mmohile@depaul.edu</span>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="footer__section2">
          <h2 className="footer_links footer__social-title">
            <b>Connect with me</b>
          </h2>
          <div className="footer__social-links">
            <a
              href="https://www.linkedin.com/in/manthan-mohile-1b1b3b1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <FaLinkedin className="footer__icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Manthan2297"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <FaGithub className="footer__icon" />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/manthan_mohile/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <FaInstagram className="footer__icon" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
