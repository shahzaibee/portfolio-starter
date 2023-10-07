import React from "react";
import "./Experience.css";
import { themeContext } from "../../context";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" >4+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed</span>
        <span>projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
