import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Bob's Burger's Memory Game
        </Link>
      </div>

      <ul>
        <li id="rw">{props.correctIncorrect}</li>
        <li>Current Score: {props.score}</li>
        <li>Top Score: {props.topScore}</li>
      </ul> 
          
    </div>
  </nav>
);

export default Navbar;
