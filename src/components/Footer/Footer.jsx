import React from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <p className="copyright">
            <span>Copyright © 2025</span><br/>
            <strong className="sitename">Yachii</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Footer;
