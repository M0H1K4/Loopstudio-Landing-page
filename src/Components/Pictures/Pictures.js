import React from "react";
import img1 from "../../images/desktop/image-curiosity.jpg";
import img2 from "../../images/desktop/image-deep-earth.jpg";
import img3 from "../../images/desktop/image-fisheye.jpg";
import img4 from "../../images/desktop/image-from-above.jpg";
import img5 from "../../images/desktop/image-grid.jpg";
import img6 from "../../images/desktop/image-soccer-team.jpg";
import img7 from "../../images/desktop/image-night-arcade.jpg";
import img8 from "../../images/desktop/image-pocket-borealis.jpg";

import "./Pictures.css";

export default function Pictures() {
  return (
    <div className="pictures-images">
      <div className="img1">
        <img  src={img1} />
        <h1 className="img1-h1">THE CURIOSITY</h1>
      </div>
      <div className="img2">
        <img  src={img2} />
        <h1 className="img1-h2">DEEP EARTH</h1>
      </div>
      <div className="img3">
        <img  src={img3} />
        <h1 className="img1-h3">MAKE IT FISHEYE</h1>
      </div>
      <div className="img4">
        <img  src={img4} />
        <h1 className="img1-h4">FROM UP ABOVE VR</h1>
      </div>
      <div className="img5">
        <img  src={img5} />
        <h1 className="img1-h5">THE GRID</h1>
      </div>
      <div className="img6">
        <img  src={img6} />
        <h1 className="img1-h6">SOCCER TEAM VR</h1>
      </div>
      <div className="img7">
        <img  src={img7} />
        <h1 className="img1-h7">NIGHT ARCADE</h1>
      </div>
      <div className="img8">
        <img  src={img8} />
        <h1 className="img1-h8">POCKET BOREALIS</h1>
      </div>
    </div>
  );
}
