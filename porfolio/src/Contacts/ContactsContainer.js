import React, { Component } from "react";
import ContactsComponent from "./ContactsComponent";
import "./Contacts.css";

class Contacts extends Component {
  state = {};

  render() {
    return (
      <div className="ContactsContainer">
        <ContactsComponent />
      </div>
    );
  }
}

export default Contacts;
