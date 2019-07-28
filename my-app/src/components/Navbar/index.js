import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft"><a href="/">Clicky Memory Test</a></li>
          <li className="itemCenter">{this.props.alert}</li>
          <li className="itemRight">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
