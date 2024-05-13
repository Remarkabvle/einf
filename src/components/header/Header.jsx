import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header>
      <nav className="navbar container">
        <div className="navbar__left">
          <NavLink className="navbar__link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="navbar__link" to={"/shop-all"}>
            Shop All
          </NavLink>
          <NavLink className="navbar__link" to={"/blog"}>
            Blog
          </NavLink>
        </div>
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__right">
          <NavLink className="navbar__link" to={"/about"}>
            About
          </NavLink>
          <div>
            <input type="text" id="search" placeholder="Search Product" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
