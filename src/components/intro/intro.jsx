import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatinDiv/FloatingDiv";
import { themeContext } from "../../context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    //parent
    <div className="intro">
      {/* //left side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            Hy ! I Am Shahzaib
          </span>
          <span>Full Stack Developer</span>
          <span>
            Crafting seamless, high-performance web apps with React & Next.js
            for exceptional user experiences.
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={Linkedin} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* //Right side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
          src={glassesImoji}
          alt=""
        />
        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* Blur divs */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
