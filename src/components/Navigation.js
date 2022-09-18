import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/generate">Try it now</NavLink>
    </nav>
  );
}

export default Navigation;
