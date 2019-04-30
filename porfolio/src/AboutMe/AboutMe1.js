import React from "react";
import frontendicon from "../Images/frontendicon.svg";

function AboutMe1() {
  return (
    <div className="AboutMe1">
      <img className="frontendicon" src={frontendicon} alt="frontend icon" />
      <h2>Front-end Developer</h2>
      <p>
        Very familiar with the key principles of Frontend development, ready to
        take on challenges!{" "}
      </p>
      <h3>Languages:</h3>
      <p>HTML5, CSS3, JavaScript</p>
      <h3>Tools:</h3>
      <ul>
        <li>React</li>
        <li>VScode</li>
        <li>Bootstrap</li>
        <li>NPM</li>
        <li>Github</li>
        <li>WordPress</li>
        <li>Shopify</li>
        <li>Sass</li>
      </ul>
    </div>
  );
}

export default AboutMe1;
