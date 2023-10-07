import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../context";
import { useContext } from "react";


const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* leftside */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Work for All these</span>
        <span>Brands & Clients</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          <br />
          fugit velit? Dignissimos, exercitationem aut? Beatae!
          <br />
          fugit velit? Dignissimos, exercitationem aut? Beatae! adipisicing
          elit.
          <br />
          Lorem ipsum dolor sit, amet consectetur
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rightside */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
