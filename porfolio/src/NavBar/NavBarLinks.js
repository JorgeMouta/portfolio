import React from "react";

function NavBarLinks(props) {
  return (
    <div className="NavBarLinks">
      <ul>
        <li>
          <a href="#aboutmelink" rel="noopener noreferrer">
            About Me
          </a>
        </li>

        <li>
          <a href="#projectslink" rel="noopener noreferrer">
            Projects
          </a>
        </li>
        <li>
          <a onClick={props.handleClick} id="button2" href=".ContactsContainer">
            Say Hello
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBarLinks;
