import React from "react";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="navlinks-container">
      <ul>
        <li className="navlink">Home</li>
        <li className="navlink">Blog</li>
        <li className="navlink">Portfolio</li>
        <li className="navlink">About</li>
      </ul>
    </div>
  );
};

export default NavLinks;
