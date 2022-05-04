import React from "react";
import Nav from "./Nav"
import logo from "../../assets/poke-logo.png";
import "./Header.css";


function Header (){

    return (
      <header>
        <img className="imgHeader" src={logo} alt="poke-logo" />
        <Nav/>
      </header>
    )

}

export default Header;
