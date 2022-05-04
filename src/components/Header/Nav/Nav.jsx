import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


function Nav () {
    return (
    <nav>
      <Link to="/" className="nav__element">HOME</Link>
      <Link to="/list" className="nav__element">LIST</Link>
    </nav>
    )

}

export default Nav;
