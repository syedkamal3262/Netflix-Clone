import React, { useState, useEffect } from "react";
import "./Navbar.css";
import netflixlogo from "../images/netflixlogo.jpeg";
import avatar from "../images/avatar.png";
const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflixlogo} alt="netflix" />
      <img className="nav__avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Navbar;
