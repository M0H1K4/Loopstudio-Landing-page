import React from "react";
import "./MobileF.css";
import logo2 from "../../../images/logo.svg";
import icon1 from "../../../images/icon-facebook.svg";
import icon2 from "../../../images/icon-twitter.svg";
import icon3 from "../../../images/icon-pinterest.svg";
import icon4 from "../../../images/icon-instagram.svg";

export default function MobileF() {
  return (
    <footer className="mobile-footer">
      <img className="logo12" src={logo2} />
      <h4 className="footer-h">About</h4>
      <h4 className="footer-h">Careers</h4>
      <h4 className="footer-h">Events</h4>
      <h4 className="footer-h">Products</h4>
      <h4 className="footer-h">Support</h4>
      <div className="icons">
        <img src={icon1} />
        <img src={icon2} />
        <img src={icon3} />
        <img src={icon4} />
      </div>
      <h5>© 2021 Loopstudios. All rights reserved.</h5>
    </footer>
  );
}
