import React, { Component } from "react";
import Main from './Main';

class Container extends Component {
  state = {
    card: [],
    clickedCard: [],
    score: 0
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <body id="page-top">
        {/* Main  */}
        <Main />
      </body>
    );
  }
}

export default Container;
