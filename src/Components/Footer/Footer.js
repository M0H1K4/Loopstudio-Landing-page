import React from "react";
import image1 from "../../images/icon-facebook.svg";
import image2 from "../../images/icon-instagram.svg";
import image3 from "../../images/icon-pinterest.svg";
import image4 from "../../images/icon-twitter.svg";
import logo1 from '../../images/logo.svg'

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-div">
      <img className="footer-logo" src={logo1} />
      <div className="footer-main">
        <h4 className="footer-h4">About</h4>
        <h4 className="footer-h4">Careers</h4>
        <h4 className="footer-h4">Events</h4>
        <h4 className="footer-h4">Products</h4>
        <h4 className="footer-h4">Support</h4>
      </div>
      <div className="footer-imgs">
        <img className="footer-img1" src={image1} />
        <img className="footer-img1" src={image2} />
        <img className="footer-img1" src={image3} />
        <img className="footer-img1" src={image4} />
      </div>
      <h3 className="footer-h3">© 2021 Loopstudios. All rights reserved.</h3>
    </footer>
  );
}
