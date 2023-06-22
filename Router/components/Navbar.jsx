import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    //Linkler html de a olarak gözükür. Ona göre davran.Link özel component routerdan geliyor. to da aynı şekilde.
    //NavLink de ise neye tıklarsan incele kısmında o linke active classı atanır ve ona göre css yazılabilir.
    <nav className="mainNav">
      {/* <Link to="/">Home</Link>
      <Link to="/aboutUs">About</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default Navbar;
