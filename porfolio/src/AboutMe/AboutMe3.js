import React from "react";
import backendicon from "../Images/backendicon.svg";

function AboutMe3() {
  return (
    <div className="AboutMe3">
      <img className="backendicon" src={backendicon} alt="designer icon" />
      <h2>Back-end Developer</h2>
      <p>
        I'm still fairly new to Backend development, but already able to be
        creative and solve problems.{" "}
      </p>
      <h3>Languages:</h3>
      <p>NodeJS, JavaScript</p>
      <h3>Tools:</h3>
      <ul>
        <li>VScode</li>
        <li>NodeJS</li>
        <li>expressJS</li>
        <li>MongoDB</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

export default AboutMe3;
