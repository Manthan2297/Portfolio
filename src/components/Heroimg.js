import React from "react";
import "./Heroimg.css";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import image from "../Assests/Home-pg.jpg";
import resume from "../Assests/Manthan Mohile.pdf";

const Heroimg = () => {
  return (
    <div className="hero-container">
      <div className="profile-card enhanced-card">
        {/* Image Section */}
        <div className="profile-image">
          <img src={image} alt="Profile" />
        </div>

        {/* Content Section */}
        <div className="profile-content">
          <h2 className="name">Manthan Mohile</h2>
          <p className="title">Frontend Engineer</p>
          <p className="description">
            Transforming ideas into realities, creating interfaces that inspire
            and engage users' dreams.
          </p>

          {/* Buttons */}
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/manthan-mohile-1b1b3b1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Manthan2297"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={resume}
              download="Manthan_Mohile_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
