import React, { Component } from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLinks from "./NavBarLinks";
import "./NavBar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="NavBarContainer">
        <NavBarLogo />
        <NavBarLinks handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default NavBar;
