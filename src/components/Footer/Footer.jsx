import React from "react";
import Wav from "../../img/wave.png";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wav} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shahzaib1224@hotmail.com</span>
        {/* <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
