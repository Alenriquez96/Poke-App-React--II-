import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
    <nav>
      <Link to="/" className="nav__element">Home</Link>
      <Link to="/list" className="nav__element">List</Link>
    </nav>
    )

}

export default Nav;
