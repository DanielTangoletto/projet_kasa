import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav_header">
      <NavLink to="/projet_kasa" className="nav-header_nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/projet_kasa/about" className="nav-header_nav-link-about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;