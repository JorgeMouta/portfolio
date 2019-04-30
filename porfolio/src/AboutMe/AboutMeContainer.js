import React, { Component } from "react";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import AboutMe3 from "./AboutMe3";
import AboutMeIntro from "./AboutMeIntro";
import "./AboutMe.css";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <div id="aboutmelink" className="AboutMeContainer">
        <AboutMeIntro />
        <AboutMe1 />
        <AboutMe2 />
        <AboutMe3 />
      </div>
    );
  }
}

export default AboutMe;
