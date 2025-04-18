import React from "react";
import "./Footer.css";

import FooterImage from "../assets/Pic-1.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Profile Section */}
        <div className="profile-section">
          <img src={FooterImage} alt="Footer-Profile" className="footer-image" />
          <div className="profile-info">
            <h3 className="profile-name">Elias Norden</h3>
            <p className="profile-title">Digital Designer</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="links-grid">
          {/* Pages Column */}
          <div>
            <h4 className="column-heading">Pages</h4>
            <ul className="links-list">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CMS Column */}
          <div>
            <h4 className="column-heading">CMS</h4>
            <ul className="links-list">
              <li>
                <a href="/work" className="footer-link">
                  Work
                </a>
              </li>
              <li>
                <a href="/work/single" className="footer-link">
                  Work Single
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/blog/single" className="footer-link">
                  Blog Single
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Column */}
          <div>
            <h4 className="column-heading">Utility</h4>
            <ul className="links-list">
              <li>
                <a href="/404" className="footer-link">
                  404
                </a>
              </li>
              <li>
                <a href="/licensing" className="footer-link">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p className="copyright-text">
            © By{" "}
            <a href="/" className="copyright-link">
              Gola Templates
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
