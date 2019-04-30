import React, { Component } from "react";
import WelcomeComponent from "./WelcomeComponent";
import "./Welcome.css";

class Welcome extends Component {
  state = {};

  render() {
    return (
      <div className="WelcomeContainer">
        <WelcomeComponent handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default Welcome;
