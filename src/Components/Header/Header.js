import React from "react";
import logo2 from '../../images/logo.svg'

import "./Header.css";

export default function Header() {
  return (
    <div className="header-main_div">
       <img className="header-logo" src={logo2} />
      <header className="header-main">
        <h4 className="header-h4">About</h4>
        <h4 className="header-h4">Careers</h4>
        <h4 className="header-h4">Events</h4>
        <h4 className="header-h4">Products</h4>
        <h4 className="header-h4">Support</h4>
      </header>
      <div className="header">
        <h1 className="header-txt">Immersive experiences that deliver</h1>
      </div>
    </div>
  );
}
