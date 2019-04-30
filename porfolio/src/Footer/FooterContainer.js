import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import "./Footer.css";

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className="FooterContainer">
        <FooterComponent />
      </div>
    );
  }
}

export default Footer;
