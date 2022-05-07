import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


function Nav () {
    return (
    <nav>
      <Link to="/" className="nav__element">HOME</Link>
      <Link to="/list" className="nav__element">LIST</Link>
      <Link to="/new" className="nav__element">CREATE</Link>
    </nav>
    )

}

export default Nav;
