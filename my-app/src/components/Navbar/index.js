import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        {/* Nav */}
        {/* <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                  Test Your Memory
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#projects">
                  /
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#signup">
                  Score: {this.props.score}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <ul>
          <li className="itemLeft"><a href="/">Clicky Memory Test</a></li>
          <li className="itemCenter">Click an image to begin!</li>
          <li className="itemRight">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
