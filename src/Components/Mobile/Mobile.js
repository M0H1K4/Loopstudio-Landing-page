import React from "react";
import MidImg from '../../images/mobile/image-interactive.jpg'
import Creations from './MobileCreations/MobileCreations'
import MobileF from './MobileFooter/MobileF'

import "./Mobile.css";

export default function Mobile() {
  return (
    <div className="Mobile_div">
      <header className="Mobile-header">
        <div className="Mobile-txt_div">
          <h1 className="Mobile-txt">Immersive experiences that deliver</h1>
        </div>
      </header>
      <div className="middle">
        <img className="Mobile_img" src={MidImg} />
        <h1 className="middle-h1">The leader in interactive VR</h1>
        <p className="middle-p">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
      <Creations/>
      <MobileF/>
    </div>
  );
}
