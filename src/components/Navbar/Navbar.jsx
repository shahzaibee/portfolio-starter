import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
  return (
    // Parent div
    <div className="n-wrapper">
      {/* //Left side  */}
      <div className="n-left">
        <div className="n-name">Shaizy</div>
        <Toggle />
      </div>
      {/* //Right side  */}
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <l1>Home</l1>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <l1>Services</l1>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <l1>Experience</l1>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <l1>Portfolio</l1>
            </Link>
          </ul>
        </div>
        <div className="button n-button">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
