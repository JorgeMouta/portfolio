import React from "react";
import designericon from "../Images/designericon.svg";

function AboutMe2() {
  return (
    <div className="AboutMe2">
      <img className="designericon" src={designericon} alt="designer icon" />
      <h2>Designer</h2>
      <p>
        I can work either in vector or pixels. Knowledge on color, typography
        and designing principles.{" "}
      </p>
      <h3>What I like to design:</h3>
      <p>UI, Web, Branding</p>
      <h3>Tools:</h3>
      <ul>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Sketch</li>
        <li>inDesign</li>
        <li>Pen & Paper</li>
      </ul>
    </div>
  );
}

export default AboutMe2;
