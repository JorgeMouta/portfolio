import React from "react";

function WelcomeComponent(props) {
  return (
    <div className="Welcome">
      <h1>Aspirant Fullstacker with a lot of heart</h1>
      <h3>Currently looking for a Entry-level job</h3>
      <a onClick={props.handleClick} id="button1" href=".ContactsContainer">
        HIRE
      </a>
    </div>
  );
}

export default WelcomeComponent;
