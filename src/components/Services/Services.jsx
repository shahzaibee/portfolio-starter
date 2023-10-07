import React from "react";
import "./Services.css";
import HeartImoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* leftside */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          <br />
          fugit velit? Dignissimos, exercitationem aut? Beatae!
        </span>
        <a>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Rightside */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartImoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        {/* second card */}
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "Html, Css, Javascript, Typescript, React.js, Next.js, Tailwindcss , PostgreSQL"
            }
          />
        </div>
        {/* Third card */}
        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
