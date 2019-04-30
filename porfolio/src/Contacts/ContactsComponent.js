import React from "react";

function ContactsComponent() {
  return (
    <div className="ContactsComponent">
      <h1>You can find me at:</h1>
      <div>
        <a
          href="https://www.facebook.com/jorge.mouta.3"
          target="_blank "
          rel="noopener noreferrer"
          noreferrer
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/jorgemouta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://github.com/JorgeMouta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://twitter.com/MoutaJorge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.freecodecamp.org/jorgemouta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-free-code-camp" />
        </a>
      </div>
    </div>
  );
}

export default ContactsComponent;
