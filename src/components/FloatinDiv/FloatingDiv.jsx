import React from "react";
import './Floating.css'
import { themeContext } from "../../context";
import { useContext } from "react";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    //parent
    <div className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
