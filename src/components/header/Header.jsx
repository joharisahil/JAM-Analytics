import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../assests/cynthronix_small_logo.png";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="Header-Container">
      <div className="wrapper">
        <div className="Logo-wrapper">
          <div className="Logo-Content">
            <img src={logo} alt="cynthronix" className="Company-logo" />
          </div>
          <h1 className="logo-title">Cynthronix</h1>
        </div>
        <div className="Menu-Wrapper">
          <button
            className="menu-bar-button"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            <FaBarsStaggered className="bar-icon" />
          </button>
          <nav
            className={show ? "nav-group block" : "nav-group none"}
          >
            <a href="#home" className="links">
              Home
            </a>
            <a href="#about" className="links">
              About
            </a>
            <a href="#portfolio" className="links">
              PortFolio
            </a>
            <a href="#services" className="links">
              Services
            </a>
            <a href="#contact" className="links">
              Contact
            </a>
          </nav>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
