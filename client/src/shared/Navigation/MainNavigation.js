import React from "react";

import NavLinks from "./NavLinks.js";
import Search from "./Search.js";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <div className="main-nav-container">
      <NavLinks />
      <Search />
    </div>
  );
};

export default MainNavigation;
