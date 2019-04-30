import React from "react";

function FormComponent(props) {
  return (
    <div className="container">
      <div className="form-intro">
        <i
          onClick={props.handleClosure}
          className="fa fa-window-close"
          aria-hidden="true"
        />
        <h1>Thanks for taking the time to reach out.</h1>
        <h2>How can I help you today?</h2>

        <p style={{ color: "#00ff9f" }} className="emailsuccess">
          {props.data.msgSent ? props.data.msgStatus : null}
        </p>
      </div>
      <div className="wrapper">
        <form onSubmit={props.handleSubmit}>
          <p className="formname">
            <label htmlFor="name">Name</label>
            <input
              onChange={props.handleChange}
              type="text"
              id="name"
              name="name"
              value={props.data.name}
              required
            />
          </p>

          <p className="formemail">
            <label htmlFor="email">Email</label>
            <input
              onChange={props.handleChange}
              type="email"
              id="email"
              name="email"
              value={props.data.email}
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea
              onChange={props.handleChange}
              type="textarea"
              id="message"
              name="message"
              rows="5"
              value={props.data.message}
              required
              minLength="20"
            />
          </p>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
