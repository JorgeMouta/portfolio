import React, { Component } from "react";
import "./Form.css";
import FormComponent from "./FormComponent";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    msgSent: false,
    msgStatus: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(result => result.json())
      .then(info => {
        this.setState(info);
        console.log(this.state.msgStatus);
      });
  };

  render() {
    return (
      <div className="FormContainer">
        <FormComponent
          handleSubmit={this.handleSubmit}
          data={this.state}
          handleChange={this.handleChange}
          handleClosure={this.props.handleClosure}
        />
      </div>
    );
  }
}

export default Form;
